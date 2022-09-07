
//declaro variable VAR y le cambio el valor
var a = 1;
console.log(a)

a = 4;
console.log(a)


//declaro variable LET y le cambio el valor

let b = 3;
console.log(b)

b = 5;
console.log(b)


//declaro constante y le quiero cambiar valor pero no se puede ya que su valor es constante
const constante = "hola soy una constante";

console.log(constante)
constante = "quiero cambiar la constante"


// declaro variable VAR y la uso dentro de una estructura de control

var variableVar = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variableVar = "Soy la segunda variable"
}
// el valor de la variable VAR cambia
console.log(variableVar)


// declaro variable LET y la uso dentro de una estructura de control

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET";
}
// el valor de la variable LET no cambia
console.log(variableLet);

/////////////////////////

var num = 4;

console.log(typeof num);

num = "Hola soy num";

console.log(typeof num);