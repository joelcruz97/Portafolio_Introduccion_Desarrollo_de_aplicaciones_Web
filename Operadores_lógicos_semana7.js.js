/*let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
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
*/
let salarioMensual = parseFloat(prompt("Ingresa tu salario mensual:"));
if (isNaN(salarioMensual) || salarioMensual < 0) {
console.log("Ingresa un salario mensual válido.");
} else {
let salarioAnual = salarioMensual * 12;
let isr = 0;
if (salarioAnual >= 0.01 && salarioAnual <= 209369.62) {
 console.log("Usted está exento de pagar ISR.");
} else if (salarioAnual >= 209369.63 &&
salarioAnual <= 319251.54) {
  isr = salarioAnual * 0.15;
console.log(`Usted debe pagar ISR por un monto de: L${isr.toFixed(2)}`);
} else if (salarioAnual >= 319251.55 &&
salarioAnual <= 742445.49) {
isr = salarioAnual * 0.20;
console.log(`Usted debe pagar ISR por un monto de: L${isr.toFixed(2)}`);
} else if (salarioAnual >= 742445.50 &&
salarioAnual <= 1000000) {
isr = salarioAnual * 0.25;
console.log(`Usted debe pagar ISR por un monto de: L${isr.toFixed(2)}`);
} else {
console.log(`El salario anual está fuera del rango considerado para este cálculo.`);
}
}
