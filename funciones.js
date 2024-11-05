document.addEventListener('DOMContentLoaded', function() {
  // Carrusel
  const imagenes = [
    'imagenes/imagen1.jpg',
    'imagenes/imagen2.jpg',
    'imagenes/imagen3.jpg'
  ];
  let indiceActual = 0;

  const imgElemento = document.querySelector('#carruselImagen');


  function showImage (){
    imgElemento.src = imagenes[currentIndex];
  } 
//funcion de la imagen siguiente:
  function nextImage(){
    currentIndex = (currentIndex + 1) % imagenes.length;
    showImage();}
// funcion para la imagen anterior:
    function prevImage(){
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImage();}
    

    showImage();


  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      let errors = [];
      if (name.length === 0 || name.length < 5) {
        errors.push('El nombre es obligatorio y debe tener al menos 5 caracteres.');
      }

      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        errors.push('El email no es válido.');
      }

      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(phone)) {
        errors.push('El teléfono debe tener 10 dígitos.');
      }

      const formOutput = document.getElementById('formOutput');
      formOutput.innerHTML = '';

      if (errors.length > 0) {
        errors.forEach(error => {
          const errorElement = document.createElement('p');
          errorElement.textContent = error;
          formOutput.appendChild(errorElement);
        });
      } else {
        const successMessage = document.createElement('p');
        successMessage.textContent = `Nombre: ${name}, Email: ${email}, Teléfono: ${phone}`;
        formOutput.appendChild(successMessage);
      }
    });
  }

  // Formulario de opiniones
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const opinion = document.getElementById('opiT').value;

      // Muestra un mensaje de agradecimiento
      const feedbackMessage = document.querySelector('.feedback');
      feedbackMessage.textContent = '¡Gracias por tu opinión!';

      // Limpia el área de texto
      document.getElementById('opiT').value = '';

      // Muestra la opinión debajo del formulario
      const resultDiv = document.getElementById('result');
      const feedbackItem = document.createElement('p');
      feedbackItem.textContent = opinion;
      resultDiv.appendChild(feedbackItem);
    });
  }
});
