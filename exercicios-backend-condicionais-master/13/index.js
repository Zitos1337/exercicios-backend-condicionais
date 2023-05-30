const tipoDePagamento = "credito";
const valorDoProduto = 13000;

let desconto;
let valorFinal;

switch (tipoDePagamento) {
    case "credito":
        desconto = 0.05;
        break;
    case "cheque":
        desconto = 0.03;
        break;
    case "debito":
    case "dinheiro":
        desconto = 0.10;
        break;
    default:
        desconto = 0;
}

valorFinal = valorDoProduto - (valorDoProduto * desconto);
const valorFinalEmReais = (valorFinal / 100).toFixed(2);

console.log(`Valor a ser pago: R$${valorFinalEmReais}`);