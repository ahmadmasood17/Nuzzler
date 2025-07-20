



$(document).ready(function(){
    function checkScreenSize() {
        if ($(window).width() > 767) {
            $(".clients__slider").addClass("owl-carousel owl-theme").owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                stagePadding: 50,
                autoWidth:true,
                autoplay:true,
                slideTransition: 'linear',
                autoplayTimeout: 3000,
                autoplaySpeed: 5000,
            });

            $("#loadMore").hide(); 
            $(".client__reviews").removeClass("hidden"); 
        } else {
            $(".clients__slider").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
            $(".client__reviews").addClass("hidden").slice(0,3).removeClass("hidden"); 
            $("#loadMore").show(); 
        }
    }

    checkScreenSize();
    $(window).resize(checkScreenSize);

    $("#loadMore").click(function(){
        $(".client__reviews.hidden").slideDown().removeClass("hidden");
        $(this).hide(); 
    });
});

// $('.clients__slider').owlCarousel({
//     loop:true,
//     margin:10,
//     dots:false,
//     nav:false,
//     autoplay:true,
//     slideTransition: 'linear',
//     autoplayTimeout: 3000,
//     autoplaySpeed: 5000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:2
//         },
//         1200:{
//             items:2,
//             stagePadding:20
//         }
//     }
// })