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

const busca = document.querySelector("#buscar");
const id = document.querySelector("#id-pessoa");
busca.addEventListener("click", () => {
    const url = new URL(`http://localhost:8080/pessoas/${id.value}`);
    fetch(url)
    .then(dados => dados.json())
    .then(resposta => { 
        console.log(resposta.dataNascimento);
        document.querySelector("#nome").value = resposta.nome;
        document.querySelector("#cpf").value = resposta.cpf;
        document.querySelector("#email").value = resposta.email;
        document.querySelector("#sexo").innerHTML = `<option selected>${resposta.sexo}</option>`;
        document.querySelector("#dataNascimento").value = resposta.dataNascimento;
        document.querySelector("#nacionalidade").value = resposta.nacionalidade;
        document.querySelector("#naturalidade").value = resposta.naturalidade;
    });
});