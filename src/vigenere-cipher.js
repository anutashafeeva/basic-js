const CustomError = require("../extensions/custom-error");

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === undefined || direction === true) {
      this.direction = true;
    } else {
      this.direction = false;
    }
  }

  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let pos = 0;
    for(let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i]) >= 0) {
      let strChar = str[i];
      let keyChar = key[pos % key.length];
      res += alphabet.charAt((alphabet.indexOf(strChar) + alphabet.indexOf(keyChar)) % alphabet.length);
      pos++;
      } else {
        res += str[i];
      }
    }

    return this.direction ? res : res.split('').reverse().join('');
  }

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let pos = 0;
    for(let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i]) >= 0) {
      let strChar = str[i];
      let keyChar = key[pos % key.length];
      res += alphabet.charAt((alphabet.indexOf(strChar) + alphabet.length - alphabet.indexOf(keyChar)) % alphabet.length);
      pos++;
      } else {
        res += str[i];
      }
    }

    return this.direction ? res : res.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
