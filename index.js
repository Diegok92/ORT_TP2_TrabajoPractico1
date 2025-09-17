const readline = require("readline");
const path = require("path");
const leerArchivoComoString = require("./leerArchivoComoString");
const escribirTextoEnArchivo = require("./escribirTextoEnArchivo");
const transformarStringEnArrayDeNumeros = require("./transformarStringEnArrayDeNumeros");
const transformarArrayDeNumerosAUnSoloString = require("./transformarArrayDeNumerosAUnSoloString");
const combinarDosArrays = require("./combinarDosArrays");
const combinarNArrays = require("./combinarNArrays");

// Crear interfaz para leer desde la consola
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Función para mostrar el menú
function mostrarMenu() {
	console.log("\n===== MENÚ DE OPCIONES =====");
	console.log("1. Leer archivo como string");
	console.log("2. Escribir texto en archivo");
	console.log("3. Transformar string en array de números");
	console.log("4. Transformar array de números a un solo string");
	console.log("5. Combinar dos arrays");
	console.log("6. Combinar N arrays");
	console.log("0. Salir");
	console.log("===========================");

	rl.question("Seleccione una opción: ", (opcion) => {
		procesarOpcion(opcion);
	});
}

// Función para procesar la opción seleccionada
function procesarOpcion(opcion) {
	switch (opcion) {
		case "1":
			opcionLeerArchivo();
			break;
		case "2":
			opcionEscribirArchivo();
			break;
		case "3":
			opcionTransformarStringAArray();
			break;
		case "4":
			opcionTransformarArrayAString();
			break;
		case "5":
			opcionCombinarDosArrays();
			break;
		case "6":
			opcionCombinarNArrays();
			break;
		case "0":
			console.log("¡Hasta luego!");
			rl.close();
			break;
		default:
			console.log("Opción no válida. Intente nuevamente.");
			mostrarMenu();
			break;
	}
}

// Implementación de cada opción del menú
function opcionLeerArchivo() {
	rl.question("Ingrese la ruta del archivo a leer: ", (ruta) => {
		try {
			const contenido = leerArchivoComoString(ruta);
			console.log("\nContenido del archivo:");
			console.log(contenido);
		} catch (error) {
			console.error(`Error: ${error.message}`);
		}
		mostrarMenu();
	});
}

function opcionEscribirArchivo() {
	rl.question("Ingrese la ruta del archivo donde escribir: ", (ruta) => {
		rl.question("Ingrese el texto a escribir: ", (texto) => {
			rl.question("¿Crear archivo si no existe? (s/n): ", (respuesta) => {
				try {
					const flag = respuesta.toLowerCase() === "s";
					escribirTextoEnArchivo(ruta, texto, flag);
					console.log("Texto escrito correctamente en el archivo.");
				} catch (error) {
					console.error(`Error: ${error.message}`);
				}
				mostrarMenu();
			});
		});
	});
}

function opcionTransformarStringAArray() {
	rl.question("Ingrese el texto a transformar: ", (texto) => {
		rl.question("Ingrese el separador: ", (separador) => {
			try {
				const resultado = transformarStringEnArrayDeNumeros(texto, separador);
				console.log("\nArray resultante:");
				console.log(resultado);
			} catch (error) {
				console.error(`Error: ${error.message}`);
			}
			mostrarMenu();
		});
	});
}

function opcionTransformarArrayAString() {
	rl.question("Ingrese los números separados por comas: ", (entrada) => {
		rl.question("Ingrese el separador para el resultado: ", (separador) => {
			try {
				const array = entrada.split(",").map((num) => Number(num.trim()));
				const resultado = transformarArrayDeNumerosAUnSoloString(
					array,
					separador
				);
				console.log("\nString resultante:");
				console.log(resultado);
			} catch (error) {
				console.error(`Error: ${error.message}`);
			}
			mostrarMenu();
		});
	});
}

function opcionCombinarDosArrays() {
	rl.question(
		"Ingrese el primer array (números separados por comas): ",
		(entrada1) => {
			rl.question(
				"Ingrese el segundo array (números separados por comas): ",
				(entrada2) => {
					try {
						const array1 = entrada1.split(",").map((num) => Number(num.trim()));
						const array2 = entrada2.split(",").map((num) => Number(num.trim()));
						const resultado = combinarDosArrays(array1, array2);
						console.log("\nArray combinado:");
						console.log(resultado);
					} catch (error) {
						console.error(`Error: ${error.message}`);
					}
					mostrarMenu();
				}
			);
		}
	);
}

function opcionCombinarNArrays() {
	rl.question("¿Cuántos arrays desea combinar?: ", (cantidad) => {
		const arrays = [];
		let contador = 0;

		function pedirArray() {
			if (contador < parseInt(cantidad)) {
				rl.question(
					`Ingrese el array ${contador + 1} (números separados por comas): `,
					(entrada) => {
						try {
							const array = entrada.split(",").map((num) => Number(num.trim()));
							arrays.push(array);
							contador++;
							pedirArray();
						} catch (error) {
							console.error(`Error: ${error.message}`);
							mostrarMenu();
						}
					}
				);
			} else {
				try {
					const resultado = combinarNArrays(arrays);
					console.log("\nArray combinado:");
					console.log(resultado);
				} catch (error) {
					console.error(`Error: ${error.message}`);
				}
				mostrarMenu();
			}
		}

		pedirArray();
	});
}

// Iniciar el programa mostrando el menú
mostrarMenu();
