const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let c = members.map(function(currentValue) {
    return typeof currentValue === 'string' ? currentValue.trim().toUpperCase().charAt(0) : '';
  });

  return c.sort().join('');
};
