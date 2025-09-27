function decodeSpell(conjuro) {
  let valores = {
    "☽": 1,
    "☾": 5,
    "♁": 10,
    "⚕": 50,
    "⚡": 100,
  };

  conjuro = conjuro.split(" ").join("");

  let total = 0;

  for (let i = 0; i < conjuro.length; i++) {
    let simbolo = conjuro[i];
    let valor = valores[simbolo];

    if (valor === undefined) {
      return NaN;
    }

    let siguiente = valores[conjuro[i + 1]];

    if (siguiente !== undefined && valor < siguiente) {
      total -= valor;
    } else {
      total += valor;
    }
  }

  return total;
}

let entrada = prompt("Introduce un conjuro:");
alert(decodeSpell(entrada));
