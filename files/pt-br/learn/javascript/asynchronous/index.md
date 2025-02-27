---
title: JavaScript Assíncrono
slug: Learn/JavaScript/Asynchronous
---

{{LearnSidebar}}Neste módulo vamos entender {{Glossary("JavaScript")}} [Assíncrono](/pt-BR/docs/Glossary/Asynchronous), porque isso é importante e como pode ser usado para lidar com operações potencialmente bloqueantes, como a busca de recursos em um servidor remoto.

## Pre requisitos

Javascript Assíncrono é um tópico razoavelmente avançado e é aconselhada a leitura dos módulos [Primeiros Passos com Javascript](/pt-BR/docs/Learn/JavaScript/First_steps) e [Elementos construtivos do Javascript](/pt-BR/docs/Learn/JavaScript/Building_blocks) antes de continuar.

Se você não estiver familiarizado com os conceitos de programação assíncrona, a sugestão é iniciar com o artigo [Conceitos gerais da programação assíncrona](/pt-BR/docs/conflicting/Learn/JavaScript/Asynchronous/Introducing) desse módulo. Caso contrário, você pode provavelmente pular para o módulo [Introdução ao Javascript Assíncrono](/pt-BR/docs/Learn/JavaScript/Asynchronous/Introdu%C3%A7%C3%A3o).

> [!NOTE]
> Se você está estudando a partir de um computador/tablet/ outro dispositivo onde não é capaz de criar seus próprios arquivos, é possível executar os códigos de exemplo (a maioria deles) em plataformas como [JSBin](https://jsbin.com/) ou [Glitch](https://glitch.com).

## Guias

- [Conceitos gerais da programação assíncrona](/pt-BR/docs/conflicting/Learn/JavaScript/Asynchronous/Introducing)
  - : Nesse artigo vamos explorar um número de conceitos importantes relacionados à programação assíncrona e como aparece nos browsers Web. Você deve entender estes conceitos antes de seguir adiante através dos outros artigos neste módulo.
- [Introdução ao Javascript Assíncrono](/pt-BR/docs/Learn/JavaScript/Asynchronous/Introdu%C3%A7%C3%A3o)
  - : Nesse artigo vamos recapitular brevemente os problemas associados ao Javascript síncrono e introduzir algumas das diferentes técnicas do Javascript assícrono que irá encontrar mais a frente, mostrando como essas técnicas podem nos ajudar a resolver tais problemas.
- [Javascript assícrono cooperativo: Timeouts e intervalos](/pt-BR/docs/conflicting/Learn/JavaScript/Asynchronous_ae5a561b0ec11fc53c167201aa8af5df)
  - : Aqui contemplamos os métodos tradicionais que o Javascript possui disponível para executar código de forma assíncrona após decorrido um certo periodo de tempo ou em um intervalo regular (e.g. um determinado número de vezes por segundo), discutir sua utilidade e perceber alguns problemas inerentes a eles.
- [Manipulando elegantemente operações assíncronas com Promises](/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Promises são um novo recurso da linguagem Javascript que permitem adiar ações até que a ação anterior esteja concluída ou responder com falha. Isso é extremamente útil para montar uma sequência de operações para que funcione corretamente. Este artigo lhe orienta como as Promises funcionam, onde verá elas sendo utilizadas em [WebAPIs](/pt-BR/docs/Web/API). Também aprenderá como escrever suas próprias promises.
- [Facilitando a programação assícrona com async e await](/pt-BR/docs/conflicting/Learn/JavaScript/Asynchronous/Promises)
  - : Promises podem ser um pouco complexas de construir e entender. Por esse motivo, os navegadores modernos implementado funções `async` e o operador `await`. O primeiro permite que funções padrão se comportem implicitamente de forma assíncrona com promises, enquanto que o último pode ser usado dentro de funções `async` para esperar por 'promessas' antes que a função continue. Isso faz com que o encadeamento de 'promessas' seja mais fácil de ler.
- [Escolhendo a abordagem correta](/pt-BR/docs/Learn/JavaScript/Asynchronous/Escolhendo_abordagem_correta)
  - : Para concluir este módulo, vamos considerar as diferentes técnicas de programação e as features que abordamos do começo ao fim, considerando quais e quando utilizar, com recomendações e advertências das armadilhas mais comuns.

## Veja Também

- [Programação Assícrona](https://eloquentjavascript.net/11_async.html) do livro online [Eloquent JavaScript](https://eloquentjavascript.net/), por Marijn Haverbeke.

> **Nota:** **Nota do tradutor**: A segunda edição do _Eloquent Javascript_ foi traduzida pela comunidade brasileira do Javascript e está disponível em [Javascript Eloquente - 2ª Edição](https://github.com/braziljs/eloquente-javascript). Até o momento da tradução deste artigo, a comunidade está trabalhando na conclusão da 3ª edição.
