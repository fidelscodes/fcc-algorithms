/*
http://freecodecamp.com/challenges/bonfire-reverse-a-string
INSTRUCTIONS:
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  
  // turn string into an array, reverse the array and then join it
  str = str.split('').reverse().join('');
  return str;
}

reverseString('hello');
