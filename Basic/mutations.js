/*
Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in
"line" are present in "Alien".
*/

function mutation(arr) {

  // set both elements in array to lowercase
  var arr0 = arr[0].toLowerCase(),
      arr1 = arr[1].toLowerCase(); 
      
  // iterate over first array element
  for (var i = 0; i < arr0.length; i++) {
    
    // iterate over second array element
    for (var j = 0; j < arr1.length; j++) {
      
      // if character at index j in second array
      // isn't found in the first array, return false
      if (arr0.indexOf(arr1[j]) === -1) {
        return false;
      }
    }
    return true;
  }
}

mutation(["hello", "hey"]);
