// selecionar elemento
var title = document.querySelector("#title");

// innerHTML

title.innerHTML = "testando o texto alterado!";

// textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "testando o textContent";