/*
Remove all falsy values from an array.

Falsy values in javascript are 'false', 'null', 0, "", 'undefined', and 'NaN'.
*/

function bouncer(arr) {
  
  // function inside filter checks elem for true/false
  // returns only what is true
  return arr.filter(function(elem) { return elem ? true : false});
}

bouncer([7, "ate", "", false, 9]);
