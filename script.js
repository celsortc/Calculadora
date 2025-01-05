let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".botao");

let primeiroCalculo = true;
let novaOperacao = false;
// let digitouNumero = false; // variavel que verifica se um número foi digitado, para evitar que faça calculos apenas apertando as operações.
let total = 0;
let totalTemp = 0;

// let resultadotemp = 0;
// let novaOperacao = false;
// let numeroDigitado = false;

function adicionarNumero(textoBotao) {
  if (primeiroCalculo === true || novaOperacao === true) {
    //testa se é o primeiro calculo
    resultado.innerHTML = textoBotao;
    primeiroCalculo = false;
    novaOperacao = false;
  } else if (resultado.innerHTML.length < 12) {
    // testa se o tamanho do resultado tem menos de 12 caracteres
    resultado.innerHTML += textoBotao;
  } else {
    // se tiver 12 ele não acrescenta mais.
    resultado.innerHTML;
  }
}

function botaoPressionado(event) {
  let botaoPress = event.target; // verifica qual botão foi clicado
  let textoBotao = botaoPress.value; // adiciona o valor do botão na variavel textoBotao

  if (textoBotao === ",") {
    if (resultado.innerHTML.charAt(resultado.innerHTML.length - 1) !== ",") {
      digitouNumero = true; // passa a variavel para true, indicando que foi um número digitado, nesse caso virgula, mas faz parte do calculo.
      // aqui ele testa se o último caractere não era uma virgula, se for ele não vai adicionar
      adicionarNumero(textoBotao); // chama a função que vai adicionar os números no visor da calculadora, alterando o p.resultado
    }
  } else if (textoBotao >= 0 && textoBotao <= 9) {
    digitouNumero = true; // passa a variavel para true, indicando que foi um número digitado.
    adicionarNumero(textoBotao); // chama a função que vai adicionar os números no visor da calculadora, alterando o p.resultado
  } else if (textoBotao === "C") {
    limpaTudo();
  } else if (textoBotao === "somar") {
    // se botão clicado for + "somar"
    if (digitouNumero === true) {
      novaOperacao = true;
      total = adicao(totalTemp); // chama a função que vai somar
      resultado.innerHTML = total;
      console.log(total);
      digitouNumero = false; //retorna a variável para false, podendo ser refeitos os calculos.
    }
  }
}

function adicao(totalTemp) {
  totalTemp = parseFloat(resultado.innerHTML.replace(",", ".")); // passa o valor do resultado para a variavel totalTemp, já convertido em float e substituindo , por .

  return total + totalTemp;
}

function limpaTudo() {
  resultado.innerHTML = "0";
  primeiroCalculo = true;
  novaOperacao = false;
  totalTemp = 0;
  total = 0;
}

function clicou(teste) {
  teste.addEventListener("click", botaoPressionado);
}

botao.forEach(clicou);
// window.alert("Não pode adicionar outra virgula nessa operação.")
