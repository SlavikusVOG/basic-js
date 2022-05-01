const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr, depthCount) {
		if (!depthCount) {
			depthCount = 0;
		}
		depthCount++;
		const depthArray = new Array(arr.length || 1);
		depthArray.fill(depthCount);

		arr.forEach((element, index) => {
			if(Array.isArray(element)) {
				depthArray[index] = this.calculateDepth(element, depthCount)
			}
		});
		const result = Math.max(...depthArray);
		return result;
 	}
}

module.exports = {
  DepthCalculator
};
