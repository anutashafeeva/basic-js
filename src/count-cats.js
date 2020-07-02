const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(function(currentValue) {
    currentValue.forEach(function(currentElem) {
      if (currentElem === '^^') {
        cats += 1;
      }
    })
  });
    
  return cats;
};
