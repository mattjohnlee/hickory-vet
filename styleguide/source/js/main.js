/* Test for jQuery, if needed

if (typeof jQuery != 'undefined') {		 
    alert("jQuery library is loaded!");
}else{
    alert("jQuery library is not found!");		 
}
 */


$(document).ready(function() {

	/* Topics toggle */

    $('.toggle .toggle-trigger').each(function() {
        var tis = $(this), state = false, toggleTarget = tis.next('.toggle-target').slideUp(), expand = $('.filtering .topics .expand'), collapse = $('.filtering .topics .collapse');
        tis.click(function() {
            state = !state;
            toggleTarget.slideToggle(state);
            tis.toggleClass('active',state);
        });
        expand.click(function() {
            toggleTarget.slideDown();
            $('.toggle-trigger').addClass('active');
        });
        collapse.click(function() {
            toggleTarget.slideUp();
            $('.toggle-trigger').removeClass('active');
        });
    });


	/* Trigger mobile nav */

    $('.mobilenav-trigger').click(function() {
    	$(this).toggleClass('active');
        $('.nav-main').toggleClass('active');
    });


	/* Megamenu */

    $(".nav-main #about").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-about").toggleClass("active");
    });
    $("a").not("#about").click(function(){
        $("#megamenu-about").removeClass("active");
    });

    $(".nav-main #services").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-services").toggleClass("active");
    });
    $("a").not("#services").click(function(){
        $("#megamenu-services").removeClass("active");
    });

    $(".nav-main #pet-owners").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-pet-owners").toggleClass("active");
    });
    $("a").not("#pet-owners").click(function(){
        $("#megamenu-pet-owners").removeClass("active");
    });

    $(".nav-main #veterinarians").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-veterinarians").toggleClass("active");
    });
    $("a").not("#veterinarians").click(function(){
        $("#megamenu-veterinarians").removeClass("active");
    });

    $(".nav-main #news-events").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-news-events").toggleClass("active");
    });
    $("a").not("#news-events").click(function(){
        $("#megamenu-news-events").removeClass("active");
    });

    $(".nav-main #search a").click(function(){
    	$(".nav-main a").not(this).removeClass("active");
    	$(this).toggleClass('active');
        $("#megamenu-search").toggleClass("active");
    });
    $("a").not("#search a").click(function(){
        $("#megamenu-search").removeClass("active");
    });

});