// factorial break

var n = 6;
var factorial = 1;

while (true) {
    factorial = factorial * n;
    n--;
        if (n==1){
        break;
    }
}
console.log(factorial);