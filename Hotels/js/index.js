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
   TOGGLE LIGHT/DARK MODE
*/
$(function () {
   $(".mode-dark").click(function () {
      $("#data-theme").attr("data-theme", "dark");

      $("#header").addClass("dark-theme");

      $(".mode-dark").removeClass("active");
      $(".mode-light").addClass("active");

      $(".rooms").addClass("active");
   });
   $(".mode-light").click(function () {
      $("#data-theme").removeAttr("data-theme");

      $("#header").removeClass("dark-theme");

      $(".mode-dark").addClass("active");
      $(".mode-light").removeClass("active");

      $(".rooms").removeClass("active");
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
