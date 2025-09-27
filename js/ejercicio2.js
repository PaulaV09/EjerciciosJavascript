function getCompromisedFiles(lastSafeDownload, droneLogs) {
  let ids = [];

  for (let i = 0; i < droneLogs.length; i++) {
    let id = droneLogs[i][0];
    let time = droneLogs[i][1];

    if (time > lastSafeDownload) {
      if (ids.indexOf(id) === -1) {
        ids.push(id);
      }
    }
  }

  ids.sort(function(a, b) {
    return a - b;
  });

  return ids;
}

let lastSafeDownload = prompt("Ingrese el timestamp de la última descarga segura:");

let cantidad = prompt("¿Cuántos registros de modificaciones desea ingresar?");

let droneLogs = [];

for (let i = 0; i < cantidad; i++) {
  let id = prompt("Ingrese el ID del archivo #" + (i + 1) + ":");
  let time = prompt("Ingrese el timestamp de la modificación #" + (i + 1) + ":");
  droneLogs.push([id, time]);
}

let resultado = getCompromisedFiles(lastSafeDownload, droneLogs);

if (resultado.length === 0) {
  alert("No hay archivos comprometidos.");
} else {
  alert("Archivos comprometidos: " + resultado.join(", "));
}