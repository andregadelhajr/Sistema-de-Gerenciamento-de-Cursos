let produtos = Array();

function criar_produto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionar_produto(p) {
    // Verifica se o ID já está cadastrado
    const idExistente = produtos.some(produto => produto.id === p.id);

    if (idExistente) {
        return { error: "ID já cadastrado" };
    } else {
        produtos.push(p);
        return p;
    }
}

function listar_produtos() {
    return produtos;
}

function editar_produto(id, qtdAtual) {
    let pEditado;
    produtos.forEach(p => {
        if(p.id == id){
            p.qtd = qtdAtual;
        }
        pEditado = p;
    });
    return pEditado;
}

function remover_produto(id) {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
        produtos.splice(index, 1);
    }
}

//não e muito eficiente em termos de uso de memória
// function remover_produto(id) {
//     produtos = produtos.filter(p => p.id !== id);
// }

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}