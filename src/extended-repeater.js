const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const strArray = new Array(options.repeatTimes);
	strArray.fill(String(str) || "");
	const additionArray = new Array(options.additionRepeatTimes);
	additionArray.fill(options.addition !== undefined && String(options.addition) || "")
	const additionString = additionArray.join(options.additionSeparator !== undefined && String(options.additionSeparator) || "|");
	const resultArray = strArray.map((element) => {
		return element + additionString;
	})
	return resultArray.join(options.separator !== undefined && String(options.separator) || "+");
}

module.exports = {
  repeater
};
