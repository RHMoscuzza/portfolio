console.log("This site designed By Spark-Media https://themeforest.net/item/man-one-page-personal-resumecv-template/20057362?s_rank=5");
console.log("Photographs by Pam Lau Twitter: @PamLau");
console.log("Hamburger Menu courtesy https://codepen.io/nickcil/pen/pvPQJK")

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

    hamburgerIcon.on("click", function() {
        toggleNav();
    });

    // hamburgerIcon.on("mouseenter", function(){
    //     openNav();
    // });

    navSelection.on("click", function(){
        closeNav();
    });

    // nav.on("mouseleave", function(){
    //     closeNav();
    // });

    window.onscroll = function(){
        closeNav();
    }
};

$(function(){
    hamFunction();
});