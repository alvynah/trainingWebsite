//User Logic
$(document).ready(function() {

    /*  $(".whatwedoimg").click(function() {
          $(this).children().toggle("1000");
          $(".explanation").toggle('1000');
      });*/

    $("#design-img").click(function() {
        $("#design-img").slideDown("1000").hide("1000");
        $("#design").show("1000");
    });
    $("#design").click(function() {
        $("#design").slideUp('1000');
        $("#design-img").slideDown('1000');
    });
    $("#development-img").click(function() {
        $("#development-img").slideDown("1000").hide("1000");
        $("#development").show("1000");
    });
    $("#development").click(function() {
        $("#development").slideUp('1000');
        $("#development-img").slideDown('1000');
    });
    $("#project-management-image").click(function() {
        $("#project-management-image").slideDown("1000").hide("1000");
        $("#project-management").show("1000");
    });
    $("#project-management").click(function() {
        $("#project-management").slideUp('1000');
        $("#project-management-image").slideDown('1000');
    });

    let overlayTotalNumber = (
        $(".overlay").toArray().length
    );

    for (let overlayNumber = 1; overlayNumber <= overlayTotalNumber; overlayNumber++) {
        $(`#portfolio${overlayNumber}`).mouseover(function() {
            $(`#portfolio${overlayNumber} > img`).addClass("overlayEffect");
            $(`#work${overlayNumber}`).toggle();
        }).mouseout(function() {
            $(`#portfolio${overlayNumber} > img`).removeClass("overlayEffect");
            $(`#work${overlayNumber}`).toggle();
        });
    }

});

//business Logic
$(document).ready(function() {
    $("form#mc-embedded-subscribe-form").submit(function(event) {
        event.preventDefault();
        var name = $("input#mce-NAME").val();
        var email = $("input#mce-EMAIL").val();


        if (name && email) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter both  your name and email!");
        }
    })


})