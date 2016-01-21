/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments.

Remove all elements from the initial array that are of the same value as these
arguments.
*/

function destroyer(arr) {
  // converts the arguments into an actual array
  var args = Array.prototype.slice.call(arguments);
  
  // removes the first element of args, which contains a copy of arr
  args.splice(0, 1);
  
  // removes any elements from 'arr' that are found in args
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}
