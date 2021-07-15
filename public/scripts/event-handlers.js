
$(document).ready(function() {

  $("article").mouseover(function() {             //Shades the bottom and right of tweet article on hover
    $(this).css("box-shadow", "5px 5px #B0C4DE")
  })

  $("article").mouseleave(function() {
    $(this).css("box-shadow", "0px 0px")
  })

  $("i").mouseover(function() {             //Shades the bottom and right of tweet article on hover
    $(this).css("color", "#ffc40c");
  })

  $("i").mouseleave(function() {             
    $(this).css("color", "rgb(84, 81, 73)");
  })


  $("#tweet-form").submit(function(event) {
    event.preventDefault();

    let formData = $("#tweet-form").serialize();

    $.ajax({
      url : "/tweets",
      type: "POST",
      data : formData,
      dataType: "JSON",
      encode: true,
      success: function(data, textStatus, jqXHR)
      {
          console.log(data);
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
        console.log("Error", errorThrown);
      }
    });
  })
});




