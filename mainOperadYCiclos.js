// demo operadores:

let edad =  18;
let dinero = true;

if( edad >= 18 && dinero) { // operador logico AND (&&) = se tienen q cumplir ambas condiciones para q el resultado sea true
 console.log("podes ingresar al bar");
} else {
 console.log("sos menor,anda a estudiar piscui");
}

//sino esta el operador OR (||),tiene q cumplir al menos una de las condiciones ejemplo:
let edad2 =  17;
let dinero2 = false;

if( edad2 >= 18 || dinero2) { 
 console.log("podes ingresar al bar");
} else {
 console.log("sos menor,anda a estudiar piscui");
}

// en javascript hay 3 tipos de ciclos: FOR,WHILE y DO...WHILE

//CICLO FOR:
//este ciclo es uno de los mas usados,ejecuta un bloque de codigo un numero determinado de veces,
//su estructura incluye 3 partes principales:
//1-Inicialización: establece el estado del contador.ej: let i = 0;
//2-Condición: el ciclo se ejecuta mientras la condición sea verdadera.ej: i < 10;
//3-Actualización: actualiza el valor del contador despues de cada iteración.ej: i++; EJEMPLO: 

 for (let i = 0; i<5; i++){
    console.log ("Número:" +i); //Este código imprimirá los números del 0 al 4 en la consola.
 }

//CICLO WHILE:
//este ciclo sigue ejecutandosé mientras LA CONDICIÓN ESPECIFICADA sea VERDADERA .la inicialización y
//actualización del contador suelen hacerse fuera y dentro del ciclo,respectivamente. EJEMPLO:
 let i = 0; //inicialización fuera del ciclo
 while (i < 7){
 console.log("Número:" + i); //Este código imprimirá los números del 0 al 6.
 i++; //actualización dentro del ciclo
 }

 //CICLO DO...WHILE:
 //este ciclo garantiza que el cuerpo del bucle se EJECUTE al MENOS 1 VEZ,ya que la CONDICIÓN se evalúa
 // DESPUÉS de la ejecución del código dentro del bucle.EJEMPLO:

 
//let i = 0;
//do {
  //  console.log('Número: ' + i);
    //i++;
//} while (i < 8); Este código imprimirá los números del 0 al 7, asegurando que el bloque de código se ejecute al menos una vez.