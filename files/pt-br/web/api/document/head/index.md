---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef("DOM")}}

Retorna o elemento {{HTMLElement("head")}} do documento atual. Se existir mais de um elemento `<head>`, apenas o primeiro será devolvido.

## Sintaxe

```
var objRef = document.head;
```

## Exemplo

```js
// No HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert(document.head === document.querySelector("head")); // true
```

## Notas

`document.head` suporta apenas leitura. Qualquer tentativa de atribuir um valor a essa propriedade irá falhar silenciosamente ou irá, usando o modo [ECMAScript Strict](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) de um browser Gecko, disparar um [`TypeError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{domxref("document.body")}}
