// inserir o lelemento no body
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("lorem ipson dolor set amit");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.querySelector("#container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("loren ipsun dolor sit"));

console.log(el);

container.appendChild(el);
