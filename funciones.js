const images = ["imagenes/imagen1.jpg", "imagenes/imagen2.jpg","imagenes/imagen3.jpg" ];
let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("carouselImage");
    imgElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    let errors = [];
    
    if (name.length === 0 || name.length > 5) {
      errors.push('El nombre es obligatorio y debe tener menos de 5 caracteres.');
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