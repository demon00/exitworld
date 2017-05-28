var elem = $('.virtual__widget--arm');
var endScroll = $('.virtual__container').width();
var maxScroll = endScroll - elem.width();
var body = $('body').width();

if(body > 950)  {
$(window).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll > 700) {
    var result = (scroll / 1.7) - 60;

   if(result > maxScroll) {
     result = maxScroll
   }
    elem.css('left', result + 'px')

  }
});
};


//SCRIPT ITEM MENU SCROLL

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),

    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});


//END SCRIPT ITEM MENU SCROLL