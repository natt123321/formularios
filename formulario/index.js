function cadastrar(event) {
    //n envie o formulario
    event.preventDefault()
}

function buscar(event) {
    //buscar pelo cep
    if (event.key == "Enter") {
// variaveis que referenciam
// os elementos do html
        const logradouro = document.getElementById('logradouro')
        const bairro = document.getElementById('bairro')
        const cep = document.getElementById('cep')
        const estado = document.getElementById('estado')
        const uf = document.getElementById('uf')
        const cidade = document.getElementById('cidade')
        const url = `https://viacep.com.br/ws/${cep.value}/json/`

        fetch(url).then(response => response.json()).then(dados => {
            logradouro.value = dados.logradouro
            bairro.value = dados.bairro
            cep.value = dados.cep
            estado.value = dados.estado
            uf.value = dados.uf
            cidade.value = dados.localidade
        })
        .catch(erro => {
            "Erro ao buscar os dados!"
        })
        alert(url)
    }
    
}

