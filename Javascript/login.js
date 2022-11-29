var login = new Array();
login = [
    ["Customer1", "12345"],
    ["Customer2", "Password"],
    ["Customer3", "Secure"]
];

$(document).ready(function(){
    $('#username').click(function(){
        $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0}, 200);
    });
    $('#password').click(function(){
        $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0}, 200);
    });
});

function Check(){
    for (var i = 0; i < login.length; i++){
        if(document.getElementById('username').value == login[i][0] && document.getElementById('password').value == login[i][1]){
            location.href = window.location.origin + "/menu.html";
            console.log(true);
        }
        else{
            $('#error').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 200);
        }
    }
}