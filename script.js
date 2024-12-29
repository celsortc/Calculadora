let resultado = document.getElementById("resultado");
let resultadoTemp = document.getElementById("resultadoTemp");
// const botao1 = document.querySelectorAll(".botao1");
const botao = document.querySelectorAll(".botao");
let totalTemp = 0;
let total = 0;

function adicionarNumero(textoBotao) {
  if (resultado.textContent == "0") {
    resultado.innerHTML = textoBotao;
  } else {
    if (resultado.innerHTML.length >= 12) {
      resultado.innerHTML;
    } else {
      resultado.innerHTML += textoBotao;
    }
  }
}

function botaoPressionado(event) {
  let botaoPress = event.target; // verifica qual botão foi clicado
  let textoBotao = botaoPress.value; // adiciona o valor do botão na variavel textoBotao

  console.log("botão clicado: ", textoBotao);

  if ((textoBotao >= 0 && textoBotao <= 9) || textoBotao == ",") {
    adicionarNumero(textoBotao);
  } else {
    verificaOperacao(textoBotao);
  }
}

function verificaOperacao(botaoLido) {
  if (botaoLido === "somar") {
    totalTemp = resultado.innerHTML;
    console.log("é uma soma");
    total = soma(totalTemp);
    console.log("agora foi", total);
  }
  //   totalTemp = parseFloat(resultado.innerHTML);
  //   resultado.innerHTML = "";

  //   // verifica se é um número, se não é ele devolve o erro com window.alert
  //   if (!isNaN(totalTemp) || totalTemp != 0) {
  //     console.log("entrou");
  //     total += totalTemp;
  //   } else {
  //     window.alert("Não é um numero, tente digitar novamente");
  //   }

  //   console.log("numero temporario é:", totalTemp, "total global é:", total);
  // }
}

function soma(totalTemp) {
  console.log(totalTemp);
  resultado.innerHTML = "";
  return (total += parseFloat(totalTemp));
}

function clicou(teste) {
  teste.addEventListener("click", botaoPressionado);
}

botao.forEach(clicou);
