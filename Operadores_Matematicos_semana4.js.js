//Escribe un programa que solicite al usuario ingresar la temperatura actual de su ciudad en grados Celsius, luego debe convertir esos grados Celsius a Fahrenheit//
let celsius = prompt("Ingresa la temperatura actual de la ciudad donde vives");
let fahrenheit =(celsius *9/5) + 32;
console.log(`La temperatura en fahrenheit es: ${fahrenheit}°F`);

//Desarrolle un algoritmo que reciba el radio de un círculo y calcule su área//
const PI= 3.14159265;
let radio= prompt("Ingrese el radio del circulo:");
let area =PI*Math.pow(radio, 2);
console.log(`Èl área del circulo es: ${area}`);

//Escribe un programa que le pregunte al usuario cuantas baleadas quiere comprar, debe calcular el total a pagar si la baleada tiene un costo de L. 25.00.//
let cantidad= prompt("Con cuantas baleadas deseas alimentarte el dia de hoy");
const costoBaleada = 25;
const totalAPagar= cantidad * costoBaleada;
console.log (`El monto a pagar por ${cantidad} baleada es: L. ${totalAPagar}`);

//Cree un programa que calcule el residuo de 2 números ingresados por el usuario.//
const primerNumeroDelResiduo = Number(prompt("Ingrese el primer numero del residuo: "));
const segundoNumeroDelResiduo = Number(prompt("Ingrese el segundo numero del residuo: "));
const resultadoDelResiduo = primerNumeroDelResiduo % segundoNumeroDelResiduo;
console.log(`El resultado del residuo de dividir (${primerNumeroDelResiduo}÷${segundoNumeroDelResiduo}) es ${resultadoDelResiduo}`);

//Escriba un algoritmo que solicite 3 números al usuario, sume los 2 primeros y luego lo multiplica por el 3ro, muestre el resultado en consola.//
let numero1= prompt("Ingresa un número");
let numero2= prompt("Ingresa segundo número");
let numero3= prompt("Ingresa un número multiplicador");
let suma= Number(numero1)+Number(numero2);
let resultado= suma*numero3;
console.log (`El resultado de sumar ${numero1} mas ${numero2} es igual a: ${suma} y multiplicarlo por ${numero3} es igual a: ${resultado}`);