$(document).ready(function() {
  $("#form1").submit(function(event) {
    var inputString = $("#stringInput").val();
    var outputString = inputString.replace(/a/, "-");
    var outputString = inputString.replace(/e/, "-");
    var outputString = inputString.replace(/i/, "-");
    var outputString = inputString.replace(/o/, "-");
    var outputString = inputString.replace(/u/, "-");
    console.log(outputString);
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
