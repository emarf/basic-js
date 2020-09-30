const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition = options.addition;
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;

  if (repeatTimes === undefined && additionRepeatTimes === undefined) {
    return `${str}${addition}`;
  }

  let additionStr = '';
  let additionArray = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArray.push(`${addition}`);
  }

  additionStr = additionArray.join(additionSeparator);

  let arr = []

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(`${str}${additionStr}`);
  }

  return arr.join(separator);
}
