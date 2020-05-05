const colors = require('colors');
const axios = require('axios');// para hacer una peticion a un servidor

const getClima = async (lat, lon) => {
  const resp = await axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ac02f5a60bdb33a78da71b5e1d246ff&units=metric`)

  return resp.data.main.temp;// axios.get va a devolcer un objeto data que tiene otro objeto main y que a su ves tiene la temp
}

module.exports = {
  getClima
}