/**
 * View handling for non-mobile and mobile devices.
 */
$(document).ready(function() {

    var mobileString = "";
    if (screen.width <= 480) mobileString = "-mobile";

    $("#suggestion").click(function(){
        $("#contacts-user-list").hide();
        $("#other-user-list").show();
    });

    $("#contacts").click(function(){
        $("#contacts-user-list").show();
        $("#other-user-list").hide();
    });

    $(".user-id").click(function(){
        $(".graph-img").attr("src", "img/" + $(this).text() + ".png");
    });
});

function handleLogin(){
    if($("#username-input-mobile").val() == "admin" || $("#username-input").val() == "admin"){
        window.location = "./adminPortal.html";
    } else {
        window.location = "./userPortal.html";
    }
}
