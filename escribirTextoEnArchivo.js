const fs = require('fs');
const path = require('path');

/**
 * Escribe texto en un archivo
 * @param {string} ruta - Ruta del archivo donde escribir
 * @param {string} texto - Texto a escribir en el archivo
 * @param {boolean} flag - Si es true, crea el archivo si no existe. Si es false, lanza error si no existe
 */
function escribirTextoEnArchivo(ruta, texto, flag) {
  try {
    // Verificar si el archivo existe
    const existeArchivo = fs.existsSync(ruta);
    
    // Si el archivo no existe y el flag es false, lanzar error
    if (!existeArchivo && !flag) {
      throw new Error('el archivo no existe');
    }
    
    // Si el archivo no existe pero el flag es true, asegurarse que el directorio exista
    if (!existeArchivo && flag) {
      const directorio = path.dirname(ruta);
      if (!fs.existsSync(directorio)) {
        fs.mkdirSync(directorio, { recursive: true });
      }
    }
    
    // Escribir el texto en el archivo
    fs.writeFileSync(ruta, texto);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = escribirTextoEnArchivo;