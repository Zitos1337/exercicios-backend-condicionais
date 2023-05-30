let primeiroNome = "Mario";
let sobrenome = "";
let apelido = "";

let nomeExibicao = apelido || (sobrenome && `${primeiroNome} ${sobrenome}`) || primeiroNome;

console.log(nomeExibicao);

primeiroNome = "Mario";
sobrenome = "";
apelido = "Bros";

nomeExibicao = apelido || (sobrenome && `${primeiroNome} ${sobrenome}`) || primeiroNome;

console.log(nomeExibicao);

primeiroNome = "Mario";
sobrenome = "Bros";
apelido = "";

nomeExibicao = apelido || (sobrenome ? `${primeiroNome} ${sobrenome}` : primeiroNome);

console.log(nomeExibicao);