const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const inputnumero = e.target.querySelector('#numero');
  
  const numero = Number(inputnumero.value);

  if (!numero) {
    setResultado('Número inválido', false);
    return;
  }

  const ehPrimo = isPrimo(numero);
  
  if (ehPrimo) {
    setResultado('1 - O número é primo', true);
  } else {
    setResultado('0 - O número não é primo', false);
  }
});

function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.textContent = msg;
  resultado.appendChild(p);
}