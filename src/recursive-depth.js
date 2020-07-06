const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    if (arr.every(element => !Array.isArray(element))) {
      res = 1;
    } else {
      res += this.calculateDepth(arr.reduce((acc, val) => acc.concat(val), []));
    }

    return res;
   }
};