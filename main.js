//VARIABLE: es un espacio de memoria reservado para almacenar informacion importante del programa.

// 1-DECLARACION:
let cliente;


// 2-ASIGNACIÓN DE VALORES:
cliente = "Carlos";
cliente = "Samuel"; //pisó carlos y se quedó con el ultimo nombre que es samuel
console.log(cliente);


// 3-INICIALIZAR VARIABLES:
 let edad = 37;
 console.log(edad);


 //CONSTANTE: es una variable cuyo valor no puede ser modificado una vez que ha sido asignado,por ejemplo:fecha de nac.

 const nacimiento = 1988;
 console.log(nacimiento);

 // Declaración de variables con diferentes tipos de datos
let numero = 42; // Number
let texto = "Hola, mundo"; // String
let esVerdadero = true; // Boolean

// Mostrar los valores en la consola
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", esVerdadero);

// demo operadores:

let edad2 =  18;
let dinero = true;

if( edad2 >= 18 && dinero) { // operador logico AND (&&) = se tienen q cumplir ambas condiciones para q el resultado sea true
 console.log("podes ingresar al bar");
} else {
 console.log("sos menor,anda a estudiar piscui");
}

//sino esta el operador OR (||),tiene q cunplir al menos una de las condiciones ejemplo:
let edad3 =  17;
let dinero3 = false;

if( edad3 >= 18 || dinero3) { 
 console.log("podes ingresar al bar");
} else {
 console.log("sos menor,anda a estudiar piscui");
}

