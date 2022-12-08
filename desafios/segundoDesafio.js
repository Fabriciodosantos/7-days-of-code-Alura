const entrada = require('prompt-sync')({ sigint: true });


let nomeUsuario = entrada('Digite seu Nome: ');
let idadeUsuario = entrada('Digite sua Idade: ');
let linguagemProgramacao = entrada('Qual linguagem deseja Estudar? ');
console.log('\n');


console.log(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos e já está aprendendo ${linguagemProgramacao}!`);

