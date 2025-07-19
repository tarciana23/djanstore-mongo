# 📚 DjanStore API

Uma API RESTful desenvolvida em Node.js para gerenciamento de livros, autores e favoritos de uma livraria fictícia chamada **DjanStore**.

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express**
* **Mongoose** (MongoDB)
* **Nodemon** (em desenvolvimento)
* **JSON** (dados mockados)

## 📁 Estrutura do Projeto

```
djanStore-server/
│
├── app.js                  # Arquivo principal da aplicação
├── db.js                   # Configuração de conexão com o banco de dados
├── favoritos.json          # Base de dados mockada para favoritos
├── livros.json             # Base de dados mockada para livros
├── package.json            # Dependências e scripts
│
├── controllers/            # Camada de controle (lógica das rotas)
│   ├── autores.js
│   ├── favoritos.js
│   └── livro.js
│
├── routes/                 # Definição de rotas da aplicação
│   ├── autores.js
│   ├── favoritos.js
│   └── livro.js
│
├── services/               # Camada de serviços (operações com o banco ou arquivos)
│   ├── autor.js
│   ├── favorito.js
│   └── livro.js
│
└── teste.js                # Script auxiliar para testes
```

## 📌 Funcionalidades

* ✅ Cadastro e listagem de **livros**
* ✅ Cadastro e listagem de **autores**
* ✅ Adição e visualização de **favoritos**

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/djanStore-server.git
cd djanStore-server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a aplicação

```bash
npm run dev
```

> A API será executada em: `http://localhost:3000`

## 📫 Rotas da API

| Recurso   | Método | Rota         | Descrição              |
| --------- | ------ | ------------ | ---------------------- |
| Livros    | GET    | `/livros`    | Lista todos os livros  |
| Livros    | POST   | `/livros`    | Cadastra um novo livro |
| Autores   | GET    | `/autores`   | Lista todos os autores |
| Favoritos | GET    | `/favoritos` | Lista os favoritos     |

## 💡 Observações

* Este projeto está em desenvolvimento e utiliza dados mockados.
* Pode ser facilmente conectado a um banco MongoDB real.

## 📄 Licença

Este projeto está sob a licença MIT.
