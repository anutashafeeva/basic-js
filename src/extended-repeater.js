const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let add = '';
  if (options.hasOwnProperty('addition')) {
    add = (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) + options['addition'];
  }

  let sep = '+';
  if (options.hasOwnProperty('separator')) {
    sep = options['separator'];
  }

  return (str + add + sep).repeat(options['repeatTimes'] - 1) + str + add;
};
  