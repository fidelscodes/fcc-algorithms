/*
Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  
  // variable to hold repeated string. Initialized with empty string
  var repeated = "";
  
  // for loop that runs 'num' times
    // loop won't run if a negative number is passed as 'num'
      // in this case, 'repeated' will be returned as the empty string
  for (var i = 1; i <= num; i++) {
    
    // on each run add 'str' to the end of 'repeated'
    repeated += str;
  }  
  
  return repeated;
}

repeat("*", 3);
