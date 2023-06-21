const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 100000;

//O valor da parcela desse mês é R$ 540 reais
const parcelas = (18 / 100) * rendaMensalEmCentavos / 100;

//if se acontecer dentro do () vai rodar oq ta dentro da chaves {}

if (rendaMensalEmCentavos < 200000) {
    console.log("A sua renda mensal é menor que 2.000 entao nao paga facul")
} else if (mesesDecorridos > 60) {
    console.log("pós 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa não deve nada,")
} else if (totalJaPagoPeloAluno > 180000) {
    console.log(`O total pago pelo aluno foi de ${totalJaPagoPeloAluno / 100} entao ja foi quitado o valor total do curso.`)
} else {
    console.log(`O valor da parcela desse mês é R$ ${parcelas} reais`)
};
