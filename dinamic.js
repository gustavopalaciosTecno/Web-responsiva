let boton = document.getElementById("boton");
boton.style.backgroundColor = "blue";
boton.style.textAlign = "center";
boton.style.color = "white";
boton.style.fontSize = "24px";

boton.addEventListener('click', mensaje);

function mensaje(){
    alert('hola soy un botón');
}



function cambiarColor1(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "green"){
        element.style.backgroundColor = "blue";
        
    }else{
        element.style.backgroundColor = "green";
    }
}

function cambiarColor2(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "green"){
        element.style.backgroundColor = "yellow";
        
    }else{
        element.style.backgroundColor = "green";
    }
}

function cambiarColor3(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "green"){
        element.style.backgroundColor = "violet";
        
    }else{
        element.style.backgroundColor = "green";
    }
}

function cambiarColor4(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "green"){
        element.style.backgroundColor = "red";
        
    }else{
        element.style.backgroundColor = "green";
    }
}