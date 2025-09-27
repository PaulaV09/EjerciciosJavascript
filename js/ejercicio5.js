function candidatosCompatibles(oferta, candidatos) {
  const minHabilidades = Math.floor(oferta.length * 0.7);

  return candidatos
    .filter(candidato => {
      let coincidencias = candidato.skills.filter(skill =>
        oferta.map(o => o.toLowerCase()).includes(skill.toLowerCase())
      ).length;
      return coincidencias >= minHabilidades;
    })
    .map(c => c.id)
    .sort();
}

let ofertaInput = prompt("Ingrese las habilidades de la oferta separadas por comas (ej: JavaScript,React,CSS,Git):");
let oferta = ofertaInput.split(",").map(s => s.trim());

let numCandidatos = prompt("Ingrese la cantidad de candidatos:");
let candidatos = [];

for (let i = 0; i < numCandidatos; i++) {
  let id = prompt(`Ingrese el ID del candidato ${i + 1}:`);
  let skillsInput = prompt(`Ingrese las habilidades de ${id} separadas por comas:`);
  let skills = skillsInput.split(",").map(s => s.trim());
  candidatos.push({ id, skills });
}

let compatibles = candidatosCompatibles(oferta, candidatos);
alert("Candidatos compatibles: " + (compatibles.length > 0 ? compatibles.join(", ") : "Ninguno"));
