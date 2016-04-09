/*
Check if a string (first argument) ends with the given target string 
(second argument).
*/

function end(str, target) {
  
  // gets the number of characters in target argument and assigns its value
  // to length variable
  var length = target.length;
  
  // variable to store ending characters in str equal to the length of target
  var strEnding = str.substr(-length, length);
  
  // return true if lastCharacter equals target
  return strEnding === target;
}

end("Bastian", "n");
