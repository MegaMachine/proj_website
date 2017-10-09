$(function(){
    $('#btn').click(function(e) {
        console.log($("#email").val());
        console.log($("#textmessage").val());
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/tolikdan@yahoo.com",
            method: "POST",
            data: {
                email: $("#email").val(),
                message: $("#textmessage").val()
            },
            dataType: "json"
            }).done(function() {
                $('#info').html('Thank you!').css('color','#2aea57');
            }).fail(function(){
                $('#info').html('Error!').css('color','#ed4444');
            });
    });
});
