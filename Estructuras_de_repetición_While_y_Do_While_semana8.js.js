let sumaNotas = 0;
let contador = 0;
while (true) {
  let entrada = prompt("Ingresa la nota del alumno (o escribe 'fin' para terminar):");
  if (entrada.toLowerCase() === "fin") {
    break;
  }
  let nota = parseFloat(entrada);
  if (isNaN(nota) || nota < 0 || nota > 100) {
    alert("Por favor ingresa una nota válida (entre 0 y 100)");
  } else {
    sumaNotas += nota;
    contador++;
  }
}
if (contador > 0) {
  let promedio = sumaNotas / contador;
  alert(`El promedio de las ${contador} notas es: ${promedio.toFixed(2)}`);
} else {
  alert("No se ingresaron notas.");
}

let contador = 1;
while (contador <= 50) {
  console.log('contador: ' + contador);
  contador++;
}

let numero = 100;
do {
  if (numero % 2 !== 0) {
    console.log(numero);
  }
  numero--;
} while (numero >= 1);

let limite = parseFloat(prompt("Ingresa el límite para el contador:"));
while (isNaN(limite) || limite <= 0) {
  alert("Por favor ingresa un número válido y mayor que 0.");
  limite = parseFloat(prompt("Ingresa el límite para el contador:"));
}
let contador = 0;
while (contador <= limite) {
  console.log(contador);
  contador += 2;
}

let caracter = prompt("Ingresa el carácter 'A':").toUpperCase();
while (caracter !== "A") {
  alert("Carácter incorrecto. Por favor ingresa 'A'.");
  caracter = prompt("Ingresa el carácter 'A':").toUpperCase();
}
alert("¡Has ingresado correctamente el carácter 'A'!");

let numero = 8;
let multiplesDeOcho = [];
while (numero <= 500) {
  multiplesDeOcho.push(numero);
  numero += 8;
}
console.log(multiplesDeOcho.join(' - '));