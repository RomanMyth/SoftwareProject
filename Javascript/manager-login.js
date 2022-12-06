$(document).ready(function(){
    $('#username').click(function(){
        $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0}, 200);
    });
    $('#password').click(function(){
        $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0}, 200);
    });
});

function Check(){
    if(document.getElementById('username').value == "Manager" && document.getElementById('password').value == "manager"){
        location.href = window.location.origin + "/menu-manager.html";
    }
    else{
        $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 200);
    }
}