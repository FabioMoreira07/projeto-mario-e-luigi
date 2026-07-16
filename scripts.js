const formulario = document.querySelector('.formulario');
const mascaraFormulario = document.querySelector('.mascara-formulario');

function mostrarform() {
    formulario.style.left = '50%';
    formulario.style.transform = 'translateX(-50%)';
    mascaraFormulario.style.visibility = 'visible';
}


function esconderform() {
    formulario.style.left = '-345px';
    formulario.style.transform = 'translateX(0)';
    mascaraFormulario.style.visibility = 'hidden';
}


