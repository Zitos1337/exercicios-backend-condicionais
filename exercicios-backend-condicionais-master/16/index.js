const idadeDoaluno = 17;
const possuiResponsavel = true;


if (idadeDoaluno >= 18) {
    console.log("Rematrícula realizada com sucesso.")
} else if (possuiResponsavel === true) {
    console.log("Rematrícula realizada com sucesso.")
} else if (idadeDoaluno < 18) {
    console.log("Não é possível fazer a rematrícula,só sera possivel acompanhado de um responsavel")
} else {
    console.log("Não é possivel fazer a rematricula.")
}
