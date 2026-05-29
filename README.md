# Alura Books — Projeto Inicial

Pequeno projeto de exemplo para prática de manipulação de arrays em JavaScript, criado como exercício do curso da Alura.

**Descrição**
- Projeto single-page estático que lista e demonstra operações sobre um conjunto de livros (filtros, mapas, reduções e ordenações) usando JavaScript puro.

**Tecnologias**
- **HTML:** Estrutura da página ([index.html](index.html)).
- **CSS:** Estilos e layout ([style.css](style.css)).
- **JavaScript:** Lógica e exemplos de métodos de array localizados em `app/`:
  - [app/main.js](app/main.js)
  - [app/metodoFilter.js](app/metodoFilter.js)
  - [app/metodoForEach.js](app/metodoForEach.js)
  - [app/metodoMap.js](app/metodoMap.js)
  - [app/metodoReduce.js](app/metodoReduce.js)
  - [app/metodoSort.js](app/metodoSort.js)

**Como executar**
- Abra o arquivo [index.html](index.html) diretamente no navegador (duplo clique) ou sirva o diretório por um servidor HTTP simples.

Com Python 3 (na pasta do projeto):
```
python -m http.server 8000
# Acesse http://localhost:8000
```

Com o Live Server do VS Code: clique com o botão direito em `index.html` e selecione "Open with Live Server".

**Estrutura do projeto (resumo)**
- [index.html](index.html) — página principal
- [style.css](style.css) — estilos
- [app/](app/) — scripts JavaScript com demonstrações dos métodos de array
- [imagens/](imagens/) — imagens usadas na página

**Contribuição**
- Pull requests são bem-vindos. Para pequenas melhorias, abrir uma issue descrevendo a alteração é suficiente.