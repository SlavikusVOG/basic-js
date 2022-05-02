const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const readNames = [];
  const readNamesCount = [];
  console.log(names);
  if (names.length === 0) {
    return [];
  }
  const result = names.map((file) => {
    if(readNames.includes(file)) {
      readNamesCount[readNames.indexOf(file)]++;
      readNames.push(`${file}(${readNamesCount[readNames.indexOf(file)]})`);
      return `${file}(${readNamesCount[readNames.indexOf(file)]})`;
    }
    else {
      readNames.push(file);
      readNamesCount.push(0);
      return file;
    }
  });
  console.log(result);
  return result;
}

module.exports = {
  renameFiles
};
