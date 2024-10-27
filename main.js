const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
});

function adicionaContato() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    // Adiciona o contato ao array
    contatos.push({
        nome: inputNome.value,
        telefone: inputTelefone.value
    });

    // Atualiza a tabela
    atualizaTabela();

    // Limpa os campos do formulário
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = ''; // Limpa a tabela

    // Adiciona cada contato à tabela
    contatos.forEach(contato => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}
