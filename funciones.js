//funciones: es un bloque de codigo diseñado para cumplir una unica tarea,pára ser reutilizada en alguna otra parte del proyecto

//declaramos: este ejemplo es de funcion con PARAMETROS:

//function saludar(nombre, edad) {
    //cuerpo de la función.
  //  console.log("hola " + nombre);
    //console.log("tu edad es: " +  edad);
//}
//invocamos
//saludar("Samuel",37);





// otro ejemplo de una función

// paso 1: definimos la función
 //function mostrarLibros(){
    //console.log("bienvenido a la biblioteca.estos son los libros disponibles!");
//}

// paso 2: llamamos a la función: una vez definida la función,la podemos ejecutar llamandolá por su nombre 
//seguido de un parentesis()
//mostrarLibros(); //muestra: bienvenido a la biblioteca. ¡estos son los libros disponibles!

// paso 3: añadir parametros la función: las funciones pueden recibir datos a traves de parametros,que actuan como variables
// dentro de la funcion,estos parametros se definen dentro de los parentesis en el momento de declarar la función.

//function buscarLibro(titulo) {
    //console.log(`Buscando el libro: ${titulo}.`);
//}
//buscarLibro("El Principito"); // Muestra: Buscando el libro: El Principito...

// paso 4: utilizar el retorno la función: para que una función envie un valor de vuelta al punto donde fue llamada,
// utiliza la palabra clave "return". el valor retornado puede ser guardado en una variable,usado en una expresión o
//simplemente mostrado.ejemplo:

//function calcularMulta(diasRetraso) {
 //const multaPorDia = 0.50; // 50 centavos por día de retraso
//return diasRetraso * multaPorDia;
//}

//let multa = calcularMulta(5);
//console.log(`La multa total es: $${multa}`); // Muestra: La multa total es: $2.5

// otro ejemplo:

//function agregarLibro(titulo, autor) {
    //return { titulo, autor };
//}

//function mostrarDetalleLibro(libro) {
    //console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
//}

// Agregar un libro
//let libro1 = agregarLibro("1984", "George Orwell");

// Mostrar detalles del libro
//mostrarDetalleLibro(libro1);
// Muestra: Título: 1984, Autor: George Orwell

//function calcularMulta(diasRetraso) {
 // const multaPorDia = 1; //1 peso por dias de retraso
 // return diasRetraso * multaPorDia;
//}

//llamada a la función con un argumento
//let resultado = calcularMulta(7);
//console.log(`la multa por 7 dias de retraso es: $${resultado}`);

//function prestarLibro(titulo, usuario) {
   // console.log(`el libro "${titulo}" ha sido prestado a ${usuario}.`);
//}
//prestarLibro ("1984" , "Ana");


function devolverLibro(titulo, diasRetraso = 0) {
    const multa = diasRetraso * 0.50;
    const mensaje = diasRetraso > 0 
        ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}` 
        : "Devuelto a tiempo. No hay multa.";
    console.log(`Libro "${titulo}": ${mensaje}`);
}

devolverLibro("Caperucita roja");
// Muestra: Libro "Caperucita roja": Devuelto a tiempo. No hay multa.

devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.