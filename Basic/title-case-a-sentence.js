/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words
like "the" and "of".
*/

function titleCase(str) {
  
  // create an array of the lowercased words in the provided string
  var wordsArray = str.toLowerCase().split(' ');
  
  // array to hold new capitalized string
  var newStr = [];
  
  // iterate over each element in wordsArray
  wordsArray.forEach(function(word) {
  
    // creates a variable and assigns it the capitalized first letter of each word
    var firstLetter = word.charAt(0).toUpperCase();
  
    // creates a new variable with first letter capitalized and adds the rest of
    // that word
    var capWord = firstLetter + word.substr(1);
  
    // pushes the capitalized word into the newStr array
    newStr.push(capWord);
  });
  
  // joins the elements in newStr array to create a new string with capitalized words
  newStr = newStr.join(' ');
  
  return newStr;
}

titleCase("I'm a little tea pot");