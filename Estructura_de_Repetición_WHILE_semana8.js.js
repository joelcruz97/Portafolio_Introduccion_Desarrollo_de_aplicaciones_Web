let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
while (isNaN(inicio)) {
    inicio = parseInt(prompt("Entrada inválida. Por favor, ingrese un número inicial válido:"));
}
let fin = parseInt(prompt("Ingrese el número final del rango:"));
while (isNaN(fin)) {
    fin = parseInt(prompt("Entrada inválida. Por favor, ingrese un número final válido:"));
}
let multiplosDeDos = 0;
let multiplosDeTres = 0;
let numeroActual = inicio;
while (numeroActual <= fin) {
    let esMultiploDeDos = numeroActual % 2 === 0;
    let esMultiploDeTres = numeroActual % 3 === 0;

    if (esMultiploDeDos || esMultiploDeTres) {
        console.log(numeroActual);

        if (esMultiploDeDos) {
            multiplosDeDos++;
        }

        if (esMultiploDeTres) {
            multiplosDeTres++;
        }
    }

    numeroActual++;
}
console.log(`Total de números múltiplos de 2: ${multiplosDeDos}`);
console.log(`Total de números múltiplos de 3: ${multiplosDeTres}`);