function detectarPlagio(base, frasesEstudiante) {
  function normalizar(frase) {
    frase = frase.trim();
    while (frase.length > 0) {
      let ultimo = frase[frase.length - 1];
      if (ultimo === "." || ultimo === "!" || ultimo === "?") {
        frase = frase.slice(0, -1);
      } else {
        break;
      }
    }
    return frase.toLowerCase();
  }

  let baseNormalizada = [];
  for (let i = 0; i < base.length; i++) {
    baseNormalizada.push(normalizar(base[i]));
  }

  let resultado = [];
  for (let j = 0; j < frasesEstudiante.length; j++) {
    let original = frasesEstudiante[j];
    let normal = normalizar(original);

    if (baseNormalizada.indexOf(normal) !== -1) {
      resultado.push(original);
    }
  }

  return resultado;
}

let cantidadBase = prompt("¿Cuántas frases hay en la base sospechosa?");
let base = [];
for (let i = 0; i < cantidadBase; i++) {
  let frase = prompt("Ingrese la frase sospechosa #" + (i + 1) + ":");
  base.push(frase);
}

let cantidadEst = prompt("¿Cuántas frases escribió el estudiante?");
let frasesEstudiante = [];
for (let j = 0; j < cantidadEst; j++) {
  let frase = prompt("Ingrese la frase del estudiante #" + (j + 1) + ":");
  frasesEstudiante.push(frase);
}

let plagiadas = detectarPlagio(base, frasesEstudiante);

if (plagiadas.length === 0) {
  alert("No se detectaron frases plagiadas.");
} else {
  alert("Frases plagiadas:\n\n" + plagiadas.join("\n"));
}
