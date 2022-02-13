
//const { argv } = require('process');
//const { options, boolean } = require('yargs');
const {crearArchivo} = require('./Operaciones/multiplicar');
const argv = require('./Config/yargs');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
    
