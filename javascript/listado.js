const bordes_provincias = {
  21: { max: [-70.0019, 18.8076], min: [-70.382, 18.2291] },
  14: { max: [-69.7442, 19.6839], min: [-70.202, 19.2019] },
  17: { max: [-70.1851, 18.5096], min: [-70.588, 18.1934] },
  20: { max: [-69.1507, 19.3639], min: [-69.772, 18.9829] },
  18: { max: [-70.3658, 19.932], min: [-71.257, 19.5241] },
  11: { max: [-68.323, 18.9742], min: [-68.938, 18.2022] },
  "07": { max: [-71.3384, 19.284], min: [-71.887, 18.6549] },
  10: { max: [-71.2124, 18.6833], min: [-72.011, 18.1565] },
  16: { max: [-71.2693, 18.3027], min: [-71.788, 17.6042] },
  "03": { max: [-70.9824, 18.6558], min: [-71.635, 18.3169] },
  "04": { max: [-70.9468, 18.4975], min: [-71.501, 17.85] },
  26: { max: [-71.0719, 19.5622], min: [-71.52, 19.1698] },
  27: { max: [-70.8745, 19.7594], min: [-71.192, 19.4339] },
  19: { max: [-70.2476, 19.5622], min: [-70.458, 19.2295] },
  24: { max: [-69.8946, 19.1663], min: [-70.372, 18.8412] },
  13: { max: [-70.271, 19.377], min: [-70.958, 18.6838] },
  28: { max: [-70.2215, 19.1319], min: [-70.583, 18.7154] },
  31: { max: [-70.3436, 18.7969], min: [-70.686, 18.4199] },
  22: { max: [-70.8896, 19.1787], min: [-71.653, 18.5894] },
  "02": { max: [-70.4694, 19.0044], min: [-71.162, 18.2484] },
  25: { max: [-70.5444, 19.6512], min: [-71.258, 19.022] },
  "06": { max: [-69.6497, 19.5227], min: [-70.371, 19.044] },
  "09": { max: [-70.081, 19.714], min: [-70.611, 19.3078] },
  29: { max: [-69.3959, 19.1015], min: [-70.249, 18.5751] },
  30: { max: [-69.1258, 19.1029], min: [-69.591, 18.5256] },
  12: { max: [-68.8422, 18.6589], min: [-69.119, 18.3917] },
  23: { max: [-69.067, 18.8232], min: [-69.615, 18.3931] },
  "08": { max: [-68.7743, 19.0438], min: [-69.327, 18.5268] },
  "01": { max: [-69.8746, 18.5476], min: [-69.999, 18.4227] },
  "05": { max: [-71.4256, 19.6364], min: [-71.786, 19.2283] },
  32: { max: [-69.5148, 18.7289], min: [-70.175, 18.4004] },
  15: { max: [-71.1435, 19.9122], min: [-71.78, 19.527] },
};

const activos =  [{nombre:'Polideportivo Municipal',	ESTADO:'ACTIVO',	CODIGO_ALB:'DO-110011',	Contacto:'Mayra Lappost',	Telefono:'(809) 457-9198',	capacidad:11429,	cantidad:5,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'11',	MUN:'01',	DM:'01',	SECC:'01',	BP:'036',	x:-68.712902,	Y:18.609057}
,{nombre:'Punto 1663',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:16,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'08',	MUN:'01',	DM:'01',	SECC:'01',	BP:'008',	x:-69.043281,	Y:18.772196}
,{nombre:'Escuela Los Hatillos',	ESTADO:'ACTIVO',	CODIGO_ALB:'DO-300040',	Contacto:'Rafael German',	Telefono:'809-392-5430',	capacidad:0,	cantidad:16,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'30',	MUN:'01',	DM:'04',	SECC:'01',	BP:'001',	x:-69.2369,	Y:18.7358}
,{nombre:'Escuela Basica Leopoldo Coplin',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:5,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'20',	MUN:'01',	DM:'01',	SECC:'03',	BP:'006',	x:-69.248047,	Y:19.185436}
,{nombre:'Escuela Básica Bernando Pichardo',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:10,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'30',	MUN:'01',	DM:'01',	SECC:'01',	BP:'002',	x:-69.253665,	Y:18.760786}
,{nombre:'LICEO ROSA DUARTE',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:11,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'30',	MUN:'01',	DM:'01',	SECC:'01',	BP:'012',	x:-69.254711,	Y:18.78372}
,{nombre:'Iglesia Adventista El Amor',	ESTADO:'ACTIVO',	CODIGO_ALB:'DO-300013',	Contacto:'Pedro Alvarez',	Telefono:'(849) 234-5678',	capacidad:80,	cantidad:10,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'30',	MUN:'01',	DM:'01',	SECC:'01',	BP:'005',	x:-69.261688,	Y:18.764768}
,{nombre:'Escuela Juan Bosch antiguo Julio Mateo',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'NELSON',	Telefono:'829-477-0250',	capacidad:0,	cantidad:59,	familias:0,	menores:8,	envejeciente:0,	hombres:1,	mujeres:7,	discapacitados:0,	PROV:'30',	MUN:'01',	DM:'01',	SECC:'01',	BP:'005',	x:-69.262726,	Y:18.767287}
,{nombre:'VILLA OLIMPICA SAN PEDRO ',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:43,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'23',	MUN:'01',	DM:'01',	SECC:'01',	BP:'032',	x:-69.289467,	Y:18.470662}
,{nombre:'Escuela Andrea de Peña',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:3,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'20',	MUN:'01',	DM:'01',	SECC:'01',	BP:'011',	x:-69.33465,	Y:19.213189}
,{nombre:'El Frances ',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:4,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'20',	MUN:'01',	DM:'01',	SECC:'01',	BP:'009',	x:-69.334868,	Y:19.208476}
,{nombre:'campo club de nagua',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:6,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'01',	DM:'01',	SECC:'01',	BP:'005',	x:-69.858998,	Y:19.369266}
,{nombre:'Escuela Irma Marmolejos',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:8,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'01',	DM:'01',	SECC:'01',	BP:'017',	x:-69.860656,	Y:19.368896}
,{nombre:'Iglesia Pueblo Nuevo',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:2,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'03',	DM:'01',	SECC:'01',	BP:'002',	x:-69.889278,	Y:19.318535}
,{nombre:'Escuela Francisco Maria Vaquez',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:5,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'01',	DM:'03',	SECC:'03',	BP:'002',	x:-69.889901,	Y:19.468586}
,{nombre:'El Jamo',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:23,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'02',	DM:'01',	SECC:'01',	BP:'010',	x:-69.904119,	Y:19.634732}
,{nombre:'Centro Educativo Arístides Fallo Cabrera',	ESTADO:'ACTIVO',	CODIGO_ALB:'DO-140061',	Contacto:'Rosaura Gonzales G',	Telefono:'(829) 388-3422',	capacidad:229,	cantidad:2,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'14',	MUN:'02',	DM:'01',	SECC:'01',	BP:'003',	x:-69.90684,	Y:19.64439}
,{nombre:'POLICLINICO LAS CAOBAS',	ESTADO:'ACTIVO',	CODIGO_ALB:'',	Contacto:'',	Telefono:'',	capacidad:0,	cantidad:6,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'24',	MUN:'01',	DM:'01',	SECC:'01',	BP:'033',	x:-70.157206,	Y:19.056205}
,{nombre:'Iglesia Católica La Mata',	ESTADO:'ACTIVO',	CODIGO_ALB:'DO-240098',	Contacto:'Elri Beto',	Telefono:'(829) 410-0644',	capacidad:0,	cantidad:14,	familias:0,	menores:0,	envejeciente:0,	hombres:0,	mujeres:0,	discapacitados:0,	PROV:'24',	MUN:'04',	DM:'01',	SECC:'01',	BP:'002',	x:-70.162384,	Y:19.094692}
]


export {activos,bordes_provincias}