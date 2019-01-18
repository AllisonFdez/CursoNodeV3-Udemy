const axios = require('axios');

const getClima = async(lat, lng) => {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3c3f7604ee8cc81fa91c10dbbb08553e&units=metric`)

    return {
        clima: response.data.main.temp
    }
}

module.exports = {
    getClima
}