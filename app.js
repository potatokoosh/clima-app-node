const lugar = require('./lugar/lugar');
const clima = require ('./clima/clima');
const argv = require ('./config/yargs').argv;

console.log(argv);
console.log(argv.direccion.red);

/*lugar.getLugarLatLng(argv.direccion)//como sabemos que es una propesa por el async, podemos utilizar el .then
      .then(console.log);

clima.getClima(40.419998,-3.700000)
      .then(console.log)
      .catch(console.log)*/


const getInfo =  async (direccion) =>{

  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lon);
    return `El clima de ${coords.direccion} es de ${temp}.`;
  }catch(e){
    return `No se pudo dterminar el clima de ${direccion}.`;
  }

    
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

