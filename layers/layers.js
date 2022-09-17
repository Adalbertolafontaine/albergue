var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
  title: "OpenStreetMap",
  type: "base",
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions: " ",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});
var format_InventarioNacionaldeAlbergueValidados_20201_1 =
  new ol.format.GeoJSON();
var features_InventarioNacionaldeAlbergueValidados_20201_1 =
  format_InventarioNacionaldeAlbergueValidados_20201_1.readFeatures(
    json_InventarioNacionaldeAlbergueValidados_20201_1,
    { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
  );
var jsonSource_InventarioNacionaldeAlbergueValidados_20201_1 =
  new ol.source.Vector({
    attributions: " ",
  });
jsonSource_InventarioNacionaldeAlbergueValidados_20201_1.addFeatures(
  features_InventarioNacionaldeAlbergueValidados_20201_1
);
var lyr_InventarioNacionaldeAlbergueValidados_20201_1 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_InventarioNacionaldeAlbergueValidados_20201_1,
  style: style_InventarioNacionaldeAlbergueValidados_20201_1,
  interactive: true,
  title:
    '<img src="styles/legend/InventarioNacionaldeAlbergueValidados_20201_1.png" /> InventarioNacionaldeAlbergueValidados_2020 (1)',
});

lyr_OpenStreetMap_0.setVisible(true);
lyr_InventarioNacionaldeAlbergueValidados_20201_1.setVisible(true);
var layersList = [
  lyr_OpenStreetMap_0,
  lyr_InventarioNacionaldeAlbergueValidados_20201_1,
];
lyr_InventarioNacionaldeAlbergueValidados_20201_1.set("fieldAliases", {
  localidad: "localidad",
  Codigo: "Codigo",
  albergue: "albergue",
  Nombre_contacto: "Nombre_contacto",
  contacto: "contacto",
  capacidad: "capacidad",
  "Coordenada X": "Coordenada X",
  "Coordenada Y": "Coordenada Y",
});
lyr_InventarioNacionaldeAlbergueValidados_20201_1.set("fieldImages", {
  localidad: "",
  Codigo: "",
  albergue: "",
  Nombre_contacto: "",
  contacto: "",
  capacidad: "",
  "Coordenada X": "",
  "Coordenada Y": "",
});
lyr_InventarioNacionaldeAlbergueValidados_20201_1.set("fieldLabels", {
  localidad: "header label",
  Codigo: "header label",
  albergue: "header label",
  Nombre_contacto: "header label",
  contacto: "header label",
  capacidad: "header label",
  "Coordenada X": "no label",
  "Coordenada Y": "no label",
});
lyr_InventarioNacionaldeAlbergueValidados_20201_1.on(
  "precompose",
  function (evt) {
    evt.context.globalCompositeOperation = "normal";
  }
);
