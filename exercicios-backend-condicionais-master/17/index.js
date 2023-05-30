const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorParcelasPagas = 100;
const valorPago = valorParcelasPagas + (quantidadeDoParcelamento - 1) * 100;
const valorParcelasRestantes = valorDoProduto - valorPago;
const mensagem = `Restam ${quantidadeDoParcelamento - 3} parcelas de R$100`;

console.log(mensagem);