const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	const rowsCount = matrix.length;
	let catsCount = 0
	for (let row = 0; row < rowsCount; row++) {
		const colsCount = matrix[row].length;
		for (let col = 0; col < colsCount; col++) {
			if(matrix[row][col] === "^^") catsCount++;
		}
	}
	return catsCount;
}

module.exports = {
  countCats
};
