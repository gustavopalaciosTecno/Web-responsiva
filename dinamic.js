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



