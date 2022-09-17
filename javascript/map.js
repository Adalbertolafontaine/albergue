const SLprovincia = document.getElementById('SLprovincia')


var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [17.472950535678002, -72.27980959792933],
  [20.003638911962263, -68.07286629199285],
]);

let alertas = {
  "01": "roja",
  "08": "roja",
  "09": "roja",
  '11': "roja",
  '12': "roja",
  '14': "roja",
  '18': "roja",
  '20': "roja",
  '21': "roja",
  '23': "roja",
  '29': "roja",
  '30': "roja",
  '32': "roja",
  '02': "amarilla",
  '04': "amarilla",
  '06': "amarilla",
  '13': "amarilla",
  '17': "amarilla",
  '24': "amarilla",
  '28': "amarilla",
  '31': "amarilla",
};
var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4>Cantidad de Albergues Activos</h4>" +
    (props
      ? "<b>" +
        props.TOPONIMIA +
        "</b><br />" +
        props.density +
        " people / mi<sup>2</sup>"
      : "Hover over a state");
};

info.addTo(map);

// get color depending on population density value
function getColor(d) {
  return d === 'roja'
    ? "#e02416"   
    : d === 'amarilla'
    ? "#FFF23F"
    : "#3FE671";
}

function style(feature) {
   
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(alertas[feature.properties.PROV]),
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

/* global statesData */
geojson = L.geoJson(provincias, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);

map.attributionControl.addAttribution("Datos suministrados por &copy;//////</a>");

var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend");
  var grades = ['roja','amarilla','verde'];
  var labels = grades.map(x=>{
    return `<i style="background: ${getColor(x)}"></i> Alerta ${x} `
  })
  

 
  div.innerHTML = labels.join("<br>");
  return div;
};

SLprovincia.addEventListener("change",e=>{
    CantidadAlbergue()
})

const CantidadAlbergue = ()=>{
    let v = SLprovincia.value

    let p = alberges.filter(x=>x.prov === v || v=== '')

    document.getElementById('TXTalbergue').innerHTML = p.length
}

legend.addTo(map);
CantidadAlbergue()
