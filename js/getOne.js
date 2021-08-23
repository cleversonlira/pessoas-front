const busca = document.querySelector("#buscar");
const id = document.querySelector("#id-pessoa");
busca.addEventListener("click", () => {
    const url = new URL(`http://localhost:8080/pessoas/${id.value}`);
    fetch(url)
    .then(dados => dados.json())
    .then(resposta => { 
        if (resposta.nome === undefined) {
            console.log("entrou no if: é undefined");        
        } else {
            document.querySelector("#nome").value = resposta.nome;
            document.querySelector("#cpf").value = resposta.cpf;
            document.querySelector("#email").value = resposta.email;
            document.querySelector("#sexo").value = resposta.sexo;
            document.querySelector("#dataNascimento").value = resposta.dataNascimento;
            document.querySelector("#nacionalidade").value = resposta.nacionalidade;
            document.querySelector("#naturalidade").value = resposta.naturalidade;
        }   
    }).catch(resposta => console.log(resposta));
});