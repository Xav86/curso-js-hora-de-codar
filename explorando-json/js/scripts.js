const objs = [
    {
        nome: 'Gustavo',
        idade: 19,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Desenvolvedor de Software',
            empresa: 'Fontana',
            horario_entrada: 8.00,
            horario_saida: 18.00 
        },
        hobbies: ['videogame','leitura','programar'],
    },
    {
        nome: 'Jeferfeson',
        idade: 27,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: 'empresario',
            empresa: 'Sua propria',
            horario_entrada: null,
            horario_saida: null,
        },
        hobbies: ['videogame','academia','fazer dinheiro'],
    }
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});