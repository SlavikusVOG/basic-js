const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	numbersToCompare = [];
	nArray = n.toString().split("");
	nArray.forEach((element, index, array) => {
		numbersToCompare.push(
			Number.parseInt(array.slice(0, index).concat(array.slice(index + 1)).join(""))
		)
	});
	return Math.max(...numbersToCompare);
}

module.exports = {
  deleteDigit
};
