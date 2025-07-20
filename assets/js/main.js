$('.cross__lines').hide(0);


$(document).ready(function () {
  $(".acc-container .acc:nth-child(1) .acc-head").addClass("active");
  $(".acc-container .acc:nth-child(1) .acc-content").slideDown();
  $(".acc-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(this).siblings(".acc-content").slideToggle();
      $(this).toggleClass("active");
    }
  });
});
// $(".three__lines").click(function () {
//   $(".menu__items").toggleClass("open__menu");
// });



$('.three__lines').click(function(){
  $('.menu__items').addClass('open__menu');
  $('.three__lines').hide();
  $('.cross__lines').show();
  $('.menu__items').slideDown(); 
});

$('.cross__lines').click(function(){
  $('.menu__items').removeClass('open__menu');
  $('.three__lines').show();
  $('.cross__lines').hide();
  $('.menu__items').slideUp(); 
});
