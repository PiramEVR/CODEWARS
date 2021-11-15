function toWeirdCase(string) {
  var str = string.toLowerCase().split('');
  var j = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      j = 0;
      continue;
    }
    else {
      if (j % 2 == 0) {
        str[i] = str[i].toUpperCase();
      }
      j++;
    }
  }
  return str.join('');
}