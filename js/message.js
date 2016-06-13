$('#btn').click(function(e) {
  $.ajax({
      url: "//formspree.io/tolikdanylyuk@gmail.com",  
      method: "POST",
      error: function () {
        $('#info').html('Error!').css({color:'#ed4444'})
      },
      data: {
             email: email.value,
             message: textmessage.value
             },
      dataType: "json"
  }).done(function() {
     $('#info').html('Thank you!').css({color:'#2aea57'})
  } );
  e.preventDefault();
});