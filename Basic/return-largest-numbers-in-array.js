/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i] .
*/

function largestOfFour(arr) {
  
  // create a new empty array to push largest numbers into
  var newArr = [];
  
  // iterate over arr
  arr.forEach(function(subArray) {
  
    // variable to hold the largest number in the current subArray
    // Math.max.apply() is used to obtain largest number inside current subArray
    var largestNum = Math.max.apply(null, subArray);
    
    // push largestNum into the newArr array
    newArr.push(largestNum);
  });
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);