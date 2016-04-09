/*
Write a function that splits an array (first argument) into groups the length 
of 'size' (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  
  // empty array to hold final multidimensional array
  var multiArray = [];
  
  // variable to hold sliced items
  var sliced;
  
  // iterate through the array, increasing i by an amount equal to 'size'
  for(var i = 0; i < arr.length; i += size) {
    
    // on each iteration, start slicing at current value of 'i'
    // stop slicing at 'size' + current value of i (exclusive)
    // assign sliced items to 'sliced'
    sliced = arr.slice(i, size + i);
    
    // push the 'sliced' array to 'multiArray'
    multiArray.push(sliced);
  }
  
  return multiArray;
}

chunk(["a", "b", "c", "d"], 2);
