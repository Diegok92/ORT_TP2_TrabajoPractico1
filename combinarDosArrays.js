/**
 * Combina dos arrays de números ordenados y sin repetidos en un nuevo array ordenado y sin repetidos
 * @param {number[]} array1 - Primer array ordenado ascendentemente y sin repetidos
 * @param {number[]} array2 - Segundo array ordenado ascendentemente y sin repetidos
 * @returns {number[]} - Nuevo array combinado, ordenado y sin repetidos
 */
function combinarDosArrays(array1, array2) {
  // Combinar los dos arrays
  const arrayCombinado = [...array1, ...array2];
  
  // Eliminar duplicados y ordenar
  return [...new Set(arrayCombinado)].sort((a, b) => a - b);
}

module.exports = combinarDosArrays;