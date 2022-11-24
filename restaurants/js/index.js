/* 
   INIT SCROLL EVENT
*/
//Header
$(window).scroll(function () {
   if ($(this).scrollTop() > 60) {
      $("#header").addClass("scrolled");
   } else {
      $("#header").removeClass("scrolled");
   }
});

/*  
    INIT OWL CAROUSEL
*/
// POPULAR DISHES
$(".owl-carousel").owlCarousel({
   loop: true,
   //    autoplay: true,
   margin: 60,
   dots: false,
   nav: true,
   responsive: {
      0: {
         items: 1,
      },
      768: {
         items: 2,
      },
   },
});

/*  
    INIT WOWJS
*/
wow = new WOW({
   boxClass: "wow", // default
   animateClass: "animated", // default
   offset: 0, // default
   mobile: true, // default
   live: true, // default
});
wow.init();

/* 
   TOGGLE LIGHT/DARK MODE
*/
$(function () {
   $(".mode-dark").click(function () {
      $("#data-theme").attr("data-theme", "dark");

      $("#header").addClass("dark-theme");

      $(".mode-dark").removeClass("active");
      $(".mode-light").addClass("active");
   });
   $(".mode-light").click(function () {
      $("#data-theme").removeAttr("data-theme");

      $("#header").removeClass("dark-theme");

      $(".mode-dark").addClass("active");
      $(".mode-light").removeClass("active");
   });

   $(".icon-open").click(function () {
      $("#header").addClass("show");
      $(".icon-close").addClass("active");
      $(".icon-open").removeClass("active");
   });

   $(".icon-close").click(function () {
      $("#header").removeClass("show");
      $(".icon-open").addClass("active");
      $(".icon-close").removeClass("active");
   });
});
