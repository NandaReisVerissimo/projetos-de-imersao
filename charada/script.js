let numeroSecreto = parseInt(Math.random() * 11);
let qtdCliques = 0;

function Chutar() {
  let elementoResultado = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value); //ele imprime como texto, tem que transformar
  qtdCliques++;
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Errou, o número secreto é MENOR que o digitado";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Errou, o número secreto é MAIOR que o digitado";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar o número de 0 a 10";
  } else if (qtdCliques < 3 && chute !== numeroSecreto) {
    elementoResultado.innerHTML =
      "Errou, você ainda tem: " + qtdCliques + " tentativas";
  } else if (qtdCliques == 3 && chute !== numeroSecreto) {
    elementoResultado.innerHTML = "Errou, o resultado é: " + numeroSecreto;
  }
}
