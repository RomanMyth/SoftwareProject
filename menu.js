$(document).ready(function(){
    $("#italian").click(function(){
        $("#overlay").css("visibility", "visible");
        $("#italian-info").css("visibility", "visible");
        console.log("test");
    });
    $(".close").click(function(){
        $("#overlay").css("visibility", "hidden");
        $("#italian-info").css("visibility", "hidden");
    });
});