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
  $('#start-button').on('click', function(){
    $('.timer-img').fadeOut();
    $(this).fadeOut();
    $('.header').fadeOut();
    $('.humberger-menu').fadeOut();
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

$(function(){
  $('.menu-item-title').on('click', function(){
    var $parent = $(this).parent().find('.menu-item-content');
    if($parent.hasClass('active')){
      $parent.removeClass('active');
      $parent.slideUp('slow');
      $(this).find('.slide-icon').text('+');
    }else{
      $parent.addClass('active');
      $parent.slideDown('slow');
      $(this).find('.slide-icon').text('-');
    }
  });
});

let eye = document.getElementById("eye");
eye.addEventListener('click', function () {
  if (this.previousElementSibling.getAttribute('type') == 'password') {
    this.previousElementSibling.setAttribute('type', 'text');
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  } else {
    this.previousElementSibling.setAttribute('type', 'password');
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  }
})