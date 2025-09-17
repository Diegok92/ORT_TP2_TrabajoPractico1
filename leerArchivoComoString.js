const fs = require('fs');

/**
 * Lee un archivo y devuelve su contenido como string
 * @param {string} ruta - Ruta del archivo a leer
 * @returns {string} - Contenido del archivo como string
 */
function leerArchivoComoString(ruta) {
  try {
    return fs.readFileSync(ruta, 'utf8');
  } catch (error) {
    throw new Error(`Error al leer el archivo: ${error.message}`);
  }
}

module.exports = leerArchivoComoString;