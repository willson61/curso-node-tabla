const argv = require("./config/yargs");
const { crearArchivoTabla } = require("./helpers/multiplicar");
const colors = require('colors');

console.clear();


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
// console.log(argv);




// const base = 7;

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );
