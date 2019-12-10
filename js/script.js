/*============================================
    |   |   |   Portfolio
==============================================*/

$(window).on('load',function(){
    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // filter items on button click
    $("#isotope-filters").on('click','button',function(){        
        var filterValue=$(this).attr("data-filter");

        //filter portfolio
        $("#isotope-container").isotope({
            filter:filterValue
        });

        //active button
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

/*============================================
    |   |   |   Clients
==============================================*/

$(function () {
    $("#clients-content").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,        
    });
});

/*============================================
    |   |   |   Navigation
==============================================*/

/* Show & Hide White Navigation */

$(function(){
    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function(){
        //show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop()>50){
            //show white nav
            $("nav").addClass("white-nav-top");
        }else{
            //hide white nav
            $("nav").removeClass("white-nav-top");
        }
    }
});

/* Smooth scrolling */
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get section id like #about, #services, #contact and etc.
        var section_id=$(this).attr("href");
        
        $("html,body").animate({
            scrollTop:$(section_id).offset().top-50
        },1250,"easeInOutExpo");
    });
});

/*============================================
    |   |   |   Mobile Menu
==============================================*/
$(function(){
    //show mobile nav 
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });

    //hode mobile nav
    $("#mobile-nav-close-btn,#mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
});

/*============================================
    |   |   |   Preloader
==============================================*/

$(window).on('load',function(){
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});

/*============================================
    |   |   |   Animation
==============================================*/

//animate on scroll
$(function(){
    //initialize wow.min.js plugin
    new WOW().init();
});

//home animation on page load
$(window).on("load",function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated fadeInUp");
});
