function portalFueraDeFase(portales) {
  let conteo = {};

  for (let c of portales) {
    conteo[c] = (conteo[c] || 0) + 1;
  }

  for (let i = 0; i < portales.length; i++) {
    if (conteo[portales[i]] === 1) return i;
  }

  return -1;
}

let secuencia = prompt("Ingrese la secuencia de portales (solo letras minúsculas):");

alert("Índice del primer portal fuera de fase: " + portalFueraDeFase(secuencia));
