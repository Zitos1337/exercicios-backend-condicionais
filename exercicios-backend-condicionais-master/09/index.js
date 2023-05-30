const nota = 8.5;
let conceito;

if (nota >= 9 && nota <= 10) {
    conceito = "A";
} else if (nota >= 8 && nota <= 8.9) {
    conceito = "B";
} else if (nota >= 6 && nota <= 7.9) {
    conceito = "C";
} else if (nota >= 4 && nota <= 5.9) {
    conceito = "D";
} else {
    conceito = "E";
}

console.log("O estudante obteve conceito " + conceito);