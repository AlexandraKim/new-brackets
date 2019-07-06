module.exports = function check(str, bracketsConfig) {
  var strArray = str.split('');
  var openningBrackets = [], closingbrackets = [];
  var identicalBrackets = {
    "|": false,
    "7": false,
    "8": false
  };
  for (var k = 0; k < bracketsConfig.length; k++) {
    if (bracketsConfig[k][0] != bracketsConfig[k][1]) {
      openningBrackets.push(bracketsConfig[k][0]);
      closingbrackets.push(bracketsConfig[k][1]);
    }
  }

  var storage = [];
  for (var i = 0; i < strArray.length; i++) {
    var currentChar = strArray[i];

    // different brackets
    for (var b = 0; b < openningBrackets.length; b++) {
      if (currentChar == openningBrackets[b]) {
        storage.push(openningBrackets[b]);
      } else if (currentChar == closingbrackets[b]) {
        if (storage.length == 0) {
          return false;
        }
        if (currentChar == closingbrackets[openningBrackets.indexOf(storage[storage.length - 1])]) {
          storage.pop();
        }
      }
    }

    // identical brackets
    if (Object.keys(identicalBrackets).includes(currentChar)) {
      if (identicalBrackets[currentChar]) {
        if (currentChar == storage[storage.length - 1]) {
          storage.pop();
        }
      } else {
        storage.push(currentChar);
      }
      identicalBrackets[currentChar] = !identicalBrackets[currentChar];
    }
  }
  return storage.length == 0;
}
