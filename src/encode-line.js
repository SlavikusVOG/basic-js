const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  const strArray = str.split("");
  if(strArray.length < 1) {
    return "";
  }
  let counter = 0;
  let characterToAdd = strArray[0];
  strArray.reduce((prev, curr, index) => {
    if(curr === prev || index === 0) {
      counter++;
    }
    else {
      if(counter === 1) {
        result.push(characterToAdd);
      }
      else {
        result.push(`${counter}${characterToAdd}`)
      }
      counter = 1;
      characterToAdd = curr;
    }
    return curr;
  }, "");
  if(counter === 1) {
    result.push(characterToAdd);
  }
  else {
    result.push(`${counter}${characterToAdd}`)
  }
  return result.join("");
}

module.exports = {
  encodeLine
};
