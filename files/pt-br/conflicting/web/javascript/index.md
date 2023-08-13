---
title: Sobre JavaScript
slug: conflicting/Web/JavaScript
---

{{JsSidebar}}

## O que é JavaScript?

**JavaScript**® (frequentemente abreviado como **JS**) é uma linguagem de programação leve, interpretada e orientada a objetos com [funções de primeira classe](https://en.wikipedia.org/wiki/First-class_functions), conhecida como a linguagem de scripting para páginas Web, mas também [utilizada em muitos ambientes fora dos navegadores](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages). Ela é uma linguagem de scripting [baseada em protótipos](https://en.wikipedia.org/wiki/Prototype-based_programming), multi-paradigma e dinâmica, suportando os estilos orientado a objetos, imperativo e funcional.

JavaScript roda no _client side_ da web, o que pode ser usado para projetar / programar o comportamento de uma página web a partir da ocorrência de um evento. JavaScript é uma linguagem fácil de se aprender mas que também é poderosa, sendo amplamente utilizada para controlar o comportamento de páginas web.

Diferente do que é dito popularmente, **JavaScript _não é_ "Java Interpretado"**. Em poucas palavras, JavaScript é uma linguagem de scripting dinâmica que suporta a construção de objetos [baseada em protótipos](/pt-BR/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-Based_vs._Prototype-Based_Languages). A sintaxe básica é intencionalmente similar tanto a Java quanto a C++, com o intuito de diminuir o número de conceitos exigidos para se aprender a linguagem. Estruturas da linguagem, como `if`, `for, while`, `switch` e `try ... catch` funcionam da mesma maneira do que nestas linguagens (ou quase.)

JavaScript pode funcionar tanto como uma linguagem [procedural](https://en.wikipedia.org/wiki/Procedural_programming) como uma linguagem [orientada a objetos](/pt-BR/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript). Objetos são criados programaticamente em JavaScript, onde métodos e propriedades são anexados a objetos vazios **em tempo de execução**, ao invés das definições sintáticas de classe normalmente encontradas em linguagens compiladas como C++ e Java. Assim que um objeto é construído, ele pode ser usado como um esquema (ou protótipo) para se criar objetos similares.

As capacidades dinâmicas de JavaScript incluem a construção de objetos em tempo de execução, listas variáveis de parâmetros, variáveis de funções, criação dinâmica de scripts (através da função [`eval`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval)), introspecção de objetos (através da estrutura `for ... in`), e recuperação de código fonte (programas escritos em JavaScript podem descompilar funções de volta a seus textos originais).

Para uma discussão mais aprofundada sobre programação em JavaScript, siga os links da seção [Recursos para JavaScript](#Recursos_para_JavaScript).

## Que implementações de JavaScript estão disponíveis?

O projeto Mozilla oferece duas implementações de JavaScript. A implementação **original** de JavaScript foi criada por Brendan Eich enquanto trabalhava na Netscape, e desde então foi atualizada para conformar-se ao padrão _ECMA-262 Edition 5_ e suas versões mais recentes. Esta _engine_, de codinome [SpiderMonkey](/pt-BR/docs/Mozilla/Projects/SpiderMonkey), foi implementada em C/C++. A _engine_ [Rhino](/pt-BR/docs/Rhino), criada predominantemente por Norris Boyd (também na Netscape) é uma implementação de JavaScript escrita em Java. Assim como SpiderMonkey, Rhino é compátivel com o padrão _ECMA-262 Edition 5_.

Muitas optimizações significantes no tempo de execução, como TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) e IonMonkey, foram adicionadas à _engine_ de JavaScript SpiderMonkey com o passar do tempo. Há sempre trabalho sendo feito para melhorar a performance de execução do JavaScript.

Além das implementações citadas anteriormente, existem ainda outras _engines_ populares de JavaScript como:-

- A [V8](https://code.google.com/p/v8/) da Google, que é utilizada pelo navegador Google Chrome e as versões mais recentes do navegador Opera. Ela também é usada como a _engine_ do [Node.js](http://nodejs.org).
- O [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro) utilizado em alguns navegadores WebKit como Apple Safari.
- [Carakan](http://my.opera.com/ODIN/blog/carakan-faq), usado em versões antigas do navegador Opera.
- A _engine_ [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) utilizada pelo Internet Explorer (apesar de que a linguagem implementada é formalmente chamada de "JScript" para evitar problemas de _trademark_).

Cada engine de JavaScript da Mozilla expõe uma API pública que os desenvolvedores de aplicativos podem utilizar para integrar JavaScript em seus softwares. O ambiente _host_ mais utilizado para JavaScript é o navegador web. Navegadores web tipicamente usam a API pública para criar **objetos de _host_** responsáveis pelo trabalho de refletir o [DOM](https://www.w3.org/DOM/) no JavaScript.

Outra aplicação comum para JavaScript é usa-lo como uma linguagem de scripting para o _server side_ (da Web). Um servidor web de JavaScript expõe objetos de _host_ que representam uma solicitação HTTP e objetos de resposta, que são então manipulados por um programa em JavaScript que gera páginas web dinamicamente. [Node.js](http://nodejs.org) é um exemplo popular deste tipo de uso.

## Recursos para JavaScript

- [SpiderMonkey](/pt-BR/docs/Mozilla/Projects/SpiderMonkey)
  - : Informações pertinentes à implementação de JavaScript em C/C++ criada pela Mozilla (SpiderMonkey), incluindo como integra-la em aplicativos.
- [Rhino](/pt-BR/docs/Mozilla/Projects/Rhino)
  - : Informações pertinentes à implementação de JavaScript em Java (Rhino).
- [Recursos da linguagem](/pt-BR/docs/Web/JavaScript/Language_Resources)
  - : Indicações para os padrões publicados de JavaScript.
- [Uma reintrodução ao JavaScript](/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : [O guia de JavaScript](/pt-BR/docs/Web/JavaScript/Guide) e a [referência para JavaScript](/pt-BR/docs/Web/JavaScript/Reference).

JavaScript® é uma marca ou marca registrada pertencente à Oracle nos E.U.A. e outros países.
