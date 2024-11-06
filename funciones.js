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
document.querySelector('.siguiente').addEventListener('click', avanzar);
document.querySelector('.anterior').addEventListener('click', retroceder);

// Inicializa mostrando la primera imagen
showImage();

  // Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) { e.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;  
    const email = document.getElementById('email').value; 
    const telefono = document.getElementById('telefono').value; 
    
    const errores = []; 
    
    if (nombre.length < 6) { 
      errores.push('El nombre debe de tener al menos 6 caracteres.'); 
    } 
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) { errores.push('El correo electrónico no es válido.'); 
    } 

    const telefonoRegex = /^[0-9]{7,15}$/; 
    if (!telefonoRegex.test(telefono)) { 
      errores.push('El número de teléfono no es válido.'); 
    } 
    
    
    if (errores.length > 0) { 
      mostrarErrores(errores); 
      document.getElementById('resultado').innerHTML = ''; 
    } else { 
      mostrarResultado(nombre, email, telefono); 
      document.getElementById('errores').innerHTML = ''; 
      document.getElementById('contactForm').reset(); 
    } 
  });

function mostrarErrores(errores) {
    const divErrores = document.getElementById('errores');
    divErrores.innerHTML = ''; 

    errores.forEach(error => {
        const p = document.createElement('p');
        p.textContent = error;
        p.style.color = 'red'; 
        divErrores.appendChild(p);
    });
}

function mostrarResultado(nombre, email, telefono) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = ''; 

  const pNombre = document.createElement('p');
  pNombre.textContent = `Nombre: ${nombre}`;
  pNombre.style.color = 'black'; 

  const pEmail = document.createElement('p');
  pEmail.textContent = `Correo: ${email}`;
  pEmail.style.color = 'black';
  
  const pTelefono = document.createElement('p');
  pTelefono.textContent = `Teléfono: ${telefono}`;
  pTelefono.style.color = 'black';
  
  
  resultadoDiv.appendChild(pNombre);
  resultadoDiv.appendChild(pEmail);
  resultadoDiv.appendChild(pTelefono);
  
}
  
  // Formulario de opiniones
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const opinion = document.getElementById('opiT').value;
      
      if (opinion.length === 0) { alert('Por favor, ingresa una opinión antes de enviar.'); 
        return; // Salir si la funcion esta vacia
      }

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
 
