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

// Formulario de contacto
const btn = document.getElementById('button');
const alertaEnvio = document.getElementById('alerta-envio');
const mensajePopup = alertaEnvio.querySelector('.mensaje-popup p');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_2h4f63q';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                mostrarAlerta('El mensaje fue enviado exitosamente!', 'success');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                mostrarAlerta('Error al enviar el mensaje. Inténtalo nuevamente.', 'error');
            });
    });

function mostrarAlerta(mensaje, tipo) {
    mensajePopup.textContent = mensaje;

    if (tipo === 'success') {
        alertaEnvio.classList.remove('error');
    } else {
        alertaEnvio.classList.add('error');
    }

    alertaEnvio.style.display = 'block';

    setTimeout(() => {
        alertaEnvio.style.display = 'none';
    }, 3000); // Ocultar después de 3 segundos
}


//Actualizar fecha del footer
let currentYearElement = document.getElementById('currentYear')
let currentYear = new Date().getFullYear()

currentYearElement.textContent = currentYear