const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next doubles the next element of the array in the transformed array.
  // --double-prev doubles the previous element of the array in the transformed array.

  const exceptionArray = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  let transformArray = [];

  for (let i = 0; i < arr.length; i++) {

    switch (true) {
      case arr[i] === exceptionArray[0]:
        i++;
        break;
      case arr[i] === exceptionArray[1]:
        if (arr[i - 2] !== exceptionArray[0]) {
          transformArray.pop();
        }
        break;
      case arr[i] === exceptionArray[2]:
        if (i !== arr.length - 1) {
          transformArray.push(arr[i + 1]);
          break;
        }
        break;
      case arr[i] === exceptionArray[3]:
        if (i > 0 && arr[i - 2] !== exceptionArray[0]) {
          transformArray.push(arr[i - 1]);
          break;
        }
        break;

      default:
        transformArray.push(arr[i]);
    }
  }
  return transformArray;
}

