console.log("Photographs by Pam Lau Twitter: @PamLau");

const hamFunction = function(){
    const nav = $(".menu ul");
    const hamburgerIcon = $(".toggleNav");
    const navSelection = $(".menu ul li a");
    let navOpenorClose = false;

    function openNav(){
        nav.css("right", "0px");
        hamburgerIcon.css("color", "#319883");
        navOpenorClose = true;
    };

    function closeNav(){
        nav.css("right", "-150px");
        hamburgerIcon.css("color", "#ffffff");
        navOpenorClose = false;
    };

    function toggleNav(){
        if(navOpenorClose === true){
            closeNav();
        }
        else{
            openNav();
        }
    };

    hamburgerIcon.on("click", function(e) {
        e.preventDefault();
        toggleNav();
    });

    navSelection.on("click", function(){
        closeNav();
    });

};

$(function(){
    hamFunction();
});