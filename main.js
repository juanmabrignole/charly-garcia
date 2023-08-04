//comentarios de una sola línea
/*comentarios de una línea o más*/

//Tipos de variables var let const
//Declaración e inicialización de variables

//Declaro la variable
//Con var puedo crear o instanciar variables con el mismo nombre cuantas veces quiera
// var nombreUsuario;

// //Inicializo la variable
// nombreUsuario = "Juanma Brignole";
// nombreUsuario = 38;

// nombreUsuario = "Martín Herman";

// ////Con let puedo crear o instanciar variables con el mismo nombre sólo una vez. Tampoco puedo crearla sin asignarle algún

// let numeroUsuario;
// numerousuario= 320;
// let numeroUsuario2;
// numeroUsuario2 = 340;

// ////Con const asignar un valor a una variable sólo una vez

// const numeroc = 4;
// // numeroc = 5 //Error, ya no se puede reasignar el valor

// //Operador de concatenacion +
// /*Con let puedo reasignar el valor de la variable*/
// // console.log(nombre);
// let nombre;
// console.log(nombre);
// //la estoy instanciando por segunda
// // let nombre = "Roberto";
// //Pero si puedo reasignarle otro valor
// nombre = "Jimena";
// //Muestro por consola un texto de manera literal con comillas dobles o simples
// console.log("Hola Jimena");
// //Accedo al valor que tiene asignada la variable
// // console.log(nombre);
// console.log("Hola " + nombre + " " + "bienvenido a mi sitio web");
// // let apellido = 'Brignole';
// const apellido = "Martinez";
// const blanco = " ";
// let nombreCompleto = nombre + blanco + apellido;
// console.log("Hola " + nombreCompleto + blanco + "bienvenido a mi sitio web");

//Función alert
// alert(nombreCompleto);

// función prompt
// prompt ("Ingrese su nombre: ");
// let usuarioNombreWeb = prompt ("Ingrese su nombre: ");
// alert(usuarioNombreWeb);

//OPERACIONES MATEMÁTICAS BÁSICAS
// let primerNumero = 10;
// let segundoNumero = 20;
// let resultadoOperacion = primerNumero + segundoNumero;
// alert(resultadoOperacion);

//Le pido al usuario por pantalla que ingrese los dos números, y me los guardo en 2 variables
//parseo
// let primerNumero =  Number (prompt ("Ingrese el primer número entero: "));
// let segundoNumero = Number (prompt ("Ingrese el segundo número con decimal"));

// //En nuestro código, hacemos el calculo
// let resultadoOperacion = primerNumero + segundoNumero;

// //le mostramos el resultado por consola
// console.log("El resultado del producto entre los dos números ingresados es:" + resultadoOperacion);

//CONTROL DE FLUJO
//CONDICIONAL IF

// let nombreUsuario = prompt ("Ingrese su nombre de usuario");

// if (nombreUsuario == "" ){
//   alert ("No ingresaste tu nombre!");
// } else {
//   alert("Hola" + "" + nombreUsuario);  
// }

//IF anidados
let precioProducto = Number(prompt ("Ingrese el precio del producto"));

if (precioProducto < 20){
  alert ("Precio menor a 20 pesos")
} 
else if (precioProducto < 50){
  alert ("Precio menor a 50 pesos")
} 
else if (precioProducto < 100){
  alert ("Precio menor a 100 pesos")
} 
else {
  alert ("El precio es mayor a 100")
}













