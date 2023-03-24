$(function() {
    $('.humberger-menu').on('click', function() {
      $('.main').toggleClass('active');
      $('.slide-menu').toggleClass('active');
      $('.menu-exit').toggleClass('active');
    });
});

$(function() {
  $('.menu-exit').on('click', function() {
    $('.main').toggleClass('active');
    $('.slide-menu').toggleClass('active');
    $(this).toggleClass('active');
  });
});

$('.menu-item').click(function(){
  var $answer = $(this).find('.menu-item-content');
  if($answer.hasClass('active')){
    $answer.removeClass('active');
    $answer.slideUp();
    $(this).find('span').text('+');
    
  }else{
    $answer.addClass('active');
    $answer.slideDown();
    $(this).find('span').text('-');
  }
});