const edad= Number(prompt("Ingresa una edad:"));
if (edad < 14 & edad >= 0) {
    console.log ("Es un niño");
  } else if (edad >= 14 & edad < 22) {
    console.log ("Es un adolescente");
  } else if (edad >= 23 & edad < 43) {
    console.log ("Es un adulto");
  } else if (edad >=44 & edad >=64) {
    console.log ("Es un adulto mayor");
  } else {
    console.log ("Edad no válida");
  }


