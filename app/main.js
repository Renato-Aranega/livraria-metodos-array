let livros = []
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()
const ElementoParaInserirLivros = document.getElementById('livros')


async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}





