const Lugar = require('./lugar/lugar')
const Clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad.',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await Lugar.getLugarLatLng(direccion);
        let temp = await Clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp.clima}.`
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}.`
    }
}

//console.log(argv.direccion);

// Lugar.getLugarLatLng(argv.direccion)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
// Clima.getClima(40.7127753, -74.0059728)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));