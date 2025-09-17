/**
 * Transforma un string en un array de números usando un separador
 * @param {string} texto - Texto a transformar
 * @param {string} separador - Secuencia de caracteres que se usará como separador
 * @returns {number[]} - Array con los números encontrados
 */
function transformarStringEnArrayDeNumeros(texto, separador) {
  // Dividir el texto usando el separador
  const partes = texto.split(separador);
  
  // Filtrar solo las partes que son numéricas y convertirlas a números
  const numeros = partes
    .filter(parte => !isNaN(parte) && parte.trim() !== '')
    .map(parte => Number(parte));
  
  return numeros;
}

module.exports = transformarStringEnArrayDeNumeros;