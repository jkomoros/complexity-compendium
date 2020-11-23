import {
	stemmer
} from './stemmer.js';

import {
	TEXT_FIELD_CONFIGURATION,
	DERIVED_FIELDS_FOR_CARD_TYPE,
	references,
} from './card_fields.js';

import {
	getDocument
} from './document.js';

import {
	normalizeLineBreaks,
} from './contenteditable.js';

const lowercaseSplitWords = (str) => {
	return str.toLowerCase().split(/\s+/);
};

const normalizedWords = (str) => {
	if (!str) str = '';

	//Pretend like em-dashes are just spaces
	str = str.split('--').join(' ');
	str = str.split('&emdash;').join(' ');
	str = str.split('-').join(' ');

	const splitWords = lowercaseSplitWords(str);
	let result = [];
	for (let word of splitWords) {
		word = word.replace(/^\W*/, '');
		word = word.replace(/\W*$/, '');
		if (!word) continue;
		result.push(word);
	}
	return result.join(' ');
};

let memoizedStemmedWords = {};
const memorizedStemmer = (word) => {
	if (!memoizedStemmedWords[word]) {
		memoizedStemmedWords[word] = stemmer(word);
	}
	
	return memoizedStemmedWords[word];
};

//A more aggressive form of normalization
const stemmedNormalizedWords = (str) => {
	//Assumes the words are already run through nomralizedWords

	const splitWords = str.split(' ');
	let result = [];
	for (let word of splitWords) {
		result.push(memorizedStemmer(word));
	}
	return result.join(' ');
};

const innerTextForHTML = (body) => {
	//This shouldn't be an XSS vulnerability even though body is supplied by
	//users and thus untrusted, because the temporary element is never actually
	//appended into the DOM
	let ele = getDocument().createElement('section');
	// makes sure line breaks are in the right place after each legal block level element
	body = normalizeLineBreaks(body);
	ele.innerHTML = body;
	//textContent would return things like style and script contents, but those shouldn't be included anyway.
	return ele.textContent;
};

//Returns a string, where if it's an array or object (or any of their subkeys
//are) they're joined by ' '. This allows it to work straightforwardly for
//normal text properties, as well as arrays, objects, or even nested objects
//that have string values at the terminus.
const extractFieldValueForIndexing = (fieldValue) => {
	if (typeof fieldValue !== 'object') return fieldValue;
	if (!fieldValue) return '';
	return Object.values(fieldValue).map(item => extractFieldValueForIndexing(item)).join(' ');
};

//extractContentWords returns an object with the field to the non-de-stemmed
//normalized words for each of the main properties.
const extractContentWords = (card) => {
	const cardType = card.card_type || '';
	//These three properties are expected to be set by TEXT_SEARCH_PROPERTIES
	//Fields that are derived are calculated based on other fields of the card
	//and should not be considered to be explicit set on the card by the author.
	//For thse fields, skip them in normalized*, since they'll otherwise be part
	//of the fingerprint, and for cards with not much content that use the
	//fingerprint in a derived field that can create reinforcing loops.
	const obj = {};
	for (let [fieldName, config] of Object.entries(TEXT_FIELD_CONFIGURATION)) {
		let value = '';
		if (!DERIVED_FIELDS_FOR_CARD_TYPE[cardType][fieldName]) {
			const fieldValue = extractFieldValueForIndexing(card[fieldName]);
			const content = config.html ? innerTextForHTML(fieldValue) : fieldValue;
			value = normalizedWords(content);
		}
		obj[fieldName] = value;
	}
	return obj;
};

//destemmedWordMap returns a map of where each given destemmed word is mapped to
//its most common stemmed variant from within this card.
export const destemmedWordMap = (card) => {
	const content = extractContentWords(card);
	const counts = {};
	for (let str of Object.values(content)) {
		const words = str.split(' ');
		for (let word of words) {
			const stemmedWord = memorizedStemmer(word);
			if (!counts[stemmedWord]) counts[stemmedWord] = {};
			counts[stemmedWord][word] = (counts[stemmedWord][word] || 0) + 1;
		}
	}
	//counts is now a map of destemmedWord to word.
	const result = {};
	for (let [destemmedWord, wordCounts] of Object.entries(counts)) {
		let maxCount = 0;
		let maxWord = '';
		for (let [word, count] of Object.entries(wordCounts)) {
			if (count <= maxCount) continue;
			maxCount = count;
			maxWord = word;
		}
		result[destemmedWord] = maxWord;
	}
	return result;
};

//cardSetNormalizedTextProperties sets the properties that search and
//fingerprints work over. It sets them on the same card object sent.
export const cardSetNormalizedTextProperties = (card) => {
	//Basically it takes the output of extractContentWords and then stems them.
	card.normalized = Object.fromEntries(Object.entries(extractContentWords(card)).map(entry => [entry[0], stemmedNormalizedWords(entry[1])]));
};
export class PreparedQuery {
	constructor(queryText) {
		this.text = {};
		this.filters = [];
		if (!queryText) return;
		let [words, filters] = queryWordsAndFilters(rewriteQueryFilters(queryText));
		this.text = textSubQueryForWords(words);
		this.filters = filters;
	}

	cardScore(card) {
		if (!card) return [0.0, false];
		let score = 0.0;
		let fullMatch = false;
	
		for (let key of Object.keys(TEXT_FIELD_CONFIGURATION)) {
			const propertySubQuery = this.text[key];
			if(!propertySubQuery || !card.normalized[key]) continue;
			const [propertyScore, propertyFullMatch] = stringPropertyScoreForStringSubQuery(card.normalized[key], propertySubQuery);
			score += propertyScore;
			if (!fullMatch && propertyFullMatch) fullMatch = true;
		}
	
		//Give a boost to cards that have more inbound cards, implying they're more
		//important cards.
		let inboundLinks = references(card).inboundSubstantiveArray();
		if (inboundLinks.length > 0) {
			//Tweak the score, but only by a very tiny amount. Once the 'juice' is
			//not just the count of inbound-links, but the transitive count, then
			//this can be bigger.
			score *= 1.0 + (inboundLinks.length * 0.02);
		}
	
		return [score, fullMatch];
	}
}

const SIMPLE_FILTER_REWRITES = ['is:', 'section:', 'tag:'];
const HAS_FILTER_PREFIX = 'has:';

//rewriteQueryFilters rewrites things like 'has:comments` to `filter:has-comments`
const rewriteQueryFilters = (query) => {
	let result = [];
	for (let word of query.split(' ')) {
		for (let prefix of SIMPLE_FILTER_REWRITES) {
			if (word.toLowerCase().startsWith(prefix)) {
				word = FILTER_PREFIX + word.slice(prefix.length);
			}
		}
		//Replace 'has:'. Things like 'has:comments' expand to
		//'filter:has-comments', whereas things like 'has:no-comments' expand to
		//'filter:no-comments'.
		if (word.toLowerCase().startsWith(HAS_FILTER_PREFIX)) {
			let rest = word.slice(HAS_FILTER_PREFIX.length);
			if (!rest.toLowerCase().startsWith('no-')) {
				rest = 'has-' + rest;
			}
			word = FILTER_PREFIX + rest;
		}
		result.push(word);
	}
	return result.join(' ');
};

const textSubQueryForWords = (words) => {
	return Object.fromEntries(Object.entries(TEXT_FIELD_CONFIGURATION).map(entry => [entry[0], textPropertySubQueryForWords(words, entry[1].matchWeight)]));
};

const STOP_WORDS = {
	'a' : true,
	'an' : true,
	'the' : true,
	'in' : true,
	'is' : true,
};

const textPropertySubQueryForWords = (joinedWords, startValue) => {
	const words = joinedWords.split(' ');

	//The format of the return value is a list of items that could match. For
	//each item, the first item is an array of strings, all of which have to
	//independently match; if they do, the second item score is added to the
	//running score for the card, and the third item is whether if it matches
	//this clause it should be considered a full match.

	//Full exact matches are the best, but if you have all of the sub-words,
	//that's good too, just less good.
	let result = [[[joinedWords], startValue, true]];

	if (words.length > 1) {
		result.push([words, startValue / 2, true]);

		//Also return partial matches, but at a much lower rate.
		for (let word of words) {
			if (STOP_WORDS[word]) continue;
			//Words that are longer should count for more (as a crude proxy for how
			//rare they are).
			result.push([[word], startValue / 8 * Math.log10(word.length), false]);
		}
	}

	return result;
};

const stringPropertyScoreForStringSubQuery = (propertyValue, preparedSubquery) => {
	const value = propertyValue.toLowerCase();
	let result = 0.0;
	let fullMatch = false;
	for (let item of preparedSubquery) {
		//strings is a list of strings that all must match independently
		const strings = item[0];
		if (strings.every(str => value.indexOf(str) >= 0)) {
			result += item[1];
			if (!fullMatch && item[2]) fullMatch = true;
		}
	}
	return [result, fullMatch];
};

const FILTER_PREFIX = 'filter:';

const filterForWord = (word) => {
	if (word.indexOf(FILTER_PREFIX) < 0) return '';
	return word.split(FILTER_PREFIX).join('');
};

//extracts the raw, non filter words from a query, then also the filters.
const queryWordsAndFilters = (queryString) => {
	let words = [];
	let filters = [];
	for (let word of lowercaseSplitWords(queryString)) {
		if (!word) continue;
		let filter = filterForWord(word);
		if (filter) {
			filters.push(filter);
		} else {
			words.push(word);
		}
	}
	const stemmedWords = stemmedNormalizedWords(normalizedWords(words.join(' ')));
	return [stemmedWords, filters];
};

//The max number of words to include in the semantic fingerprint
const SEMANTIC_FINGERPRINT_SIZE = 25;

const SEMANTIC_FINGERPRINT_MATCH_CONSTANT = 1.0;

//Returns the 'overlap' between two semantic fingerprints (which can be fetched
//from e.g. selectCardsSemanticFingerprint). Higher nubmers are better. The
//numbers may be any number greater than 0, and only have meaning when compared
//to other numbers from this function.
const semanticOverlap = (fingerprintOne, fingerprintTwo) => {
	if (!fingerprintOne) fingerprintOne = new Map();
	if (!fingerprintTwo) fingerprintTwo = new Map();

	let union = new Set([...fingerprintOne.keys(), ...fingerprintTwo.keys()]);
	let intersection = new Map();
	for (let key of union) {
		if (fingerprintOne.has(key) && fingerprintTwo.has(key)) {
			//If they match, add the tfidf for the two terms, plus a bonus
			//constant for them having matched. This gives a big bonus for any
			//match, but gives a higher score for better matches.
			intersection.set(key, SEMANTIC_FINGERPRINT_MATCH_CONSTANT + fingerprintOne.get(key) + fingerprintTwo.get(key));
		}
	}
	const total = [...intersection.values()].reduce((p, c) => p + c, 0);
	return total;
};

const wordCountsForSemantics = (str) => {
	const words = str.split(' ');
	const cardMap = {};
	for (const word of words) {
		if (!word) continue;
		cardMap[word] = (cardMap[word] || 0) + 1;
	}
	return cardMap;
};

const semanticFingerprint = (tfidf) => {
	//Pick the keys for the items with the highest tfidf (the most important and specific to that card)
	let keys = Object.keys(tfidf).sort((a, b) => tfidf[b] - tfidf[a]).slice(0, SEMANTIC_FINGERPRINT_SIZE);
	return new Map(keys.map(key => [key, tfidf[key]]));
};

export class FingerprintGenerator {
	constructor(cards) {

		this._idfMap = {};
		this._fingerprints = {};

		if (!cards || Object.keys(cards).length == 0) return;

		const numCards = Object.keys(cards).length;

		//cardWords is a object that contains an object for each card id of
		//words to their count in that card. This uses all words htat could be
		//searched over, and is the input to the IDF calculation pipeline and
		//others.
		let cardWordCounts = {};
		for (const [key, cardObj] of Object.entries(cards)) {
			cardWordCounts[key] = this._wordCountsForCardObj(cardObj);
		}

		//corpusWords is a set of word => totalWordCount (how many times that
		//word occurs) for all words across all cards in corpus.
		let corpusWords = {};
		for (const words of Object.values(cardWordCounts)) {
			for (const [word, count] of Object.entries(words)) {
				corpusWords[word] = (corpusWords[word] || 0) + count;
			}
		}

		//idf (inverse document frequency) of every word in the corpus. See
		//https://en.wikipedia.org/wiki/Tf%E2%80%93idf
		const idf = {};
		for (const [word, count] of Object.entries(corpusWords)) {
			idf[word] = Math.log10(numCards / (count + 1));
		}
		//This is useful often so stash it
		this._idfMap = idf;

		//A map of cardID to the semantic fingerprint for that card.
		const fingerprints = {};
		for (const [cardID, cardWordCount] of Object.entries(cardWordCounts)) {
			//See https://en.wikipedia.org/wiki/Tf%E2%80%93idf for more on
			//TF-IDF.
			const tfidf = this._cardTFIDF(cardWordCount);
			fingerprints[cardID] = semanticFingerprint(tfidf);
		}
		this._fingerprints = fingerprints;
	}

	_wordCountsForCardObj(cardObj) {
		return wordCountsForSemantics(Object.keys(TEXT_FIELD_CONFIGURATION).map(prop => cardObj.normalized[prop]).join(' '));
	}

	_cardTFIDF(cardWordCounts) {
		const resultTFIDF = {};
		const cardWordCount = Object.values(cardWordCounts).reduce((prev, curr) => prev + curr, 0);
		for (const [word, count] of Object.entries(cardWordCounts)) {
			resultTFIDF[word] = (count / cardWordCount) * this._idfMap[word];
		}
		return resultTFIDF;
	}

	fingerprintForCardID(cardID) {
		return this.fingerprints()[cardID];
	}

	fingerprintForCardObj(cardObj) {
		if (!cardObj || Object.keys(cardObj).length == 0) return new Map();
		const wordCounts = this._wordCountsForCardObj(cardObj);
		const tfidf = this._cardTFIDF(wordCounts);
		const fingerprint = semanticFingerprint(tfidf);
		return fingerprint;
	}

	fingerprintForCardIDList(cardIDs) {
		let joinedMap = new Map();
		for (const cardID of cardIDs) {
			const fingerprint = this.fingerprintForCardID(cardID);
			if (!fingerprint) continue;
			for (const [word, idf] of fingerprint.entries()) {
				joinedMap.set(word, (joinedMap.get(word) || 0) + idf);
			}
		}
		const sortedKeys = [...joinedMap.keys()].sort((a, b) => joinedMap.get(b) - joinedMap.get(a)).slice(0, SEMANTIC_FINGERPRINT_SIZE);
		return new Map(sortedKeys.map(key => [key, joinedMap.get(key)]));
	}

	//returns a map of cardID => fingerprint for the cards that were provided to the constructor
	fingerprints() {
		return this._fingerprints;
	}

	//Returns a map sorted by how many other items match semantically, skipping ourselves.
	//keyID - id of item that is self, so skip matching that item. May be null if optKeyFingerprint is not null.
	//optKeyFingerprint - if not null, will use that for the key item's fingerprint instead of optFingerprintsToMatchOver[keyID]
	//optFingerprintsToMatchOver - object mapping ID to fingerprint, the collection of things to match over. If empty, will use this.fingerprints()
	closestOverlappingItems(keyID, optKeyFingerprint, optFingerprintsToMatchOver) {
		const fingerprints = optFingerprintsToMatchOver || this.fingerprints();
		const keyFingerprint = optKeyFingerprint || fingerprints[keyID];

		if (!fingerprints || !keyFingerprint) return new Map();
		const overlaps = {};
		for (const otherID of Object.keys(fingerprints)) {
			if (otherID === keyID) continue;
			overlaps[otherID] = semanticOverlap(keyFingerprint, fingerprints[otherID]);
		}
		const sortedIDs = Object.keys(overlaps).sort((a, b) => overlaps[b] - overlaps[a]);
		return new Map(sortedIDs.map(id => [id, overlaps[id]]));
	}
}