//Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
//- Tu nombre (string)
//- Tu edad (number)
//- ¿Eres desarrollador? (boolean)
//- Tu fecha de nacimiento (Date)
//- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

let nombre = "Esteban";
let edad = 33;
let desarrollador = true;
let fechaNacimiento = new Date("may 04 1989");
let fechaLibro = new Date("march 31 2014");

const libroFavorito = {
    titulo:"Como fracasar en todo y aun asi triunfar",
    autor:"Scott Adams",
    fecha: fechaLibro,
    url:"https://www.amazon.com/-/es/Scott-Adams/dp/8496627896",
};

const lista = [nombre,edad,desarrollador,fechaNacimiento,libroFavorito];
 console.log(lista)