module.exports = (str) => {
  var lowerCaseStr = str.toLowerCase();
  lowerCaseStr = lowerCaseStr.replace(/[^A-Za-z0-9]*/g,"");

  var reversedString = lowerCaseStr
    .split("")
    .reverse()
    .join("");
  if (lowerCaseStr === reversedString) {
    return [lowerCaseStr];
  } else {
    return [];
  }
};