const formulario = document.getElementById("Fmnombre");
const tabla = document.getElementById("tabla");

const Acentos = (texto) => {
  texto = texto.toLowerCase().trim();
  texto = texto.replace(/á/g, "a");
  texto = texto.replace(/é/g, "e");
  texto = texto.replace(/í/g, "i");
  texto = texto.replace(/ó/g, "o");
  texto = texto.replace(/ú/g, "u");

  let t = texto.split(" ").filter((x) => x !== "");
  return t;
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombretabladb = document.getElementById("TxtnombreTabla").value;
  let nombrerealdb = document.getElementById("Txtnombrereal").value;
  tabla.innerHTML = `<p>${compatacion(nombretabladb, nombrerealdb)}</p>`;
});

let compatacion = (nombretabladb, nombrerealdb) => {
  /**
   * nombretabla: string[]
   *
   */

  let nombretabla = [];
  nombretabla = Acentos(nombretabladb);
  /**
   * nombrereal: string[]
   */

  let nombrereal = [];
  nombrereal = Acentos(nombrerealdb);

  let largo =
    nombrereal.length > nombretabla.length
      ? nombrereal.length
      : nombretabla.length;

  let t = "";
  let previo = true;
  let n = 0;
  while (largo > 0 && n < 25) {
    if (nombrereal[0] === "" || nombretabla[0] === "") {
      if (nombrereal[0] === "") nombrereal.shift();
      if (nombretabla[0] === "") nombretabla.shift();
    } else {
      if (t !== "") t += " ";
      if (nombrereal[0] === nombretabla[0]) {
        t += nombrereal[0];
        nombrereal.shift();
        nombretabla.shift();
      } else {
        if (nombretabla[0] === nombrereal[1]) {
          t += `<span class="azul">${nombrereal[0]}</span> ${
            nombrereal[1] || ""
          }`;
          nombrereal.shift();
          nombrereal.shift();
          nombretabla.shift();
        } else {
          if (nombretabla[0] && nombrereal[0]) {
            t += `<span class="rojo">${nombretabla[0]}</span> ` || '';
            nombretabla.shift();
          } else {
            if (nombretabla[0]) {
              t += `<span class="rojo">${nombretabla[0]}</span> `;
              nombretabla.shift();
            } else {
              t += `<span class="azul">${nombrereal[0]}</span> `;
              nombrereal.shift();
            }
          }
        }
      }
    }

    largo =
      nombrereal.length > nombretabla.length
        ? nombrereal.length
        : nombretabla.length;

    n++;
  }

  return t;
};
let matriz = [];

let db = {
};

let recorrido = () => {
  let t = "";
  
  matriz.sort((a,b)=>a[0]-b[0]) .map((x) => {
    if (db[x[0]]) {
      t += `<tr class="text-uppercase"><td>${compatacion(
        x[1],
        db[x[0]]
      )}</td><td>${db[x[0]]}</td></tr>`;
    }
  });
  tabla.innerHTML = `<table class= "table">${t}</table>`;
};

const compararpalabras = (palabraA, palabraB) => {
  let l = palabraA.length > palabraB.length ? palabraA.length : palabraB.length;

  let respuesta = "";
  let n = 0;
  while (l > 0 && n < 30) {
    if (palabraA[0] === palabraB[0]) {
      respuesta += palabraA[0];
      palabraA = palabraA.slice(1);
      palabraB = palabraB.slice(1);
    } else {
      if (palabraB.includes(palabraA[0])) {
        respuesta += `<span class="azul">${palabraB[0]}</span>${palabraB[1]}`;
        palabraA = palabraA.slice(1);
        palabraB = palabraB.slice(1);
        palabraB = palabraB.slice(1);
      } else {
        respuesta += `<span class="rojo">${palabraA[0]}</span>`;
        palabraA = palabraA.slice(1);
        palabraB = palabraB.slice(1);
      }
    }

    l = palabraA.length > palabraB.length ? palabraA.length : palabraB.length;
    console.log({ palabraA, palabraB, l });
    n++;
  }
  return respuesta;
};
recorrido();
