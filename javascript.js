var backgroudbanner =document.createElement('img');
var bannerdiv =document.getElementById('bg-banner');
backgroudbanner.addEventListener('load',function(){
   bannerdiv.style.backgroundImage='url("images/bg.jpg")';
   bannerdiv.style.opacity=1;
});
backgroudbanner.src='images/bg.jpg';
$(function(){
   $(window).scroll(function(){
      if($(this).scrollTop()>100){
         $('.arrow-up').fadeIn();
      }
      else{
         $('.arrow-up').fadeOut();
      }
   });
   $('.arrow-up').click(function(){
      $('body,html').animate({scrollTop : 0},800);
  });
});
