const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

     btn.value = 'Enviar';
    
     const serviceID = 'default_service';
     const templateID = 'template_whfdywb';
    
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
        btn.value = 'Email enviado';
       alert('¡Mensaje enviado!');
     }, (err) => {
       btn.value = 'Email enviado';
       alert(JSON.stringify(err));
      });
 });