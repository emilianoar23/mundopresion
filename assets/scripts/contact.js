document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga de la página

    let form = this; // Referencia al formulario
    let formData = new FormData(form); // Obtiene los datos del formulario

    // Enviar datos con fetch() a FormSubmit
    fetch("https://formsubmit.co/ajax/emilianoromeroft@gmail.com", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          let messageOverlay = document.getElementById('alerta-envio');
          messageOverlay.style.display = 'block'; // Muestra mensaje de éxito

          setTimeout(function () {
            messageOverlay.style.display = 'none';
          }, 4500); // Oculta después de 4.5 segundos

          form.reset(); // Limpia el formulario
        }
      })
      .catch(error => console.log("Error al enviar el formulario:", error));
  });
});