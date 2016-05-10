$(document).ready(function() {

$('#btn-logout').click(function(){
    var ref = new Firebase("https://popping-torch-783.firebaseio.com/");
    ref.unauth();
    window.location.href="index.html";
});


    $('#loginbox').click(function() {
        var loginUsername = $('#login-username').val();
        var loginPassword = $('#login-password').val();

        console.log(loginPassword);
        var ref = new Firebase("https://popping-torch-783.firebaseio.com/");

        ref.authWithPassword({
            email: loginUsername,
            password: loginPassword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                window.location.href="logout.html";
            }
        });
    });

    $('#btn-signup').click(function() {
        alert('hello!');
        var ref = new Firebase("https://popping-torch-783.firebaseio.com/");
        var firstName = $('#firstname').val();
        var lastName = $('#firstname').val();
        var email = $("#register-email").val();
        var userPassword = $("#user-password").val();
        //  authClient.createUser(email, password, function (error, user) {
        console.log(userPassword);
        ref.createUser({
            email: email,
            password: userPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });

    });


});


$(function(){


    $("#launcher").click(function(){
        $("#dialog-1").dialog("open");
    });
    $("#datepicker-1").datepicker();
    var searchDBString =[
    "html",
    "Java",
    "JavaScript",
    "JSON",
    "jQuery",
    "css",
    "JSON",

    ];
    $("#autocomplete-1").autocomplete({
        source: searchDBString,
    });
    

    $("#accordion-1").accordion({
        collapsible:true,

});



});