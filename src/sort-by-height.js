const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const arrCopy = [...arr].filter(value => value !== -1);
	const result = [];
	arr.forEach((value, index) => {
		if(value === -1) {
			result.push(value);
		}
		else {
			result.push(arrCopy.splice(arrCopy.indexOf(Math.min(...arrCopy)), 1)[0]);
		}
	})
	return result;
}

module.exports = {
  sortByHeight
};
