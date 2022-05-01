const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	const returnArray = arr.reduce((prev, curr, index, array) => {
		switch (curr) {
			case "--double-next":
				if(array[index+1]) {
					prev.push(array[index + 1]);
				}
				break;
			case "--double-prev":
				if(prev[prev.length - 1]) {
					prev.push(prev[prev.length - 1]);
				}
				break;
			case "--discard-prev":
				if(prev[prev.length - 1]) {
					prev.pop();
				}
				break;
			case "--discard-next":
				if(array[index+1]) {
					array.splice(index, 2);
				}
				break;
			default:
				prev.push(curr);
		}
		return prev;
	}, []);
	return returnArray;
}

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])

module.exports = {
  transform
};
