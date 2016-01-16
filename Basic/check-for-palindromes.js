/*
http://freecodecamp.com/challenges/bonfire-check-for-palindromes

INSTRUCTIONS:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward
and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order
to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and
"race CAR" among others.
*/

function palindrome(str) {
  
  // turn string to array, reverse it, join it again, set it to lowercase
  // lastly remove all non alphanumeric characters
  var reverseStr = str.split('').reverse().join('').toLowerCase().replace(/[\W_]/g, '');
  
  // set str to lowercase and remove all non alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');
  
  // if str and reverseStr are the same, return true
  return str === reverseStr;
 
}

palindrome("eye");
