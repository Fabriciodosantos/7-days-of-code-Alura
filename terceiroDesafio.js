const area= prompt ("Olá, me diga qual Area da programação voce deseja seguir? \n'FrontEnd' ou \n'BackEnd': ")

let linguagem;

if (area ==! "FrontEnd" || area ==! "BackEnd") {
    alert ("Opção invalida");
}else if (area == "FrontEnd") {
    linguagem = prompt ('Você deseja Aprender "React" ou "Vue" ?');
}else if(area == "BackEnd") {
    linguagem = prompt ('Você deseja aprender "C#" ou "Java" ?');
}

let especializaçãoOuFullStack = prompt (`Que legal que deseja seguir na em ${area} estudando ${linguagem}, mas voce seja seguir estudando ${area} ou quer aprender mais para ser FullStack? \nDigite "1" para se especializar em ${area} : \nDigite "2" Para Full Stack : ` );


if (especializaçãoOuFullStack === "1") {
    alert (`Muito legal que quer continuar se especializando em ${area}, continue estudando que aprender muito!`)
} else if (especializaçãoOuFullStack === "2") {
    alert ("Muito legal, estude tando FrontEnd quanto BackEnd para ser fullStack!");
}

let resposta = "ok";

while (resposta === "ok") {
    prompt ("Quais Tecnologias voce tem o desejo de conhecer ou aprender? ");

    resposta = prompt ("Legal, Tem mais alguma tecnologia que deseja conhecer? se sim digite ok");

}
alert ("Até mais e Continue sempre Estudando!");


