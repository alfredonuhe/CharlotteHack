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
});
