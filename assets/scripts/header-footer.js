//scroll home 
$('.logo').click(function (event) {
  let target = $('.hero').offset().top;

  $('html, body').animate({
    scrollTop: target
  }, 900);
  event.preventDefault();
});

//scroll nav
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('#header-js').addClass('sticky');
  } else {
    $('#header-js').removeClass('sticky');
  }
});

$('.mobile-toggle').click(function () {
  if ($('#header-js').hasClass('open-nav')) {
    $('#header-js').removeClass('open-nav');
  } else {
    $('#header-js').addClass('open-nav');
  }
});

$('nav a').click(function (event) {
  let id = $(this).attr("href");
  let offset = 70;
  let target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
});

$(document).click(function (event) {
  if (!$(event.target).closest('#header-js').length && !$(event.target).closest('.mobile-toggle').length) {
    $('#header-js').removeClass('open-nav');
  }
});

//Actualizar fecha del footer
let currentYearElement = document.getElementById('currentYear')
let currentYear = new Date().getFullYear()

currentYearElement.textContent = currentYear