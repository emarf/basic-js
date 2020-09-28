const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {


  const infoObj = {};
  const turnsSpeedInSec = turnsSpeed / 3600;
  const requiredDisks = Math.pow(2, disksNumber) - 1;

  infoObj.turns = requiredDisks;
  infoObj.seconds = Math.floor(requiredDisks / turnsSpeedInSec);

  return infoObj;
};
