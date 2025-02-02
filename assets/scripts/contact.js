//formulario
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function () {
    let messageOverlay = document.getElementById('alerta-envio');
    messageOverlay.style.display = 'block';

    setTimeout(function () {
      messageOverlay.style.display = 'none';
    }, 3500); // Ocultar después de 3.5 segundos
  });
});