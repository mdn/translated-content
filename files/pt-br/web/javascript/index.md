---
title: JavaScript
slug: Web/JavaScript
---

{{JsSidebar}}

**JavaScript®** (às vezes abreviado para **JS**) é uma linguagem leve, interpretada e baseada em objetos com _[funções de primeira classe](http://en.wikipedia.org/wiki/First-class_function),_ mais conhecida como a linguagem de script para páginas Web, mas usada também em [vários outros ambientes sem browser](http://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages), tais como [node.js](https://nodejs.org/), [Apache CouchDB](https://couchdb.apache.org/) e Adobe Acrobat. O JavaScript é uma linguagem [baseada em protótipos](https://en.wikipedia.org/wiki/Prototype-based), [multi-paradigma](https://en.wikipedia.org/wiki/Programming_paradigm) e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Saiba mais [sobre o JavaScript](/pt-BR/docs/conflicting/Web/JavaScript).

Essa seção do site é dedicada à linguagem JavaScript e não às partes que são específicas para páginas Web e outros ambientes. Para mais informações sobre as {{Glossary("API", "APIs")}} específicas para páginas Web, por favor consulte as seções [Web APIs](/pt-BR/docs/Web/API) e [DOM](/pt-BR/docs/Glossary/DOM).

O padrão JavaScript é [ECMAScript](/pt-BR/docs/JavaScript/Language_Resources). Desde 2012, todos os [navegadores modernos](http://kangax.github.io/compat-table/es5/) possuem suporte total ao ECMAScript 5.1. Navegadores mais antigos suportam pelo menos ECMAScript 3. Em 17 de Junho de 2015, a [ECMA International](https://www.ecma-international.org/) publicou a sexta versão do ECMAScript, que é oficialmente chamado de ECMAScript 2015, e foi inicialmente conhecido como ECMAScript 6 ou ES6. Desde então, as especificações do ECMAScript são lançadas anualmente. Essa documentação faz referência à última versão de referência, que atualmente é a [ECMAScript 2018](https://tc39.github.io/ecma262/).

Não se deve confundir o JavaScript com a [linguagem de programação Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>). Tanto _Java_ quanto _JavaScript_ são marcas registradas da Oracle nos Estados Unidos da América e em outros países. No entanto, as duas linguagens de programação possuem sintaxe, semânticas e usos muito diferentes.

## Tutoriais

Aprenda a programar em JavaScript com guias e tutoriais.

### Para iniciantes

Vá para a [Área de aprendizado de JavaScript](/pt-BR/docs/Learn/JavaScript) se você quer aprender JavaScript mas não tem experiência prévia com JavaScript ou programação. Os módulos completos que estão disponíveis lá são os seguintes:

- [Primeiros passos em JavaScript](/pt-BR/docs/Learn/JavaScript/First_steps)
  - : Respostas para algumas perguntas básicas como _O que é JavaScript?_, _Com o que se parece?_ e _O que se pode fazer?_, bem como funcionalidades importantes do JavaScript, tais como variáveis, strings, números e vetores.
- [Elementos básicos do JavaScript](/pt-BR/docs/Learn/JavaScript/Building_blocks)
  - : Continuamos nossa cobertura das funcionalidades fundamentais do JavaScript, direcionando nossa atenção para tipos de blocos de código encontrados comumente, como expressões condicionais, laços, funções e eventos.
- [Introduzindo objetos em JavaScript](/pt-BR/docs/Learn/JavaScript/Objects)
  - : O entendimento da natureza da orientação à objetos do JavaScript é importante se você quiser levar o seu conhecimento da linguagem para o próximo nível e escrever códigos mais eficientes, por isso oferecemos esse módulo para te ajudar.

### Guia do JavaScript

- [Guia do JavaScript](/pt-BR/docs/Web/JavaScript/Guide)
  - : Um guia muito mais detalhado sobre a linguagem JavaScript, para pessoas que possuem experiência prévia com JavaScript ou outra linguagem de programação.

### Intermediário

- [Uma re-introdução ao JavaScript](/pt-BR/docs/Web/JavaScript/Language_overview)
  - : Uma visão geral para aqueles que _pensam_ que conhecem JavaScript.
- [Estruturas de dados do JavaScript](/pt-BR/docs/Web/JavaScript/Data_structures)
  - : Um resumo das estruturas de dados disponíveis em JavaScript.
- [Comparações de igualdade e uniformidade](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : O JavaScript fornece três operações diferentes para comparar valores: igualdade estrita utilizando `===`, igualdade ampla usando `==` e o método {{jsxref("Global_Objects/Object/is", "Object.is()")}}.

### Avançado

- [Herança e a cadeia de protótipos](/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Explicação da herança baseada em protótipos, que costuma ser amplamente mal entendida e subestimada.
- [Modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)
  - : O modo estrito define que você não pode usar nenhuma variável antes de inicializá-la. É uma variante restrita do ECMAScript 5, para um desempenho mais performático e uma depuração mais fácil.
- [Vetores JavaScript tipados](/pt-BR/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Vetores JavaScript tipados oferecem um mecanismo para acesso a dados binários brutos.
- [Gerenciamento de memória](/pt-BR/docs/Web/JavaScript/Memory_management)
  - : Ciclo de vida da memória e coleta de lixo em JavaScript.
- [Modelo de concorrência e o loop de eventos](/pt-BR/docs/Web/JavaScript/Event_loop)
  - : JavaScript tem um modelo de concorrência baseado em _loop de eventos_.

## Referência

Navegue pela documentação completa da [Referência de JavaScript](/pt-BR/docs/Web/JavaScript/Reference).

- [Objetos globais](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects)
  - : Conheça os objetos padrão nativos {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} e {{jsxref("WeakSet")}}, entre outros.
- [Expressões e operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators)
  - : Saiba mais sobre o comportamento dos operadores de JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, a [precedência dos operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence) e muito mais.
- [Instruções e declarações](/pt-BR/docs/Web/JavaScript/Reference/Statements)
  - : Saiba como {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} e outras instruções e palavras-chave do JavaScript funcionam.
- [Funções](/pt-BR/docs/Web/JavaScript/Reference/Functions)
  - : Aprenda como trabalhar com funções em JavaScript para desenvolver suas aplicações.

## Ferramentas & recursos

Ferramentas úteis para escrever e depurar seu código **JavaScript**.

- [Ferramentas do Firefox para desenvolvedores](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Scratchpad](/pt-BR/docs/Tools/Scratchpad), [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) e muito mais.
- [JavaScript Shells](/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview)
  - : Um shell JavaScript permite que você teste rapidamente fragmentos de código JavaScript.
- [TogetherJS](https://togetherjs.com/)
  - : Colaboração fácil. Ao adicionar o TogetherJS ao seu site, seus usuários podem ajudar uns aos outros em tempo real!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Perguntas do Stack Overflow com a tag _JavaScript_.
- [Versões do JavaScript e notas de lançamento](/pt-BR/docs/Web/JavaScript/New_in_JavaScript)
  - : Navegue no histórico de funcionalidades do JavaScript e no status das implementações.
- [JSFiddle](https://jsfiddle.net/)
  - : Edite JavaScript, CSS e HTML e obtenha resultados em tempo real. Utilize recursos externos e colabore com sua equipe online.
