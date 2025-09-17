/**
 * Combina N arrays de números ordenados y sin repetidos en un nuevo array ordenado y sin repetidos
 * @param {number[][]} arrays - Array de arrays, cada uno ordenado ascendentemente y sin repetidos
 * @returns {number[]} - Nuevo array combinado, ordenado y sin repetidos
 */
function combinarNArrays(arrays) {
  // Aplanar todos los arrays en uno solo
  const arrayPlano = arrays.flat();
  
  // Eliminar duplicados y ordenar
  return [...new Set(arrayPlano)].sort((a, b) => a - b);
}

module.exports = combinarNArrays;