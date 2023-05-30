const diaDaSemana = 3;
let mensagem;

switch (diaDaSemana) {
    case 1:
        mensagem = "Domingo";
        break;
    case 2:
        mensagem = "Segunda Feira";
        break;
    case 3:
        mensagem = "Terça Feira";
        break;
    case 4:
        mensagem = "Quarta Feira";
        break;
    case 5:
        mensagem = "Quinta Feira";
        break;
    case 6:
        mensagem = "Sexta Feira";
        break;
    case 7:
        mensagem = "Sábado";
        break;
    default:
        mensagem = "O número informado não corresponde a um dia da semana válido.";
}

console.log(mensagem);

const diaDaSemana2 = 10;
let mensagem2;

switch (diaDaSemana2) {
    case 1:
        mensagem2 = "Domingo";
        break;
    case 2:
        mensagem2 = "Segunda Feira";
        break;
    case 3:
        mensagem2 = "Terça Feira";
        break;
    case 4:
        mensagem2 = "Quarta Feira";
        break;
    case 5:
        mensagem2 = "Quinta Feira";
        break;
    case 6:
        mensagem2 = "Sexta Feira";
        break;
    case 7:
        mensagem2 = "Sábado";
        break;
    default:
        mensagem2 = "O dia da semana informado não é válido.";
}

console.log(mensagem2);