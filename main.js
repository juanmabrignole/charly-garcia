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
// const cervezas = ["Corona", "Brahma", "Quilmes", "Estela", "Andes"];

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
//     //aquí se acumula
//     total = total +  i;
//     console.log(total);
// }

//AHORA LO HACEMOS TODO EN UNA FUNCION, + DINÁMICA
//LE PODEMOS MANDAR POR PARAMETRO, DIFERENTES VALORES

//LOS PARAMETROS SON VARIABLES, QUE PUEDE ESTAR VACÍOS, Y SE CARGAN CON LO QUE LE ENVIAMOS EN LOS ARGUMENTOS
// function sumarRangos(min, max){
//     //inicializamos el acumularo en 0
//     let total = 0;

//     //ciclo for que va a iterar según lo que enviamos a los parametros
//     for (let i = min; i<=max; i++){
//     total = total +  i;
// }
//     return total;
// }

//ENVIAMOS A LA FUNCIÓN LOS ARGUMENTOS QUE CARGAN A LOS PARAMETROS
// console.log(sumarRangos(3,7));
// console.log(sumarRangos(2,4));

//LA FUNCIÓN LA PUEDO GUARDAR EN UNA VARIABLE Y LE MANDAMOS LOS ARGUMENTOS

// const sumaEntreTresYSiete = sumarRangos(3,7); //25
// console.log(sumaEntreTresYSiete);

// // console.log(sumarRangos(3,7));

// const sumaEntreDosYCuatro = sumarRangos(2,4); //9
// console.log(sumaEntreDosYCuatro);

// const resultadoFinal = sumaEntreDosYCuatro * sumaEntreTresYSiete;
// console.log(resultadoFinal);

//AHORA UNA FUNCION PARA VER SI UN NÚMERO ES MAYOR A CUALQUIER OTRO NUMERO
//primera función

//FUNCIÓN, QUE RETORNA EL RESULTADO DE OTRA FUNCIÓN
//FUNCIÓN NOMBRADA DECLARADA
// function mayorQue (num1){
//     //mayorQue retorna otra función, en este caso una función flecha
//     //QUE RETORNA UNA FUNCIÓN FLECHA
//     return (numero) => {
//         return numero > num1; // true or false
//     }
// }

// //mayorQueDiez hace referencia a la función flecha y mayorQue a la función principal, y le enviamos 10 como argumento que se va a cargar en el parámetro.
// const mayorQueDiez = mayorQue(10);
// const resultadoComparacion = mayorQueDiez(8)
// // console.log(mayorQueDiez(8)); //false
// console.log(resultadoComparacion);

//METODOS NATIVOS DE JS PARA BÚSQUEDA Y TRANSFORMACIÓN DE OBJETOS
/*---------FOR EACH (RECORREMOS CON UN CICLO, TODOS LOS ELEMENTOS DE UN ARRAY----------*/
// const numeros = [20, 30,100,200,45,200, 467,345,100,2000];
// // console.log(numeros);

// numeros.forEach((numero) => { // let numero = 20/30/100/200/45 
//     console.log(numero);
// })

// const productos = [
//     {nombre: "Torta Galesa 500gms", precio: 2000},
//     {nombre: "Torta Galesa 1kg", precio: 4000},
//     {nombre: "Alfajor DDL", precio: 700},
//     {nombre: "Alfajor Frutilla", precio: 800},
//     {nombre: "Alfajor Frutilla", precio: 900},
//     {nombre: "Chocolate Sutido", precio: 3300},
//     {nombre: "Chocolate Sutido", precio: 3300},
//     {nombre: "Alfajor de Limón", precio: 750}
// ];

// //METODO FILTER, PERO CON INCLUDES

// const alfajor = productos.filter((producto) => {
//     return producto.nombre.includes("Frutilla");
// })

// console.log(alfajor);

//funcion flecha con return + llaves
// const menorPrecio = productos.filter((producto) => {
//     return producto.precio < 1000;
// })

//me retorna un array nuevo, con los productos cuyo precio sea menor a 1000
//funcion flecha, sin return y sin llaves
// const menorPrecio = productos.filter((producto) => producto.precio < 1000)
// console.log(menorPrecio);


// //metodo que recorre todo el array de objetos y va imprimiendo en consola nombre y precio
// productos.forEach((producto) => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// })

/*------METODO FIND DEVUELVE SOLO EL PRIMER OBJETO QUE CUMPLA CON UNA CONDICION, SINO UNDEFINED----------*/
// const elegido = productos.find((producto) => {
//     return producto.nombre === "Alfajor Frutilla";
// })

// console.log(elegido);

// // const productoElegido = prompt("Elija el producto que más se le antoje: ")
// // console.log(productos.find((producto) => {
// //     return producto.nombre === productoElegido;
// // }))

// /*---------METODO FILTER, RETORNA UN ARREGLO CON EL O LOS ELEMENTOS QUE CUMPLAN CON LA CONDICION, SINO VACIÓ----------*/

// const cervezas = ["Brahma", "Quilmes", "Corona", "Estela", "Corona", "Corona"];

// const corona = cervezas.filter((cerveza) => {
//     return cerveza === "Corona";
// })

// console.log(corona);

// /*---------METODO SOME, RETORNA TRUE OR FALSE SI ENCUENTRA O NO, UN ELEMENTO QUE CUMPLA CON UNA CONDICION----------*/

// const quilmes = cervezas.some((cerveza) => cerveza === "Andes");
// console.log(quilmes);

// /*---------METODO MAP, RECORRE TODO EL ARRAY, Y RETORNA UNO NUEVO CON LOS ELEMENTOS MODIFICADOS----------*/

// const productos = [
//     {nombre: "Torta Galesa 500gms", precio: 2000},
//     {nombre: "Torta Galesa 1kg", precio: 4000},
//     {nombre: "Alfajor DDL", precio: 700},
//     {nombre: "Alfajor Frutilla", precio: 800},
//     {nombre: "Alfajor Frutilla", precio: 900},
//     {nombre: "Chocolate Sutido", precio: 3300},
//     {nombre: "Chocolate Sutido", precio: 3300},
//     {nombre: "Alfajor de Limón", precio: 750}
// ];

// //sirve para recorrer un array, sin necesidad de un ciclo
// // const nombresDulces = productos.map((producto) => producto.nombre);
// // console.log(nombresDulces);

// //pero también sirve,l para recorrer un array, modificar sus elementos, y retornar uno nuevo con esas modificaciones
// const precioActualizado = productos.map((dulce) => {
//     return {
//         nombre: dulce.nombre,
//         precio: dulce.precio * 1.21
//     }
// })

// console.log(precioActualizado);

// //map

// const misNumeros = [1,2,3,4,5];

// // const numerosMultiplicados = misNumeros.map((numero) => {
// //     return numero * 2
// // })

// // console.log(numerosMultiplicados);


// //METODO REDUCE
// const total = misNumeros.reduce((acumulador,numero) => acumulador + numero,0);
// console.log(total);

// const misCompras = [20000, 30000, 1500, 2600, 5000];
// const totalCompra = misCompras.reduce((acumulador, producto) => acumulador + producto, 0);
// console.log("El total de tu compra fue de: $" + totalCompra);

// //EJEMPLO APLICADO

// const cervezasLatas = [
//     {
//       id: 1,
//       nombre: "patagonia",
//       precio: 700
//     },
//     {
//       id: 2,
//       nombre: "estela",
//       precio: 500
//     },
//     {
//       id: 3,
//       nombre: "andes origen",
//       precio: 600
//     },
//     {
//       id: 4,
//       nombre: "brahma",
//       precio: 450
//     },
//     {
//       id: 5,
//       nombre: "corona extra",
//       precio: 450
//     },
//   ];

  //TAREA
  // 1- METODO FIND BUSQUE UN PRODUCTO CUYO ID SEA 3

  //2-METODO SOME QUE BUSQUE SI ESA LATA EXISTE O NO EN EL ARRAY

  //3-METODO FILTER QUE ME RETORNE UN ARRAY CON LOS PRODUCTOS CUYO PRECIO SEA MENOR A 500

  //4- METODO MAP, QUE ME RETORNE UN NUEVO CON LOS PRECIOS MÁS IVA

  /*--------------DOCUMENT OBJECT MODEL----------*/

// OBJETO DOCUMENT
// console.log(document.body);
// console.log(document.head);
// console.dir(document)
//ACCESO A LOS NODOS

/*getElementById()*/
// let principal = document.getElementById("contenido");
// console.log(principal.innerHTML);

// //CON INNERHTML PUEDO ACCADER Y MODIFICAR ELEMENTOD DEL DOM
// let encabezado = document.getElementById("titulo");
// // console.log(encabezado);
// // encabezado.innerHTML = "<p>Los mejores chocolates del Sur</p>";
// encabezado.innerHTML = "<h2>Los mejores chocolates del Sur <a href = '#'>Esto es un link</a></h2>";
// console.log(encabezado);

// /*getElementsByClassName()*/
// //CON ESTE MÉTODO CONVIERTO LOS ELEMENTOS DEL NODO HTML EN UN ARRAY QUE ESTÁ ALOJADO, DENTRO DE PARRAFOS
// // let parrafos = document.getElementsByClassName("parrafo");
// // console.log(parrafos[0].innerText);
// // // console.log(parrafos[1]);
// // // console.log(parrafos[2]);

// /*getElementsByTagName()*/
// let textos = document.getElementsByTagName("p");
// console.log(textos);
// //puedo recorrer el array de etiquetas con un ciclo FOR OF

// for (const texto of textos){
//   console.log(texto.innerHTML);
// }

// //querySelector() es la mejor forma de capturar elemntos HTML, ya que también nos permite trabajar con los métodos propios de los arrays. Usamos selectores css #para Ids y . para las clases

// const content = document.querySelector("#contenido");
// console.log(content);

// //oraciones es ahora un array de parrafos
// const oraciones = document.querySelectorAll(".parrafo");
// console.log(oraciones);
// //YA LE PODEMOS APLICAR MÉTODOS PROPIOS DE LOS ARRAYS
// oraciones.forEach((oracion) => {
//   console.log(oracion);
// })

//FORMAS DE AGREGAR, MODIFICAR Y QUITAR CLASES DESDE JS EN HTML
//CLASSNAME
// let encabezado = document.querySelector("#titulo");
// // console.log(encabezado.className);
// // //le asigno una nueva clase, pero me elimina/pisa la clase anterior
// // encabezado.className = "nuevoEstilo";
// // console.log(encabezado.className);



// //CLASSLIST SE CONVIERTE EN UN ARRAY Y UNA CADA CLASE OCUPA UNA POSICION DENTRO DEL ARRAY
// console.log(encabezado.classList);
// //COMO ES UN ARRAY PUEDO AGREGARLE ELEMENTOS
// encabezado.classList.add("estilos");
// //TAMBIEN PUEDO REMOVER ELEMENTOS DEL ARRAY
// encabezado.classList.remove("delicias");
// // const oraciones = document.querySelectorAll(".parrafo");
// // console.log(oraciones[1].classList);

//dentro de el contenedor de esta variable, al final, luego de su último hijo se va a hacer el append de los diferentes elementos
// const content = document.querySelector("#contenido");

// //TAMBIEN PODEMOS AGREDAR NODOS CON CREATE ELEMENTS
// let lista = document.createElement("ul");
// lista.classList.add("lista");
// // //TODAVIA EXISTE SOLO EN EL DOM
// // console.log(lista);
// // lista.innerHTML = "<li>Torta galesa</li>";
// // lista.innerHTML += "<li>Alfajor Chocolate</li>";
// // lista.innerHTML += "<li>Alfajor Frutilla</li>";

// // content.append(lista);

// //TAMBIÉN PUEDO CREAR UN ARRAY E IR UTILIZANDO SUS POSICIONES EN LA LISTA CON CONCATENACIÓN

// const delicias = ["torta galesa", "alfajor de dulce de leche", "alfajor de frutilla", "chocolate en rama"];
// // lista.innerHTML += "<li class ='lista-item'>" + delicias[0] + "</li>";
// // lista.innerHTML += "<li class ='lista-item'>" + delicias[1] + "</li>";
// // lista.innerHTML += "<li class ='lista-item'>" + delicias[2] + "</li>";
// // lista.innerHTML += "<li class ='lista-item'>" + delicias[3] + "</li>";

// /*-------TEMPLATE STRINGS--------*/
// //OTRA FORMA MÁS COMODA DE IMPLEMENTAR LA CONCATENACION DE ELEMENTOS DEL ARRAY ES CON LOS BACKTICS O COMILLAS INVERTIDAS. MUY USADO EN REACT.JS

// // lista.innerHTML += `<li class="lista-item">${delicias[0]}</li>`
// // lista.innerHTML += `<li class="lista-item">${delicias[1]}</li>`
// // lista.innerHTML += `<li class="lista-item">${delicias[2]}</li>`
// // lista.innerHTML += `<li class="lista-item">${delicias[3]}</li>`

// //TODO LO ANTERIOR, LO PUEDO REDUCIR A UN FOR OF

// for (delicia of delicias){lista.innerHTML += `<li class="lista-item">${delicia}</li>`;}

// content.append(lista);

// //CREANDO ELEMENTOS DESDE OBJETOS DEL DOM
// //CREAMOS UN ARRAY DE OBJETOS
// const productos = [
//   {
//     id: 1,
//     nombre: "Arroz",
//     precio: 500
//   },
//   {
//     id: 2,
//     nombre: "Fideo",
//     precio: 600
//   },
//   {
//     id: 3,
//     nombre: "Leche",
//     precio: 300
//   },
//   {
//     id: 4,
//     nombre: "Azucar",
//     precio: 250
//   }
// ]

// for (const producto of productos){
//   //definimos que vamos a crear un elemento html de tipo div y lo vamos a alojar en la variable contenedor
//   let contenedor = document.createElement("div");
//   //definimos el innerhtml del elemnto con una plantilla de texto o literal
//   contenedor.innerHTML = `
//     <p>ID: ${producto.id}</p>
//     <h3>Producto: ${producto.nombre}</h3>
//     <h4>Precio: $${producto.precio}</h4>
//   `;
//   document.body.append(contenedor);
// }

/*-----------------EVENTOS--------------*/


//EVENTOS DEL MOUSSE

//OPCION01 + RECOMENDADA
//Mostrar mensaje en un alerta
//método addEventListener

//capturamos el elemento html
//con función declarada
// const boton = document.getElementById("btnPrincipal");
// // console.log(boton);
// //asociamos un evento al elemnto del dom (boton)
// boton.addEventListener("click", respuestaClick);

// function respuestaClick(){
//   alert("Respuesta al evento click desde JS");
// }

// //OPCION02
// //metodo onclick, que me permite asociar un sólo evento al nodo del dom
// const boton2 = document.getElementById("btnPrincipal");
// boton2.onclick = () => {
//   console.log("Evento disparado con método onclick");
// }

// //OPCION04
// //CON FUNCION ANONIMA
// let consola = document.querySelector("#consola");
// consola.addEventListener("click", () => {
//   console.log("Evento ejecutado con una función anónima")
// })

//AGREGAR CLASE A UN ELEMENTO // SWICTH COLOR MODE
// const colorModeButton = document.querySelector(".dark-mode");
// const cuerpo = document.body;
// console.log(cuerpo);

// colorModeButton.addEventListener("click", cambiarModoColor);

// function cambiarModoColor(){
//   cuerpo.classList.toggle("dark-mode");

//   if (cuerpo.classList.contains("dark-mode")){
//     colorModeButton.innerText = "Cambiar a light mode";
//   } else {
//     colorModeButton.innerText = "Cambiar a dark mode";
//   }
// }

//EVENTOS DEL TECLADO
// let input1 = document.querySelector("#nombre");
// let input2 = document.querySelector("#edad");

//método "keyup" registra el evento de levantar la tecla
// input1.onkeyup = () => {
//   console.log("evento captura con keyup");
// }

// //método "keydown" es el evento de mantener la tecla presionada
// input2.onkeydown = () => {
//   console.log("evento que captura con keydown")
// }

//EVENTO CHANGE
// input1.onchange = () => {
//   alert("Hola " + input1.value + " bienvenido/a a mi sitio web");
// }

// input2.onchange = () => {
//   alert(" y tu edad es: " + input2.value + " años.");
// }

// //EVENTO INPUT
// //captura el value ingresado en el input
// let input3 = document.querySelector("#input");
// let resultado = document.querySelector("#result")

// input3.oninput = () => {resultado.innerHTML = `<h3> ${input3.value} </h3>`;}

//EVENTO SUBMIT
// let miFormulario = document.querySelector("#formulario");
// //definimos el evento submit
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(evento){
//   //cancelamos el evento por default
//   evento.preventDefault();
//   //obtenemos el elemento desde el cual se disparó el evento
//   let formulario = evento.target;
//   //obtengo el valor del primer hijo <input type="text"
//   console.log(formulario.children[0].value);
//   console.log(formulario.children[1].value);
// }

//con validacion

// function validarFormulario(evento){
//   //cancelamos el evento por default
//   evento.preventDefault();
//   let nombre = document.querySelector("#nombre").value;
//   let correo = document.querySelector("#email").value;

//   //Validamos que se hayan completado los campos del form
//   if (nombre.trim() === "" || correo.trim() === ""){
//     alert("Por favor, completá los campos del formulario")
//   } else {
//     alert("¡Formulario enviado correctamente!")
//   }  
// }

//FUNCIONES CALLBACK

//JS Síncrono
// let numeroFinal = 0;

// for (let i = 0; i < 200000000; i++){
//   numeroFinal += 5;
// }

// console.log(numeroFinal);
// console.log("Ultima tarea");

// //argumentos y funciones

// //parametros
// function sumar(num1,num2){
//   resultado = num1 + num2
//   return resultado
// }

// //argumentos
// sumar(7,10);

//La función Callback, es una función que se le envía a otra función como argumento

// function modificar(array,callback){
//   array.push("Maradona");
//   setTimeout(function(){
//     callback(array)
//   }, 3000)
// }

// const jugadores = ["Messi", "Ronaldo", "Neymar"];

// modificar(jugadores, function(array){
//   console.log(`Modifiqué el array y ahora tiene ${array.length} elementos`);
// })

// //esto también es un callback

// jugadores.forEach(
//   jugador => {
//     console.log(jugador);
//   }
// )

//PARAMETROS
// function operacionAsincronica(parametro, callback){
//   //realiza una operación asincrónica
//   setTimeout(function(){
//     console.log(`Operación completada con el parámetro: ${parametro}`);
//     callback();
//   }, 2000)
// }

// function miCallback(){
//   console.log("La operación asíncrona terminó");
// }

// //llamamos a la función operacionAsincronica y pasamos el primer argumento y la función callback
// //ARGUMENTOS
// operacionAsincronica("Pepito", miCallback);

// function ejecutarDespuesDeTiempo(tiempo, callback){
//   setTimeout( function () {
//     console.log(`La función se ejecutó luego de ${tiempo} milisegundos`);
//     callback(); //llamada a la función callback despues del tiempo especificado
//   },tiempo);
// }

// function miCallBack(){
//   console.log("El callback se ha ejecutado")
// }

// ejecutarDespuesDeTiempo(2000, miCallBack);

// let botonAlerta = document.querySelector("#btnPrincipal");
// botonAlerta.addEventListener("click", function(){
//   console.log("Se hizo click en el botón");
// });

// function miCallBack(){
//   console.log("El botón fué clickeado");
// }

// document.querySelector("#btnPrincipal").addEventListener("click", miCallBack);

// setTimeout(() => {
//   console.log("Código asíncrono.");
// }, 2000);

// console.log("Código síncrono.");

/*--------------PROMESAS JS----------------*/
//Las promesas son objetos que representan el resultado, eventual, de una operación asíncrona
//El objeto PROMISE puede tener 3 estados:
// a) PENDING (pendiente) --> la promesa todavía no se cumplió
// b) RESOLVED (resuelta) --> la promesa se resolvió
// c) REJECTED (Rechazada) -- > la promesa fue rechazada

//construcción de una promesa

// let tePortasteBien = true;

// const siMePortoBien = new Promise((resolve,reject) => {
//   if(tePortasteBien){
//     const telefono = {
//       modelo: "iPhone12",
//       capacidad: "128GB",
//       color: "rojo"
//     };
//     resolve(telefono)
//   } else {
//     reject("Te portaste mal")
//   }
// })

// // Consumir promesas
// //antes de consumir la promesa hay que definir dos funciones callback

// const promesaCumplica = (resolvedValue) => {
//   console.log(`Te regalo tu nuevo teléfono ${resolvedValue.modelo}`)
// }

// const prometaRota = (rejectedValue) => {
//   console.log(`No te puedo dar tu regalo porque ${rejectedValue}`);
// }

// siMePortoBien.then(promesaCumplica, prometaRota);

// const pideRegalo = () => {
//   siMePortoBien.then(promesaCumplica).catch(prometaRota);
// }

// pideRegalo();

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

// function elevarAlCuadrado(num) {
//   // Retorna el valor de "num" elevado al cuadrado.
//   // Tu código:
//   return num * num;
// }

// // Ejemplo de uso:
// let numeroPrueba = 10;
// let resultado = elevarAlCuadrado(numeroPrueba);
// console.log(resultado); // Esto imprimirá 25, que es 5 al cuadrado

// function elevarAlCubo(num) {
//   // Retorna el valor de "num" elevado al cubo.
//   // Tu código:
//   return Math.pow(numero,3)
// }

// let numero = 4;
// let resultado2 = elevarAlCubo(numero);
// console.log(resultado2);


// function elevar(num, exponent) {
//   // Retorna el valor de "num" elevado al exponente "exponent".
//   // Tu código:
//   return Math.pow(num, exponent);
// }

// let numeroElevado = 2;
// let exponente = 3; 
// let resultadoElevar = elevar(numeroElevado, exponente);
// console.log(resultadoElevar);

// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y retórnalo.
//   // Tu código:
//   return Math.round(num);
// }

// let numeroRedondeado = -20.5;
// let resultadoNumeroRedondeado = redondearNumero(numeroRedondeado);
// console.log(resultadoNumeroRedondeado);

// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba y retórnalo.
//   // Tu código:
//   return Math.ceil(num);
// }

// let redondeadoHaciaArriba = 30.3;
// let resultadoNumeroHaciaArriba =  redondearHaciaArriba(redondeadoHaciaArriba);
// console.log(resultadoNumeroHaciaArriba);

// function numeroRandom() {
//   // Genera un número al azar entre 0 y 1 y retórnalo.
//   // Tu código:
//   return Math.random()
// }

// // let elNumeroRandom = 0.5;
// let resultadoRandom = numeroRandom();
// console.log(resultadoRandom);

// /*5️⃣ EJERCICIO 05 5️⃣*/

// function esPositivo(num) {
//   // La función recibe un entero. Devuelve como resultado un string que indica si el número
//   // es positivo o negativo.
//   // Si el número es positivo ---> "Es positivo".
//   // Si el número es negativo ---> "Es negativo".
//   // Si el número es 0, devuelve false.
//   // Tu código:
//   if (num === 0){
//     return false;
//   } else if (num < 0){
//     return "En negativo";
//   } else {
//     return "Es positivo";
//   }
// }

// let numeroPrueba1 = -5;
// let resultado3 = esPositivo(numeroPrueba1)
// console.log(resultado3);

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
//   // Ejemplo: "hello world" ---> "hello world!"
//   // Tu código:
//   return str + "!";
// }

// let texto = "Hola, mundo";
// let simboloExclamacion = agregarSimboloExclamacion(texto);
// console.log(simboloExclamacion);

// function combinarNombres(nombre, apellido) {
//   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
//   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
//   // Tu código:
//   return nombre + " " + apellido;
// }

// let elNombre = "Martin";
// let elApellido = "Herman";
// let nombreApellido = combinarNombres(elNombre, elApellido);
// console.log(nombreApellido);

// function obtenerSaludo(nombre) {
//   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
//   // Ejemplo: "Martin" ---> "Hola Martin!"
//   // Tu código:
//   return "Hola " + nombre + "!";
// }

// let unNombre = "Martín";
// let saludo = obtenerSaludo(unNombre);
// console.log(saludo);

// function obtenerAreaRectangulo(alto, ancho) {
//   // Retornar el área de un rectángulo teniendo su altura y ancho.
//   // Tu código:
//   return "El área del rectángulo es de: " + alto * ancho + " metros";
// }

// let elAlto = 30;
// let elAncho = 5;
// let resultadoRectangulo = obtenerAreaRectangulo (elAlto, elAncho);
// console.log(resultadoRectangulo)

// function retornarPerimetro(lado) {
//   // La función recibe como argumento la medida de un lado de un cuadrado.
//   // Debes retornar su perímetro.
//   // Tu código:
//   return lado * 4;
// }

// let medida = 20;
// let resultadoMedida = retornarPerimetro(medida);
// console.log(resultadoMedida);

// function areaDelTriangulo(base, altura) {
//   // Calcula el área de un triángulo y retorna el resultado.
//   // Tu código:
//   return (base * altura) / 2;
// }

// let laBase = 10;
// let laAltura = 20;
// let resultadoBasePorAltura = areaDelTriangulo(laBase, laAltura);
// console.log(resultadoBasePorAltura);

// function deEuroAdolar(euro) {
//   // Supongamos que 1 euro equivale a 1.20 dólares.
//   // Debes calcular el valor recibido como argumento pasándolo a dolares.
//   // Tu código:
//   return euro * 1.20;
// }

// let cantidadEuros = 10;
// let resultadoValor = deEuroAdolar(cantidadEuros);
// console.log(resultadoValor);

// function esVocal(letra) {
//   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
//   // Si no es vocal, tambien debe retornar "Dato incorrecto".
//   // Tu código:
//   if (letra.length !== 1){
//     return "Dato Incorrecto";
//   }

//   if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//     return "Es Vocal"
//   } else {
//     return "Dato Incorrecto";
//   }
// }

// let letra = "Juanma";
// let resultadoVocal = esVocal(letra);
// console.log(resultadoVocal);

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retornar el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  
}

function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años ó más debe retornar el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
}

function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
}

function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
  // Tu código:
}

function colors(color) {
  // La función recibe un color. Retornar el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // IMPORTANTE: utilizar el statement SWITCH.
  // Tu código:
}

function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
}

function estaEnRango(num) {
  // Retornar true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
}

// function esEntero(num) {
//   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
//   // Ejemplo: 0.8   ---> false
//   // Ejemplo: 1     ---> true
//   // Ejemplo: (-10) ---> true
//   // De lo contrario, retorna false.
//   // Tu código:
//   return Number.isInteger(num);
// }

// console.log(esEntero(0));
// console.log(esEntero(5.5));

// function fizzBuzz(num) {
//   // Si "num" es divisible entre 3, retorna "fizz".
//   // Si "num" es divisible entre 5, retorna "buzz".
//   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
//   // De lo contrario, retorna false.
//   // Tu código:
//   if (num % 3 === 0 && num % 5 === 0){
//     return "fizzbuzz";
//   } else if (num % 3 === 0){

//   }
// }

// function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  // Si todos los argumentos son cero, retornar ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retornar false.
  // Tu código:
//   if (num1 > 0 && num1 > num2 && num1 > num3){
//     return "Numero 1 es mayor y positivo";
//  } else if (num1 < 0 || num2 < 0 || num3 < 0){
//     return "Hay negativos";
//  } 
 
//  if (num3 > num1 && num3 > num2){
//     num3++;
//     return num3;
//  } else if (num1 === 0 && num2 === 0 && num3 === 0){
//     return "error";
//  } else {
//     return false;
//  }
// }

// //No funciona cuando numero1 es mayor pero hay números negativos

// let numero1 = 20;
// let numero2 = -10;
// let numero3 = 5;
// let numerosLogicos = operadoresLogicos(numero1,numero2,numero3);
// console.log(numerosLogicos)


// function esPrimo(num) {
//   // Retornar true si "num" es primo.
//   // De lo contrario retorna false.
//   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
//   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
//   // [Nota]: los números negativos, 0 y 1 NO son números primos.
//   // Tu código:
//   if (num <= 1){
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++){
//     if (num % i == 0){
//       return false;
//     }
//   }

// return true;
// }

// console.log(esPrimo(7));
// console.log(esPrimo(12));
// console.log(esPrimo(5));

// function esVerdadero(valor) {
//   // Si "valor" es verdadero retornar "Soy verdadero".
//   // Caso contrario, retornar "Soy falso".
//   // Tu código:
// }

// // function tieneTresDigitos(num) {
// //   // Si el número recibido tiene tres dígitos retornar true.
// //   // Caso contrario, retornar false.
// //   // Tu código:
// //   return num >=100 && num <=999;
// // }

// // console.log(tieneTresDigitos(1000));

// function doWhile(num) {
//   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
//   // Retornar el valor final.
//   // Utilizar el bucle Do-While.
//   // Tu código:
//   // let contadorVueltas = 0;

//   // do {
//   //   //acumula a lo que hay en el parametro num, le acumula 5
//   //   num += 5;
//   //   contadorVueltas++;
//   // } while (contadorVueltas < 8);

//   // return num;

//   let contador = 0; // contador vueltas

//    do{
//    num += 5; //acumula a lo que hay en el parametro num, hasta 5
//    contador++; //este es el que hace la acumulacion

// } while (contador < 8)//condicion mientras que contador sea menor a 8

// return num;

//  }

// let resultadoFinal= doWhile(10);
// console.log(resultadoFinal);

// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// function devolverPrimerElemento(array) {
//   // Retornar el primer elemento del arreglo recibido por parámetro.
//   // Tu código:
//   // Verificamos si el arreglo tiene elementos
//  if (array.length > 0) {
//   return array[0]; // Retorna el primer elemento
// } else {
//   return undefined; // Retorna undefined si el arreglo está vacío
// }
// }

// // Ejemplo de uso:
// var miArray = [10, 20, 30, 40, 50];
// var primerElemento = devolverPrimerElemento(miArray);
// console.log(primerElemento); // Salida: 10

// function devolverUltimoElemento(array) {
//   // Retornar el último elemento del arreglo recibido por parámetro.
//   // Tu código:
//   // Verificamos si el arreglo tiene elementos
//  if (array.length > 0) {
//   return array[array.length - 1]; // Retorna el último elemento
// } else {
//   return undefined; // Retorna undefined si el arreglo está vacío
// }
// }

// // Ejemplo de uso:
// var miArray = [10, 20, 30, 40, 50];
// var ultimoElemento = devolverUltimoElemento(miArray);
// console.log(ultimoElemento); // Salida: 50

// function obtenerLargoDelArray(array) {
//    // Retornar la longitud del arreglo recibido por parámetro.
//    // Tu código:
//    return array.length;
// }
// let arrayLargo = [10, 20, 30, 47, 68];
// let obtengoLargo = obtenerLargoDelArray(arrayLargo);
// console.log(obtengoLargo);



// function incrementarPorUno(array) {
//   // El arreglo recibido por parámetro contiene números.
//   // Retornar un arreglo con los elementos incrementados en +1.
//   // Tu código:
//   let resultado = array.map(function (elemento){
//     return elemento + 1;
//   })

//   return resultado;
// }

// const unArray = [1,2,3,4,5];
// let resultadoMap = incrementarPorUno(unArray);
// //retornamos el array nuevo con los valores modificados
// console.log(resultadoMap);


// function agregarItemAlFinalDelArray(array, elemento) {
//   // Agrega el "elemento" al final del arreglo recibido.
//   // Retorna el arreglo.
//   // Tu código:
//   //Utilizamos el método push para agregar un elemento al final del array
//   array.push(elemento)

//   //retornamos el arreglo modificado
//   return array; 
// }

// const letras = ['a', 'b', 'c','d'];
// let nuevoElemento = 'e';
// //enviamos los argumentos a los parámetros
// let nuevasLetras = agregarItemAlFinalDelArray(letras, nuevoElemento);
// console.log(nuevasLetras);

// function elementoAlComienzo(simpsons,personajeNuevo){
  
//   //utilizamos el método unshift para agregar el personaje nuevo al comienzo del array
//   simpsons.unshift(personajeNuevo);

//   //retornamos el nuevo array con marge en la posición inicial
//   return simpsons

// }

// let personajes = ["Homero", "Lisa", "Bart"];
// let nuevoPersonaje = "Marge";

// let nuevosPersonajes = elementoAlComienzo(personajes, nuevoPersonaje);
// console.log(nuevosPersonajes);


// function dePalabrasAFrase(palabras) {
//   // El argumento "palabras" es un arreglo de strings.
//   // Retornar un string donde todas las palabras estén concatenadas
//   // con un espacio entre cada palabra.
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
//   // Tu código:
//   let nuevaFrase = palabras.join(' ');
//   return nuevaFrase;
// }

// let palabras = ["Hola", "hoy", "es", "jueves"];
// let frase = dePalabrasAFrase(palabras);
// console.log(frase);


// //la función tiene como parámetros el array y el elemento a buscar
// function arrayContiene(array, elemento) {
//   // Verifica si el elemento existe dentro del arreglo recibido.
//   // Retornar true si está, o false si no está.
//   // Tu código:
//   return array.includes(elemento);
// }

// let equipos = ["Boca", "River", "Racing"];
// let equipoBuscar = "Racing";
// let equipoEncontrado = arrayContiene(equipos,equipoBuscar);
// console.log(equipoEncontrado);

// function agregarNumeros(arrayOfNums) {
//   // El parámetro "arrayOfNums" debe ser un arreglo de números.
//   // Suma todos los elementos y retorna el resultado.
//   // Tu código:
//   let numerosSumados = arrayOfNums.reduce((acumulador,item) => acumulador += item, 0);

//   return numerosSumados;
// }

// let numeros = [20,30,60,200,1400,3000];
// let sumaNumeros = agregarNumeros(numeros);
// console.log(sumaNumeros);

// function promedioResultadosTest(resultadosTest) {
//   // El parámetro "resultadosTest" es un arreglo de números.
//   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
//   // Tu código:
//   let sumaNotas = resultadosTest.reduce((acumulador, nota) => acumulador += nota, 0);

//   let promedioFinal = sumaNotas / resultadosTest.length;

//   return promedioFinal;
// }

// let notas = [6,8,9,10];
// let promedio = promedioResultadosTest(notas);
// console.log(promedio);

// function numeroMasGrande(arrayOfNums) {
//   // El parámetro "arrayOfNums" es un arreglo de números.
//   // Retornar el número más grande.
//   // Tu código:
//   return Math.max(...arrayOfNums);

// }

// let numerosNuevos = [20,8,12,10];
// let elMasGrande = numeroMasGrande(numerosNuevos);
// console.log(elMasGrande);


// function multiplicarArgumentos() {
//   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
//   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
//   // [PISTA]: "arguments" es un arreglo.
//   // Tu código:
//   //si no recibimos argumentos, retornamos 0
//   if(arguments.length === 0){
//     return 0;
//   } else if(arguments.length === 1){ //si arguments tiene un sólo elemento, retona el valor del mismo
//     return arguments[0];
//   }
  

//   //inicializamos producto en 1
//   let producto = 1;
//   for (let i = 0; i < arguments.length; i++){
//     producto *= arguments[i];
//   }

//   return producto;
// }

// console.log(multiplicarArgumentos()); // 0
// console.log(multiplicarArgumentos(5)); // 5
// console.log(multiplicarArgumentos(2,3,4)); //24



// function cuentoElementos(array) {
//   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
//   // Tu código:
//   let edadesMayoresA18 = array.filter(edad => edad >= 18);

//   return edadesMayoresA18;
// }

// let edades = [18,25,5,10,40];
// let edadesElegidas = cuentoElementos(edades);
// console.log(edadesElegidas);

// function diaDeLaSemana(numeroDeDia) {
//   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
//   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
//   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
//   // Tu código:
//   if(numeroDeDia === 1 || numeroDeDia === 7){
//     return "Es fin de semana";
//  } else if (numeroDeDia >=2 && numeroDeDia <=6){
//     return "Es dia laboral";
//  } else{
//     return "Dia invalido";
//  }
// }

// let diaElegido = 4;
// let diaLaboralOFinDeSemana =diaDeLaSemana(diaElegido);
// console.log(diaLaboralOFinDeSemana);

// function empiezaConNueve(num) {
//   // Esta función recibe por parámetro un número.
//   // Debe retornar true si el entero inicia con 9 y false en otro caso.
//   // Tu código:
//   if(num === 9){
//     return true;
//  } else {
//     return false;
//  }
// }

// let numero9 = 19;
// let numeroEntero = empiezaConNueve(numero9);
// console.log(numeroEntero);

// function todosIguales(array) {
//   // Si todos los elementos del arreglo son iguales, retornar true.
//   // Caso contrario retornar false.
//   // Tu código:
//   //me guardo en una variable el valor que tengo en la primer posición del array
//   let primerElemento = array[0]; //1

//   //Comparamos todos los elementos del array con el primer elemento array[0]
//   for (let i = 1; i < array.length; i++){
//     if (array[i] === primerElemento){
//       return true;
//     }
//   }
//   return false;
// }

// console.log(todosIguales([1,1,1,1]));
// console.log(todosIguales([1,2,3,4]));
// console.log(todosIguales([5,7,10,4]));

// function mesesDelAño(array) {
//   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
//   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
//   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
//   // Tu código:
//   //Inicializamos el array vacío para ir cargando los elementos si os encontramos en el array
//   let mesesPedidos = []; // si mesesPedidos tiene 3 elementos, lo retornamos

//   //condional 1
//   if (array.includes("Enero")){
//     mesesPedidos.push("Enero");
//   }
//   //condicional 2
//   if (array.includes("Marzo")){
//     mesesPedidos.push("Marzo");
//   }
//   //condicional 3
//   if (array.includes("Noviembre")){
//     mesesPedidos.push("Noviembre");
//   }

//   //nos fijamos que hay en mesesPedidos
//   if (mesesPedidos.length === 3){
//     return mesesPedidos;
//   } else {
//     return "No se encontraron los meses pedidos";
//   }

// }

// let mesesDesordenados = ["Marzo", "Enero", "Diciembre", "Noviembre", "Febrero"];
// let encontreMeses = mesesDelAño(mesesDesordenados);
// console.log(encontreMeses);

// function tablaDelSeis() {
//   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   // Tu código:
//   //Inicializamos el array vacío para ir cargando los valores de la tabla del 6
//   let resultado = [];


//   //vamos cargando el array
//   for (let i = 0; i<=10; i++){
//     //bloque de proceso
//     let producto = 6 * i;
//     //cargamos nuestros nuevo array con los valores de la tabla del 6
//     resultado.push(producto); 
//   }

//   //retornamos el nuevo array sólo con los valores de la tabla del 6
//   return resultado;
// }

// let resultadoTabla6 = tablaDelSeis();
// console.log(resultadoTabla6);

// function mayorACien(array) {
//   // La función recibe un arreglo con enteros entre 0 y 200.
//   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
//   // Tu código:
//   let valoresMayoresACien = array.filter(numero => numero > 100);
//   return valoresMayoresACien;
// }

// let arregloOriginal = [50,120,90,200,150,101];
// let resultadosMayoresACien = mayorACien(arregloOriginal);
// console.log(resultadosMayoresACien);

// /* ----------------------------------------------------------------------------------
// 💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
// -------------------------------------------------------------------------------------*/

// function breakStatement(num) {
//   // Iterar en un bucle aumentando en 2 el número recibido por parametro hasta un límite de 10 veces.
//   // Guardar cada nuevo valor en un arreglo y retornarlo.
//   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//   // la ejecución y retornar el string: "Se interrumpió la ejecución".
//   // [PISTA]: utiliza el statement 'break'.
//   // Tu código:
//   let resultados = [];
//   let suma = num;

//   for (let i = 0; i < 10; i++){
//     suma += 2;
//     resultados.push(suma);

//     if (suma === i + 1){
//       return "Se interrumpio la ejecución";
//     }
//   }

//   return resultados;
// }

// console.log(breakStatement(10)); // retorna [12,14,16,18,20]
// console.log(breakStatement(1000));

// function continueStatement(num) {
//   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//   // Guardar cada nuevo valor en un array y retornarlo.
//   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
//   // se continua con la siguiente iteración.
//   // [PISTA]: utiliza el statement 'continue'.
//   // Tu código:
//   let resultados = [];
//   let suma = num;

//   for (let i = 1; i < 10; i++){
//     if ( i === 5){
//       continue; // debería saltar a la próxima iteración
//     }

//     suma += 2;
//     resultados.push(suma);
//   }
//   return resultados;
// }

// console.log(continueStatement(10));

// //Otra versión
// function continueStatement(num) {
//   const resultArray = [];

//   for (let i = 0; i < 10; i++) {
//     if (i === 4) {
//       // En la quinta iteración (i = 4), se usa 'continue' para omitir la suma.
//       continue;
//     }

//     // Sumar 2 al número y guardar en el array.
//     num += 2;
//     resultArray.push(num);
//   }

//   return resultArray;
// }

// // Ejemplo de uso:
// const result = continueStatement(3);
// console.log(result); // Devuelve un array con los valores [5, 9, 13, 17, 21, 25, 29, 33]

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     // En la iteración i=2, se utiliza 'continue' para omitir esta iteración.
//     continue;
//   }
//   console.log(`Iteración ${i}`);
// }

// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// function crearGato(nombre, edad) {
//   // Debes crear un nuevo objeto con las propiedades/atributos/carcateristicas "nombre" y "edad".
//   // Ambas propiedades deben tener el valor correspondiente valor recibido por parámetro.
//   // Además, agregar una propiedad con el nombre "meow".
//   // La propiedad "meow" será una función que retorne el string: "Meow!".
//   // Retornar el objeto.
//   // Tu código:
//   //instanciamos el objeto
//   const gato = {
//     //definimos los valores de los atributos, que le enviaremos por parámetro
//     nombre: nombre,
//     edad: edad,
//     //declaramos el método meow
//     meow: function() {
//       return "Meow!"
//     }
//   };

//   return gato;
  
// }

// //guardamos el objeto en una variable (miGato) y le enviamos los argumentos
// const miGato = crearGato("Michi", 3);
// console.log(miGato.nombre);
// console.log(miGato.edad);
// console.log(miGato.meow());

// function nuevoUsuario(nombre, email, password) {
//   // Debes crear un nuevo objeto.
//   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
//   // Retornar el objeto.
//   // Tu código:
//   const usuarioNuevo = {
//     //en blanco el nombre del atributo - en rojo el valor que nos mandaron por parámetro
//     nombre: nombre,
//     email: email,
//     password: password
//   };

//   return usuarioNuevo;
// }

// const elNuevoUsuario = nuevoUsuario("Martín", "herman@gmail.com", "12345");
// console.log(elNuevoUsuario);

// function agregarPropiedad(objeto, atributo) {
//   // Recibirás un objeto por parámetro.
//   // Debes agregarle una propiedad con el nombre recibido por parámetro.
//   // Esta propiedad será igual al valor `null`.
//   // Retornar el objeto.
//   // Tu código:
//   //agregamos la propiedad con el valor null
//   objeto[atributo]= null;
//   return objeto;
// }

// //instaciamos el objeto
// const miObjeto = {
//   nombre: "Martín",
//   apellido: "Herman",
// };

// agregarPropiedad(miObjeto,"nuevaPropiedad");
// console.log(miObjeto);

// function invocarMetodo(objeto, metodo) {
//   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
//   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
//   // [NOTA]: no necesitar retornar nada.
//   // Tu código:
//   objeto[metodo]();
// }

// //instanciamos el objeto
// const miObjeto02 = {
//   saludar: function(){
//     console.log("Hola, muy buenos días")
//   }
// }

// invocarMetodo(miObjeto02, "saludar");


// function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
//   // Debes multiplicar este número por 5 y retornar el resultado.
//   // Tu código:
//   //tenemos asignar a una variable el valor del atributo que contiene el número 10
//   let elNumeroMisterioso = objetoMisterioso.adivinaElNumero;
//   return elNumeroMisterioso * 5;
// }

// const objetoMisterioso = {
//   adivinaElNumero: 10
// }

// const resultado01 = multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);
// console.log(resultado01);

// function eliminarPropiedad(objeto, propiedad) {
//   // El parámetro "propiedad" es una propiedad del objeto que recibes.
//   // Debes eliminarla del objeto y retornarlo finalmente.
//   // Tu código:
//   delete objeto[propiedad];
//   return objeto;
// }

// const miObjeto03 = {
//   nombre: "Juan",
//   edad: 30,
//   ciudad: "Buenos Aires"
// }

// eliminarPropiedad(miObjeto03, 'ciudad');
// console.log(miObjeto03);


// function tieneEmail(objetoUsuario) {
//   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
//   // En ese caso retornar true. Caso contrario, false.
//   // Tu código:
// }

// function tienePropiedad(objeto, propiedad) {
//   //el método hasOwnProperty busca si en el objeto existe la propiedad enviada por parámetro
//   if(objeto.hasOwnProperty(propiedad)){
//     return true;
//   } else {
//     return false;
//   }
// }

// const miObjeto04 = {
//   nombre: "Juan",
//   edad: 30,
//   ciudad: "Buenos Aires"
// }

// console.log(tienePropiedad(miObjeto04, "nombre")); // true
// console.log(tienePropiedad(miObjeto04, "email")); // false

// function verificarPassword(objetoUsuario, password) {
//   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
//   // En ese caso retornar true. Caso contrario, false.
//   // Tu código:
//   if (objetoUsuario.password == password){
//     return true;
//   } else {
//     return false;
//   }
// }

// const elUsuario = {
//   nombre: "Martín",
//   email: "mherman@gmail.com",
//   password: "1234"
// }

// const otropassword = "otracontrasena";
// const nuevoPassword = verificarPassword(elUsuario, otropassword);
// console.log(nuevoPassword);

// function actualizarPassword(objetoUsuario, nuevaPassword) {
//   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
//   // La nueva contraseña la recibes por parámetro.
//   // Retornar el objeto.
//   // Tu código:
//   //le asignamos al objeto, la nueva contrseña que nos enviaron por parámetro
//   objetoUsuario.password = nuevaPassword;

//   return objetoUsuario;
// }

// //construimos el objeto
// const otroUsuario = {
//   nombre: "Martín",
//   email: "mherman@gmail.com",
//   password: "1234"
// }

// //definimos el nuevo valor de la contraseña
// const nuevaContrasena = "nuevapassword12345";
// // enviamos como argumentos, el objeto y su nuevo atributo contraseña
// const contrasenaActualizada = actualizarPassword(otroUsuario, nuevaContrasena);
// console.log(contrasenaActualizada);


// function agregarAmigo(objetoUsuario, nuevoAmigo) {
//   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
//   // Debes agregar el "nuevoAmigo" al final de este arreglo.
//   // Retornar el objeto.
//   // Tu código:
//   objetoUsuario.amigos.push(nuevoAmigo);

//   return objetoUsuario;
// }

// const losAmigos = {
//   nombre: "Martin",
//   email: "mherman@gmail",
//   amigos: ["Juan", "Esteban", "Hernán"]
// }

// const nuevoAmigo = "Joaquín";
// const usuarioConNuevoAmigo = agregarAmigo(losAmigos, nuevoAmigo);
// console.log(usuarioConNuevoAmigo);

// function pasarUsuarioAPremium(objetoMuchosUsuarios) {
//   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
//   // Cada usuario tiene una propiedad llamada "esPremium".
//   // Define esta propiedad de todos los usuarios como true.
//   // Retornar el arreglo.
//   // Tu código:
//   for (let i = 0; i < objetoMuchosUsuarios.length; i++){
//     objetoMuchosUsuarios[i].esPremium = true;
//   }

//   return objetoMuchosUsuarios;
// }

// //creamos el array de objetos

// const usuarios = [
//   {nombre: "usuario234", esPremium: false}, // sub o
//   {nombre: "usuario235", esPremium: false}, // sub 1
//   {nombre: "usuario236", esPremium: false} // sub 2
// ];

// const usuariosPremium = pasarUsuarioAPremium(usuarios);
// console.log(usuariosPremium);

// function sumarLikesDeUsuario(objetoUsuario) {
//   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
//   // Este arreglo contiene objetos (post).
//   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
//   // Debes sumar los likes de todos los post y retornar el resultado.
//   // Tu código:
//   //Inicializamos el acumular de likes en 0
//   let totalLikes = 0;

//   for(let i = 0; i < objetoUsuario.posts.length; i++){
//     //guardamos en la variable posteos solo el objeto posts
//     const posteos = objetoUsuario.posts;
//     //acumulamos los likes
//     totalLikes += posteos[i].likes;
//   }

//   return totalLikes;
// }


// //creamos el array de objetos
// const newUsuario = {
//   nombre: "Martín",
//   posts: [
//     {likes: 10},
//     {likes: 15},
//     {likes: 5}
//   ]
// };

// const likesTotales = sumarLikesDeUsuario(newUsuario);
// console.log(likesTotales);



// function agregarMetodoCalculoDescuento(objetoProducto) {
//   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
//   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
//   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
//   // Luego debes restar del precio total del producto ese valor de descuento.
//   // Retornar el precio final.
//   // Ejemplo:
//   // Precio ---> 10
//   // PorcentajeDeDescuento ---> 0.2
//   // Precio final ---> 8
//   // Tu código:
//   objetoProducto.calcularPrecioDescuento = function() {
//     // const precioSinDescuento = objetoProducto.precio;
//     // const porcentajeDeDescuento = objetoProducto.porcentajeDeDescuento;
//     const descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
//     const precioFinal = objetoProducto.precio - descuento;
//     return precioFinal;
//   };

//   return objetoProducto.calcularPrecioDescuento();
// }

// const producto = {
//   precio: 10,
//   porcentajeDeDescuento: 0.2
// }

// const precioFinal = agregarMetodoCalculoDescuento(producto);
// console.log(precioFinal);


// /*-----------EJERCICIOS HENRY 07-------------*/

// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
// /*1️⃣ EJERCICIO 01 1️⃣*/

// function crearUsuario() {
//    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
//    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
//    // El valor de cada propiedad la recibirá por parámetro.
//    // Además, esta clase debe tener un método llamado "saludar".
//    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
//    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
//    // Retornar la clase.
//    // Tu código:
//    class Usuario {
//     constructor(usuario,nombre,email,password){
//       //propiedad = el valor de usuario que viene por parámetro
//       this.usuario = usuario;
//       this.nombre = nombre;
//       this.email = email;
//       this.password = password;
//     }
//     saludar(){
//       return `Hola, mi nombre es ${this.nombre} y mi correo es ${this.email}`;
//     }
//    }

//    return Usuario;
// }


// const Usuario = crearUsuario();
// //Objeto 1
// const unNuevoUsuario = new Usuario("usuario2035", "Martín", "mherman@gmail.com", "1234");
// // Objeto 2
// const otroNuevoUsuario = new Usuario("usuario2036", "Juanma", "juanma@gmail.com", "3456");
// console.log(unNuevoUsuario.saludar());
// console.log(otroNuevoUsuario.saludar());

// function agregarMetodoPrototype(Usuario) {
//    // Agrega un método al prototipo de "Usuario".
//    // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
//    // Tu código:
//    Usuario.prototype.saludar = function (){
//     return "Hello World!";
//    };
// }

// //agregamos el método al prototipo de "usuario"
// agregarMetodoPrototype(Usuario);
// console.log(unNuevoUsuario.saludar());

// function agregarStringInvertida() {
//    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
//    // El método debe llamarse "reverse".
//    // [PISTA]: necesitarás utilizar el objeto "this".
//    String.prototype.reversa = function () {
//     //1 con split convertimos la cadena de carácteres en un array
//     return this.split('').reverse().join(' ');
//    };
// }

// //agrega el método reverse al prototipo de String
// agregarStringInvertida();

// const miCadena = "Hola mundo!";
// console.log(miCadena.reversa());


// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
// /*2️⃣ EJERCICIO 02 2️⃣*/

// //instanciamos la clase Persona
// class Persona {
//   /*Crea el constructor de la clase "Persona".
//   Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
//   Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
//   sus valores.*/
//   //constructor parametrizado // creamos los campos 8atributos) de la clase persona
//   constructor(nombre, apellido, edad, domicilio){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.domicilio = domicilio;
//   }

//   //este es un método que devuelve un objeto de la clase Persona
//   detalle() {
//     return {
//     nombre: this.nombre,
//     apellido: this.apellido,
//     edad: this.edad,
//     domicilioUnico: this.domicilio,
//     }
//   }

// }

// //le enviamos como argumentos los datos del objeto unaPersona
// const unaPersona = new Persona("Martín", "Herman", 36, "Libertador 3220");
// //guardamos en la varianble dato, los atributos del objeto unaPersona
// const datos = unaPersona.detalle();
// console.log(datos);
// const unaPersona2 = new Persona ("Juan Manuel", "Brignole", 39, "Centenario 921");
// const datos2 = unaPersona2.detalle();
// console.log(datos2);

// function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
//   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
//   // Recibirás las propiedades por parámetro.
//   // Retornar la instancia creada.
//   // Tu código:
//   //Esta función lo que hace, es crear un nuevo objeto a partir de la clase Persona
//   return new Persona(nombre, apellido, edad, domicilio);
// }

// const nuevaPersona = crearInstanciaPersona("María", "Silva", 25, "Av. 9 de Julio");
// const ultimaPersona = crearInstanciaPersona("Julián", "Pérez", 25, "Av. Libertador");
// console.log(nuevaPersona.detalle());
// console.log(ultimaPersona.detalle());


// /*SEGUIR TRABJANDOLO*/
// function agregarMetodo() {
//   // La función agrega un método "datos" a la clase "Persona".
//   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
//   // Ejemplo: "Juan, 22 años".
//   // Tu código:
//   Persona.prototype.datos = function (){
//     return this.nombre + ", " + this.edad ;
//   }
// }

// //llamamos a la función agregarMetodo() para agregar el método datos a la clase Persona
// agregarMetodo();

// //creamos un nuevo objeto persona
// const nuevaPersona3 = new Persona("Juan", "Brignole", "22 años", "Libertador 500");
// console.log(nuevaPersona3.datos());


// /*-------------EJERCICIOS HENRY08 CALLBACK--------------*/
// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// function mayuscula(nombre) {
//   // Esta función recibe un nombre (string).
//   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
//   // [Ejemplo]: "mario" ----> "Mario".
//   // Tu código:
//   return nombre.charAt(0).toUpperCase() + nombre.slice(1,5);

// }

// const nombre = "mario";
// const primeraLetraMayuscula = mayuscula(nombre);
// console.log(primeraLetraMayuscula);

// function invocarCallback(cb) {
//   // Invoca/ejecuta el callback `cb`.
//   // [NOTA]: no debes reotrnar nada.
//   // Tu código:
//   cb(); // invocamos al callback miCallBack
// }

// function miCallBack(){
//   console.log("Invocamos al callback");
// }

// invocarCallback(miCallBack);


// function operacionMatematica(num1, num2, cb) {
//   // En este ejercicio recibirás dos números y un callback.
//   // El callback realiza una operación matemática, por lo que necesita de los dos números.
//   // Retorna el resultado del callback pasándole como parámetros los números.
//   // Tu código:
//   return cb(num1, num2);
// }

// function sumaCallback(a,b){
//   return a + b;
// }

// function restaCallback(a,b){
//   return a - b;
// }

// /*-----TAREA------*/
// //crear los callbacks para la resta, multiplicacion y división

// const resultadoSuma = operacionMatematica(4, 10, sumaCallback);
// console.log(resultadoSuma);

function sumarArray(arrayOfNumbers, callback) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  const suma = arrayOfNumbers.reduce((reductor, numero) => reductor + numero, 0);
  //invocar al callback paásanole la suma como argumento
  callback(suma);
}

function nuevoCallBack(resultado) {
  console.log("El resultado de sumar todos los elementos es: " + resultado);
}

const otrosNumeros = [1,2,3,4,5];
sumarArray(otrosNumeros, nuevoCallBack);


function forEach(array, callback) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  //instaciamos el for que va a recorrer cada elemento del array y va a mostrar el valor de cada una de las posiciones, mediante un callback
  for (let i = 0; i < array.length; i++){
    //invocamos al callback que muestra los valores de i del array
    callback(array[i]);
  };
}

function nuevoCallBack(elemento) {
  console.log("El Elemento es: " + elemento);
}

//creamos el array de números
const nuevosNumeros = ["Juan","María","Lorena","Martín","Hernán"];
//le enviamos como argumentos a la función el array y el callback
forEach(nuevosNumeros, nuevoCallBack);


//SEGUIR PULIÉNDOLO
function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const nuevoArray = [];
  // for (let i = 0; i < array.length; i++){

  // }

  let dobles = array.map(function (x) {
    const resultado =  x * 2;
    nuevoArray.push(resultado)
  })
  
  return nuevoArray;

}

function nuevoCallBack(nuevoArray) {
  console.log("El Elemento es: " + nuevoArray);
}


//intaciamos el array
const arrayOriginal = [1,2,3,4,5];
map(arrayOriginal, nuevoCallBack);


function filter(arrayOfStrings) {
  // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  const comienzaConLetraA = [];
  for (let i = 0; i < arrayOfStrings.length; i++){
    const jugador = arrayOfStrings[i];

    if(jugador.toUpperCase().startsWith('A')){
      comienzaConLetraA.push(jugador);
    }
  }
  return comienzaConLetraA;
}

const arrayDeJugadores = ["Messi", "Ronaldo", "Arano", "Aguero", "Ortega"];
const arrayFiltrado = filter(arrayDeJugadores);
console.log(arrayFiltrado);


/*-----------------HENRY09------------------*/
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos deben ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const arregloDeArreglos = [];
  for (const clave in objeto){
    arregloDeArreglos.push([clave, objeto[clave]])
  }
  return arregloDeArreglos;
}

const objeto = {
  D: 1, 
  B: 2, 
  C: 3
}

const arrayDeArrays = deObjetoAarray(objeto);
console.log(arrayDeArrays);

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const contadorDeletras = {};

  //recorremos cada carácter en el string
}

const resultado = numberOfCharacters("Martín Herman");
console.log(resultado);

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

