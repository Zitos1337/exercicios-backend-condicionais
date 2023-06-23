const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const valorParcelaEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasPagas = valorPago / valorParcelaEmReais;


console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$ ${valorParcelaEmReais.toFixed(2)}`)
