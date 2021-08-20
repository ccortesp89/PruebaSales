var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "f5avraaaaaaaaaaaaaaaa_session_=CKEMDKJFNPICHHCIPINCOJNPCIMPONDJGEHMJMODFEJIADCCMLGLEGJJNFIJKIEMELEDPBIMBBEGACFPKIKANFNACKOKOJEFFGKOCICIMLANOCMJOMPCDJMAOEKIMOJJ; BIGipServerPool-HDI-WSFS=3338774720.20480.0000");
myHeaders.append('Access-Control-Allow-Origin', 'all');

var raw = JSON.stringify({
  "oportunidadVenta": {
    "PatenteVehiculo": "ET0000",
    "RutContratante": 15564327,
    "DvContratante": "7",
    "TipoVehiculo": 1,
    "MarcaVehiculo": 160,
    "ModeloVehiculo": 1601030,
    "AnioVehiculo": 2021,
    "EsNuevo": true,
    "FechaNacimientoContratante": null,
    "TipoUso": 1,
    "MesesVigenciaTarifa": 12,
    "Deducible": 3,
    "FormaPago": null,
    "IdCampagna": 1,
    "EmailContratante": "jonathan.gonzalez@hdi.cl",
    "FonoContratante": "942970957",
    "CodigoOportunidad": "0065500000J96nCAAR",
    "CodigoProducto": 1633,
    "UsuarioId": 22283,
    "VendedorId": 22786
  },
  "rutCorredor": 55555555,
  "usuario": "vmillan",
  "clave": "624CWB7I"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://wsfs.hdi.cl/esb-ws/WsCuva/SalesForce.svc/GetUrlCotizador/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));