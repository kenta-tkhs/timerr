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

$(function() {
  $('#button1').on('click', function(){
    $('.timer-img').toggleClass('active');
  });
});

$(function(){
  $('.bg-item').on('click', function(){
    var $color = $(this).attr('id');
    if($(this).hasClass('active')){
      $(this).parent().addClass('active');
    }else{
      $('.bg-item').removeClass('active');
      $(this).addClass('active');
      $('.main').attr('id', $color);
      $(this).parent().addClass('active');
    }
  });
});

$('.menu-item-title').click(function(){
  var $answer = $(this).parent().find('.menu-item-content');
  if($answer.hasClass('active')){
    $answer.removeClass('active');
    $answer.slideUp('slow');
    $(this).find('.slide-icon').text('+');
  }else{
    $answer.addClass('active');
    $answer.slideDown('slow');
    $(this).find('.slide-icon').text('-');
  }
});