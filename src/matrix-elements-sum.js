const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const colsToSum = new Array(matrix[0].length);
  for(let i = 0; i < colsToSum.length; i++) {
    colsToSum[i] = [];
  }
  colsToSum.forEach((col, colIndex) => {
    matrix.forEach((row) => {
      col.push(row[colIndex]);
    });
  });
  let result = 0;
  colsToSum.forEach((col) => {
    for(let i = 0; i < col.length && col[i] !== 0; i++) {
      result += col[i];
    }
  });
  return result;
}

module.exports = {
  getMatrixElementsSum
};
