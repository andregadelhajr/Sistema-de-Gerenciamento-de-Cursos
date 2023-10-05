const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// Configurando o Express para servir arquivos estáticos na pasta "public"
app.use(express.static(__dirname + '/public'));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para receber os dados do formulário (GET e POST)
app.all('/dados', (req, res) => {
    if (req.method === 'POST') {
        // Se os dados foram enviados via POST, redirecione para a página "dados.html"
        const { nome, endereco, telefone, data } = req.body;
        res.redirect(`/dados?nome=${nome}&endereco=${endereco}&telefone=${telefone}&data=${data}`);
    } else if (req.method === 'GET') {
        // Se a página foi acessada via GET, exiba a página "dados.html"
        res.sendFile(__dirname + '/views/dados.html');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
