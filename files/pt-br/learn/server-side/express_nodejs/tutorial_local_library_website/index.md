---
title: "Express: Tutorial para criar o site de uma Biblioteca Local"
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}

Este artigo tem como objetivo explicar o que você vai aprender ao longo dos próximo tutoriais e dar uma visão geral do projeto que vamos desenvolver: um site de "local library" (Biblioteca Local, em tradução livre).

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Leia a
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o"
          >Indrodução ao Express</a
        >. Para os próximos artigos, você também precisa ler
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/ambiente_de_desenvolvimento"
          >Conhecendo Node como ambiente de desenvolvimento</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Apresentar a aplicação que será desenvolvida ao longo deste tutorial e
        permitir aos leitores entender quais tópicos serão abordados.
      </td>
    </tr>
  </tbody>
</table>

## Visão Geral

Bem-vindo ao tutorial MDN "Express: Tutorial para criar o site de uma Biblioteca Local", no qual vamos desenvolver um website para gerenciar o catálogo de uma biblioteca.

Neste passo a passo você vai:

- Usar a ferramenta _Express Aplication Generator (Gerador de Aplicações Express)_ para criar a estrutura do site e da aplicação.
- Iniciar e encerrar o Web Server do Node.
- Usar um banco de dados para armazenar os dados de sua aplicação.
- Criar caminhos para a requisição de diferentes informações e templates ("views") para renderizar os dados em arquivos HTML no browser.
- Trabalhar com formulários.
- Subir sua aplicação para o ambiente de produção (deploy).

Alguns dos itens acima você já conhecebe bem, outros você sabe apenas um pouco. Não se preocupe. Ao final do tutorial, você saberá o sucifiente para desenvolver, por conta própria, um simples app Express.

## O site da Biblioteca Local

_LocalLibrary_ ou Biblioteca Local é o nome do website que vamos criar durante os tutoriais. O objetivo do site é prover um catálogo para uma pequena biblioteca, onde usuários podem pesquisar livros disponíveis e gerenciar suas contas.

Esse exemplo foi escolhido cuidadosamente. Isso porque para construir a "biblioteca" vamos utilizar recursos básicos e fundamentais do Express, além de funcionalidades e conceitos que você poderá aplicar em qualquer outro website:

- Em nossos primeiros artigos vamos criar uma biblioteca virtual na qual os usuários poderão procurar quais livros estão disponíveis para empréstimo. Tal funcionalidade nos exigirá entender operações padrões em sites web, como leituras e visualizações de conteúdos registrados em banco de dados.
- Durante nosso trabalho, o exemplo da biblioteca se estenderá naturalmente para mais funcionalidades e informações disponíveis na biblioteca. Por exemplo: permitir que novos livros sejam adicionados aos catálogos. Somente essa _feature_ nos permitirá aprender sobre o uso de formulários e autenticação de usuários.

Apesar de ser um exemplo bem extenso, nossa Biblioteca Local apresentará o mínimo de informações para ajudar você a entender e se desenvolver melhor no uso do Express. A aplicação terá informações sobre livros, cópias de livros, autores e outras informações-chave. Nós não vamos, no entanto, armazenar informações sobre outros itens que a biblioteca pode emprestar e nem vamos oferecer a infraestrutura necessária para suportar os serviços de uma biblioteca grande (de verdade).

## Estou perdido, onde encontro o código-fonte?

Com o avanço nos tutoriais, forneceremos trechos de códigos para você copiar e colar. Você também receberá trechos apenas com códigos iniciais para completá-los e aprimorá-los por conta própria.

Dica: Em vez de simplesmente copiar e colar todos os códigos, a sugestão é digitá-los. Isso ajuda você a se familiarizar com a sintaxe, melhorando o nível de aprendizado.

Se ficar perdido no meio do caminho, fique calmo. Você pode acessar o código inteiro pelo [Github](https://github.com/mdn/express-locallibrary-tutorial).

> **Nota:** As versões específicas do Node, Express e outros módulos que adotados no tutorial estão listados no arquivo [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json).

## Sumário

Agora que você entedeu o que é o site "Biblioteca Local " e o que vamos aprender ao longo do projeto, é hora de criar nossa estrutura de pastas e arquivos.

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}
