$(document).ready(function() {
    $("#design-img").click(function() {
        $("#design-img").slideDown("1000").hide("1000");
        $("#design").show("1000");
    });
    $("#design").click(function() {
        $("#design").slideUp('1000');
        $("#design-img").slideDown('1000');
    });
    console.log(alert("love"))
});