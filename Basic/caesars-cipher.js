/*
A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  // will contain final string
  var decodedStr = '';
  
  for(var i = 0; i < str.length; i++) {
    
    // holds the ASCII code of the current character
    var character = str.charCodeAt(i);
    
    if (character > 31 && character < 65) { // common non-alphabetic characters
      decodedStr += String.fromCharCode(character);
    } else if (character >= 65 && character < 78 ) { // A - M
      character += 13;
      decodedStr += String.fromCharCode(character);
    } else if (character < 91) { // N - Z
      character -= 13;
      decodedStr += String.fromCharCode(character);
    }
  }
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
