function activarBoton(){
    alert("Hiciste click en el botón");
}

function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    // // let dni = document.getElementById("documento").value;
    // let fechaNacimiento = document.getElementById("fechaNacimeinto").value;
    let ingresos = document.getElementById("ingresos").value;
    let edad = document.getElementById("edad").value;


    if(ingresos <= 0 && edad <= 0){
        alert("Debe compeltar correctamente los campos !!!");
    }else if(ingresos < 10000 && edad >=18){
         alert(`te llamas ${nombre}-${apellido} tus ingresos son ${ingresos} y tu edad es de unos ${edad} años-PODES PERCIBIR LA TARJETA ALIMENTAR-FELICITACIONES K !!!`);
    }else{
        alert("NO podes percibir la tarjeta alimentar, lamentablemente tenés que trabajar señor seguidor de Milei");
    }
    // alert("Hola programadro/a, " + nombre + " " + apellido + 
    //       "\ntu DNI es: " + dni + 
    //       "\ntu Fecha de Nacimiento es: " + fechaNacimiento);
}

function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);
        
        // document.getElementById("resultado").textContent = `Tu IMC es ${imc.toFixed(2)}`;
        let mensaje;

        if (imc < 18.5) {
            mensaje = "por debajo del peso normal";
        } else if (imc >= 18.5 && imc < 24.9) {
            mensaje = "con peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            mensaje = "con sobrepeso";
        } else {
            mensaje = "con obesidad";
        }
        alert(`Tu índice de masa corporal es: ${imc.toFixed(10)}. Estas ${mensaje}`);
    } else {
        alert("Por favor ingresa valores válidos para peso y altura.");
    }
}

// function perbiriBono(){
  
//      edad = parseInt(prompt("Ingresa tu edad: "));
//      ingreso = parseInt(prompt("Ingresa tu sueldo: "));
//      tarjeta = prompt("Ingresa 'si' tenes tarjeta alimentar o 'no' no tenes tarjeta alimentar: ").toLocaleLowerCase();

//      if(edad >= 18 && ingreso > 10000 && tarjeta == "si"){
//         alert("Anda a trabajar");
//      }else{
//         alert("No podes percibir el bono, lo siento mucho pedazo de trolo!");
//      }
    

// }

// perbiriBono()

// semana = parseInt(prompt("Coloca un valor numérico: "));

// switch(semana){
//     case 1:
//         alert(`el valor ${semana} corresponde al día domingo`);
//         break;
//     case 2:
//         alert(`el valor ${semana} corresponde al día lunes`);
//         break;
//     case 3:
//         alert(`el valor ${semana} corresponde al día martes`);
//         break;
//     case 4:
//         alert(`el valor ${semana} corresponde al día miércoles`);
//         break;  
//     case 5:
//         alert(`el valor ${semana} corresponde al día jueves`);
//         break;
//     case 6:
//         alert(`el valor ${semana} corresponde al día viernes`);
//         break;  
//     case 7:
//         alert(`el valor ${semana} corresponde al día sábado`);
//         break;            
//     default:
//         alert("No es el día indicado");
//         break;        
// }


function convertirCelsiusAFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius !== "") {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("resultado").textContent = `${celsius}°C son ${fahrenheit.toFixed(2)}°F.`;
    } else {
        alert("Por favor ingresa un valor en grados Celsius.");
    }
}

function convertirFahrenheitACelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit !== "") {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("resultado").textContent = `${fahrenheit}°F son ${celsius.toFixed(2)}°C.`;
    } else {
        alert("Por favor ingresa un valor en grados Fahrenheit.");
    }
}


class Empleado{
    constructor(name1,surname,age){
        this.name1=name1;
        this.surname=surname
        this.age=age;
    }
    obtenerPost(){
        const saludo = ['post1','post2'];
        return saludo;
        
    }
}

const emp = new Empleado("Néstor","Palacios",53);
console.log(emp.obtenerPost());


    
















