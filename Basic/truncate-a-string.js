/*
Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is not
added to the string length.
*/

function truncate(str, num) {
  
  // to hold the truncated string
  var newStr = '';
  
  // when 'num' is less than/equal to 3
  if (num <= 3) {
    
    // remove 'num' of characters from end of string
    // add ellipsis
    // store resulting string in 'newStr'
    newStr = str.slice(0, num) + '...';
    
  // when 'str' is longer than 'num'
  } else if (str.length > num) {
    
    // remove 'num - 3' from the end of str
    // add the ellipsis
    // store resulting string in 'newStr'
    newStr = str.slice(0, num - 3) + '...';
    
  // when 'str' length is less than/equal 'num'
  } else if (str.length <= num) {
    
    // return the original string
    return str;
  }
  
  return newStr;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
