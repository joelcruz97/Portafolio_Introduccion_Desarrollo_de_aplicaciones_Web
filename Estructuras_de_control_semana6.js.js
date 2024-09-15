const numero= Number(prompt("Ingresa un numero que desees:"));
if (isNaN(numero)){
  throw Error ("Por favor ingresa un numero valido");
}
  else{
    if (numero%2 ===0)
      console.log (`El numero ingresado ${numero} es un numero par`);
    }
    else{
      console.log (`El numero ingresado ${numero} es un numero impar`);
    }