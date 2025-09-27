function esAnagrama(palabra1, palabra2) {
  let normal1 = palabra1.toLowerCase().split("").sort().join("");
  let normal2 = palabra2.toLowerCase().split("").sort().join("");
  return normal1 === normal2;
}

let palabra1 = prompt("Ingrese la primera palabra:");
let palabra2 = prompt("Ingrese la segunda palabra:");

if (esAnagrama(palabra1, palabra2)) {
  alert("Son anagramas");
} else {
  alert("No son anagramas");
}
