function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

if ($('.slider__body').length>0) {
	$('.slider__body').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  nextArrow: false,
  prevArrow: false
  });
};

$(".ripple").on("click",function(event){
$(this).append("<span class='ripple-effect'>");
$(this).find(".ripple-effect").css({
   left:event.pageX-$(this).position().left,
    top:event.pageY-$(this).position().top
  }).animate({
    opacity: 0,
  }, 1500, function() {
   $(this).remove();
  });
});
