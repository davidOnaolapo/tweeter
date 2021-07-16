$(document).ready(function() {

  document.getElementById("tweet-error").style.display = "none";            //Dont show error message on render

  $("#tweet-form").submit(function(event) {             //Listen for form submission and execute
    event.preventDefault();

    let formData = $("#tweet-form").serialize();         // Turn user input into useful info
    
    const error = handleFormData(formData);          

    if (error  === "allGood") {             //Do if user input is valid  
      $.ajax({
        url : "/tweets",
        type: "POST",
        data : formData,
        success: function(data, textStatus, jqXHR)
        {
          $("#tweet-error").slideUp("fast")                  //Remove error if its showing
          window.loadTweets();
          
          $("#tweet-text").val("");
          document.getElementById("tweet-counter").innerHTML= 140;
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          console.log("Error", errorThrown);
        }
      });
    } else {
      if (error === "err01") {      //check the kind of error, if any and render appropriate response
        $("#error-text").text( "You haven't tweeted anything my friend, write something! 😬")

      } else if (error === "err02") {
        $("#error-text").text( "Your tweet is too long, please use the counter for reference 🧐")
      }

      $("#tweet-error").slideDown("fast")                   //Display error
    }
  })

  const handleFormData = (formData) => {
    if (formData.length < 6) {                  //check if input is empty
      return "err01";                         //For error display 
    }

    if (formData.length > 145) {                //check if input is too long
      return "err02";                     
    }

    return "allGood";   
  }

});




