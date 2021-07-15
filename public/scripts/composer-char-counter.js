
$(document).ready(function() {
  const counterDisplay = $("#tweet-text").closest("#tweet-form").find(".counter")
  const currentMax = counterDisplay.text();      // Grabs current number written in the html output tag with class .counter
  const tweeting = $("#tweet-text");

  $(tweeting).keypress(function() {   // count characters written in form and output count of how many left
    const input = $(this).val().length;  
    let counter = (currentMax - 1) - input;

    // $(tweeting).keydown(function(e) {
    //   console.log($(this).val().length)

    //   if(e.which == 8  && counter < 140) {
    //     counter += 1;
    //   }

    //   if (counter < 1) {                        //colors the counter red when it goes below 1
    //     counterDisplay.css("color", "red")
    //   } else {
    //     counterDisplay.css("color", "rgb(84, 81, 73)")
    //   }  

    //   document.getElementById("tweet-counter").innerHTML = counter;
    // });
    document.getElementById("tweet-counter").innerHTML = counter;
  });
});

