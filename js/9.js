function toWeirdCase(string) {
  var str = string.toLowerCase().split('');
  for (let i = 0; i < words.length; i++) {

    //loop through individual words
    for (let j = 0; j < words.length; j++) {

      //get first word in words
      let firstWord = words[0];

      //get first character in first word
      let firstChar = firstWord[0];

      //Create new word without first character
      let unshiftedWord = firstWord.unshift(0);

      //move first character to the end
      let newWord = unshiftedWord.push(firstChar) + "ay";

      return newWord;

    }
  }
}