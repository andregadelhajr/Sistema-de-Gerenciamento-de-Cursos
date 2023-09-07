function calcular(operacao, numero1, numero2) {
  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = numero1 + numero2;
      break;
    case 'subtracao':
      resultado = numero1 - numero2;
      break;
    case 'multiplicacao':
      resultado = numero1 * numero2;
      break;
    case 'divisao':
      resultado = numero1 / numero2;
      break;
    default:
      resultado = 'Operação inválida';
  }

  return resultado;
}

// Adicione eventos de clique aos botões de operação
document.getElementById('soma').addEventListener('click', function () {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);

  if (isNaN(numero1) || isNaN(numero2)) {
    setResultado('Número inválido', false);
  } else {
    const resultado = calcular('soma', numero1, numero2);
    setResultado(`Resultado: ${resultado}`, true);
  }
});

document.getElementById('subtracao').addEventListener('click', function () {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);

  if (isNaN(numero1) || isNaN(numero2)) {
    setResultado('Número inválido', false);
  } else {
    const resultado = calcular('subtracao', numero1, numero2);
    setResultado(`Resultado: ${resultado}`, true);
  }
});

document.getElementById('multiplicacao').addEventListener('click', function () {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);

  if (isNaN(numero1) || isNaN(numero2)) {
    setResultado('Número inválido', false);
  } else {
    const resultado = calcular('multiplicacao', numero1, numero2);
    setResultado(`Resultado: ${resultado}`, true);
  }
});

document.getElementById('divisao').addEventListener('click', function () {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);

  if (isNaN(numero1) || isNaN(numero2)) {
    setResultado('Número inválido', false);
  } else if (numero2 === 0) {
    setResultado('Não é possível dividir por zero', false);
  } else {
    const resultado = calcular('divisao', numero1, numero2);
    setResultado(`Resultado: ${resultado}`, true);
  }
});

// Função para definir o resultado na página
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}