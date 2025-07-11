# 📚 Projeto Angular - Cadastro e Listagem de Livros

Este projeto foi desenvolvido como **trabalho prático da disciplina DGT2809 - Aprofundamento em Desenvolvimento Front-End**, do curso de Desenvolvimento Full Stack da Estácio.

## 👨‍💻 Desenvolvido por
**Samuel Davidson**  
[WISA TECH](wisatech.com.br)  
Julho de 2025

---

## 🎯 Objetivo do Projeto

Criar uma aplicação web em Angular com:

- Cadastro de livros
- Listagem de livros
- Serviço de editoras
- Navegação por rotas
- Utilização de formulários
- Estilização com Bootstrap

---

## 🧱 Estrutura

- `Livro`: Classe com id, título, resumo, autores e código da editora.
- `Editora`: Classe com código e nome.
- `ControleLivrosService`: Serviço responsável por gerenciar os livros.
- `ControleEditoraService`: Serviço que fornece a lista de editoras.
- `LivroListaComponent`: Componente para listar os livros.
- `LivroDadosComponent`: Componente com formulário para cadastrar novos livros.
- `AppComponent`: Componente principal da aplicação.

---

## 🚀 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/Pesqueir0/Trabalho-Pr-tico-DGT2809-Aprofundamento-em-Desenvolvimento-Front-End.git

# Acesse a pasta do projeto
cd livros-angular

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200/
