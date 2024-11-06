---
title: "Tutorial Django: Website da Biblioteca Local"
slug: Learn/Server-side/Django/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

O primeiro artigo da nossa série de tutoriais práticos explica o que você irá aprender, e fornece uma visão do site de exemplo "biblioteca local" que estaremos trabalhando e evoluindo em artigos seguintes.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Ler a
        <a href="/pt-BR/docs/Learn/Server-side/Django/Introduction"
          >introdução ao Django</a
        >. Para os próximos artigos você também necessitará ter montando o
        <a href="/pt-BR/docs/Learn/Server-side/Django/development_environment"
          >ambiente de desenvolvimento</a
        >
        para o Django.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Introduzir o exemplo da aplicação usado neste tutorial, e permitir que
        os leitores entendam quais tópicos serão abordados.
      </td>
    </tr>
  </tbody>
</table>

## Visão geral

Bem vindo ao tutorial Django "Biblioteca Local" do MDN, no qual desenvolveremos um website que pode ser usado para gerenciar um catálogo para uma biblioteca local.

Nessa série de artigos você irá:

- Usar as ferramentas do Django para criar a estrutura de um website e aplicação.
- Começar e parar o servidor de desenvolvimento.
- Criar models para representar os dados da aplicação.
- Usar o _admin_ do Django para popular os dados do seu site.
- Criar _views_ para recuperar dados específicos em resposta a diferentes requisições, e _templates_ para renderizar os dados como HTML para serem exibidos no navegador.
- Criar _mappers_ para associar diferentes padrões de URL com as*views* específicas.
- Adicionar autorização de usuário e sessões para controlar o comportamento e acesso do site.
- Trabalhar com formulários.
- Criar teste de código para a sua aplicação.
- Usar a segurança do Django de forma eficaz.
- Implantar sua aplicação para produção.

Você já aprendeu alguns desses tópicos e passou brevemente por outros. Até o final dessa série de tutoriais você deve saber o suficiente para desenvolver uma aplicação simples em Django sozinho.

## Website da Biblioteca Local - LocalLibrary

_LocalLibrary_ é o nome do site que vamos criar e evoluir ao longo dessa série de tutoriais. Como seria de esperar, a proposta do site é fornecer um catálogo online para uma pequena biblioteca local, onde os usuários podem procurar por livros disponíveis e gerenciar suas contas.

Esse exemplo foi cuidadosamente escolhido porque escalar para mostrar quanto detalhe precisamos, muito ou pouco, e pode ser usado para mostrar quase qualquer recurso do Django. Mais importante ainda, nos permite fornecer um caminho _guiado_ através da funcionalidade mais importante do estrutura web do Django:

- Nos primeiros tutoriais, vamos definir uma biblioteca simples de _navegação exclusiva_ que os membros podem usar para procurar quais livros estão disponíveis. Isso nos permite explorar operações simples que são comuns para quase todos os sites: leitura e exibição de conteúdo de um banco de dados
- Conforme formos progredindo, o exemplo da biblioteca irá (naturalmente) se estender para demonstrar recursos mais avançados do Django. Nós podemos expandir a biblioteca, por exemplo, para permitir que usuários reservem livros, e usar isto para demonstrar como usar formulários e suporte a autenticação de usuários.

Embora este seja um exemplo extenso, ele é chamado Biblioteca **Local** por uma razão - nós esperamos mostrar o mínimo de informação necessária para ajudar a desenvolver e executar uma aplicação com o Django rapidamente. Como resultado nós armazenaremos informações sobre livros, seus exemplares, autores e outras informações chave. Contudo, nós não armazenaremos informações sobre outros itens que uma biblioteca pode utilizar, ou fornecer a infraestrutura necessária para dar suporte a sites multi-biblioteca ou outros recursos do tipo "grande biblioteca".

## Onde posso obter o código fonte?

Na medida em que você avança com o tutorial, nós forneceremos os fragmentos de código apropriados para que você possa copiá-los e colá-los em cada ponto. Também existirão outros códigos que você estenderá por conta própria (com alguma orientação).

Se você travar, a versão completa do website pode ser encontrada [aqui no Github](https://github.com/mdn/django-locallibrary-tutorial).

## Resumo

Agora que você sabe um pouco mais sobre o website _LocalLIbrary_ e o que você irá aprender, é hora de começar a criar um [escopo do projeto](/pt-BR/docs/Learn/Server-side/Django/skeleton_website).

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
