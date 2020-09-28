const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;
const k = LOG_2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

  if (typeof (sampleActivity) === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k));
  }
  return false;

};
