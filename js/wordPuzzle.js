$(document).ready(function() {
  $("#form1").submit(function(event) {
    var inputString = $("#stringInput").val();
    var splitArray = inputString.split("");
    debugger;
    var output = [];
    for (var index = 0; index <= splitArray.length; index++) { //index++ says every time we go through the for loop it adds 1 to the index.
      if (splitArray[index] === "a" || splitArray[index] === "e" || splitArray[index] === "i" || splitArray[index] === "o" || splitArray[index] === "u") {
        splitArray[index].replace("-");
        splitArray.join("");
      } //closes if statement
      else {
        splitArray.join("");
      } // closes else statement
    } // closes for statement

    alert(output[0]);
    // the following are regular expressions.
    // var outputA = inputString.replace(/a/gi, "-"); // .replace(/a/, "-") will only remove the first letter "a", to remove all "a", need to look globally, and include both capital and lowercase. this is done by adding the "gi". Reference: Dallas and  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // var outputAE = outputA.replace(/e/gi, "-");
    // var outputAEI = outputAE.replace(/i/gi, "-");
    // var outputAEIO = outputAEI.replace(/o/gi, "-");
    // var outputString = outputAEIO.replace(/u/gi, "-");
    event.preventDefault();
  });//closes btn.submit

}); //closes doc.ready

//
// Word Puzzle
// Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.
//
// Example:
//
// String Input: "Believe you can and you're halfway there. Theodore Roosevelt"
//
// Puzzle Output: "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"
//
// Do this without "regular expressions".
