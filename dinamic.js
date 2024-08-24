function activarBoton(){
    alert("Hiciste click en el botón");
}

function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("documento").value;
    let fechaNacimiento = document.getElementById("fechaNacimeinto").value;

    alert("Hola programadro/a, " + nombre + " " + apellido + 
          "\ntu DNI es: " + dni + 
          "\ntu Fecha de Nacimiento es: " + fechaNacimiento);
}

function consultar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if(edad >= 18){
        alert(`Hola ${nombre} sos mayor de edad y podes ver el sitio tranquilamente.`);
    }else{
        alert(`Hola ${nombre}, por favor NO sos mayor de edad`)
    }
}






