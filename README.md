# 📚 Livraria Interativa — Métodos de Array & Programação Funcional (`livraria-metodos-array`)

> Aplicação interativa desenvolvida com JavaScript Vanilla para demonstrar o poder da programação funcional e manipulação de coleções via métodos de array (`map`, `filter`, `reduce`, `sort` e `forEach`), consumindo dados assíncronos via Fetch API.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Paradigm](https://img.shields.io/badge/Paradigm-Functional%20Programming-blueviolet.svg)](#arquitetura-funcional)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 Visão Geral da Aplicação

O projeto simula o front-end de uma livraria virtual moderna de tecnologia, estruturada para processar e exibir dinamicamente um acervo de títulos técnicos obtidos de uma API REST remota. O foco central reside na aplicação de padrões de **imutabilidade**, **funções de alta ordem (Higher-Order Functions)** e **programação declarativa**, eliminando laços iterativos tradicionais e efeitos colaterais indesejados (*side effects*).

---

## 🔬 Arquitetura Funcional e Métodos de Array

Cada operação de transformação e filtragem de dados é isolada em módulos de responsabilidade única dentro do diretório `app/`:

```
API Externa (JSON)
       │  (Fetch API / Async-Await)
       ▼
 [ app/main.js ] ──► Estado Central (livros)
       │
       ├──► [ app/metodoMap.js ]     ──► Transformação de preços com imutabilidade
       ├──► [ app/metodoFilter.js ]  ──► Filtragem por predicados (categoria e estoque)
       ├──► [ app/metodoReduce.js ]  ──► Agregação de somatório total do acervo ativo
       ├──► [ app/metodoSort.js ]    ──► Ordenação não-destrutiva ([...livros].sort)
       └──► [ app/metodoForEach.js ] ──► Renderização dinâmica de templates no DOM
```

### Detalhamento das Implementações:

1. **Transformação com `Array.prototype.map()` (`app/metodoMap.js`)**
   - Transforma a coleção de livros aplicando regras promocionais de desconto percentual fixo.
   - Preserva o estado de origem através do operador spread (`{ ...livro, preco: ... }`), gerando um novo array imutável e com escopo devidamente isolado via `const`.

2. **Seleção de Subconjuntos com `Array.prototype.filter()` (`app/metodoFilter.js`)**
   - Implementa múltiplos predicados de seleção: filtragem categórica (Front-end, Back-end, Dados) e filtragem por disponibilidade de estoque (`quantidade > 0`).
   - Atualização dinâmica da interface refletindo instantaneamente as preferências do usuário.

3. **Agregação com `Array.prototype.reduce()` (`app/metodoReduce.js`)**
   - Realiza cálculo determinístico de acumulador numérico para sintetizar o valor financeiro total dos títulos em estoque selecionados, sem necessidade de variáveis temporárias externas.

4. **Ordenação Segura com `Array.prototype.sort()` (`app/metodoSort.js`)**
   - Resolve o problema comum de mutação in-place do JavaScript clássico através do padrão defensivo:
     ```javascript
     const livrosOrdenados = [...livros].sort((a, b) => a.preco - b.preco);
     ```
   - Garante que a ordem canônica do acervo original seja preservada no estado da aplicação.

5. **Consumo Assíncrono (`app/main.js`)**
   - Inicialização assíncrona com `async/await` consumindo endpoint REST externo com tratamento e despacho imediato para a camada de renderização.

---

## 📂 Estrutura de Arquivos

```plaintext
alura-books/
├── app/
│   ├── main.js           # Ponto de entrada, consumo Fetch API e inicialização
│   ├── metodoFilter.js   # Filtros categóricos e por disponibilidade
│   ├── metodoForEach.js  # Template strings e manipulação eficiente do DOM
│   ├── metodoMap.js      # Mapeamento e aplicação de descontos imutáveis
│   ├── metodoReduce.js   # Cálculo cumulativo do valor total de estoque
│   └── metodoSort.js     # Ordenação defensiva por preço
├── imagens/              # Assets estáticos das capas dos livros
├── index.html            # Estrutura semântica HTML5
├── style.css             # Estilização CSS responsiva
└── README.md             # Documentação técnica do projeto
```

---

## 🚀 Como Executar

Por ser uma aplicação pura em JavaScript Vanilla (sem dependência de bundlers pesados), basta utilizar qualquer servidor HTTP estático:

### Via Python 3
```bash
# Clone o repositório
git clone https://github.com/Renato-Aranega/livraria-metodos-array.git
cd livraria-metodos-array

# Inicie o servidor
python -m http.server 8000
```
Acesse em: `http://localhost:8000`

### Via Node (npx)
```bash
npx serve .
```

---

## 👤 Autor
Desenvolvido por **[Renato Barbosa Aranega](https://github.com/Renato-Aranega)**.