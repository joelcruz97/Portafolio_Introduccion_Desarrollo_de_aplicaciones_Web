//Utilizando el ciclo de repetición for, escribir un programa que itere todos los números del 1 al 10 y que muestre el resultado en consola de la siguiente manera: "10--9--8--7--6--5--4--3--2--1".//
let result = '';
for (let i = 10; i >= 1; i--) {
  result += i;
  if (i > 1) {
    result += '--';
  }
}
console.log(result);
//Usando el ciclo de repetición for, imprimir todos los números que son múltiplos del 5, comenzando en la posición 70, hasta llegar a 1.//
for (let i = 70; i >= 1; i--) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
//Escribir un algoritmo que le diga al usuario que ingrese cualquier carácter de A-Z. El usuario tendrá 10 intentos para ingresar un carácter, si el usuario ingresa una vocal sumarle 10 puntos, y si el usuario ingresa una consonante restarle 2. Muestre el total de puntos obtenidos por el usuario en consola.
let puntos = 0;
const vocales = ['A', 'E', 'I', 'O', 'U'];

for (let intentos = 1; intentos <= 10; intentos++) {
  let entrada = prompt(`Intento ${intentos}: Ingresa un carácter de A-Z`).toUpperCase();
  if (entrada.length === 1 && entrada >= 'A' && entrada <= 'Z') {
    if (vocales.includes(entrada)) {
      puntos += 10;
      console.log(`${entrada} es una vocal. +10 puntos.`);
    } else {
      puntos -= 2;
      console.log(`${entrada} es una consonante. -2 puntos.`);
    }
  } else {
    console.log('Entrada no válida. Ingresa un solo carácter de A-Z.');
  }
}

console.log(`Total de puntos obtenidos: ${puntos}`);
//Solicite al usuario que ingrese 10 números, estos serán guardados en un array []. Posteriormente calcule el cuadrado de cada numero ingresado.
let numeros = [];
let cuadrados = [];

for (let i = 0; i < 10; i++) {
  let entrada = prompt(`Ingresa el número ${i + 1} de 10:`);
  if (!isNaN(entrada) && entrada.trim() !== '') {
    let numero = parseFloat(entrada);
    numeros.push(numero);
    cuadrados.push(numero * numero);
  } else {
    console.log('Entrada no válida, por favor ingresa un número.');
    i--;
  }
}

console.log('Números ingresados:', numeros);
console.log('Cuadrados de los números:', cuadrados);