let boton = document.getElementById("boton");
boton.style.backgroundColor = "blue";
boton.style.textAlign = "center";
boton.style.color = "white";


boton.addEventListener('click', mensaje);

function mensaje(){
    alert('hola soy un botón');
}