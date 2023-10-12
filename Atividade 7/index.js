const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index.html");
});

app.post("/dados", function (req, res) {
    let consulta = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNascimento: req.body.dataNascimento,
        endereco: req.body.endereco,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone,
        especialidade: req.body.especialidade,
        dataConsulta: req.body.dataConsulta,
        horaConsulta: req.body.horaConsulta,
        medicamentosAlergicos: req.body.medicamentosAlergicos,
        informacoesAdicionais: req.body.informacoesAdicionais
    };

    let erro_form = false;

    // Verifique se algum campo obrigatório está vazio
    if (
        consulta.nome === "" ||
        consulta.cpf === "" ||
        consulta.dataNascimento === "" ||
        consulta.endereco === "" ||
        consulta.uf === "" ||
        consulta.cep === "" ||
        consulta.email === "" ||
        consulta.telefone === "" ||
        consulta.especialidade === "" ||
        consulta.dataConsulta === "" ||
        consulta.horaConsulta === ""
    ) {
        erro_form = true;
    }

    res.render("dados.html", { consulta, erro_form });
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});
