/*
Return the remaining elements of an array after chopping off n elements
from the head.

The head meaning the beginning of the array, or the zeroth index
*/

function slasher(arr, howMany) {
  
  // start at index 0 and remove an amount of elements equal to 'howMany'
  arr.splice(0, howMany);
  
  // return remaining elements
  return arr;
}

slasher([1, 2, 3], 2);
