document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector('tbody');
    const url = new URL("http://localhost:8080/pessoas");
    const arrayPessoas = new Array();
    fetch(url)
    .then(dados => dados.json())
    .then(resposta => { resposta.content.forEach(pessoa => { 
            table.innerHTML +=
            `
            <tr>
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.cpf}</td>
                <td>${pessoa.sexo}</td>
                <td>${pessoa.dataNascimento}</td>
                <td>${pessoa.nacionalidade}</td>
                <td>${pessoa.naturalidade}</td>    
                <td class="editar">Editar</td>
                <td class="excluir">Excluir</td>                            
            <tr>  
            `
        })
    })
});