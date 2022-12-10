let nomeUsuario = prompt('Digite seu Nome: ');
let idadeUsuario = prompt('Digite sua Idade: ');
let linguagemProgramacao = prompt('Qual linguagem deseja Estudar? ');

alert (`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos e já está aprendendo ${linguagemProgramacao}!`);

let estaGostando = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (estaGostando == 1) {
    alert ('Muito bom! Continue estudando e você terá muito sucesso.');
}
if (estaGostando == 2) {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?');
}

