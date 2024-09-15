let suma = 0;
let cantidad = 0;
for (let i = 2; i <= 300; i += 2) {
  if (i % 3 === 0) {
    if (!isNaN(i)) {
      suma += i;
            cantidad++;
        }
    }
}
console.log("La suma de los múltiplos de 3 es: " + suma);
console.log("La cantidad de múltiplos de 3 es: " + cantidad);