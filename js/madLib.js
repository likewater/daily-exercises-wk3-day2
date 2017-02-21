$(document).ready(function() {
  //back end logic
  var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

  //front end logic
  for(var words = 0; words < blanks.length; words += 1) {
    var userInput = $("input#" + words).val();
    userInput[words]
  } //closes for loop

   $("#story").show();
  event.preventDefault();
}); //closes doc.ready
