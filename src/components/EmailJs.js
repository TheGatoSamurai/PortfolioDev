const btn = document.getElementById("button");

// Define la función en window para acceso global desde el HTML
window.sendEmail = function(form, btn) {
  const serviceID = "default_service";
  const templateID = "template_whfdywb";
  btn.value = "Enviando...";
  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      btn.value = "Email enviado";
      alert("¡Mensaje enviado!");
      // Notificar al formulario para limpiar y reactivar
      window.dispatchEvent(new Event('messageSent'));
    },
    (err) => {
      btn.value = "Enviar";
      btn.disabled = false;
      const spinner = document.getElementById('spinner');
      if (spinner) spinner.remove();
      alert(JSON.stringify(err));
    },
  );
}
