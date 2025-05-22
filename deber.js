//deber 1- hacer un programa q permita ingresar 10 notas de alumno y sacar el promedio

//let sumaNotas = 0; // Variable para acumular la suma

//for (let i = 1; i <= 10; i++) { 
    //let nota = Number(prompt(`Ingrese la nota ${i}`)); // Pedir la nota y convertirla a número
   // sumaNotas = sumaNotas + nota; // Acumular la suma
//}

//let promedio = sumaNotas / 10; // Calcular el promedio
//console.log(`El promedio de las notas es: ${promedio}`);

//deber 2- modificar para que el usuario primero ingrese la cant de alumnos luego sacar el promedio en base a eso

let cantAlumnos = Number(prompt("ingrese la cantidad de alumnos")); // pedimos la cantidad de alumnos
let sumaNotas2 = 0;

for (let i = 1; i <= cantAlumnos; i++) {
    let nota2 = Number(prompt(`Ingrese la nota del alumno ${i}`));
    sumaNotas2 = sumaNotas2 + nota2;
}

let promedio2 = sumaNotas2 / cantAlumnos;
console.log(`El promedio de las notas es: ${promedio2}`);