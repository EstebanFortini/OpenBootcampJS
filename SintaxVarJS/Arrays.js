// Lista, arreglo o Array = conjunto de variables puestas en orden

const lista = [1,"hola", true, undefined, null]
//metodo para crear nuevo array
const lista2 = new Array(2,"hola", true, undefined, null) //metodo para crear nuevo array
//metodo para crear nuevo array y declarando el largo del mismo
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// Objetos

const movil = {
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    isWhite:false,
    contactos: ["Contacto1", "Contacto2", "Contacto3"],
    tarjeta:{
        marca:"Kingston",
        almacenamiento:64
    }
}

console.log(movil.tarjeta)

movil.anio = 2019;

console.log(movil.anio)

// Fechas
// Librerias de apoyo Moment.js

// Fecha del momento en que se creo la constante
const ahora = new Date();
console.log(ahora);

const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio)

// 10 milisegundos luego de la hora 0 en JS
const fecha_milis = new Date(10)
console.log(fecha_milis);

// Fecha a partir de un string
const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena);

// Fecha a partir de valores
const fecha_valores = new Date(2022, 0, 15)
console.log(fecha_valores);



