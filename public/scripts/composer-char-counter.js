
$(document).ready(function() {
  const counterDisplay = $("#tweet-text").closest("#form").find(".counter")
  const currentMax = counterDisplay.text();      // Grabs current number written in the html output tag with class .counter
  const tweeting = $("#tweet-text");

  $(tweeting).keypress(function() {   // count characters written in form and output count of how many left
    const input = $(this).val().length;  
    let counter = (currentMax - 1) - input;

    document.getElementById("tweet-counter").innerHTML = counter;

    if (counter < 1) {
      counterDisplay.css("color", "red")
    }
  });

  // $("article").mouseover(function() {
  //   $(this).css("box-shadow", "5px 5px #B0C4DE")
  // })

  // $("article").mouseleave(function() {
  //   $(this).css("box-shadow", "0px 0px")
  // })
  // $(tweeting).keydown(function(e) {

  //   if( e.which == 8 || e.which == 46 )
  //     counter += 1;
  // });  
});

