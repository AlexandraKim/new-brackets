module.exports = function check(str, bracketsConfig) {
  var strArray = str.split('');
  var openningBrackets = [], closingbrackets = [];
  for (var k = 0; k < bracketsConfig.length; k++) {
    openningBrackets.push(bracketsConfig[k][0]);
    closingbrackets.push(bracketsConfig[k][1]);
  }
  if (!openningBrackets.includes(strArray[0])) {
    return false;
  }

  var storage = [];
  for (var i = 0; i < strArray.length; i++) {
    for (var b = 0; b < openningBrackets.length; b++) {
      if (strArray[i] == openningBrackets[b]) {
        storage.push(openningBrackets[b])
      }
      if (strArray[i] == closingbrackets[b]) {
        storage.pop(openningBrackets[b])
      }
    }

  }
  return storage.length == 0;
  //return true;
}
