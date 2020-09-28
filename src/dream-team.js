const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  firstLetterArray = [];
  const main = (members) => {
    members.map(item => {
      if (typeof item === 'string') {
        item = item.trim();
        firstLetterArray += item[0].toUpperCase();
      }
    })
    return firstLetterArray.split('').sort().join('');
  }

  return (Array.isArray(members) && members !== []) ? main(members) : false;
};
