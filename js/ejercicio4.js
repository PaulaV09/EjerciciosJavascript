function frutaEmpacadaCorrectamente(entrada, salida) {
  let pila = [];
  let i = 0;

  for (let i = 0; i < entrada.length; i++) {
    pila.push(entrada[i]);

    while (pila.length > 0 && pila[pila.length - 1] === salida[i]) {
      pila.pop();
      i++;
    }
  }

  return pila.length === 0;
}


let cantidadEntrada = prompt("¿Cuántas frutas entraron en la cinta?");
let entrada = [];
for (let i = 0; i < cantidadEntrada; i++) {
  let fruta = prompt("Ingrese la fruta #" + (i + 1) + " (entrada):");
  entrada.push(fruta);
}

let cantidadSalida = prompt("¿Cuántas frutas salieron empacadas?");
let salida = [];
for (let j = 0; j < cantidadSalida; j++) {
  let fruta = prompt("Ingrese la fruta #" + (j + 1) + " (salida):");
  salida.push(fruta);
}

let esCorrecto = frutaEmpacadaCorrectamente(entrada, salida);

if (esCorrecto) {
  alert("La secuencia de salida es válida (se respeta el orden LIFO).");
} else {
  alert("La secuencia de salida NO es posible con una pila.");
}
