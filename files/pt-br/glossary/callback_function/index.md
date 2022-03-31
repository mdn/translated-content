---
title: Função Callback
slug: Glossary/Callback_function
translation_of: Glossary/Callback_function
original_slug: Glossario/Callback_function
---

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Aqui está um pequeno exemplo:

```js
function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);
```

O exemplo acima é de uma {{glossary("synchronous")}} callback, uma vez que é executada imediatamente.

Note, no entanto, que callbacks são normalmente utilizados para continuar a execução do código após uma operação {{glossary("asynchronous")}} ser terminada — essas são chamadas asynchronous callbacks. Um bom exemplo são as funções callback executadas dentro de um bloco [`.then()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) encadeado ao final de uma promessa após essa promessa ser cumprida ou rejeitada. Essa estrutura é usada em muitas APIs da web modernas, como a {{domxref("fetch","fetch()")}}.

## Aprenda mais
### Conhecimento geral

- {{interwiki("wikipedia", "Callback", "Callback")}} no Wikipedia
