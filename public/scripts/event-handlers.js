$(document).ready(function() {
  document.getElementById("tweet-error").style.display = "none";

  $("#tweet-form").submit(function(event) {
    console.log("I should prevent default")
    event.preventDefault();

    let formData = $("#tweet-form").serialize();
    
    const error = handleFormData(formData);

    if (error  === "allGood") {
      $.ajax({
        url : "/tweets",
        type: "POST",
        data : formData,
        success: function(data, textStatus, jqXHR)
        {
          window.loadTweets();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          console.log("Error", errorThrown);
        }
      });
    } else {
      console.log(error)
      if (error === "err01") {
        console.log("Im checking for error type");
        $("#error-text").text( "You haven't tweeted anything my friend, write something!")
      } else if (error === "err02") {
        $("#error-text").text( "Your tweet is too long, please use the counter for reference")
      }
      
      $( "#tweet-error" ).slideDown("fast")
    }
  })

  const handleFormData = (formData) => {

    if (formData.length < 6) {                  //check if input is empty
      return "err01";     //return error code 
    }

    if (formData.length > 145) {                //check if input is too long
      return "err02";   
    }

    return "allGood";   
  }

});




