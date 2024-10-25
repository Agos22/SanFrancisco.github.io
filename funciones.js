document.addEventListener('DOMContentLoaded', function() {
const carrusel = document.querySelector('.imagenes');
const images = document.querySelectorAll('.imagen');
const prevButton = document.querySelector('.anterior');
const nextButton = document.querySelector('.siguiente');
let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % images.length;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  carrusel.style.transform = `translateX(-${index * 100}%)`;
});

//formulario:
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    let errors = [];
    
    if (name.length === 0 || name.length < 5) {
      errors.push('El nombre es obligatorio y debe tener al menos de 5 caracteres.');
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
//Funcion de  opinion
 document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    const opinion = document.getElementById('opiT').value;

    // Muestra un mensaje de agradecimiento
  document.querySelector('.feedback').textContent = '¡Gracias por tu opinión!';
  document.getElementById('opiT').value = ''; // Limpia el área de texto

    // Muestra la opinión debajo del formulario
    const resultDiv = document.getElementById('result');
    const feedbackItem = document.createElement('p');
    feedbackItem.textContent = opinion;
    resultDiv.appendChild(feedbackItem);

  });
});  

