$(document).ready(function() {
  const counterDisplay = $("#tweet-text").closest("#tweet-form").find(".counter")  // Grabs current number written in the html output tag with class .counte
  const currentMax = counterDisplay.text();   
  const tweeting = $("#tweet-text");

  $(tweeting).on("input", function() {   // count characters written in form and output count of how many left
    const inputLength = $(this).val().length;  
    let counter = (currentMax) - inputLength;
    
    if (counter < 1) {              //colors the counter red when it goes below 1
      counterDisplay.css("color", "red")
    } else {
      counterDisplay.css("color", "rgb(84, 81, 73)");       
    }  

    document.getElementById("tweet-counter").innerHTML = counter;
  });
});

