// clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function() {
    console.log("o x é 0");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearInterval na prática
var myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    console.log("Repetição concluida");
    clearInterval(myInterval);

}, 1500)