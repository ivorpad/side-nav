

function transitionEnd() {
  $('.js-side-nav').on('transitionend', function() {
    $(this).removeClass('side-nav--animatable');
  });
}

$('.header__menu-toggle').on('click', function() {
  $('.js-side-nav').addClass('side-nav--animatable').addClass('side-nav--visible');
  transitionEnd();
});

$('.js-menu-hide').on('click', function() {
  $('.js-side-nav').removeClass('side-nav--visible').addClass('side-nav--animatable');
  transitionEnd();
});


$('.side-nav__content').on('click', 'a', function(e) {
  e.preventDefault();
  $(this).next('ul.nav__content--drop').toggle();
});
