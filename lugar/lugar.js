const colors = require('colors');
const axios = require('axios');// para hacer una peticion a un servidor


const getLugarLatLng = async(dir) => {

  const encodeURL = encodeURI(dir);//encodeURI es una funcion de node que permite convertir en caracteres especiales para que por ejemplo los espacion entre palabras se interpreten bien
  console.log(encodeURL.blue);

  const instance = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
      headers: {'x-rapidapi-key': 'c0ae5a42cfmsh2b8e0c161d6252fp1eec03jsn43e3325e522f'}
  });

  const resp = await instance.get();
  
  if(resp.data.Results.length === 0 ){
      throw new Error (`No hay resultados para ${dir}`);
    }

      //console.log(resp); // en resp esta todos los objetos que tiene la URL que estamos accediendo
      //console.log(resp.data.Results[0]); // en Results esta la informacion que quiero extraer
      const data      = resp.data.Results[0];
      const direccion = data.name;
      const lat       = data.lat;
      const lon       = data.lon;

        return {
          direccion,
          lat,
          lon
        }

}


module.exports = {
  getLugarLatLng
}