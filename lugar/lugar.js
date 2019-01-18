const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)

    if (response.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = response.data.results[0]
    let coors = location.geometry.location

    //console.log(JSON.stringify(response.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}