$(document).ready(function(){
    $("#italian").click(function(){
        $("#overlay").css("visibility", "visible");
        $("#italian-info").css("visibility", "visible");
    });
    $(".close").click(function(){
        $("#overlay").css("visibility", "hidden");
        $(this.parentElement.parentElement).css("visibility", "hidden");
    });
});