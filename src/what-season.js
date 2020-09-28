const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (!date.getTime()) {
    throw new Error();
  }

  const month = date.getMonth();

  switch (true) {
    case month <= 1 || month >= 11:
      return 'winter';
      break;
    case month <= 4:
      return 'spring';
      break;
    case month <= 7:
      return 'summer';
      break;
    case month <= 10:
      return 'fall';
      break;
    default:
      return;
  }
};
