$(document).ready(function() {

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


    $("#portfolio1").mouseover(function() {
        $("#overlayEffect1").show();
    }).mouseout(function() {
        $("#overlayEffect1").hide();
    });
    $("#portfolio2").mouseover(function() {
        $("#overlayEffect2").show();
    }).mouseout(function() {
        $("#overlayEffect2").hide();
    });
    $("#portfolio3").mouseover(function() {
        $("#overlayEffect3").show();
    }).mouseout(function() {
        $("#overlayEffect3").hide();
    });
    $("#portfolio4").mouseover(function() {
        $("#overlayEffect4").show();
    }).mouseout(function() {
        $("#overlayEffect4").hide();
    });
    $("#portfolio5").mouseover(function() {
        $("#overlayEffect5").show();
    }).mouseout(function() {
        $("#overlayEffect5").hide();
    });
    $("#portfolio6").mouseover(function() {
        $("#overlayEffect6").show();
    }).mouseout(function() {
        $("#overlayEffect6").hide();
    });
    $("#portfolio7").mouseover(function() {
        $("#overlayEffect7").show();
    }).mouseout(function() {
        $("#overlayEffect7").hide();
    });
    $("#portfolio8").mouseover(function() {
        $("#overlayEffect8").show();
    }).mouseout(function() {
        $("#overlayEffect8").hide();
    });

});

//business Logic
$(document).ready(function() {
    $("form#contactForm").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();


        if (name && email) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }
    })


})