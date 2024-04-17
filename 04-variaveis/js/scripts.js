var teste = 1;
/* é bom não escrever uma variavel sem o 'var' antes, pois assim ela vai ser escrita de forma global, tendo
a *chance de acabar por sobreescrever uma variavel de mesmo nome. além disso com o 'var' antes também funciona
então é uma boa pratica */

var nome = "João";

console.log(teste);

teste = 'Gustavo';

console.log(teste);

console.log(nome);

var $nome = 'ASD';
var _nome = 'ASD2';

console.log($nome);
console.log(_nome);

var nome5 = 'ASD3';

console.log(nome5);

var meuPrimeiroNome = 'Gustavo';

console.log(meuPrimeiroNome); // camelCase

var meu_sobrenome = 'Gonçalves';

console.log(meu_sobrenome); // snake_case

//a primeira mão parecem variaveis normais, mas elas tem umas propriedades diferentes

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;

meuNome = 'Gustavo';

console.log(meuNome);