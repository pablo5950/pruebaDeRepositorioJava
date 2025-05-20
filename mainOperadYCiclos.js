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

// actividad: tenes q saludar en 5 veces con la frase "hola mundo"

// CICLO POR REPETICION (FOR)
 for(let i = 0; i < 5; i++){
   console.log("hola mundo");
 }

 //CICLO POR CONDICION 
const password = "1234";
let passwordIngresado = prompt("Ingrese su contraseña");
while(passwordIngresado != password){
    passwordIngresado = prompt ("Ingrese su contraseña");
}

// CONTROLANDO CICLOS: USO DE "BREAK" Y "CONTINUE"
// Las declaraciones "break" y "continue" permiten manejar el flujo de ejecución de formas mas flexibles y potentes

// BREAK:
// se utiliza para SALIR DE UN CICLO de forma INMEDIATA,sin importar si la condición del ciclo sigue siendo true.
//es útil cuando necesitas detener el ciclo en una condición particular.EJEMPLO:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
    break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
}

//CONTINUE:
// OMITE LA INTERACIÓN ACTUAL del ciclo y CONTINUA con la SIGUIENTE,siempre y cuando la condición siga siendo "true" 
//es efectivo en casos donde solo algunas condiciones específicas requieren que el ciclo se omita, como saltarse valores especiales o erróneos dentro de una secuencia de datos.
//EJEMPLO:
  
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
     continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}

//A CONSIDERAR SIEMPRE:
//- lugar de uso: ambas declaraciones se pueden usar en todos los tipos de ciclos(for,whi,do...while)
//- control de flujo: ayudan a hacer el codigo mas legible
//- prevención de bucles infinitos: es crucial actualizar variables de control de los bucles cuando se utilizan
// "break" o "continue" para evitar ciclos sin fin.


// ejemplo validor de usuario mas condicionales

 const usuarios = [ // a esto se lo denomina ARRAY de usuarios
  {nombre: "Ana" , edad: 20, aceptoTerminos: false},
  {nombre: "Pablo" , edad: 37, aceptoTerminos: true},
  {nombre: "Agustin" , edad: 15, aceptoTerminos: true},
  {nombre: "Carlos" , edad: 14, aceptoTerminos: true},
 ]

 for(let i = 0; i < usuarios.length; i++){ // el ".lenght" es la cant de elementos q tiene el array usuario
   if(usuarios[i].edad >= 18 && usuarios[i].aceptoTerminos){
     console.log(usuarios[i].nombre);
   }
 }

//NULLISH COALESCING(??): sirve para ASIGNAR un VALOR por DEFECTO solo si la variable es NULL o UNDEFINED.
//es más preciso que ||, por que no toma 0,"" o false como valores vacios.EJEMPLO:

//Imaginemos que un usuario ingresa su nombre,pero sino lo hace,queremos mostrar "INVITADO" como valor por defecto.

let nombreUsuario = null; //Supongamos que el usuario no ingresó nada
let nombreMostrado = nombreUsuario ?? "invitado";
console.log(`👋 Bienvenido, ${nombreMostrado}!`);