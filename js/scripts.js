// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.
  //
  // Here is some sample input:
  // Count to: 30
  // Count by: 5
  // Output: 5, 10, 15, 20, 25, 30
  //
  // for(index = 5; index <= 30; index += 5) {
  //   alert(index);
  // }

// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.
  //
  // Here is some sample input:
  // Count to: 50
  // Count by: 7
  // Output: 7, 14, 21, 28, 35, 42, 49

  // for (index = 7; index <= 50; index += 7) {
  //   alert(index);
  // }

// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there WHEN THE USER JUST PRESSES ENTER WITHOUT ENTERING text
$(document).ready(function() {
  var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  var inputs = ["Blake", "Grace", "bear", "bang", "ran", "boat"];
  debugger;


  if (inputs[0].length === 0) {
  //validate that all inputs are !null
    alert("Please enter your answer in all boxes.");
  } else {
      alert("testing else");
      for(var index = 0; index < blanks.length; index += 1) {
        alert("your word is " + inputs[index] + ".");
      }
  }
  if (inputs === null) {
    // validate that all inputs are not numbers
    alert("Please enter non-numberic answers in all fields.");
  } else {
    alert("inputs are all alpha char");
  }
  // event.preventDefault();
});

// Go back through the looping practice problems, and redo one of them with a for loop instead of a forEach() loop.
  // > var languages = ['HTML', 'CSS', 'JavaScript'];
  // > languages.forEach(function(language) {
  //     alert('I love ' + language + '!');
  //   });

  // var languages = ['HTML', 'CSS', 'JavaScript'];
  // for(var index = 0; index < languages.length; index += 1) {
  //   alert("I love " + languages[index] + "!");
  // }

  // ANOTHER Example:
    // var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    //
    //  blanks.forEach(function(blank) {
    //    var userInput = $("input#" + blank).val();
    //    $("." + blank).text(userInput);
    //  });
    //
    //  $("#story").show();
  //
  // var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  // var inputs = ["Blake", "Grace", "dog", "OH SHITE!", "crapped themself", "boat"];
  // for(var words = 0; words < blanks.length; words += 1) {
  //   alert("your word is " + inputs[words] + ".");
  // }
