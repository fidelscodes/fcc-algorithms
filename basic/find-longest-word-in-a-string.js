/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  
  // split the string into array of words
  var arr = str.split(' ');
  
  // variable to keep track of the current longest word
  var longestWord = 0;
  
  // iterate over the array
  for (var i = 0; i < arr.length; i++) {
  
    // if length of current word is greater than curent longestWord
    if (longestWord < arr[i].length) {
  
      // assign the current word's length to longestWord
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
