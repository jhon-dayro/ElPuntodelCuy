$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle", 
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});
var user = document.getElementById("user");
var pass = document.getElementById("pass");

function iniciarsecion(){

    if(user.value == "admin" && pass.value=="admin"){
        window.location = "web/clientes.html"
    }

}