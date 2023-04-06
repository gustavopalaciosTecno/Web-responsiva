let boton = document.getElementById("boton");
boton.style.backgroundColor = "red";
boton.style.textAlign = "right";
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

function cambiarColor5(element){
    var currentColor = element.style.backgroundColor;
    if(currentColor == "green"){
        element.style.backgroundColor = "brown";
        
    }else{
        element.style.backgroundColor = "green";
    }
}

let enlace = document.getElementById("enlace");

enlace.addEventListener('click', mensaje2);

function mensaje2(){
    alert("Soy un enlace");
}



