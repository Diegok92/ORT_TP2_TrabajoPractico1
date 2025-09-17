/**
 * Transforma un array de números a un solo string usando un separador
 * @param {number[]} array - Array de números a transformar
 * @param {string} separador - Secuencia de caracteres para usar como separador
 * @returns {string} - String resultante de unir los números con el separador
 */
function transformarArrayDeNumerosAUnSoloString(array, separador) {
  return array.join(separador);
}

module.exports = transformarArrayDeNumerosAUnSoloString;