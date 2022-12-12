let jogarNovamente = "Sim";


while (jogarNovamente === "Sim"){
    let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    let tentativas = 3;

    alert ('Tente advinhar o número Secreto.');

    while (tentativas > 0) {

        let chute = prompt ("Chute um numero ente 0 e 10 \n Você tem 3 tentativas!");

        if (chute < 0 && chute > 10) {
            alert ('Numero Invalido! Digite entre 0 e 10!');
            let chute = prompt ("Chute um numero ente 0 e 10 \n Você tem 3 tentativas!");
        }
        if (chute == numero && chute < 0 || chute > 10) {
            alert (`Parabens Você Acertou, o Numero é ${numero}`);

            alert ('Jogue novamente!');

            tentativas = 3;
        }else {
            tentativas -= 1;
            alert (`Infelizmente Você Errou, Você tem mais ${tentativas} Tentativas.`);
        }

    }

    alert ('Acabou Suas tentativa, mas fique a vontade em jogar novamente!');

    jogarNovamente =  prompt ("Deseja Jogar novamente? Sim ou Nao");

    if (jogarNovamente ==! "Sim" || jogarNovamente ==! "Nao") {
        alert ('Opção Invalida');
        jogarNovamente =  prompt ("Deseja Jogar novamente? Sim ou Nao");
    }

    tentativas = 3;

}