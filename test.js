const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Importar todas las funciones
const leerArchivoComoString = require('./leerArchivoComoString');
const escribirTextoEnArchivo = require('./escribirTextoEnArchivo');
const transformarStringEnArrayDeNumeros = require('./transformarStringEnArrayDeNumeros');
const transformarArrayDeNumerosAUnSoloString = require('./transformarArrayDeNumerosAUnSoloString');
const combinarDosArrays = require('./combinarDosArrays');
const combinarNArrays = require('./combinarNArrays');

// Archivo temporal para pruebas
const archivoTemporal = path.join(__dirname, 'archivo_prueba.txt');
const contenidoPrueba = 'Este es un archivo de prueba';

// Función para ejecutar todas las pruebas
function ejecutarPruebas() {
  console.log('Iniciando pruebas...\n');
  
  try {
    // Prueba escribirTextoEnArchivo
    console.log('Prueba: escribirTextoEnArchivo');
    escribirTextoEnArchivo(archivoTemporal, contenidoPrueba, true);
    console.log('✓ Archivo escrito correctamente');
    
    // Prueba leerArchivoComoString
    console.log('\nPrueba: leerArchivoComoString');
    const contenidoLeido = leerArchivoComoString(archivoTemporal);
    assert.strictEqual(contenidoLeido, contenidoPrueba);
    console.log('✓ Contenido leído correctamente');
    
    // Prueba transformarStringEnArrayDeNumeros
    console.log('\nPrueba: transformarStringEnArrayDeNumeros');
    const textoNumeros = '123 | 456 | 789 | 1bc | 10';
    const arrayNumeros = transformarStringEnArrayDeNumeros(textoNumeros, ' | ');
    assert.deepStrictEqual(arrayNumeros, [123, 456, 789, 10]);
    console.log('✓ String transformado a array correctamente');
    
    // Prueba transformarArrayDeNumerosAUnSoloString
    console.log('\nPrueba: transformarArrayDeNumerosAUnSoloString');
    const arrayParaString = [123, 456, 789, 10];
    const stringResultante = transformarArrayDeNumerosAUnSoloString(arrayParaString, ',');
    assert.strictEqual(stringResultante, '123,456,789,10');
    console.log('✓ Array transformado a string correctamente');
    
    // Prueba combinarDosArrays
    console.log('\nPrueba: combinarDosArrays');
    const array1 = [1, 5, 10];
    const array2 = [2, 3, 8, 11];
    const arrayCombinado = combinarDosArrays(array1, array2);
    assert.deepStrictEqual(arrayCombinado, [1, 2, 3, 5, 8, 10, 11]);
    console.log('✓ Arrays combinados correctamente');
    
    // Prueba combinarNArrays
    console.log('\nPrueba: combinarNArrays');
    const arraysMultiples = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
    const arrayCombinado2 = combinarNArrays(arraysMultiples);
    assert.deepStrictEqual(arrayCombinado2, [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]);
    console.log('✓ Múltiples arrays combinados correctamente');
    
    console.log('\n¡Todas las pruebas pasaron con éxito!');
    
    // Limpiar archivo temporal
    fs.unlinkSync(archivoTemporal);
    
  } catch (error) {
    console.error(`\n❌ Error en las pruebas: ${error.message}`);
    process.exit(1);
  }
}

// Ejecutar todas las pruebas
ejecutarPruebas();