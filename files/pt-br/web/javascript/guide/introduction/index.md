---
title: Introdução
slug: Web/JavaScript/Guide/Introduction
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Este capítulo apresenta o JavaScript e discute alguns de seus conceitos fundamentais.

## O que você realmente já deveria saber?

Este guia assume que você tem os seguintes conhecimentos básicos:

- Um entendimento geral da internet e da World Wide Web ([WWW](/pt-BR/docs/Glossary/World_Wide_Web)).
- Um bom conhecimento de HyperText Markup Language ([HTML](/pt-BR/docs/Glossary/HTML))
- Alguma experiência em programação. Se você é novo em programação, veja alguns tutorias na página inicial sobre [JavaScript](/pt-BR/docs/Web/JavaScript).

## Onde encontrar informações sobre JavaScript

A documentação de JavaScript na MDN inclui o seguinte:

- [Aprendendo sobre a internet](/pt-BR/docs/Learn) fornece informações aos iniciantes e introduz os conceitos básicos de programação e da internet.
- [Guia JavaScript](/pt-BR/docs/Web/JavaScript/Guide) (este guia) dá uma visão geral sobre a linguagem de programação JavaScript e seus objetos.
- [Referência JavaScript](/pt-BR/docs/Web/JavaScript/Reference) provê um material de referência detalhado da linguagem JavaScript.

Se você é novo em JavaScript, comece com os artigos na [área de aprendizado](/pt-BR/docs/Learn) e com o [Guia JavaScript](/pt-BR/docs/Web/JavaScript/Guide). Quando você já possuir uma compreensão dos princípios básicos, você pode usar a [Referência JavaScript](/pt-BR/docs/Web/JavaScript/Reference) para ter mais detalhes sobre objetos e declarações.

## O que é JavaScript?

JavaScript é uma linguagem de script orientada a objetos e plataforma cruzada usada para tornar as páginas da Web interativas (por exemplo, com animações complexas, botões clicáveis, menus pop-up etc.). Há também versões mais avançadas do lado do servidor do JavaScript, como Node.js, que permitem adicionar mais funcionalidades a um site do que baixar arquivos (como colaboração em tempo real entre vários computadores). Dentro de um ambiente de host (por exemplo, um navegador da Web), o JavaScript pode ser conectado aos objetos de seu ambiente para fornecer controle programático sobre eles.

JavaScript tem uma biblioteca padrão de objetos, como: `Array`, `Date`, e `Math`, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações. O núcleo do JavaScript pode ser estendido para uma variedade de propósitos, complementando assim a linguagem:

- _O lado cliente do JavaScript_ estende-se do núcleo linguagem, fornecendo objetos para controlar um navegador web e seu _Document Object Model_ (DOM). Por exemplo, as extensões do lado do cliente permitem que uma aplicação coloque elementos em um formulário HTML e responda a eventos do usuário, como cliques do mouse, entrada de formulário e de navegação da página.
- _O lado do servidor do JavaScript_ estende-se do núcleo da linguagem, fornecendo objetos relevantes à execução do JavaScript em um servidor. Por exemplo, as extensões do lado do servidor permitem que uma aplicação comunique-se com um banco de dados, garantindo a continuidade de informações de uma chamada para a outra da aplicação, ou executar manipulações de arquivos em um servidor.

Isso significa que, no navegador, o JavaScript pode alterar a aparência da página da Web (DOM). E, da mesma forma, o JavaScript Node.js no servidor pode responder a solicitações personalizadas enviadas por código executado no navegador.

## JavaScript e Java

JavaScript e Java são similares em algumas coisas, mas são diferentes em outras. O JavaScript assemelha-se ao Java, porém não possui tipagem estática e checagem rigída de tipos como o Java. JavaScript segue a sintaxe básica do Java, convenções de nomenclatura e construções de controle de fluxo, razões pelas quais esta linguagem foi renomeada de LiveScript para JavaScript.

Em contraste com o sistema em tempo de compilação das classes construídas por declarações no Java, JavaScript suporta um sistema em tempo de execução com base em um pequeno número de tipos de dados representando valores numéricos, booleanos, e strings. JavaScript tem um modelo de objeto baseado em protótipo em vez do modelo, mais comum, de objeto baseado em classes. O modelo baseado em protótipo fornece herança dinâmica; isto é, o que é herdado pode variar para objetos individuais. JavaScript também suporta funções sem quaisquer requisitos especiais declarativos. As funções podem ser propriedades de objetos, executando como métodos.

JavaScript é uma linguagem mais livre em comparação a Java. Você não tem de declarar todas as variáveis, classes e métodos. Você não tem que se preocupar com o fato dos métodos serem públicos, privados ou protegidos, e você não tem que implementar interfaces. Variáveis, parâmetros e tipo de retorno da função não são explicitamente tipados.

Java é uma linguagem de programação baseada em classes, projetada para execução rápida e segurança de tipos. Segurança de tipo significa que, por exemplo, você não pode converter um número inteiro em Java para uma referência de objeto ou acessar a memória privada corrompendo bytecodes Java. O modelo baseado em classes do Java significa que os programas são exclusivamente constituídos por classes e seus métodos. Herança de classe do Java e tipagem forte geralmente requerem hierarquias de objetos fortemente acoplados. Esses requisitos tornam a programação em Java mais complexa do que a programação em JavaScript.

Em contraste, JavaScript descende em espírito de uma linhagem de linguagens menores com tipagem dinâmica, como HyperTalk e dBASE. Essas linguagens de script oferecem ferramentas de programação para um público muito mais amplo por causa de sua sintaxe mais fácil, funções especializadas embutidas e requisitos mínimos para a criação de objetos.

| JavaScript                                                                                                                                                                         | Java                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orientada a objeto. Sem distinção entre tipos e objetos. A herança é feita através do protótipo e as propriedades e métodos podem ser adicionadas a qualquer objeto dinamicamente. | Baseada em classes. Objetos são divididos em classes e instâncias com toda a herança através da hierarquia da classe. Classes e instâncias não podem ter propriedades ou métodos adicionados dinamicamente. |
| Os tipos de dados das variáveis não precisam ser declarados (tipagem dinâmica, vagamente tipado)                                                                                   | Os tipos de dados das variáveis devem ser declarados (tipagem estática, fortemente tipado).                                                                                                                 |
| Não pode escrever automaticamente no disco rigído.                                                                                                                                 | Pode escrever automaticamente no disco rigído.                                                                                                                                                              |

## JavaScript e a especificação ECMAScript

O JavaScript é padronizado pela [Ecma International](https://www.ecma-international.org/) — a associação Europeia para a padronização de sistemas de comunicação e informação (antigamente ECMA era um acrônimo para European Computer Manufacturers Association) para entregar uma linguagem de programação padronizada, internacional baseada em JavaScript. Esta versão padronizada de JavaScript, chamada ECMAScript, comporta-se da mesma forma em todas as aplicações que suportam o padrão. As empresas podem usar a linguagem de padrão aberto para desenvolver a sua implementação de JavaScript. O padrão ECMAScript é documentado na especificação ECMA-262.

O padrão ECMA-262 também é aprovado pela [ISO](https://www.iso.org/home.html) (International Organization for Standardization) como ISO-16262. Você também pode encontrar a especificação no site da [Ecma International](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). A especificação ECMAScript não descreve o Document Object Model (DOM), que é padronizado pelo [World Wide Web Consortium (W3C)](https://www.w3.org/) e/ou [WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org). O DOM define a maneira na qual os objetos do documento HTML estão expostos no seu script. Para ter uma ideia melhor sobre as diferentes tecnologias que são usadas durante a programação com JavaScript, consultar o artigo [Visão Geral das tecnologias JavaScript](/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview).

### Documentação JavaScript versus especificação ECMAScript

A especificação ECMAScript é um conjunto de requisitos para a implementação ECMAScript. É útil se você desejar implementar recursos compatíveis com os padrões da linguagem em sua implementação ECMAScript ou _engine_ (como SpiderMonkey no Firefox, ou v8 no Chrome).

O documento ECMAScript _não_ se destina a ajudar programadores de script. Utilize a documentação JavaScript para obter informações ao escrever scripts.

A especificação ECMAScript utiliza terminologia e sintaxe que podem ser desconhecidos para um programador JavaScript. Embora a descrição da linguagem possa ser diferente no ECMAScript, a linguagem em si continua sendo a mesma. JavaScript suporta todas as funcionalidades descritas na especificação ECMAScript.

A documentação JavaScript descreve aspectos da linguagem que são apropriadas para um programador JavaScript.

## Começando com JavaScript

Para começar a aprender JavaScript é fácil: Tudo o que você precisa é de um navegador web moderno. Versões recentes do [Firefox](https://www.mozilla.org/en-CA/firefox/new/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/en-us/edge), e [Safari](https://www.apple.com/safari/) todas suportam os recursos discutidos neste guia.

Uma ferramenta muito útil para explorar o JavaScript é o JavaScript Console (às vezes chamado de Web Console, ou apenas o console): é uma ferramenta que permite inserir JavaScript e executá-lo na página atual.

A captura de tela aqui mostra o [Firefox Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), mas todos os navegadores modernos vêm com um console que funciona de maneira semelhante.

### Abrindo o console

As instruções exatas para abrir o console variam de um navegador para outro:

- [Abrindo o console no Firefox](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Abrindo o console no Chrome](https://developer.chrome.com/docs/devtools/open)
- [Abrindo o console no Microsoft Edge](https://learn.microsoft.com/pt-br/microsoft-edge/devtools-guide-chromium/console/)

### Inserindo e executando JavaScript

O console aparece na parte inferior da janela do navegador. Na parte inferior do console há uma linha de entrada que você pode usar para inserir JavaScript, e a saída aparece no painel acima:

![Uma janela do navegador com o console da web aberto na parte inferior, contendo duas linhas de entrada e saída. O texto pode ser inserido abaixo disso.](2019-04-04_00-15-29.png)

O console funciona exatamente da mesma forma que `eval`: a última expressão digitada é retornada. Por uma questão de simplicidade, pode-se imaginar que toda vez que algo é inserido no console, ele é realmente cercado por `console.log` em torno de `eval`, assim:

```js
console.log(eval("3 + 5"));
```

### Entrada de várias linhas no console

Por padrão, se você pressionar <kbd>Enter</kbd> após inserir uma linha de código, a string digitada será executada. Para inserir entrada multilinha:

- Se a string digitada estiver incompleta (por exemplo, você digitou `function foo() {`), o console tratará <kbd>Enter</kbd> como uma quebra de linha e permitirá que você digite outra linha.
- Se você segurar <kbd>Shift</kbd> enquanto pressiona <kbd>Enter</kbd>, o console tratará isso como uma quebra de linha e permitirá que você digite outra linha.
- Somente no Firefox, você pode ativar [modo de entrada multi-linha](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode), em onde você pode inserir várias linhas em um mini-editor e, em seguida, executar tudo quando estiver pronto.

Para começar a escrever JavaScript, abra o console, copie o seguinte código e cole na linha de comando:

```js
(function () {
  "use strict";
  /* Ínicio do seu código */
  function greetMe(seuNome) {
    alert(`Olá ${seuNome}`);
  }

  greetMe("Mundo");
  /* Fim do seu código */
})();
```

Pressione <kbd>Enter</kbd> para vê-lo abrir em seu navegador!

## O que vem em seguida?

Nas páginas seguintes, este guia apresentará a sintaxe e os recursos da linguagem JavaScript, para que você possa escrever aplicativos mais complexos.

Mas, por enquanto, lembre-se de sempre incluir `(function(){"use strict";` antes de seu código e adicionar `})();` ao final de seu código. Os artigos [modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) e [IIFE](/pt-BR/docs/Glossary/IIFE) explicam o que eles fazem, mas por enquanto eles podem ser considerados em fazer o seguinte:

1. Evitam a semântica em JavaScript que engana os iniciantes.
2. Impedem que trechos de código executados no console interajam entre si (por exemplo, ter algo criado em uma execução de console sendo usado para uma execução de console diferente).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
