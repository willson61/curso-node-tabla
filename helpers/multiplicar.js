const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = ( base = 5, listar = false, hasta = 10 ) => {
    return new Promise( (resolve, reject) => {
        let salida = ''

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${index * base}\n`;
        }

        if(listar){
            console.log('==================='.green);
            console.log(`   Tabla del: ${base}    `);
            console.log('==================='.green);

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    })
}

const crearArchivoTablaAsync = async( base = 5 ) => {
    try {
        let salida = ''

        console.log('===================');
        console.log(`   Tabla del: ${base}    `);
        console.log('===================');

        for (let index = 1; index <= 10; index++) {
            salida += `${base} * ${index} = ${index * base}\n`;
        }


        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
};