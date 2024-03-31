# <p align="center">Projeto Password Manager</p>

## Contexto

O objetivo desse projeto foi desenvolver uma aplicação em `react` com `typescript` para gerenciar senhas. Adicionando as funcionalidades de adicionar ou remover um serviço usado na internet e esconder ou mostrar as senhas.

<details>

<summary><strong>Rode o projeto localmente</strong></summary><br>

> ⚠️ É preciso ter o [Node](https://nodejs.org/en) instalado em sua máquina.

Clone o repositório:

```SHELL
git clone git@github.com:mairess/project-password-manager.git
```

Instale as dependências:

```SHELL
npm install
```

Inicie o vite server:

```SHELL
npm run dev
```

</details>

<details>

<summary><strong>Rode o projeto com o docker</strong></summary><br>

> ⚠️ É preciso ter o [Docker](https://www.docker.com/get-started/) instalado em sua máquina.

Clone o repositório:

```SHELL
git clone git@github.com:mairess/project-password-manager.git
```

Suba o container:

```SHELL
docker compose up -d
```

O vite server estará disponível na porta `3000`:

```HTML
http://localhost:3000
```

</details>

## Competências desenvolvidas

- Capacidade de `ler o estado` e atualizar o estado de um componente.
- Capacidade de usar `props` para transmitir informações entre componentes.
- Capacidade de usar `callbacks` para transmitir informações de `componentes-filhos` para `componentes-pais`.
