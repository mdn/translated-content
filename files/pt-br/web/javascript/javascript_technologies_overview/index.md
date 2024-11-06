---
title: Visão geral das tecnologias JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

Enquanto o [HTML](/pt-BR/docs/Web/HTML) é usado para armazenar o conteúdo e a formatação de uma página web e o [CSS](/pt-BR/docs/Web/CSS) define a formatação e a aparência, o [JavaScript](/pt-BR/docs/Web/JavaScript) é usado para adicionar interatividade a uma página web e criar aplicações web ricas.

No entanto, o termo genérico "JavaScript" tal como é entendido no contexto do navegador contém vários elementos bem diferentes. Um deles é a linguagem principal (ECMAScript), outra é a coleção das [Web APIs](/pt-BR/docs/Web/Reference/API), incluindo o DOM (Document Object Model).

## JavaScript, a linguagem principal (ECMAScript)

O núcleo da linguagem JavaScript é padronizado pelo comitê ECMA TC39 como uma linguagem chamada [ECMAScript](/pt-BR/docs/JavaScript/Language_Resources). A última versão da especificação é [ECMAScript 5.1](https://ecma-international.org/ecma-262/5.1/).

Este núcleo da linguagem é também usado em ambientes fora do navegador, por exemplo em [node.js](https://nodejs.org/).

### O que se enquadra no escopo ECMAScript?

Entre outras coisas, o ECMAScript define:

- A sintaxe da linguagem (regras de análise, palavras-chave, controle de fluxo, inicialização de objetos literais...)
- Mecanismos para manuseio de erros ({{jsxref("Statements/throw", "throw")}}, {{jsxref("Statements/try...catch", "try...catch")}}, habilidade para criar tipos de {{jsxref("Error")}} definido pelo usuário)
- Tipos (_boolean_, _number_, _string_, _function_, _object_...)
- O objeto global. Num navegador esse objeto global é o objeto _window_, mas o ECMAScript apenas define as APIs, não especificamente para navegadores, por exemplo: _parseInt_, _parseFloat_, _decodeURI_, _encodeURI_...
- Um mecanismo de herança baseado em protótipo
- Objetos e funções embutidas ({{jsxref("JSON")}}, {{jsxref("Math")}}, [Array](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), _Object introspection_...)
- [Modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) (rigoroso)

### Suporte do navegador

Desde Agosto de 2014, as atuais versões dos principais navegadores implementaram o [ECMAScript 5.1](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) e o [ECMAScript 2015](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla), mas versões mais antigas continuam usando a implementação do ECMAScript 3 e apenas partes do ECMAScript 5. Navegadores mais modernos já implementaram grande parte do [ECMAScript 6](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla).

### Futuro

A 6ª edição principal do ECMAScript foi oficialmente aprovada e publicada como norma em 17 de junho de 2015 pela Assembléia Geral da ECMA. Desde então, as Edições ECMAScript são publicadas anualmente.

### API de Internacionalização

A [API de Especificação de Internacionalização do ECMASCRIPT](https://ecma-international.org/ecma-402/1.0/) é uma adição para a Especificação de Linguagem ECMAScript, também padronizada pela Ecma TC39. A API de internacionalização fornece intercalação (comparação de string), formatação numérica, formatação de data e tempo para aplicações JavaScript, permitindo que aplicativos escolham o idioma e adaptem a funcionalidade às suas necessidades. O padrão foi aprovado em dezembro de 2012; O status das implementações nos navegadores é rastreado na documentação do objeto Intl. A especificação de Internacionalização hoje em dia também é ratificada anualmente e os navegadores aprimoram as suas implementações constantemente.

## As APIs Web e o DOM

### WebIDL

A [Especificação da WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) provê a junção entre as tecnologias DOM e o ECMAScript.

### O núcleo do DOM

O Document Object Model (DOM) é uma **convenção multiplataforma** e **lndependente de linguagem** para representação e interação com objetos em documentos HTML, XHTML, e XML. Objetos no **DOM tree** (árvore do DOM) podem ser adereçados e manipulados utilizando métodos em objetos. A [W3C](/pt-BR/docs/Glossary/W3C) padroniza o Core Document Object Model (Núcleo do Documento do Modelo de Objeto), o qual define interfaces de agnóstico de linguagem que abstraem documentos HTML e XML como objetos, e também define mecanismos para manipular essa abstração. Entre as definições do DOM, podemos encontrar:

- A estrutura do documento, um tree model (modelo de árvore), e a arquitetura do DOM Event (Evento do DOM) no [DOM core](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) (núceo do DOM): [`Node`](/pt-BR/docs/Web/API/Node), [`Element`](/pt-BR/docs/Web/API/Element), [`DocumentFragment`](/pt-BR/docs/Web/API/DocumentFragment), [`Document`](/pt-BR/docs/Web/API/Document), [`DOMImplementation`](/pt-BR/docs/Web/API/DOMImplementation), [`Event`](/pt-BR/docs/Web/API/Event), [`EventTarget`](/pt-BR/docs/Web/API/EventTarget), …
- Uma definição menos rigorosa do DOM Event Architecture, assim como eventos específicos no [DOM events](https://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- Outras coisas como o [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) e o [DOM Range](https://html5.org/specs/dom-range.html).

Pela perspectiva do EXMScript, objetos definidos na especificação do DOM são chamados de "host objects".

### HTML DOM

[HTML](https://www.whatwg.org/html), a linguagem de marcação da Web, é especificada nos termos do DOM. Situado além dos conceitos de abstração definidos no DOM Core, o HTML também define o _significado_ dos elementos. O HTML DOM inclui coisas como a propriedade `className` em elementos HTML, ou APIs como {{ domxref("document.body") }}.

A especificação HTML também define restrições nos objetos; por exemplo, ela requer que todos os filhos de um elemento `ul`, que representam uma lista desordenada, sejam elementos `li`, que representem itens de lista. Em linhas gerais, ele também proíbe o uso de elementos e atributos que não estão definidos em um padrão.

Procurando pelo [`Document`](/pt-BR/docs/Web/API/Document) object, [`Window`](/pt-BR/docs/Web/API/Window) object, e outros elementos DOM? Leia a [Documentação do DOM](/pt-BR/docs/Web/API/Document_Object_Model).

## Outras APIs de destaque

- As funções [`setTimeout`](/pt-BR/docs/Web/API/setTimeout) e [`setInterval`](/pt-BR/docs/Web/API/setInterval) foram inicialmente especificadas na interface [`Window`](https://www.whatwg.org/html/#window) no Padrão HTML.
- [XMLHttpRequest.](https://dev.w3.org/2006/webapi/XMLHttpRequest-2/) Possibilita enviar requisições HTTP assíncronas.
- A [Fetch API](https://fetch.spec.whatwg.org/) fornece uma abstração mais ergonômica para requisições de rede.
- [CSS Object Model.](https://dev.w3.org/csswg/cssom/) O CSSOM é utilizado para abstrair regras CSS como objetos
- [WebWorkers.](https://www.whatwg.org/specs/web-workers/current-work/) API que permite computação paralela.
- [WebSockets.](https://www.whatwg.org/C/#network) API que permite comunicação bi-direcional de baixo-nível.
- [Canvas 2D Context.](https://www.whatwg.org/html/#2dcontext) API de ilustração (desenho) para o elemento canvas.
- A [interface WebAssembly](https://webassembly.github.io/spec/js-api) fornece utilitários para comunicação entre código JavaScript e módulos [WebAssembly](/pt-BR/docs/WebAssembly).

Ambientes sem navegador (como Node.js) geralmente não têm APIs DOM — porque não interagem com um documento — mas ainda assim implementam muitas APIs da Web, como [`fetch()`](/pt-BR/docs/Web/API/fetch) e [`setTimeout()`](/pt-BR/docs/Web/API/setTimeout).

### Suporte de Navegadores

Todo desenvolvedor já percebeu que [o DOM é uma bagunça](https://ejohn.org/blog/the-dom-is-a-mess/). A uniformidade no suporte dos Navegadores varia muito de feature para feature. A principal razão para essa situação é o fato de que muitas features importantes do DOM possuem (quando possuem) especificações não muito claras. Além disso, diferentes Navegadores adicionaram features incompatíveis para a sobreposição de casos de uso (como o event model do Internet Explorer). A atual (Junho de 2011) tendência é que a W3C e particularmente a WHATWG estão definindo features mais antigas em detalhes, a fim de melhorar a interoperabilidade. Seguindo esta tendência, Navegadores estão melhorando suas implementações baseados nessas especificações.

Uma abordagem comum, porém não a mais confiável, para compatibilidade cross-browser é utilizar a biblioteca JavaScript. Essas bibliotecas abstrem as features do DOM e garantem que suas API's funcionem de forma similar nos navegadores. Alguns dos frameworks mais utilizados são o [jQuery](https://jquery.com/), o [prototype](https://www.prototypejs.org/), e o [YUI](https://developer.yahoo.com/yui/).
