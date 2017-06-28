/*
  - a function that can return to us all the unique characters that exist in a string
  - string value is passed into the function
  - function returns and displays all unique characters in object
  --> if letter doesnt exist add key to object if it exist don't add
  - function returns and displays how many instances of each letter were found in string
*/

function countLetters(sentence){

  //create letters object
  var letters = {};

  //find all unique letters and turn them into keys
  for( var i = 0; i < sentence.length; i++){

    //create a key to organize letters
    if(sentence[i] != ' '){
      var key = sentence[i];
    }

    if( letters[key] == undefined){
      letters[key] = 1;
    } else {
      letters[key] += 1;
    }

  }


  return letters;
  // function doesItRepeat(){

  // }

}

console.log(countLetters("lighthouse in the house"));