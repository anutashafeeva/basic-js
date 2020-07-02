const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (isNaN(position) || position > this.res.length || position <= 0) {
      this.res = [];
      throw Error;
    }

    this.res.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.res = this.res.reverse();
    return chainMaker;
  },
  finishChain() {
    this.res = this.res.map(function(element) {
      return `( ${element} )`;
    });
    let out = this.res.join('~~');
    this.res = [];
    return out;
  }
};

module.exports = chainMaker;
