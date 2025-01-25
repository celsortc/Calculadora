let resultado = document.getElementById("resultado");
const botao = document.querySelectorAll(".botao");

let total = null; // total dos calculos
let num2 = 0; // auxiliar das somas
let primeiroCalculo = true; //verifica se é o primeiro número a ser adicionado, para não somar com o 0 ex: "05"
let operador = null;
let limparTela = false; // flag para limpar tela após salvar número
let operacaoAtiva = false; // variavel criada, com intuito de nao permitir calcular infinitamente apenas apertando o botão de soma, subtracao, etc..

botao.forEach(clicou);

function limpaTudo() {
  total = null;
  num2 = 0;
  resultado.innerHTML = 0;
  primeiroCalculo = true;
  console.log("resetou");
  operador = null;
  operacaoAtiva = false;
  limparTela = false;
}

function LimpaTela(textoBotao) {
  resultado.innerHTML = "0";
}

function clicou(teste) {
  teste.addEventListener("click", verificaBotao);
}

function exibeNumero(textoBotao) {
  operacaoAtiva = false; // desativa  essa flag, para permitir o clique em uma nova operacao
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
  } else if (textoBotao === "CE") {
    LimpaTela(textoBotao);
  } else if (textoBotao === "somar") {
    operador = "adicao";
    if (total === null) {
      total = parseFloat(resultado.innerHTML.replace(",", ".")); //entrega na variavel total o número já em float, e formatado substituindo a virgula por ponto, que é o padrão dos calculos do JS
      limparTela = true;
      return;
    } else {
      calculos(operador, total, num2);
      total = parseFloat(resultado.innerHTML.replace(",", "."));
    }
  } else if (textoBotao === "subtrair") {
    operador = "subtracao";
    if (total === null) {
      total = parseFloat(resultado.innerHTML.replace(",", ".")); //entrega na variavel total o número já em float, e formatado substituindo a virgula por ponto, que é o padrão dos calculos do JS
      limparTela = true;
      return;
    } else {
      calculos(operador, total, num2);
      total = parseFloat(resultado.innerHTML.replace(",", "."));
    }
  } else if (textoBotao === "multiplicar") {
    operador = "multiplicacao";
    if (total === null) {
      total = parseFloat(resultado.innerHTML.replace(",", ".")); //entrega na variavel total o número já em float, e formatado substituindo a virgula por ponto, que é o padrão dos calculos do JS
      limparTela = true;
      return;
    } else {
      calculos(operador, total, num2);
      total = parseFloat(resultado.innerHTML.replace(",", "."));
    }
  } else if (textoBotao === "dividir") {
    operador = "divisao";
    if (total === null) {
      total = parseFloat(resultado.innerHTML.replace(",", ".")); //entrega na variavel total o número já em float, e formatado substituindo a virgula por ponto, que é o padrão dos calculos do JS
      limparTela = true;
      return;
    } else {
      calculos(operador, total, num2);
      total = parseFloat(resultado.innerHTML.replace(",", "."));
    }
  } else if (textoBotao === "%") {
    resultado.innerHTML = porcentagem(); // redefine valor da tela, com a porcentagem do número que está na tela com base no total
  } else if (textoBotao === "backspace") {
    resultado.innerHTML = backspace();
  } else if (textoBotao === "igual") {
    igual();
  }
}

function igual() {
  let totalTemp = parseFloat(resultado.innerHTML.replace(",", "."));
  console.log(totalTemp);

  calculos(operador, total, totalTemp);
  return;
}

function backspace() {
  //slice remove o ultimo caractere da string, por isso aqui nao uso parseFloat, condicional basica para testar, se for 1 numero só, retorna 0 para não retornar NaN no próximo calculo
  let numeroSliced = resultado.innerHTML.replace(",", ".");
  if (numeroSliced.length === 1) {
    limparTela = true;
    return 0;
  } else return numeroSliced.slice(0, -1).replace(".", ",");
}

function porcentagem() {
  // funcao completa, se for adicao/sub devolve o valor numérico da porcentagem, se for divisao/multi devolve a fracao
  let numeroTela = parseFloat(resultado.innerHTML.replace(",", "."));
  let numeroPorcentagem;
  if (total !== null) {
    if (operador === "adicao" || operador === "subtracao") {
      numeroPorcentagem = (total * numeroTela).toFixed(2) / 100;

      return totalFormatado(numeroPorcentagem); // limita em 2 digitos decimais pós virgula
    } else if (operador === "divisao" || operador === "multiplicacao") {
      numeroPorcentagem = numeroTela / 100;
      return totalFormatado(numeroPorcentagem);
    }
    // numeroPorcentagem = 0;
    // numeroTela = 0;
  } else return resultado.innerHTML;
}

function calculos(operador, total, num2) {
  num2 = parseFloat(resultado.innerHTML.replace(",", ".")); // recebe segundo número digitado
  console.log(total, num2, operador, resultado.innerHTML);

  if (operador === "adicao" && operacaoAtiva === false) {
    total += num2;
    console.log(total, num2, operador, resultado.innerHTML);
    num2 = 0;
    operador = null;
    resultado.innerHTML = totalFormatado(total, num2);
    limparTela = true;
    operacaoAtiva = true; // ativa novamente essa flag, para permitir a soma somente se um novo número for digitado
  } else if (operador === "subtracao" && operacaoAtiva === false) {
    total -= num2;
    console.log(total, num2, operador, resultado.innerHTML);

    num2 = 0;
    operador = null;
    resultado.innerHTML = totalFormatado(total, num2);
    limparTela = true;
    operacaoAtiva = true; // ativa novamente essa flag, para permitir a soma somente se um novo número for digitado
  }
  //multiplicacao
  else if (operador === "multiplicacao" && operacaoAtiva === false) {
    total *= num2;
    console.log(total, num2, operador, resultado.innerHTML);

    num2 = 0;
    operador = null;
    resultado.innerHTML = totalFormatado(total, num2);
    limparTela = true;
    operacaoAtiva = true; // ativa novamente essa flag, para permitir a soma somente se um novo número for digitado
  }

  // divisao
  else if (operador === "divisao" && operacaoAtiva === false) {
    total /= num2;
    console.log(total, num2, operador, resultado.innerHTML);

    num2 = 0;
    operador = null;
    resultado.innerHTML = totalFormatado(total, num2);
    console.log(resultado.innerHTML);
    limparTela = true;
    operacaoAtiva = true; // ativa novamente essa flag, para permitir a soma somente se um novo número for digitado
  }
}

function totalFormatado(total, num2) {
  // serve somente pra formatar, evita repeticao de código e simplifica alguns processos.
  if (verificaFloat(total, num2)) {
    return total.toFixed(2).toString().replace(".", ",");
  } else return total.toString().replace(".", ",");
}

function verificaFloat(total, num2) {
  if (total % 1 !== 0 || num2 % 1 !== 0) {
    return true;
  } else {
    return false;
  }
}
