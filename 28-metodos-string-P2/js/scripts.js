// toLowerCase e toUpperCase

var frase = "Está frase sera manupulada!";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim

var nome = "           Gustavo   ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

link = "htps://google.com/ancora1/ancora2/ancora3";

console.log(link.split("/"));

// lastIndexOf

var fraseDois = "Eu irei pegar a ultima palavra desta frase, ou seja, teste";

console.log(fraseDois.lastIndexOf("teste"));
console.log(fraseDois.length);
console.log(fraseDois.slice(53, 58));