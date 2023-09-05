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

// let edad;

// do {
//   edad = prompt("Ingrese una edad: ");

//   if (edad < 0) {
//     alert("Ingrese una edad válida")
//   }
//   else{
//     alert("La edad ingresa es: " + edad);
//   }
// } while(edad != 0);

//FUNCIONES
//TIPO DE FUNCIONES

//FUNCIONES DECLARADAS, QUE TIENEN UN NOMBRE

//Función que saluda
//Declarando la función
// function saludo(){
//   console.log("Hola Mundo");
// }

// //llamado a la función
// saludo();

// //función que suma dos números, pero con parámetros
// sumar(20000,3500);

// function sumar(numero1,numero2){
//   console.log(numero1 + numero2);
// }

// //llamo a la función, y le envío los argumentos
// sumar(10,30);
// sumar(20,150000);

// //función para ver si un número es par o impar (true or false)
// function esPar(numero){
//   return numero % 2 === 0;
// }

// const resultadoUno = esPar(15);
// console.log(resultadoUno);

// const resultadoDos = esPar(10);
// console.log(resultadoDos);

// //FUNCIONES ANONIMAS
// // función anónima, asignada a una variable o constante

// const saludame = function (nombre){
//   console.log(`Hola, ${nombre}, buenas tardes`);
// }

// saludame("María");
// saludame("Bruno");

// //función anónima dentro de una expresión
// let sumame = function (num1,num2){
//   return num1 + num2;
// }

// let resultadoSuma = sumame(4,4);
// console.log(resultadoSuma);

// //FUNCIONES FLECHA

// //Función flecha sin parámetros, de sólo una instruciión, sin llaves {}

// let saludando = () => console.log("Hola mundo");

// saludando();

// //funciones flecha con 1 parámetro
// // let cuadrado = (primerNumero) => {
// //   return primerNumero * primerNumero;
// // }

// // let resultado = cuadrado(8);
// // console.log(resultado);

// let cuadrado = (primerNumero, segundoNumero) => {
//   return primerNumero / segundoNumero;
// }

// let resultadoDivision = cuadrado(10,2);
// console.log("El resultado de la división es: " + resultadoDivision);

// //funciones flecha con las comillas invertidas
// let restados = (n1,n2) => {
//   let resta = n1 - n2;
//   console.log(`El resultado de restar ${n1} y ${n2} es: ` + resta)
// }

// restados(8,4);

// //OBJETOS
// let nombre = "Martín";
// let apellido = "Herman";
// let edad = 35;
// let calle = "Libertador 2035";
// // console.log(nombre);

// //OBJETOS LITERALES
// const usuarioMartin = {
//   //propiedades o atributos
//   //clave : valor 
//   nombre: "Martín",
//   apellido: "Herman",
//   edad: 35,
//   calle: "Libertador 2035",
// }

// const usuarioJuanma = {
//   //propiedades o atributos
//   //clave : valor 
//   nombre: "Juan Manuel",
//   apellido: "Brignole",
//   edad: 39,
//   calle: "Centenario 921",
// }

// //averiguamos que valores alojan las variables, en este caso los objetos
// console.log(typeof usuarioMartin);
// console.log(typeof usuarioJuanma);

// //obteniendo valores del objeto 01
// console.log(usuarioJuanma.edad);
// console.log(usuarioJuanma.calle);
// console.log(usuarioMartin.edad);

// //obteniendo valores del objeto 02
// console.log(usuarioMartin["nombre"]);
// console.log(usuarioMartin["edad"]);

// //Reasignar valores a propiedades de los objetos 01
// //nombreObjeto["propiedad"] = nuevoValor
// usuarioJuanma["edad"] = 40;
// console.log(usuarioJuanma.edad);
// console.log(usuarioJuanma.apellido);

// //Reasignar valores a propiedades de los objetos 02
// //nombreObjeto.propiedadAModificar = nuevoValor
// usuarioJuanma.apellido = "Alderete";
// console.log(usuarioJuanma.apellido);

//FUNCIÓN CONSTRUCTORA
//CREAMOS LA CLASE PERSONA
// function Persona (nombre, apellido, dni, club){
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.dni = dni;
//   this.club = club;
//   //métodos
//   this.hablar = function(){
//     console.log("Hola buen día, yo soy: " + this.nombre + " " + this.apellido)
//   }
// }


// //instanciamos, creamos, un objeto de la clase Persona
// //le enviamos a los parámetros de la clase, los argumentos
// const messi = new Persona ("Lionel", "Messi", 35203455, "Barcelona");
// console.log(messi.nombre);
// messi.hablar();

// const persona2 = new Persona ("Cristiano", "Ronaldo", 34203455, "Real Madrid");
// console.log(persona2.apellido);
// console.log(persona2.club);
// persona2.hablar();

//CLASES EN EMAC6 QUE REEMPLAZA A LA FUNCIÓN CONSTRUCTORA
//INSTANCIAMOS LA CLASE USUARIO
// class Usuario {
//   //Atributos de la clase Usuario
//   constructor (nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido= apellido;
//     this.edad = edad;
//   }
//   //método de la clase Usuario
//   hablar(){
//     console.log("Hola yo soy " + this.nombre + " y mi edad es " + this.edad + " años.")
//   }
// }

// //INSTANCIAMOS EL OBJETO USUARIO 1 A PARTIR DE LA CLASE USUARIO
// const usuario1 = new Usuario ("Magali", "Nieva", 30);
// console.log(usuario1.edad);
// usuario1.hablar();

/*----------------ARRAYS--------------*/
//Instanciar un arreglo vacío
// const vacio = [];
// console.log(typeof vacio);
// console.log(vacio);

// const numeros = [230, 500, 1500, 2000];

// //array de productos
// const productos = ["fideo", "arroz", "azucar", "leche", "harina"];

// //ACCEDO A LAS POSICIONES DEL ARRAY
// console.log(productos[4]);

// //METODOS PARA MODIFICAR O INTERVENIR ARREGLOS
// //METODO LENGTH
// console.log(productos.length);

// //METODO PUSH (AGREGA UN NUEVO ELEMENTO EN LA POSICION FINAL DEL ARRAY)
// productos.push("yerba");
// console.log(productos.length);
// console.log(productos);
// console.log(productos[5]);

// //METODO UNSHIFT (AGREGA UN NUEVO ELEMENTO EN LA POSICION 0 O EN LA PRIMER POSICIÓN DEL ARRAY)
// productos.unshift("aceite");
// productos.unshift("atun");
// console.log(productos);
// console.log(productos[0]);
// console.log(productos.length);

// // //METODO SHIFT PARA QUITAR EL PRIMER ELEMENTO DEL ARRAY
// productos.shift();
// console.log(productos);
// productos.shift();
// console.log(productos);

// //METODO POP PARA QUITAR EL ULTIMO ELEMENTO DEL ARRAY
// productos.pop();
// console.log(productos);
// productos[2] = "aceite";
// console.log(productos);

//METODO SPLICE PERMITE ELIMINAR 1 O MÁS ELEMENTOS DEL ARRAY
// const productos = ["fideo", "arroz", "azucar", "leche", "harina"];
// // productos.splice(0,3);
// // console.log(productos);

// //METODO JOIN PERMITE SEPARAR ELEMENTOS DEL ARRAY
// console.log(productos.join("------"));
// console.log(productos.join("*"));

//METODO CONCAT PERMITE CONCATENAR 2 ARRAYS DIFERENTES
// const productos = ["fideo", "arroz", "azucar", "leche", "harina"];

// //METODO REVERSE PERMITE INVERTIR LAS POSICIONES DE LOS ELEMENTOS DEL ARRAY
// console.log(productos);
// productos.reverse();
// console.log(productos);

// const cervezas = ["Corona", "Brahma", "Quilmes", "Estela", "Andes"];

// //CONCATENAMOS LOS ARRAYS
// const masVendidos = productos.concat(cervezas);
// console.log(masVendidos.join("---"));

// //METODO INDEXOF RETORNA LA POSICION DE UN ELEMNTO EN EL ARRAY
// console.log(masVendidos.indexOf("Brahma"));

//USOS DEL LENGTH
const cervezas = ["Corona", "Brahma", "Quilmes", "Estela", "Andes"];

// for (let i= 0; i < 5; i = i + 1){
//     console.log(cervezas[i]);
// }

// for (let i =0; i < cervezas.length; i++){
//     console.log(cervezas[i]);
// }

// cervezas.push("Patagonia");

// for (let i =0; i < cervezas.length; i++){
//     console.log(cervezas[i]);
// }

//CLASE ARRAYS + OBJETOS

// const productosTienda = [
//     {id: 1, nombre: "Arroz"},
//     {id: 2, nombre: "Fideo"},
//     {id: 3, nombre: "Pan"},
//     {id: 4, nombre: "Azúcar"},
//     {id: 5, nombre: "Yerba"},
//     {id: 6, nombre: "Harina"}
// ];

// for (const producto of productosTienda){
//     console.log(producto.id);
//     console.log(producto.nombre);
//     // console.log(producto.producto);
// }

//EJEMPLO APLICADO OBJETOS, PRODUCTO Y ARRAY
//EMAC 2015

// class Producto {
//     constructor (nombre, precio){
//         //ATRIBUTOS
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//         //MÉTODOS
//         sumaIva(){
//             console.log(this.precio = this.precio * 1.21);
//         }

//         vender(){
//             console.log(this.vendido = true)
//         }
// }

// const productosIva = [];
// // console.log(productosIva);
// productosIva.push(new Producto ("Chocolate", 500));
// console.log(productosIva);
// productosIva.push(new Producto ("Alfajor DDL", 600));
// productosIva.push(new Producto ("Alfajor Frutilla", 650));

// //ITERAMOS EL ARRAY CON UN FOR OF PARA MODIFICARLOS A TODOS
// //FOR OF
// for (const producto of productosIva){
//     producto.sumaIva();
//     producto.vender();
// }

// //ACCEDEMOS A TODOS LOS OBJETOS DEL ARRAY CON SUS NUEVOS PRECIOS
// console.log(productosIva);

/*--------------FUNCIONES DE ORDEN SUPERIOR--------------------*/
//ABSTRACCION

//acumulador
// let total = 0;

// for (let i = 1; i<=10; i++){
//     total = total +  i;
//     console.log(total);
// }

//AHORA LO HACEMOS TODO EN UNA FUNCION, + DINÁMICA
//LE PODEMOS MANDAR POR PARAMETRO, DIFERENTES VALORES

//LOS PARAMETROS SON VARIABLES, QUE PUEDE ESTAR VACÍOS, Y SE CARGAN CON LO QUE LE ENVIAMOS EN LOS ARGUMENTOS
function sumarRangos(min, max){
    //inicializamos el acumularo en 0
    let total = 0;

    //ciclo for que va a iterar según lo que enviamos a los parametros
    for (let i = min; i<=max; i++){
    total = total +  i;
}
    return total;
}

//ENVIAMOS A LA FUNCIÓN LOS ARGUMENTOS QUE CARGAN A LOS PARAMETROS
// console.log(sumarRangos(3,7));
// console.log(sumarRangos(2,4));

//LA FUNCIÓN LA PUEDO GUARDAR EN UNA VARIABLE
const sumaEntreTresYSiete = sumarRangos(3,7);
console.log(sumaEntreTresYSiete);

const sumaEntreDosYCuatro = sumarRangos(2,4);
alert(sumaEntreDosYCuatro);













