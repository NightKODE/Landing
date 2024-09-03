$(document).ready(function(){

  $('.header__burger').on('click', function(e){
    e.preventDefault();
    $('.first-line').toggleClass('rotate__first');
    $('.second-line').toggleClass('rotate__second');
    $('.third-line').toggleClass('hide__third');
    $('.header__mobile').toggleClass('header__open');
    $('.overlay').toggleClass('show');
  })
    setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__mobile').hasClass('header__open') === false) {
      $('.header__burger').addClass('burger--follow')
    } else {
      $('.header__burger').removeClass('burger--follow')
    }
  }, 0);
  // $('.header__burger').on('click', function(){
  // })

})