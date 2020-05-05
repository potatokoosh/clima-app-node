//.options sin necesidad de antemoner en consola un comando, permite crear un comando o argumento y asignar un parametro y su valor y retornarlo,, ejemplo argv.direccion
const argv = require ('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    deman: true
  }
}).argv;

module.exports = {
  argv
}