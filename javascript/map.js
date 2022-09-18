const SLprovincia = document.getElementById("SLprovincia");
const Slmunicipio = document.getElementById("Slmunicipio");
const Slparaje = document.getElementById("Slparaje");
var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [17.472950535678002, -72.27980959792933],
  [20.003638911962263, -68.07286629199285],
]);

let renglones = Object.keys(datos);

let validarLocalidad = (original, comparacion) => {
  let v = false;
  if (
    (original.prov === comparacion.prov || comparacion.prov === "00") &&
    (original.mun === comparacion.mun || comparacion.mun === "00") &&
    (original.bp === comparacion.bp || comparacion.bp === "00")
  ) {
    v = true;
  }
  return v;
};

let alertas = {
  "01": "roja",
  "08": "roja",
  "09": "roja",
  11: "roja",
  12: "roja",
  14: "roja",
  18: "roja",
  20: "roja",
  21: "roja",
  23: "roja",
  29: "roja",
  30: "roja",
  32: "roja",
  "02": "amarilla",
  "04": "amarilla",
  "06": "amarilla",
  13: "amarilla",
  17: "amarilla",
  24: "amarilla",
  28: "amarilla",
  31: "amarilla",
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
  let prov = "00";
  let mun = "00";
  let bp = "00";
  let cantidad;
  if (props) {
    prov = props["prov"].toString() || "00";
    mun = props["mun"] || "00";
    bp = props["bp"] || "00";
    cantidad = CantidadAlbergue({ prov, mun, bp });
  }

  this._div.innerHTML =
    "<h4>Información localidad</h4>" +
    (props
      ? "<b>" +
        props.TOPONIMIA +
        "</b><br />" +
        cantidad["alberges"] +
        " albergues" +
        "<br />" +
        cantidad["beneficiario"] +
        " beneficiario" +
        "<br />" +
        cantidad["centros"] +
        " centros de salud"
      : "Coloca el cursor sobre una provincia");
};

info.addTo(map);

// get color depending on population density value
function getColor(y) {
  let x = {
    prov: SLprovincia.value,
    mun: Slmunicipio.value,
    bp: Slparaje.value,
  };

  let v =validarLocalidad(x, y)
  console.log(x, y)
  if (v) {
    return "";
  } else {
    let d = (y.prov)? alertas[y.prov]:y;
    return d === "roja" ? "#e02416" : d === "amarilla" ? "#FFF23F" : "#3FE671";
  }
}

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties),
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

map.attributionControl.addAttribution(
  "Datos suministrados por &copy;//////</a>"
);

var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend");
  var grades = ["roja", "amarilla", "verde"];
  var labels = grades.map((x) => {
    return `<i style="background: ${getColor(x)}"></i> Alerta ${x} `;
  });

  div.innerHTML = labels.join("<br>");
  return div;
};

SLprovincia.addEventListener("change", (e) => {
  llenado_cuadro(SLprovincia.value, "00", "00");

  let m = municipio
    .filter((x) => x.prov === SLprovincia.value)
    .map((x) => {
      return { id: x.mun, descripcion: x.nombre };
    });

  LLenadoSl(m, "Slmunicipio");
  LLenadoSl([], "Slparaje");
});

const CantidadAlbergue = (y) => {
  let p = {};

  renglones.map((r) => {
    let numero = datos[r]
      .filter((x) => validarLocalidad(x, y))
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue.total,
        0
      );

    p[r] = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numero);
  });

  return p;
};

const LLenadoSl = (datos, seleccion, desactivar) => {
  let sl = document.getElementById(seleccion);
  for (let i = sl.options.length; i > 0; i--) {
    sl.options.remove(1);
  }

  sl.disabled = true;
  if (datos.length > 0) {
    datos.forEach((element) => {
      var opcion;
      if (typeof element === "string") {
        opcion = new Option(element, element);
      } else {
        opcion = new Option(element.descripcion, element.id);
      }
      sl.options.add(opcion);
    });

    sl.disabled = false;
  }

  if (!desactivar) {
    sl.disabled = false;
  }
};

const llenado_cuadro = (prov, mun, bp) => {
  let p = CantidadAlbergue({ prov, mun, bp });
  console.log(p);
  for (const iterator of renglones) {
    document.getElementById(`TXT${iterator}`).innerHTML = p[iterator];
  }
};

llenado_cuadro("00", "00", "00");
legend.addTo(map);
