//card.images is an imagesBlock. It has the following shape:
/*
[
	{
		//Must always be set to a fully resolved url
		src: 'https://www.example.com/image.png',
		//Natural height and width in pixels
		height: 10,
		width: 100,
		//If the file is an uload, the path in the upload bucket. This is usef
		uploadPath: 'path/to/upload/image.png',
	}
	//Other images may follow
]

*/

//Returns a new images block with the given image added
export const addImageWithURL = (imagesBlock, src, uploadPath = '') => {
	if (!imagesBlock) imagesBlock = [];
	const imgItem = {
		src,
		uploadPath
	};
	return [...imagesBlock, imgItem];
};

export const removeImageAtIndex = (imagesBlock, index) => {
	const result = [];
	for (let i = 0; i < imagesBlock.length; i++) {
		if (i == index) continue;
		result.push(imagesBlock[i]);
	}
	return result;
};

export const imageBlocksEquivalent = (one, two) => {
	if (one == two) return true;
	if (!one || !two) return false;
	if (one.length != two.length) return false;
	for (let i = 0; i < one.length; i++) {
		const oneImg = one[i];
		const twoImg = two[i];
		if (Object.keys(oneImg).length != Object.keys(twoImg).length) return false;
		for (const imgKey of Object.keys(oneImg)) {
			if (oneImg[imgKey] != twoImg[imgKey]) return false;
		}
	}
	return true;
};