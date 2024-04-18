let pessoa = {
    nome: "Gustavo",
    idade: 18,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    },
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 3);

console.log(soma);

var calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtracao: function(a, b){
        return a - b;
    },
    multiplicacao: function(a, b){
        return a * b;
    },
    divisao: function(a, b){
        return a / b;
    },

};

var soma = calculadora.soma(2, 5);
var subtracao = calculadora.subtracao(12, 5);
var multiplicacao = calculadora.multiplicacao(2, 53);
var divisao = calculadora.divisao(2430, 5);

console.log(soma, subtracao, multiplicacao, divisao);