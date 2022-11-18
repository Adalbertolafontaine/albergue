let capas = [
  {
    capa: "provinvias",
    mapas: "map_provincias",
    descripcion: "División provincial del 2012",
  },
  {
    capa: "dm",
    mapas: "map_dm",
    descripcion: "División distritos municipales del 2012",
  },
  /*  {
    capa: "provincias",
    mapas: "map_provincias",
    descripcion: "División provincial del 2012",
  },*/
  {
    capa: "geomorfologico",
    mapas: "map_geomorfologico",
    descripcion: "Mapa Geomerfologico",
  },
  {
    capa: "cuencas",
    mapas: "map_cuencas",
    descripcion: "Mapa de cuencas y Subcuencas",
  },
  {
    capa: "litologia",
    mapas: "map_litologia",
    descripcion: "Litologia realizada por los alemanes",
  },
  { capa: "rios", mapas: "map_rios", descripcion: "Principales rios" },
  {
    capa: "uso_suelo",
    mapas: "map_uso_suelo",
    descripcion: "Clasificacion de suelos realizada por la OEA",
  },
];

let mapas = {};
let divprincipal = document.getElementById("cuerpo");

for (const i of capas) {
  let direccion = `/capa.html?capa=${i.capa}`;
  divprincipal.innerHTML += `<div class="col-6 md-3"><iframe src="${direccion}" width="600" height="400" style="max-width: 100%; max-height: 90vh; box-sizing: border-box;"></iframe><div><p>${i.descripcion}</p></div></div>`;



}
