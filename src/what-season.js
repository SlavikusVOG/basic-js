const { CONSTANTS } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function checkForInvalid(date) {
	if (date instanceof Date) {
		return true;
	}
	return new Date(date) instanceof Date ? true : false;
}

function getSeason(date) {
	const [winter, spring, summer, autumn] = ["winter", "spring", "summer", "autumn"];
	if (!date) {
		return 'Unable to determine the time of year!'
	}
	if (!checkForInvalid(date)) {
		throw new Error('Invalid date!');
	}
	let season;

	const currDate = date instanceof Date ? date : new Date(date);
	console.log(currDate);
	switch(currDate.getMonth()) {
		case 11:
		case 0:
		case 1:
			season = winter;
			break;
		case 2:
		case 3:
		case 4:
			season = spring;
			break;
		case 5:
		case 6:
		case 7:
			season = summer;
			break;
		case 8:
		case 9:
		case 10:
			season = autumn;
			break;
	}
	return season;
}

const [
	winter,
	spring,
	summer,
	autumn,
] = [
		new Date(2019, 11, 22, 23, 45, 11, 500),
		new Date(2018, 4, 17, 11, 27, 4, 321),
		new Date(2017, 6, 11, 23, 45, 11, 500),
		new Date(1994, 8, 26, 3, 0, 11, 500),
	];
getSeason(winter);
getSeason(spring);
getSeason(summer);
getSeason(autumn);

module.exports = {
  getSeason
};
