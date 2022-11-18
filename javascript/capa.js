let direccion = window.location.href;
let capat = direccion.split("=");
let capa = capat[1]

let capas = {
  provinvias: {
    mapas: "map_provincias",
    descripcion: "División provincial del 2012",
  },

  dm: {
    mapas: "map_dm",
    descripcion: "División distritos municipales del 2012",
  },
  /*{
      capa: "provincias",
      mapas: "map_provincias",
      descripcion: "División provincial del 2012",
    },*/

  geomorfologico: {
    mapas: "map_geomorfologico",
    descripcion: "Mapa Geomerfologico",
  },
  cuencas: {
    mapas: "map_cuencas",
    descripcion: "Mapa de cuencas y Subcuencas",
  },
  litologia: {
    mapas: "map_litologia",
    descripcion: "Litologia realizada por los alemanes",
  },
  rios: { mapas: "map_rios", descripcion: "Principales rios" },
  uso_suelo: {
    mapas: "map_uso_suelo",
    descripcion: "Clasificacion de suelos realizada por la OEA",
  },
};

if (capa in capas) {
 


  let i = capas[capa];
  let map = L.map("map", {
    zoomControl: true,
    maxZoom: 28,
    minZoom: 1,
  }).fitBounds([
    [17.472950535678002, -72.27980959792933],
    [20.003638911962263, -68.07286629199285],
  ]);

  let wmsprovincias = L.tileLayer
    .wms("http://sdo.do/geoserver/minpre/wms", {
      layers: `minpre:${capa}`,
    })
    .addTo(map);
}else{
    console.log(false)
}
