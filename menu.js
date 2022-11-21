$(document).ready(function(){
    $("#italian").click(function(){
        $("#overlay").css("visibility", "visible");
        $("#italian-info").css("visibility", "visible");
    });
    $("#zuppa").click(function(){
        $("#overlay").css("visibility", "visible");
        $("#zuppa-info").css("visibility", "visible");
    });

    $(".close").click(function(){
        $("#overlay").css("visibility", "hidden");
        $(this.parentElement.parentElement).css("visibility", "hidden");
    });

    $(".item").mouseover(function(){
        $(this).children(':nth-child(2)').children(':nth-child(3)').css("visibility", "visible");
    });
    $(".item").mouseleave(function(){
        $(this).children(':nth-child(2)').children(':nth-child(3)').css("visibility", "hidden");
    });
});