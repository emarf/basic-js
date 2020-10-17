const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkForUndefined(message, key) {
    if (key === undefined || message === undefined) {
      throw new Error();
    }
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypt = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let encryptLetterNumber = ((message[i].charCodeAt() + key[j % key.length].charCodeAt()) % this.alphabet.length) + 65;
        encrypt += String.fromCharCode(encryptLetterNumber);
        j++;
      } else {
        encrypt += message[i]
      }
    }
    return this.type === 'reverse' ? encrypt.split('').reverse().join('') : encrypt;
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypt = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let encryptLetterNumber = ((message[i].charCodeAt() - key[j % key.length].charCodeAt() + 104) % this.alphabet.length) + 65;
        encrypt += String.fromCharCode(encryptLetterNumber);
        j++;
      } else {
        encrypt += message[i]
      }
    }
    return this.type === 'reverse' ? encrypt.split('').reverse().join('') : encrypt;
  }
}

module.exports = VigenereCipheringMachine;