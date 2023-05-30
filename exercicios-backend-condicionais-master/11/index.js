const rendaMensalEmCentavos1 = 300000;
const mesesDecorridos1 = 12;
const totalJaPagoPeloAluno1 = 1000000;

const valorCursoEmCentavos1 = 1800000; // R$ 18.000,00 em centavos
const valorParcela1 = valorCursoEmCentavos1 / 60; // Valor da parcela mensal em centavos

let mensagem1;

if (mesesDecorridos1 > 60 || totalJaPagoPeloAluno1 >= valorCursoEmCentavos1) {
    mensagem1 = "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o curso já foi quitado.";
} else if (rendaMensalEmCentavos1 > 200000) {
    const valorParcelaEmReais1 = (rendaMensalEmCentavos1 * 0.18) / 100;
    mensagem1 = `O valor da parcela desse mês é R$ ${valorParcelaEmReais1.toFixed(2)} reais.`;
} else {
    mensagem1 = "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.";
}

console.log(mensagem1);

const rendaMensalEmCentavos2 = 150000;
const mesesDecorridos2 = 12;
const totalJaPagoPeloAluno2 = 1000000;

let mensagem2;

if (mesesDecorridos2 > 60 || totalJaPagoPeloAluno2 >= valorCursoEmCentavos1) {
    mensagem2 = "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o curso já foi quitado.";
} else if (rendaMensalEmCentavos2 > 200000) {
    const valorParcelaEmReais2 = (rendaMensalEmCentavos2 * 0.18) / 100;
    mensagem2 = `O valor da parcela desse mês é R$ ${valorParcelaEmReais2.toFixed(2)} reais.`;
} else {
    mensagem2 = "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.";
}

console.log(mensagem2);