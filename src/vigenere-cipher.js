const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const RE = /^[a-zA-Z]+$/;

const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const INVALID_ARGS_MESSAGE = "Incorrect arguments!";

class VigenereCipheringMachine {
	constructor(isDirect) {
		if (isDirect === false) {
			this.isDirect = false;
		}
		else {
			this.isDirect = true;
		}
	}
	encrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error(INVALID_ARGS_MESSAGE);
		}
		const messageArray = message.split("");
		const keyArray = key.split("");
		const keyLength = key.length;
		const alphabetLength = ALPHABET.length;
		const resultArray = [];
		let keyIndex = 0;
		messageArray.forEach((character, index, array) => {
			if(!RE.test(character)){
				resultArray.push(character);
				return;
			}
			resultArray.push(
				ALPHABET[
					(ALPHABET.indexOf(
						character.toLowerCase()
					) + ALPHABET.indexOf(
						keyArray[keyIndex % keyLength].toLowerCase()
					)) % alphabetLength
				].toUpperCase()
			);
			keyIndex++;
		});
		return this.isDirect ? resultArray.join("") : resultArray.reverse().join("");
	}
	decrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error(INVALID_ARGS_MESSAGE);
		}
		const messageArray = message.split("");
		const keyArray = key.split("");
		const keyLength = key.length;
		const alphabetLength = ALPHABET.length;
		const resultArray = [];
		let keyIndex = 0;
		messageArray.forEach((character, index, array) => {
			if(!RE.test(character)){
				resultArray.push(character)
				return;
			}
			const characterIndexOf = ALPHABET.indexOf(character.toLowerCase());
			const keyIndexOf = ALPHABET.indexOf(keyArray[keyIndex % keyLength].toLowerCase);
			resultArray.push(
				ALPHABET.slice(
					(ALPHABET.indexOf(
						character.toLowerCase()
					) - ALPHABET.indexOf(
						keyArray[keyIndex % keyLength].toLowerCase()
					)) % alphabetLength
				)[0].toUpperCase()
			);
			keyIndex++;
		});
		return this.isDirect ? resultArray.join("") : resultArray.reverse().join("");
	}
}

module.exports = {
  VigenereCipheringMachine
};
