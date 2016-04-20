/*
$(document).ready(function () {
  // plavn scroll
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser.safari){
      $('body').animate({ scrollTop: destination }, 1000);
    } else {
      $('html').animate({ scrollTop: destination }, 1000);
    }
    return false;
  });
});
*/
$(document).ready(function(){
   $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});
