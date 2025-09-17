import {
	leerArchivoComoString,
	escribirTextoEnArchivo,
} from "./src/utils/fileUtils.js";
import {
	transformarStringEnArrayDeNumeros,
	transformarArrayDeNumerosAUnSoloString,
} from "./src/utils/transformUtils.js";
import { combinarDosArrays, combinarNArrays } from "./src/apareo.js";

// leo los 4 archivos a memoria
console.log("=== Función 1: leerArchivoComoString ===");
const archivo1 = leerArchivoComoString(
	"./in/10NumerosOrdenadosEntre1y50(setA).in"
);
const archivo2 = leerArchivoComoString(
	"./in/10NumerosOrdenadosEntre1y50(setB).in"
);
const archivo3 = leerArchivoComoString("./in/imparesOrdenadosEntre1y999.in");
const archivo4 = leerArchivoComoString("./in/paresOrdenadosEntre2y1000.in");
console.log("Archivo 1 (setA):", archivo1);
console.log("Archivo 2 (setB):", archivo2);
console.log(
	"Archivo 3 (impares) - primeros 50 caracteres:",
	archivo3.substring(0, 50) + "..."
);
console.log(
	"Archivo 4 (pares) - primeros 50 caracteres:",
	archivo4.substring(0, 50) + "..."
);

// preparo los 4 arrays a partir de los archivo leidos
console.log("\n=== Función 3: transformarStringEnArrayDeNumeros ===");
const array1 = transformarStringEnArrayDeNumeros(archivo1, ",");
const array2 = transformarStringEnArrayDeNumeros(archivo2, ",");
const array3 = transformarStringEnArrayDeNumeros(archivo3, ",");
const array4 = transformarStringEnArrayDeNumeros(archivo4, ",");
console.log("Array 1 (setA):", array1);
console.log("Array 2 (setB):", array2);
console.log(
	"Array 3 (impares) - primeros 10 elementos:",
	array3.slice(0, 10),
	"... total:",
	array3.length,
	"elementos"
);
console.log(
	"Array 4 (pares) - primeros 10 elementos:",
	array4.slice(0, 10),
	"... total:",
	array4.length,
	"elementos"
);

// combino los primeros dos arrays
console.log("\n=== Función 5: combinarDosArrays ===");
const combinadoDosArrays = combinarDosArrays(array1, array2);
console.log("Combinación de array1 y array2:", combinadoDosArrays);

console.log("\n=== Función 4: transformarArrayDeNumerosAUnSoloString ===");
const resultadoCombinado = transformarArrayDeNumerosAUnSoloString(
	combinadoDosArrays,
	","
);
console.log("String resultado (combinado):", resultadoCombinado);

console.log("\n=== Función 2: escribirTextoEnArchivo ===");
escribirTextoEnArchivo("./out/combinado.out", resultadoCombinado, true);
console.log("Archivo combinado.out escrito exitosamente");

// combino los cuatro arrays
console.log("\n=== Función 6: combinarNArrays ===");
const combinadoCuatroArrays = combinarNArrays([array1, array2, array3, array4]);
console.log(
	"Combinación de 4 arrays - primeros 20 elementos:",
	combinadoCuatroArrays.slice(0, 20),
	"... total:",
	combinadoCuatroArrays.length,
	"elementos"
);
console.log("Últimos 10 elementos:", combinadoCuatroArrays.slice(-10));

const resultadoCombinado4 = transformarArrayDeNumerosAUnSoloString(
	combinadoCuatroArrays,
	","
);
escribirTextoEnArchivo("./out/combinado2.out", resultadoCombinado4, true);
console.log("Archivo combinado2.out escrito exitosamente");
