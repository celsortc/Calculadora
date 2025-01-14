let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".botao");

total = null;
primeiroCalculo = true;

botao.forEach(clicou);

function limpaTudo() {
  total = null;
  console.log("resetou");
}

function clicou(teste) {
  teste.addEventListener("click", verificaBotao);
}

function verificaBotao(event) {
  let textoBotao = event.target.value; // verifica qual botão foi clicado e já pega o valor dele

  if (textoBotao === "," && resultado.innerHTML.indexOf(",") === -1) {
    //simplificação da lógica, em que ele varre a string buscando "," caso encontre, ele não permite a adição de nenhuma "," em qualquer circunstacia
    exibeNumero(textoBotao);
    // return;
  } else if (textoBotao >= 0 || textoBotao <= 9) {
    // se for um número entra para ser exibido na tela, e se for uma operação, irá verificar qual é
    exibeNumero(textoBotao);
  } else {
    verificaOperacao(textoBotao);
  }
}

function exibeNumero(textoBotao) {
  if (primeiroCalculo === true) {
    //condicional pra verificar se é o primeiro calculo depois da calculadora resetada, soluciona o problema de somar os numeros ao 0;
    resultado.innerHTML = textoBotao;
    primeiroCalculo = false;
  } else if (primeiroCalculo === false && resultado.innerHTML.length < 12) {
    resultado.innerHTML += textoBotao;
  }
}

function verificaOperacao() {}
