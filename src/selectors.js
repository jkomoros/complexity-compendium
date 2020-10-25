import { createSelector } from 'reselect';

/* 
 This is the collection of all getters and selectors for state. 

 Toberesilienttodatamodelstructurechanges,neveraccessstatedirectlyandinsteadus
 eoneofthese.

 functions that start with 'select' take a single argument, state, and are appropriate
 to use in compound selectors. Functions that start with 'get' take state and another argument.

*/

import {
	semanticOverlap,
	SEMANTIC_FINGERPRINT_SIZE,
	expandCardCollection
} from './util.js';

import {
	TODO_COMBINED_FILTER_NAME,
	DEFAULT_SET_NAME,
	READING_LIST_SET_NAME,
	EVERYTHING_SET_NAME,
	cardTodoConfigKeys
} from './filters.js';

import {
	CollectionDescription,
} from './collection_description.js';

import {
	tabConfiguration
} from './tabs.js';

import {
	BODY_CARD_TYPES,
	TEXT_FIELD_CONFIGURATION,
	normalizedWords,
	stemmedNormalizedWords,
} from './card_fields.js';

import {
	COMPOSED_USER_TYPE_ALL_PERMISSIONS,
	COMPOSED_USER_TYPE_ANOYMOUS_PERMISSIONS,
	COMPOSED_USER_TYPE_SIGNED_IN_PERMISSIONS,
	COMPOSED_USER_TYPE_SIGNED_IN_DOMAIN_PERMISSIONS,
	PERMISSION_ADMIN,
	PERMISSION_EDIT,
	PERMISSION_VIEW_APP,
	PERMISSION_VIEW_UNPUBLISHED,
	PERMISSION_EDIT_SECTION,
	PERMISSION_EDIT_TAG,
	PERMISSION_CREATE_CARD,
	PERMISSION_COMMENT,
	PERMISSION_STAR,
	PERMISSION_MARK_READ,
	PERMISSION_MODIFY_READING_LIST,
	PERMISSION_EDIT_CARD
} from './permissions.js';

import {
	USER_DOMAIN,
	TAB_CONFIGURATION
} from '../config.GENERATED.SECRET.js';

const selectState = (state) => state;

export const selectPage = (state) => state.app.page;
export const selectPageExtra = (state) => state.app.pageExtra;
export const selectFetchedCard = (state) => state.app.fetchedCard;
export const selectCardBeingFetched = (state) => state.app.cardBeingFetched;

export const selectComposeOpen = (state) => state.prompt.composeOpen;
export const selectPromptContent = (state) => state.prompt.content;
export const selectPromptMessage = (state) => state.prompt.message;
export const selectPromptAction = (state) => state.prompt.action;
export const selectPromptAssociatedId = (state) => state.prompt.associatedId;

export const selectIsEditing = (state) => state.editor && state.editor.editing;
const selectFindDialogOpen = (state) => state.find && state.find.open;

export const selectCommentsAndInfoPanelOpen = (state) => state.app ? state.app.commentsAndInfoPanelOpen : false;

const selectActiveSetName = (state) => state.collection.activeSetName;
const selectActiveFilterNames = (state) => state.collection.activeFilterNames;
const selectActiveSortName = (state) => state.collection.activeSortName;
const selectActiveSortReversed = (state) => state.collection.activeSortReversed;
export const selectRequestedCard = (state) => state.collection.requestedCard;
export const selectActiveCardId = (state) => state.collection ? state.collection.activeCardId : '';
export const selectEditingCard = (state) => state.editor ? state.editor.card : null;
export const selectEditingUpdatedFromContentEditable = (state) => state.editor ? state.editor.updatedFromContentEditable : {};
export const selectPendingSlug = (state) => state.editor ? state.editor.pendingSlug : '';
export const selectFilters = (state) => state.collection.filters;
const selectPendingFilters = (state) => state.collection.pendingFilters;
export const selectSections = (state) => state.data ? state.data.sections : {};
export const selectTags = (state) => state.data ? state.data.tags : {};
//All cards downloaded to client can be assumed to be OK to use in the rest of the pipeline.
export const selectCards = (state) => state.data ? state.data.cards : {};
export const selectPendingNewCardID = (state) => state.data ? state.data.pendingNewCardID : '';
const selectPublishedCardsLoaded = (state) => state.data ? state.data.publishedCardsLoaded : false;
const selectUnpublishedCardsLoaded = (state) => state.data ? state.data.unpublishedCardsLoaded : false;
export const selectSectionsLoaded = (state) => state.data ? state.data.sectionsLoaded : false;
export const selectTagsLoaded = (state) => state.data ? state.data.tagsLoaded : false;
export const selectMessagesLoaded = (state) => state.comments ? state.comments.messagesLoaded : false;
export const selectThreadsLoaded = (state) => state.comments ? state.comments.threadsLoaded : false;
const selectSlugIndex = (state) => state.data ? state.data.slugIndex : {};
export const selectMessages = (state) => state.comments ? state.comments.messages : null;
export const selectThreads = (state) => state.comments ? state.comments.threads : null;
export const selectAuthors = (state) => state.data.authors ? state.data.authors : null;
export const selectAllPermissions = (state) => state.permissions ? state.permissions.permissions : null;
export const selectPermissionsPendingUid = (state) => state.permissions ? state.permissions.pendingUid : '';
export const selectPermissionsPendingPermissionType = (state) => state.permissions ? state.permissions.pendingPermissionType : '';
const selectTweets = (state) => state.data ? state.data.tweets : {};
export const selectTweetsLoading = (state) => state.data ? state.data.tweetsLoading : false;
export const selectActivePreviewCardId = (state) => state.app ? state.app.hoverCardId : '';
export const selectPreviewCardX = (state) => state.app ? state.app.hoverX : 0;
export const selectPreviewCardY = (state) => state.app ? state.app.hoverY : 0;
export const selectUserReads = (state) => state.user ? state.user.reads : {};
const selectUserStars = (state) => state.user ? state.user.stars : {};
export const selectUserReadingList = (state) => state.user ? state.user.readingList : [];
const selectUserReadingListForSet = (state) => state.user ? state.user.readingListForSet : [];

const selectCardsDrawerPanelOpen = (state) => state.app ? state.app.cardsDrawerPanelOpen : false;
export const selectCtrlKeyPressed = (state) => state.app ? state.app.ctrlKeyPressed : false;

//selectQuery is what you should use to update the UI with the literal query
export const selectQuery = (state) => state.find.query;
//activeQuery is the query that should be routed into the query pipeline.
const selectActiveQuery = (state) => state.find.activeQuery;
export const selectFindCardTypeFilter = (state) => state.find ? state.find.cardTypeFilter : '';

export const selectAuthPending = (state) => state.user ? state.user.pending : false;
//Note: this will return false unless stars have been loading, even if there is
//no user to load stars or reads for.
export const selectStarsLoaded = (state) => state.user ? state.user.starsLoaded : false;
export const selectReadsLoaded = (state) => state.user ? state.user.readsLoaded : false;
export const selectUserPermissionsLoaded = (state) => state.user ? state.user.userPermissionsLoaded : false;
export const selectReadingListLoaded = (state) => state.user ? state.user.readingListLoaded : false;

export const selectActiveCard = createSelector(
	selectCards,
	selectActiveCardId,
	(cards, activeCard) => cards[activeCard] || null
);

export const selectKeyboardNavigates = createSelector(
	selectIsEditing,
	selectFindDialogOpen,
	selectComposeOpen,
	(editing, find, compose) => !editing && !find && !compose
);

//This is just the userPermissions fetched; for the actual permissions object in
//use, see selectCOmposedPermissions.
const selectUserPermissions = (state) => state.user ? state.user.userPermissions : {};

//For actions, like starring and marking read, that are OK to do when signed
//in anonymously.
const userObjectExists = user => user && user.uid != '';
const userSignedIn = user => userObjectExists(user) && !user.isAnonymous;

export const selectUser = state => {
	if (!state.user) return null;
	if (!state.user.user) return null;
	return state.user.user;
};

export const selectUserIsAnonymous = createSelector(
	selectUser,
	(user) => userObjectExists(user) && user.isAnonymous
);

//UserSignedIn means that there is a user object, and that user is not
//anonymous. Note that selectors like selectUserMayMarkRead and
//selectUserMayComment may return true even when this returns false if the
//user is signed in anonymously.
export const selectUserSignedIn = createSelector(
	selectUser,
	(user) => userSignedIn(user)
);

const selectUserSignedInDomain = createSelector(
	selectUserSignedIn,
	selectUser,
	(signedIn, user) => signedIn && user.email && user.email.toLowerCase().split('@')[1] == USER_DOMAIN
);

export const selectUserObjectExists = createSelector(
	selectUser,
	(user) => userObjectExists(user)
);

const selectUserTypePermissions = createSelector(
	selectUserObjectExists,
	selectUserSignedIn,
	selectUserSignedInDomain,
	(userObjectExists, isSignedIn,signedInDomain) => {
		//If the last is true, then the two before must be true, and on down.
		//Composed permissions already expand and combine the various bits together.
		if (signedInDomain) return COMPOSED_USER_TYPE_SIGNED_IN_DOMAIN_PERMISSIONS;
		if (isSignedIn) return COMPOSED_USER_TYPE_SIGNED_IN_PERMISSIONS;
		if (userObjectExists) return COMPOSED_USER_TYPE_ANOYMOUS_PERMISSIONS;
		return COMPOSED_USER_TYPE_ALL_PERMISSIONS;
	}
);

//The final, exhaustive enumeration of permissions for this user.
const selectComposedPermissions = createSelector(
	selectUserTypePermissions,
	selectUserPermissions,
	(userTypePermissions, userPermissions) => ({...userTypePermissions, ...userPermissions})
);

const userMayResolveThread = (state, thread) => {
	if (selectUserIsAdmin(state)) return true;
	if (!selectUserMayComment(state)) return false;
	if (!thread || typeof thread !== 'object') return false;
	const uid = selectUid(state);
	return uid == thread.author.id;
};

const userMayEditMessage = (state, message) => {
	if (selectUserIsAdmin(state)) return true;
	if (!selectUserMayComment(state)) return false;
	if (!message || !message.author || !message.author.id) return false;
	const uid = selectUid(state);
	return uid == message.author.id;
};

export const selectUid = createSelector(
	selectUser,
	(user) => user ? user.uid : ''
);

export const selectUserIsAdmin = createSelector(
	selectComposedPermissions,
	(permissions) => permissions[PERMISSION_ADMIN]
);

export const selectUserMayEdit = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_EDIT]
);

//if the user may edit ANY cards
const selectUserMayEditCards = createSelector(
	selectUserMayEdit,
	selectComposedPermissions,
	(userMayEdit, permissions) => userMayEdit || permissions[PERMISSION_EDIT_CARD]
);

export const getUserMayEditCard = (state, cardID) => {
	if (selectUserMayEditCards(state)) return true;
	const uid = selectUid(state);
	if (!cardID) return false;
	const card = getCard(state, cardID);
	if (!card) return false;
	if (card.author == uid) return true;
	if (!card.permissions || !card.permissions[PERMISSION_EDIT_CARD]) return false;
	for (let id of card.permissions[PERMISSION_EDIT_CARD]) {
		if (id === uid) return true;
	}
	return false;
};

export const selectUserMayEditActiveCard = createSelector(
	selectState,
	selectActiveCardId,
	(state, cardID) => getUserMayEditCard(state, cardID)
);

export const selectUserMayViewApp = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_VIEW_APP]
);

export const selectUserMayViewUnpublished = createSelector(
	selectUserIsAdmin,
	selectUserMayViewApp,
	selectComposedPermissions,
	(admin, mayViewApp, permissions) => mayViewApp && (admin || permissions[PERMISSION_EDIT] || permissions[PERMISSION_EDIT_CARD] || permissions[PERMISSION_VIEW_UNPUBLISHED])
);

export const selectUserMayEditPermissions = createSelector(
	selectUserIsAdmin,
	//For now, only admins may edit permissions.
	(admin) => admin
);

// eslint-disable-next-line no-unused-vars
export const getUserMayEditSection = (state, sectionID) => {
	if (selectUserMayEditSections(state)) return true;
	//orphaned 'section' is always editable
	if (!sectionID) return true;
	//TODO: check if the named section has an override;
	return false;
};

//This is a generic user-may-edit sections. A given section may explicitly allow
//a user to edit even if the user doesn't have generic editSection permission.
const selectUserMayEditSections = createSelector(
	selectUserMayEdit,
	selectComposedPermissions,
	(userMayEdit, permissions) => userMayEdit || permissions[PERMISSION_EDIT_SECTION]
);

export const selectUserMayChangeEditingCardSection = createSelector(
	selectState,
	selectEditingCard,
	(state, editingCard) => editingCard ? getUserMayEditSection(state, editingCard.section) : false
);

export const selectSectionsUserMayEdit = createSelector(
	selectState,
	selectSections,
	(state, sections) => Object.fromEntries(Object.entries(sections).filter(entry => getUserMayEditSection(state, entry[0])))
);

// eslint-disable-next-line no-unused-vars
export const getUserMayEditTag = (state, tagID) => {
	if (selectUserMayEditTags(state)) return true;
	//TODO: check if the named tagID has an override;
	return false;
};

//This is a generic user-may-edit sections. A given section may explicitly allow
//a user to edit even if the user doesn't have generic editSection permission.
const selectUserMayEditTags = createSelector(
	selectUserMayEdit,
	selectComposedPermissions,
	(userMayEdit, permissions) => userMayEdit || permissions[PERMISSION_EDIT_TAG]
);

//true if at least one of the tags returns true for getUserMayEditTag
export const selectUserMayEditSomeTags = createSelector(
	selectState,
	selectTags,
	(state, tags) => Object.keys(tags).some(id => getUserMayEditTag(state, id))
);

//returns the tag names that the user may not edit, useful for suppressItems for
//a editing tag-list.
export const tagsUserMayNotEdit = createSelector(
	selectState,
	selectTags,
	(state, tags) => Object.keys(tags).filter(id => !getUserMayEditTag(state, id))
);

export const selectUserMayCreateCard = createSelector(
	selectUserMayEdit,
	selectComposedPermissions,
	(userMayEdit, permissions) => userMayEdit || permissions[PERMISSION_CREATE_CARD]
);

export const selectUserMayComment = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_COMMENT]
);

export const selectUserMayStar = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_STAR]
);

export const selectUserMayMarkRead = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_MARK_READ]
);

export const selectUserMayModifyReadingList = createSelector(
	selectUserIsAdmin,
	selectComposedPermissions,
	(admin, permissions) => admin || permissions[PERMISSION_MODIFY_READING_LIST]
);

export const selectAuthorsForTagList = createSelector(
	selectAuthors,
	(authors) => Object.fromEntries(Object.entries(authors).map(entry => [entry[0], {id:entry[0], title:entry[1].displayName || entry[0]}]))
);

export const selectCollaboratorInfosForActiveCard = createSelector(
	selectActiveCard,
	selectAuthors,
	(card, authors) => card ? card.collaborators.map(uid => authors[uid]) : []
);

//A map of uid -> permissionKey -> [cardID], for any uid that is listed in any card's permissions object.
export const selectUserPermissionsForCardsMap = createSelector(
	selectCards,
	(cards) => {
		let result = {};
		for (let card of Object.values(cards)) {
			if (!card.permissions) continue;
			for (let [permissionKey, uids] of Object.entries(card.permissions)) {
				for (let uid of uids) {
					if (!result[uid]) result[uid] = {};
					if (!result[uid][permissionKey]) result[uid][permissionKey] = [];
					result[uid][permissionKey].push(card.id);
				}
			}
		}
		return result;
	}
);

export const selectUidsWithPermissions = createSelector(
	selectAllPermissions,
	selectUserPermissionsForCardsMap,
	(allPermissions, cardsMap) => Object.fromEntries(Object.entries(allPermissions).map(entry => [entry[0], true]).concat(Object.entries(cardsMap).map(entry => [entry[0], true])))
);

//Cards that have a body
const selectBodyCards = createSelector(
	selectCards,
	(cards) => Object.fromEntries(Object.entries(cards).filter(entry => BODY_CARD_TYPES[entry[1].card_type]))
);


const wordCountsForSemantics = (str) => {
	const words = str.split(' ');
	const cardMap = {};
	for (const word of words) {
		if (!word) continue;
		cardMap[word] = (cardMap[word] || 0) + 1;
	}
	return cardMap;
};

//selectCardWords returns a object that contains an object for each card id of
//words to their count in that card. This uses all words htat could be searched
//over, and is the input to the IDF calculation pipeline and others.
const selectCardWords = createSelector(
	selectBodyCards,
	(cards) => {
		let result = {};
		for (const [key, card] of Object.entries(cards)) {
			result[key] = wordCountsForSemantics(Object.keys(TEXT_FIELD_CONFIGURATION).map(prop => card.normalized[prop]).join(' '));
		}
		return result;
	}
);

//selectCorpusWords returns a set of word => totalWordCount (how many times that
//word occurs) for all words across all cards in corpus.
const selectCorpusWords = createSelector(
	selectCardWords,
	(cardWords) => {
		const wordMap = {};
		for (const words of Object.values(cardWords)) {
			for (const [word, count] of Object.entries(words)) {
				wordMap[word] = (wordMap[word] || 0) + count;
			}
		}
		return wordMap;
	}
);

//selectIDF of every word in the corpus. See
//https://en.wikipedia.org/wiki/Tf%E2%80%93idf
const selectWordsIDF = createSelector(
	selectCorpusWords,
	selectBodyCards,
	(words, cards) => {
		const result = {};
		const numCards = Object.keys(cards).length;
		for (const [word, count] of Object.entries(words)) {
			result[word] = Math.log10(numCards / (count + 1));
		}
		return result;
	}
);

const cardWordsTFIDF = (wordCounts, idfMap) => {
	const resultTFIDF = {};
	const cardWordCount = Object.values(wordCounts).reduce((prev, curr) => prev + curr, 0);
	for (const [word, count] of Object.entries(wordCounts)) {
		resultTFIDF[word] = (count / cardWordCount) * idfMap[word];
	}
	return resultTFIDF;
};

//selectCardWordsTFIDF returns an object with each cardID, pointing to the word
//=> TF-IDF. See https://en.wikipedia.org/wiki/Tf%E2%80%93idf for more on
//TF-IDF. 
const selectCardWordsTFIDF = createSelector(
	selectWordsIDF,
	selectCardWords,
	(idf, cardWords) => {
		const result = {};
		for (const [cardID, wordCounts] of Object.entries(cardWords)) {
			result[cardID] = cardWordsTFIDF(wordCounts, idf);
		}
		return result;
	}
);

const semanticFingerprint = (tfidf) => {
	//Pick the keys for the items with the highest tfidf (the most important and specific to that card)
	let keys = Object.keys(tfidf).sort((a, b) => tfidf[b] - tfidf[a]).slice(0, SEMANTIC_FINGERPRINT_SIZE);
	return new Map(keys.map(key => [key, tfidf[key]]));
};

//A map of cardID to the semantic fingerprint for that card.
const selectCardsSemanticFingerprint = createSelector(
	selectCardWordsTFIDF,
	(tfidfMap) => {
		const result = {};
		for (const [cardID, tfidf] of Object.entries(tfidfMap)) {
			result[cardID] = semanticFingerprint(tfidf);
		}
		return result;
	}
);

//getSemanticFingerprintForCard operates on the actual cardObj passed, so it can
//work for cards that have been modified.
export const getSemanticFingerprintForCard = (state, cardObj) => {
	return getSemanticFingerprintForCardFromIDFMap(selectWordsIDF(state), cardObj);
};

const getSemanticFingerprintForCardFromIDFMap = (idfMap, card) => {
	if (!card || Object.keys(card).length == 0) return new Map();
	const words = Object.keys(TEXT_FIELD_CONFIGURATION).map(prop => card.normalized[prop]).join(' ');
	const wordCounts = wordCountsForSemantics(words);
	const tfidf = cardWordsTFIDF(wordCounts,idfMap);
	const fingerprint = semanticFingerprint(tfidf);
	return fingerprint;
};

//A map of tagID to the semantic fingerprint for that card. A tag's semantic
//fingerprint is created by adding up all of its cards semantic fingerprint,
//resorting, and re-trimming down to fingerprint size. They can be compared
//directly to a given card's fingerprint.
const selectTagsSemanticFingerprint = createSelector(
	selectTags,
	selectCardsSemanticFingerprint,
	(tags, fingerprints) => {
		if (!tags) return {};
		let result = {};
		for (const [tagID, tag] of Object.entries(tags)) {
			let joinedMap = new Map();
			for (const cardID of tag.cards) {
				const fingerprint = fingerprints[cardID];
				if (!fingerprint) continue;
				for (const [word, idf] of fingerprint.entries()) {
					joinedMap.set(word, (joinedMap.get(word) || 0) + idf);
				}
			}
			const sortedKeys = [...joinedMap.keys()].sort((a, b) => joinedMap.get(b) - joinedMap.get(a)).slice(0, SEMANTIC_FINGERPRINT_SIZE);
			result[tagID] = new Map(sortedKeys.map(key => [key, joinedMap.get(key)]));
		}
		return result;
	}
);

//separating out cardFingerprint allows this to be used where fingerprints is
//for a different set of things, e.g. tags.
const getClosestSemanticOverlapItems = (fingerprints, cardID, cardFingerprint) => {
	if (!fingerprints || !cardFingerprint) return new Map();
	const overlaps = {};
	for (const otherCardID of Object.keys(fingerprints)) {
		if (otherCardID === cardID) continue;
		overlaps[otherCardID] = semanticOverlap(cardFingerprint, fingerprints[otherCardID]);
	}
	const sortedCardIDs = Object.keys(overlaps).sort((a, b) => overlaps[b] - overlaps[a]);
	return new Map(sortedCardIDs.map(id => [id, overlaps[id]]));
};

const selectEditingCardSemanticFingerprint = createSelector(
	selectEditingCard,
	selectWordsIDF,
	(card, idfMap) => getSemanticFingerprintForCardFromIDFMap(idfMap, card)
);

const NUM_SIMILAR_TAGS_TO_SHOW = 3;

//selectEditingCardSuggestedTags returns the tags for the editing card that are
//suggested--that is that are similar to the semantics of this card, but are not
//yet on the card.
export const selectEditingCardSuggestedTags = createSelector(
	selectEditingCard,
	selectEditingCardSemanticFingerprint,
	selectTagsSemanticFingerprint,
	(card, cardFingerprint, tagFingerprints) => {
		if (!card || Object.keys(card).length == 0) return [];
		if (!tagFingerprints || tagFingerprints.size == 0) return [];
		const closestTags = getClosestSemanticOverlapItems(tagFingerprints, card.id, cardFingerprint);
		if (closestTags.size == 0) return [];
		const excludeIDs = new Set(card.tags);
		let result = [];
		for (const tagID of closestTags.keys()) {
			if (excludeIDs.has(tagID)) continue;
			result.push(tagID);
			if (result.length >= NUM_SIMILAR_TAGS_TO_SHOW) break;
		}
		return result;
	}
);

//selectingEitingOrActiveCard returns either the editing card, or else the
//active card.
const selectEditingOrActiveCard = createSelector(
	selectEditingCard,
	selectActiveCard,
	(editing, active) => editing && Object.keys(editing).length > 0 ? editing : active
);

//Returns a map with the closest cards at the beginning.
const selectActiveCardClosestSemanticOverlapCards = createSelector(
	selectActiveCardId,
	selectCardsSemanticFingerprint,
	(cardID, fingerprints) => getClosestSemanticOverlapItems(fingerprints, cardID, fingerprints[cardID])
);

const selectEditingCardClosestSemanticOverlapCards = createSelector(
	//the editing card is always the active card
	selectActiveCardId,
	selectEditingCardSemanticFingerprint,
	selectCardsSemanticFingerprint,
	(cardID, editingFingerprint, fingerprints) => getClosestSemanticOverlapItems(fingerprints, cardID, editingFingerprint)
);

const selectEditingOrActiveCardClosestSemanticOverlapCards = createSelector(
	selectEditingCard,
	selectEditingCardClosestSemanticOverlapCards,
	selectActiveCardClosestSemanticOverlapCards,
	(editingCard, editingOverlap, activeOverlap) => editingCard && Object.keys(editingCard).length > 0 ? editingOverlap : activeOverlap
);

const NUM_SIMILAR_CARDS_TO_SHOW = 5;

//selectActiveCardSimilarCards is like
//selectActiveCardClosestSemanticOverlapCareds, but it returns a list of no more
//than NUM_SIMILAR_CARDS_TO_SHOW, where cards that are already linked to or from
//the main card are skipped.
export const selectEditingOrActiveCardSimilarCards = createSelector(
	selectEditingOrActiveCard,
	selectEditingOrActiveCardClosestSemanticOverlapCards,
	(card, overlapMap) => {
		if (!card || Object.keys(card).length == 0) return [];
		if (!overlapMap || overlapMap.size == 0) return [];
		const excludeIDs = new Set([...card.links, ...card.links_inbound]);
		let result = [];
		for (const cardID of overlapMap.keys()) {
			if (excludeIDs.has(cardID)) continue;
			result.push(cardID);
			if (result.length >= NUM_SIMILAR_CARDS_TO_SHOW) break;
		}
		return result;
	}
);

//Selects the set of all cards the current user can see (which even includes
//ones not in default)
export const selectAllCardsFilter = createSelector(
	selectCards,
	(cards) => Object.fromEntries(Object.entries(cards).map(entry => [entry[0], true]))
);

//selectTagInfosForCards selects a tagInfos map based on all cards. Used for
//example for showing missing link auto todos in card-editor.
export const selectTagInfosForCards = createSelector(
	selectCards,
	cards => Object.fromEntries(Object.entries(cards).map(entry => [entry[0], {id: entry[0], title:entry[1] ? entry[1].name : '', previewCard: entry[0]}]))
);

export const getCardHasStar = (state, cardId) => {
	return (selectUserStars(state) || {})[cardId] || false;
};

export const getCardIsRead = (state, cardId) => {
	return (selectUserReads(state) || {})[cardId] || false;
};

export const getCardInReadingList = (state, cardId) => {
	return (selectUserReadingListMap(state) || {})[cardId] || false;
};

export const getUserMayResolveThread = userMayResolveThread;
export const getUserMayEditMessage = userMayEditMessage;

export const getMessageById = (state, messageId) => {
	let messages = selectMessages(state);
	if (!messages) return null;
	return messages[messageId];
};

export const getThreadById = (state, threadId) => {
	let threads = selectThreads(state);
	if (!threads) return null;
	return threads[threadId];
};

export const getCardById = (state, cardId) => {
	let cards = selectCards(state);
	if (!cards) return null;
	return cards[cardId];
};

export const getIdForCard = (state, idOrSlug) => {
	const slugIndex = selectSlugIndex(state);
	return slugIndex[idOrSlug] || idOrSlug;
};

export const getAuthorForId = (state, authorId) => {
	let authors = selectAuthors(state);
	return authorOrDefault(authorId, authors);
};

const authorOrDefault = (authorId, authors) => {
	let author = authors[authorId];
	if (!author){
		return {displayName: 'Unknown user'};
	}
	return author;
};

export const getCard = (state, cardIdOrSlug)  => getCardById(state, getIdForCard(state, cardIdOrSlug));

export const getSection = (state, sectionId) => {
	if (!state.data) return null;
	return state.data.sections[sectionId] || null;
};

const selectCardTodosMapForCurrentUser = createSelector(
	selectUserIsAdmin,
	selectFilters,
	(isAdmin, filters) => isAdmin ? filters[TODO_COMBINED_FILTER_NAME] : {}
);

export const selectUserReadingListMap = createSelector(
	selectUserReadingList,
	list => Object.fromEntries((list || []).map(item => [item, true]))
);

//for use to pass into card-badges.cardBadges.badgeMap
export const selectBadgeMap = createSelector(
	selectUserStars,
	selectUserReads,
	selectCardTodosMapForCurrentUser,
	selectUserReadingListMap,
	(stars, reads, todos, readingList) => ({stars, reads, todos, readingList})
);

//TODO: once factoring the composed threads selctors into this file, refactor
//this to just select the composed threads.
export const selectActiveCardThreadIds = createSelector(
	selectActiveCardId,
	selectThreads,
	(cardId, threads) => Object.keys(threads).filter(threadId => threads[threadId].card == cardId)
);

export const selectActiveCardComposedThreads = createSelector(
	selectState,
	selectActiveCardThreadIds,
	selectThreads,
	selectMessages,
	selectAuthors,
	(state, threadIds, threads, messages, authors) => threadIds.map(id => composedThread(state, id, threads, messages, authors)).filter(thread => !!thread)
);

const composedThread = (state, threadId, threads, messages, authors) => {
	let originalThread = threads[threadId];
	if (!originalThread) return null;
	let thread = {...originalThread};
	let expandedMessages = [];
	for (let messageId of Object.values(thread.messages)) {
		let message = composedMessage(state, messageId, messages, authors);
		if (message) expandedMessages.push(message);
	}
	thread.messages = expandedMessages;
	thread.author = authorOrDefault(originalThread.author, authors);
	thread.mayResolve = userMayResolveThread(state, thread);
	return thread;
};

const composedMessage = (state, messageId, messages, authors) => {
	//TODO: return composed children for threads if there are parents
	let originalMessage = messages[messageId];
	if (!originalMessage) return null;
	let message = {...originalMessage};
	message.author = authorOrDefault(originalMessage.author, authors);
	message.mayEdit = userMayEditMessage(state, message);
	return message;
};

export const selectUserDataIsFullyLoaded = createSelector(
	selectAuthPending,
	selectUserObjectExists,
	selectStarsLoaded,
	selectReadsLoaded,
	selectReadingListLoaded,
	selectUserPermissionsLoaded,
	(pending, userExists, starsLoaded, readsLoaded, readingListLoaded, permissionsLoaded) => {
		if (pending) return false;
		if (!userExists) return true;
		return starsLoaded && readsLoaded && readingListLoaded && permissionsLoaded;
	}
);

export const selectCommentsAreFullyLoaded = createSelector(
	selectThreadsLoaded,
	selectMessagesLoaded,
	(threadsLoaded, messagesLoaded) => threadsLoaded && messagesLoaded
);

//This is different from selectUserPermissionsLoaded because it also takes into
//account whether we're even going to try to load them. Note that there is a
//brief period when the app boots up that this is false but may switch to true.
export const selectUserPermissionsFinal = createSelector(
	selectAuthPending,
	selectUserObjectExists,
	selectUserPermissionsLoaded,
	(pending, userObjectExists, permissionsLoaded) => {
		if (pending) return false;
		if (!userObjectExists) return true;
		return permissionsLoaded;
	}
);

export const selectCardsLoaded = createSelector(
	selectUserPermissionsFinal,
	selectPublishedCardsLoaded,
	selectUserMayViewUnpublished,
	selectUnpublishedCardsLoaded,
	(permissionsFinal, publishedCardsLoaded, userMayViewUnpublished, unpublishedCardsLoaded) => permissionsFinal && publishedCardsLoaded && (userMayViewUnpublished ? unpublishedCardsLoaded : true)
);

//DataIsFullyLoaded returns true if we've loaded all of the card/section
//information we're going to load.
export const selectDataIsFullyLoaded = createSelector(
	selectCardsLoaded,
	selectSectionsLoaded,
	selectTagsLoaded,
	selectUserDataIsFullyLoaded,
	(cardsLoaded, sectionsLoaded, tagsLoaded, userDataLoaded) => cardsLoaded && sectionsLoaded && tagsLoaded && userDataLoaded
);

export const selectActivePreviewCard = createSelector(
	selectCards,
	selectActivePreviewCardId,
	(cards, activeCardId) => cards[activeCardId] || null
);

export const selectActiveCardTodosForCurrentUser = createSelector(
	selectUserIsAdmin,
	selectActiveCard,
	(isAdmin, card) => isAdmin ? cardTodoConfigKeys(card, false) : []
);

export const selectActiveCardTweets = createSelector(
	selectActiveCard,
	selectTweets,
	(card, tweets) => Object.fromEntries(Object.entries(tweets).filter(entry => entry[1].card == card.id))
);

//Because it filters out cards that don't exist (e.g. are unpublished), cards
//that the user can't see won't show.
export const selectInboundLinksForActiveCard = createSelector(
	selectActiveCard,
	selectCards,
	(card, cards) => card && card.links_inbound ? card.links_inbound.filter(id => cards[id]) : []
);

//selectEditingCardAutoTodos will opeate on not the actual filter set, but one
//that has been updated with the current editingCard values.
export const selectEditingCardAutoTodos = createSelector(
	selectEditingCard,
	(card) => cardTodoConfigKeys(card, true)
);

export const selectActiveCollectionDescription = createSelector(
	selectActiveSetName,
	selectActiveFilterNames,
	selectActiveSortName,
	selectActiveSortReversed,
	(setName, filterNames, sortName, sortReversed) => new CollectionDescription(setName, filterNames, sortName, sortReversed)
);

//This means htat the active section is the only one showing. See also
//selectActiveCardSelection, which just returns the section name of the
//current collection. selectActiveTagId is the analogue for tags.
export const selectActiveSectionId = createSelector(
	selectActiveCollectionDescription,
	selectSections,
	(collectionDescription, sections) => {
		//The activeSectionId is only true if it's the default set and there
		//is precisely one filter who is also a set.
		if(collectionDescription.set != DEFAULT_SET_NAME) return '';
		if (collectionDescription.filters.length != 1) return '';
		return sections[collectionDescription.filters[0]] ? collectionDescription.filters[0] : '';
	}
);

//Only true if there is actually an active section to edit--that is, a singluar section.
export const selectUserMayEditActiveSection = createSelector(
	selectState,
	selectActiveSectionId,
	(state, sectionID) => sectionID != '' && getUserMayEditSection(state, sectionID)
);

export const selectExpandedTabConfig = createSelector(
	selectSections,
	(sections) => tabConfiguration(TAB_CONFIGURATION, sections)
);

export const selectTabCollectionFallbacks = createSelector(
	selectExpandedTabConfig,
	selectSlugIndex,
	(config, slugIndex) => {
		let result = {};
		for (const item of config) {
			if (!item.fallback_cards) continue;
			result[item.collection.serialize()] = item.fallback_cards.map(idOrSlug => slugIndex[idOrSlug] || idOrSlug);
		}
		return result;
	}
);

//the section that should be loaded by default if no section is specified; Will
//return the first section, or if one is marked as default, that one.
export const selectDefaultSectionID = createSelector(
	selectSections,
	(sections) => {
		const entries = Object.entries(sections);
		if (!entries.length) return '';
		for (const entry of entries) {
			if (entry[1].default) return entry[0];
		}
		return entries[0][0];
	}
);

export const selectLastSectionID = createSelector(
	selectSections,
	(sections) => {
		const entries = Object.entries(sections);
		if (!entries.length) return '';
		const lastEntry = entries[entries.length - 1];
		return lastEntry[0];
	}
);

//selectActiveTagId returns a string IFF precisely one tag is being selected.
//Analogue of selectActiveSectionId.
export const selectActiveTagId = createSelector(
	selectActiveCollectionDescription,
	selectTags,
	(collectionDescription, tags) => {
		//The activeSectionId is only true if it's the default set and there
		//is precisely one filter who is also a set.
		if( collectionDescription.set != DEFAULT_SET_NAME) return '';
		if (collectionDescription.filters.length != 1) return '';
		return tags[collectionDescription.filters[0]] ? collectionDescription.filters[0] : '';
	}
);

export const selectActiveStartCards = createSelector(
	selectActiveSectionId,
	selectSections,
	selectActiveTagId,
	selectTags,
	(sectionId, sections, tagId, tags) => {
		let obj = sections[sectionId] || tags[tagId];
		return obj && obj.start_cards ? [...obj.start_cards] : [];
	}
);

export const selectDefaultSet = createSelector(
	selectSections,
	(sections) => {
		let result = [];
		for (let section of Object.values(sections)) {
			result = result.concat(section.cards);
		}
		return result;
	}
);

const selectEverythingSet = createSelector(
	selectCards,
	(cards) => {
		let keys = Object.keys(cards);
		keys.sort((a, b) => {
			let aCard = cards[a];
			let bCard = cards[b];
			let aTimestamp = aCard.updated && aCard.updated.seconds ? aCard.updated.seconds : 0;
			let bTimestamp = bCard.updated && bCard.updated.seconds ? bCard.updated.seconds : 0;
			return bTimestamp - aTimestamp;
		});
		return keys;
	}
);

const selectAllSets = createSelector(
	selectDefaultSet,
	selectUserReadingListForSet,
	selectEverythingSet,
	(defaultSet, readingListSet, everythingSet) => {
		return {
			[DEFAULT_SET_NAME]: defaultSet,
			[READING_LIST_SET_NAME]: readingListSet,
			[EVERYTHING_SET_NAME]: everythingSet,
		};
	}
);

const selectActiveCollection = createSelector(
	selectActiveCollectionDescription,
	selectCards,
	selectAllSets,
	selectFilters,
	selectSections,
	selectTabCollectionFallbacks,
	(description, cards, sets, filters, sections, fallbacks) => description ? description.collection(cards, sets, filters, sections, fallbacks) : null
);

export const selectActiveCollectionContainsCards = createSelector(
	selectActiveCollection,
	(collection) => collection.numCards > 0
);

export const selectCountsForTabs = createSelector(
	selectExpandedTabConfig,
	selectCards,
	selectAllSets,
	selectFilters,
	selectSections,
	selectTabCollectionFallbacks,
	(tabs, cards, sets, filters, sections, fallbacks) => {
		let result = {};
		for (let tab of tabs) {
			if (!tab.count) continue;
			result[tab.collection.serialize()] = tab.collection.collection(cards, sets, filters, sections, fallbacks).numCards;
		}
		return result;
	}
);

//selectCollectionItemsThatWillBeRemovedOnPendingFilterCommit returns the items
//that will be removed from the currently visible collection when
//COMMIT_PENDING_COLLECTION_MODIFICATIONS is dispatched. For example, if you're
//looking at a collection that only shows unread items, it will list the card
//ids that are now marked read but are temporarily still in the collection.
export const selectCollectionItemsThatWillBeRemovedOnPendingFilterCommit = createSelector(
	selectActiveCollection,
	selectPendingFilters,
	(collection, pendingFilters) => collection.cardsThatWillBeRemoved(pendingFilters)
);

//Sometimes the collection is empty for whatever reason and so the cards that
//are in the collection are actually fallback content, not real content.
export const selectCollectionIsFallback = createSelector(
	selectActiveCollection,
	(collection) => collection.isFallback
);

//The cardsDrawerPanel hides itself when there are no cards to show (that is,
//for orphaned cards). This is the logic that decides if it's open based on state.
export const selectCardsDrawerPanelShowing = createSelector(
	selectCollectionIsFallback,
	selectCardsDrawerPanelOpen,
	(isFallback, panelOpen) => isFallback ? false : panelOpen
);

export const selectActiveSortLabelName = createSelector(
	selectActiveCollectionDescription,
	(description) => description.sortConfig.labelName || ''
);

const selectExpandedActiveStartCards = createSelector(
	selectActiveStartCards,
	selectCards,
	(startCards, cards) => expandCardCollection(startCards, cards)
);

//This is the final expanded, sorted collection, including start cards.
export const selectFinalCollection = createSelector(
	selectExpandedActiveStartCards,
	selectActiveCollection,
	(startCards, collection) => [...startCards, ...collection.sortedCards]
);

export const selectActiveCollectionLabels = createSelector(
	selectActiveCollection,
	selectActiveStartCards,
	(collection, startCards) => [...startCards.map(() => ''), ...collection.labels]
);

export const selectActiveCardIndex = createSelector(
	selectActiveCardId,
	selectFinalCollection,
	(cardId, collection) => collection.map(card => card.id).indexOf(cardId)
);

export const getCardIndexForActiveCollection = (state, cardId) => {
	let collection = selectFinalCollection(state);
	return collection.map(card => card.id).indexOf(cardId);
};

//returns an array of card-types that are in the BODY_CARD_TYPES that this user has access to
export const selectBodyCardTypes = createSelector(
	selectFilters,
	//we can just take advantage of the fact that cards are already set, and there's a filter per card type
	(filters) => Object.keys(BODY_CARD_TYPES).filter(cardType => Object.keys(filters[cardType] || {}).length > 0)
);

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

const selectPreparedQuery = createSelector(
	selectActiveQuery,
	(query) => {
		if (!query) {
			return {
				text: {},
				words: [],
				filters: [],
			};
		}
		let [words, filters] = queryWordsAndFilters(rewriteQueryFilters(query));
		return {
			text: textSubQueryForWords(words),
			words: words,
			filters,
		};
	}
);

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

const textPropertySubQueryForWords = (words, startValue) => {
	const joinedWords = words.join(' ');

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

	const wordsWithoutDashes = words.map(word => word.split('-').join(' '));
	const joinedWordsWithoutDashes = wordsWithoutDashes.join(' ');

	//If there were no dashes inside any words, we're done.
	if (joinedWordsWithoutDashes == joinedWords) return result;
	//If not, then also add in the words without dashes, but have them be worth just a little bit less. This will allow [hill-climbing] to match [hill climbing]
	return [...result, ...textPropertySubQueryForWords(wordsWithoutDashes, startValue * 0.75)];
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

const cardScoreForQuery = (card, preparedQuery) => {
	if (!card) return [0.0, false];
	let score = 0.0;
	let fullMatch = false;

	for (let key of Object.keys(TEXT_FIELD_CONFIGURATION)) {
		const propertySubQuery = preparedQuery.text[key];
		if(!propertySubQuery || !card.normalized[key]) continue;
		const [propertyScore, propertyFullMatch] = stringPropertyScoreForStringSubQuery(card.normalized[key], propertySubQuery);
		score += propertyScore;
		if (!fullMatch && propertyFullMatch) fullMatch = true;
	}

	//Give a boost to cards that have more inbound cards, implying they're more
	//important cards.
	if (card.links_inbound && card.links_inbound.length > 0) {
		//Tweak the score, but only by a very tiny amount. Once the 'juice' is
		//not just the count of inbound-links, but the transitive count, then
		//this can be bigger.
		score *= 1.0 + (card.links_inbound.length * 0.02);
	}

	return [score, fullMatch];
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
	for (let word of normalizedWords(queryString)) {
		if (!word) continue;
		let filter = filterForWord(word);
		if (filter) {
			filters.push(filter);
		} else {
			words.push(word);
		}
	}
	const stemmedWords = stemmedNormalizedWords(words.join(' '));
	return [stemmedWords, filters];
};

const selectCollectionDescriptionForQuery = createSelector(
	selectPreparedQuery,
	selectFindCardTypeFilter,
	(query, cardTypeFilter) => {
		let baseFilters = ['has-body'];
		if (cardTypeFilter) baseFilters.push(cardTypeFilter);
		return new CollectionDescription(EVERYTHING_SET_NAME,[...baseFilters, ...query.filters]);
	}
);

const selectCollectionForQuery = createSelector(
	selectCollectionDescriptionForQuery,
	selectCards,
	selectAllSets,
	selectFilters,
	(description, cards, sets, filters) => description.collection(cards, sets, filters)
);

const selectRankedItemsForQuery = createSelector(
	selectCollectionForQuery,
	selectPreparedQuery,
	(collection, preparedQuery) => collection.filteredCards.map(card => {
		const [score, fullMatch] = cardScoreForQuery(card, preparedQuery);
		return {
			card: card,
			score: score,
			fullMatch: fullMatch,
		};
	})
);

export const selectPartialMatchedItemsForQuery = createSelector(
	selectRankedItemsForQuery,
	(rankedItems) => Object.fromEntries(rankedItems.map(item => [item.card.id,!item.fullMatch]))
);

export const selectExpandedRankedCollectionForQuery = createSelector(
	selectRankedItemsForQuery,
	(rankedItems) => {
		let filteredItems = rankedItems.filter(item => item.score > 0.0);
		filteredItems.sort((left, right) => right.score - left.score);
		return filteredItems.map(item => item.card);
	}
);
