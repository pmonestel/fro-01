const botonRegistrar = document.getElementById('btn-registrar');



const imprimirDatos = () => {
    let nombre = document.getElementById('txt-nombre').value;
    let apellidos = document.getElementById('txt-apellidos').value;
    let correo = document.getElementById('txt-correo').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let codPostal = document.getElementById('txt-zip').value;


    console.log('El nombre es: ', nombre, apellidos);
    console.log('El correo es: ', correo);
    console.log('La dirección es: ', direccion);
    console.log('Vive en la ciudad de: ', ciudad);
    console.log('De la provincia: ', provincia);
    console.log('Código postal: ', codPostal);

};





botonRegistrar.addEventListener('click', imprimirDatos);