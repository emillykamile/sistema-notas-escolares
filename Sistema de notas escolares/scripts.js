let nota = 100;

function pegarScore(score) {
let notaA = nota >= 90 && score <= 100;
let notaB = nota >= 80 && score <= 89;
let notaC = nota >= 70 && score <= 79;
let notaD = nota >= 60 && score <= 69;
let notaE = nota < 60 && nota >= 0;

if (notaA) {
    scoreFinal = "nota A";
}
  else if (notaB) {
    scoreFinal = "nota B";
} 
  else if (notaC) {
    scoreFinal = "nota C";
} 

  else if (notaD) {
    scoreFinal = "nota D";
}
  else if (notaE) {
    scoreFinal = "nota E";
} else {
    scoreFinal = "Nota inválida";
}

    return scoreFinal
}

pegarScore();