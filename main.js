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
// let precioProducto = Number(prompt ("Ingrese el precio del producto"));

// if (precioProducto < 20){
//   alert ("Precio menor a 20 pesos")
// } 
// else if (precioProducto < 50){
//   alert ("Precio menor a 50 pesos")
// } 
// else if (precioProducto < 100){
//   alert ("Precio menor a 100 pesos")
// } 
// else {
//   alert ("El precio es mayor a 100")
// }

//variable devuelve true o false
//VARIABLES BOOLEANAS

// let edad = prompt ("Ingrese su edad: ");
// //variable booleana
// const esMayor = (edad >= 16);

// if (esMayor){
//   alert ("Puedes emitir tu voto");
// } else{
//   alert("Eres menor de edad, no puedes votar en esta elección");
// }

//Operadores lógicos && (and) || (or)

// let nombreIngresado = prompt ("Ingrese su nombre: ");
// let apellidoIngresado = prompt ("Ingrese su apellido: ");

// if ((nombreIngresado != "") && (apellidoIngresado != "")){
//   alert("Bienvenido " + nombreIngresado + " " + apellidoIngresado);
// } else {
//   alert("Error ingresar nombre y apellido");
// }

// Condicional Swicht

// let color = prompt ("Ingrese un color primario: ");

// switch (color){

//   case "rojo":
//     case "Rojo":
//     alert("Ingresaste el color rojo");
//     break;

//     case "azul":
//       case "Azul":
//       alert("Ingresaste el color azúl");
//       break;

//       case "amarillo":
//         case "Amarillo":
//         alert("Ingresaste el color amarillo");
//         break;

//         default:
//           alert("No ingresaste un color válido");
//           break;
// }

/*CICLOS FOR, WHILE y DO WHILE*/

//CICLO FOR INCREMENTO
// for (let i=1; i<=5;i++){
//   console.log("Estás en la vuelta N°: " + i);
// }

// console.log("Ha terminado la carrera!");

//CICLO FOR DECREMENTO
// for (let x=5; x>=1; x--){
//   console.log("Estás en la vuelta N°: " + x);
// }

// console.log("Ha terminado la carrera!");

//CICLO WHILE

// let nota = Number (prompt ("Ingrese una nota: "));

// while (nota != "ESC"){
//   console.log("Ingresaste: " + nota);
 
//   nota = prompt ("Ingrese otra nota: ");
// }

//inicializamos la variable afuera del while
// let i= 1;

// //definimos la condición de corte del while
// while(i<=10){
//   console.log("Estás en la vuelta: " + i);
//   //cargamos el contador en cada vuelta
//   i++;
// }

// console.log("Estas afuera del ciclo while");

// let x = 11;

// do{
//   console.log("Estás en la vuelta: " + x);
//   x++;
// } while(x<=10)

// console.log("Estás afuera del ciclo Do While");

//CICLO DO WHILE CON VALIDACION

let edad;

do {
  edad = prompt("Ingrese una edad: ");

  if (edad < 0) {
    alert("Ingrese una edad válida")
  }
  else{
    alert("La edad ingresa es: " + edad);
  }
} while(edad != 0);








