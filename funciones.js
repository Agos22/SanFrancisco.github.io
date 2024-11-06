// Carrusel
const imagenes = [
    'imagenes/imagen1.jpg',
    'imagenes/imagen2.jpg',
    'imagenes/imagen3.jpg'
];
let indiceActual = 0;

const imagenElemento = document.querySelector('.carrousel-imagenes');

function mostrarImagen() {
  imagenElemento.style.backgroundImage = `url(${imagenes[indiceActual]})`;
}
//funcion de la imagen siguiente:
function avanzar(){
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
}
// funcion para la imagen anterior:
function retroceder(){
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}
document.querySelector('.siguiente').addEventListener('click', avanzar);
document.querySelector('.anterior').addEventListener('click', retroceder);

// Inicializa mostrando la primera imagen
mostrarImagen();


