const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    const n1 = parseFloat(req.body.n1);
    const operador = req.body.operador;
    const n2 = parseFloat(req.body.n2);

    let resultado;

    if (operador === '+') {
        resultado = n1 + n2;
    } else if (operador === '-') {
        resultado = n1 - n2;
    } else if (operador === '*') {
        resultado = n1 * n2;
    } else if (operador === '/') {
        resultado = n1 / n2;
    }

    res.render('resultado.html', { resultado });
}

module.exports = {
    indexCalculadora,
    calcular
};


