$(document).ready(function() {

  $("#tweet-form").submit(function(event) {
    console.log("I should prevent default")
    event.preventDefault();

    let formData = $("#tweet-form").serialize();
    

    if (handleFormData(formData)) {
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
    }
  })

  const handleFormData = (formData) => {

    if (formData.length < 6) {                  //check if input is empty
      alert("You havent tweeted anything yo");
      return;     //return error code 
    }

    if (formData.length > 145) {                //check if input is too long
      alert("Your tweet is too long, please use the counter for reference");
      return;   
    }

    return true;   
  }

});




