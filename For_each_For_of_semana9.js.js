let numeros = [];
for (let i = 0; i < 7; i++) {
    let num = prompt(`Ingrese el número entero ${i + 1}:`);
    while (isNaN(num) || num.trim() === "") {
        num = prompt(`Entrada inválida. Por favor ingrese un número entero para el número ${i + 1}:`);
    }
    numeros.push(parseInt(num));
}
let mayor = numeros[0];
let menor = numeros[0];
for (let num of numeros) {
    if (num > mayor) {
        mayor = num;
    }
    if (num < menor) {
        menor = num;
    }
}
console.log(`El número mayor es: ${mayor}`);
console.log(`El número menor es: ${menor}`);