const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let firstLetterArray = [];
  const main = (members) => {
    members.map(item => {
      if (typeof item === 'string') {
        item = item.trim();
        firstLetterArray += item[0].toUpperCase();
      }
    })
    return (firstLetterArray.length < 1) ? firstLetterArray : firstLetterArray.split('').sort().join('');
  }

  return (Array.isArray(members)) ? main(members) : false;
};
