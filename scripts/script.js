console.log("This site designed By Spark-Media https://themeforest.net/item/man-one-page-personal-resumecv-template/20057362?s_rank=5");
console.log("Photographs by Pam Lau Twitter: @PamLau");

jQuery(document).ready(function() {
    jQuery(".toggleNav").click(function(e) {
        jQuery(this).toggleClass("active");
        jQuery(".menu ul").toggleClass("active");
 
        e.preventDefault();
    });
});