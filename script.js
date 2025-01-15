let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".botao");

let total = null; // total dos calculos
let num2 = 0; // auxiliar das somas
let primeiroCalculo = true; //verifica se é o primeiro número a ser adicionado, para não somar com o 0 ex: "05"
let operador = null;
let limparTela = false; // flag para limpar tela após salvar número

botao.forEach(clicou);

function limpaTudo() {
  total = null;
  num2 = 0;
  resultado.innerHTML = 0;
  primeiroCalculo = true;
  console.log("resetou");
  operador = null;
}

function clicou(teste) {
  teste.addEventListener("click", verificaBotao);
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

function verificaNumero(textoBotao) {
  if (limparTela) {
    resultado.innerHTML = ""; // limpa tela
    limparTela = false; // reseta a flag
  }
  exibeNumero(textoBotao);
}

function verificaBotao(event) {
  let textoBotao = event.target.value; // verifica qual botão foi clicado e já pega o valor dele

  if (textoBotao === "," && resultado.innerHTML.indexOf(",") === -1) {
    //simplificação da lógica, em que ele varre a string buscando "," caso encontre, ele não permite a adição de nenhuma "," em qualquer circunstacia
    verificaNumero(textoBotao);
  } else if (textoBotao >= 0 || textoBotao <= 9) {
    verificaNumero(textoBotao); // faz a verificação na função pra ficar mais clean
  } else {
    verificaOperacao(textoBotao);
  }
}

function verificaOperacao(textoBotao) {
  if (textoBotao === "C") {
    limpaTudo();
  } else if (textoBotao === "somar") {
    operador = "adicao";
    console.log("voltou", total);
    if (total === null) {
      total = parseFloat(resultado.innerHTML.replace(",", ".")); //entrega na variavel total o número já em float, e formatado substituindo a virgula por ponto, que é o padrão dos calculos do JS
      console.log(total);
      limparTela = true;
      return;
    }
    calculos();
  }
}

function calculos(textoBotao) {}
