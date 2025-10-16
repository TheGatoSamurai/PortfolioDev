// Define la función en window para acceso global desde el HTML
window.sendEmail = function(form, btn) {
  // Prefer explicit service id used in this project
  const serviceID = 'service_cs98tmm';
  const templateID = 'template_whfdywb';
  try {
    // ensure we have the button element
    const button = btn || (form && form.querySelector('#button')) || document.getElementById('button');
    if (button) button.value = 'Enviando...';
    console.info('[EmailJs] sendForm start', { serviceID, templateID, form });
    // emailjs.sendForm accepts a form element or selector
    emailjs.sendForm(serviceID, templateID, form).then(
      (response) => {
        console.info('[EmailJs] sendForm success', response);
        if (button) button.value = 'Email enviado';
        alert('¡Mensaje enviado!');
        // Notificar al formulario para limpiar y reactivar
        window.dispatchEvent(new Event('messageSent'));
      },
      (err) => {
        console.error('[EmailJs] sendForm error', err);
        if (button) {
          button.value = 'Enviar';
          button.disabled = false;
        }
        const spinner = document.getElementById('spinner');
        if (spinner) spinner.remove();
        alert('Error al enviar: ' + (err && err.text) || JSON.stringify(err));
      }
    );
  } catch (e) {
    console.error('[EmailJs] unexpected error', e);
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.remove();
    if (btn) { btn.disabled = false; btn.value = 'Enviar'; }
    alert('Error interno al enviar');
  }
}
