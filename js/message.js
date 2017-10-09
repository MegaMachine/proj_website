$(function(){
    $('#btn').click(function(e) {
        console.log($("#email").val());
        console.log($("#textmessage").val());

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
                setTimeout(function(){
                    $('#info').css('visibility','none');
                },6000);
            }).fail(function(){
                $('#info').html('Error!').css('color','#ed4444');
            });
            e.preventDefault();
    });
});
