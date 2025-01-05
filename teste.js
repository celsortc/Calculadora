let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".botao");

// let totalTemp = 0;
// let resultadotemp = 0;
// let total = 0.0;
// let novaOperacao = false;
// let numeroDigitado = false;

// function adicionarNumero(textoBotao) {
//   if (numeroDigitado === false) {
//     resultado.innerHTML = textoBotao;
//     console.log("ta mundando");
//     numeroDigitado = true;
//   } else {
//     if (resultado.innerHTML.length >= 12) {
//       resultado.innerHTML;
//     } else {
//       resultado.innerHTML += textoBotao;
//       console.log("ta mundando2");
//     }
//   }
// }

function botaoPressionado(event) {
  let botaoPress = event.target; // verifica qual botão foi clicado
  let textoBotao = botaoPress.value; // adiciona o valor do botão na variavel textoBotao

  // console.log("botão clicado: ", textoBotao);

//   if (textoBotao >= 0 && textoBotao <= 9) {
//     if (novaOperacao === true) {
//       resultado.innerHTML = "";
//       adicionarNumero(textoBotao);
//     } else {
//       adicionarNumero(textoBotao);
//     }
//   } else {
//     verificaOperacao(textoBotao);
//   }
// }

// function verificaOperacao(botaoLido) {
//   if (botaoLido === "somar") {
//     numeroDigitado = false;

//     resultadotemp = parseFloat(resultado.innerHTML);
//     totalTemp = resultadotemp;
//     // totalTemp = resultadotemp;

//     if (novaOperacao === false) {
//       total = soma(totalTemp);
//     } else {
//       resultado.innerHTML = total;
//     }

//     totalTemp = 0;

//     // resultadotemp = 0;
//     console.log(total, resultadotemp, totalTemp, resultado.innerHTML);
//   }
// }

// function soma(totalTemp) {
//   novaOperacao = true;
//   return (total += parseFloat(totalTemp));
// }

function clicou(teste) {
  teste.addEventListener("click", botaoPressionado);
}

botao.forEach(clicou);
