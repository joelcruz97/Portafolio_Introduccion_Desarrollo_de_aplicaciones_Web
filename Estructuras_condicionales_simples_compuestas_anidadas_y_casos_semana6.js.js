*/Primer Ejercicio/*
const numero = Number(prompt("Ingresa un numero del 1 al 5"));
if (isNaN(numero) || numero < 1 || numero > 5) {
  throw Error("Te dije que debes ingresar un numero del 1 al 5");
}
switch (true) {
  case (numero == 1):
    console.log(`El numero ingresado ${numero} no es un numero primo`);
    break;
  case (numero == 2):
    console.log(`El numero ingresado ${numero} es un numero primo`);
    break;
  case (numero == 3):
    console.log(`El numero ingresado ${numero} es un numero primo`);
    break;
  case (numero == 4):
    console.log(`El numero ingresado ${numero} no es un numero primo`);
    break;
  case (numero == 5):
    console.log(`El numero ingresado ${numero} es un numero primo`);
    break;
}
*/Segundo ejercicio/*
const numero = Number(prompt("Ingresa un numero"));
if (isNaN(numero)) {
  throw Error("Lo que ingresaste no es un numero");
} else{
  if (numero %2 ===0){
   console.log (`El numero ingresado ${numero} es par `); 
  }else{
    console.log (`El numero ingresado ${numero} es impar `);
  }
}
*/tercer ejercicio/*
const numero = Number(prompt("Ingresa un numero del 1 al 7"));
if (isNaN(numero) || numero < 1 || numero > 7) {
  throw Error("Te dije que debes ingresar un numero del 1 al 7");
}
switch (true) {
  case (numero == 1):
    console.log(`El numero ingresado ${numero} corresponde al dia Lunes`);
    break;
  case (numero == 2):
    console.log(`El numero ingresado ${numero} corresponde al dia Martes`);
    break;
  case (numero == 3):
    console.log(`El numero ingresado ${numero} corresponde al dia Miercoles`);
    break;
  case (numero == 4):
    console.log(`El numero ingresado ${numero} corresponde al dia Jueves`);
    break;
  case (numero == 5):
    console.log(`El numero ingresado ${numero} corresponde al dia Viernes`);
    break;
    case (numero == 6):
    console.log(`El numero ingresado ${numero} corresponde al dia Sabado`);
    break;
    case (numero == 7):
    console.log(`El numero ingresado ${numero} corresponde al dia Domingo`);
    break;
}
*/cuarto ejercicio/*
const numero = Number(prompt("Ingresa un numero del 1 al 12"));
if (isNaN(numero) || numero < 1 || numero > 12) {
  throw Error("Te dije que debes ingresar un numero del 1 al 12");
}
switch (true) {
  case (numero == 1):
    console.log(`El numero ingresado ${numero} corresponde al mes de Enero`);
    break;
  case (numero == 2):
    console.log(`El numero ingresado ${numero} corresponde al mes de Febrero`);
    break;
  case (numero == 3):
    console.log(`El numero ingresado ${numero} corresponde al mes de Marzo`);
    break;
  case (numero == 4):
    console.log(`El numero ingresado ${numero} corresponde al mes de Abril`);
    break;
  case (numero == 5):
    console.log(`El numero ingresado ${numero} corresponde al mes de Mayo`);
    break;
    case (numero == 6):
    console.log(`El numero ingresado ${numero} corresponde al mes de Junio`);
    break;
    case (numero == 7):
    console.log(`El numero ingresado ${numero} corresponde al mes de Julio`);
    break;
case (numero == 8):
    console.log(`El numero ingresado ${numero} corresponde al mes de Agosto`);
    break;
case (numero == 9):
    console.log(`El numero ingresado ${numero} corresponde al mes de Septiembre`);
    break;
case (numero == 10):
    console.log(`El numero ingresado ${numero} corresponde al mes de Octubre`);
    break;
case (numero == 11):
    console.log(`El numero ingresado ${numero} corresponde al mes de Noviembre`);
    break;
case (numero == 12):
    console.log(`El numero ingresado ${numero} corresponde al mes de Diciembre`);
    break;

}
*/quinto ejercicio/*
const numero = Number(prompt("Ingresa un numero"));
if (isNaN(numero)) {
  throw Error("Lo que ingresaste no es un numero");
} else{
  if (numero >0){
   console.log (`El numero ingresado ${numero} es positivo `); 
  }else if(numero <0){
    console.log (`El numero ingresado ${numero} es Negativo `);
  }else {
    console.log ("El numero es cero");
  }
}
*/sexto ejercicio/*
function solicitarCaracter() {
}let caracter = prompt("Ingresa un carácter (S o W):");
caracter = caracter.toUpperCase();
while (caracter !== 'S' && caracter !== 'W') {
    caracter = prompt("Carácter no válido. Por favor, ingresa 'S' o 'W':").toUpperCase();
     console.log(`Carácter válido ingresado: ${caracter}`);
}
solicitarCaracter();
*/septimo ejercicio/*
const numero = Number(prompt("Ingresa un numero del 1 al 5 y te dire que vocal es:"));
if (isNaN(numero) || numero < 1 || numero > 5) {
  throw Error("Te dije que debes ingresar un numero del 1 al 5");
}
switch (true) {
  case (numero == 1):
    console.log(`El numero ingresado ${numero} corresponde a la letra a de las vocales`);
    break;
  case (numero == 2):
    console.log(`El numero ingresado ${numero} corresponde a la letra e de las vocales`);
    break;
  case (numero == 3):
    console.log(`El numero ingresado ${numero} corresponde a la letra i de las vocales`);
    break;
  case (numero == 4):
    console.log(`El numero ingresado ${numero} corresponde a la letra o de las vocales`);
    break;
  case (numero == 5):
    console.log(`El numero ingresado ${numero} corresponde a la letra u de las vocales`);
    break;
}
