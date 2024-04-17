function primeiraFuncao(){

    console.log("Hello World das funções");

}

primeiraFuncao();

function dizerNome(nome){
    
    console.log("O nome é: " + nome);

}

dizerNome("Gustavo");
dizerNome("João");
dizerNome("pedro");

var nomeDoBancoDeDados = "Xavier";

dizerNome(nomeDoBancoDeDados);

function soma (a, b){
    var soma = a + b;
    return soma;

}

var somaUm = soma(2,5);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4,1));

//teste rapido para ver a soma de numeros em um loop

function soma_loop(n, n1){
    soma = 0;
    if (n > n1){
        for(i = n1;i <= n; i++){
            soma = soma + i;
        }
        return soma;

    }else if(n1 > n){
        for(i = n;i <= n1; i++){
            soma = soma + i;
        }
        return soma;
    }else{
        return console.log("Os numeros são iguais")
    }
}

console.log(soma_loop(1,9));