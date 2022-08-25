---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
tags:
  - JavaScript
  - Propriedade
  - Prototype
  - Referencia
  - RegExp
  - Expressões Regulares
browser-compat: javascript.builtins.RegExp.source
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/source
---
{{JSRef}}

A propriedade **`source`** retorna a {{jsxref("String")}} que contém o texto fonte de um objeto regexp, ela não contém as duas barras oblíquas de ambos os lados e nenhuma flag.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}{{js_property_attributes(0, 0, 1)}}

## Exemplos

### Usando source

```js
const regex = /fooBar/ig;

console.log(regex.source); // "fooBar", não contém /.../ e "ig".
```

### Expressões regulares vazias e escaping

Começando com ECMAScript 5, a propriedade `source` não mais retorna uma string vazia para expressões regulares vazias. Invés disso, a string `(?:)` é retornada. Ademais, terminadores de linha (como "\n") são de escape agora.

```js
new RegExp().source; // "(?:)"

new RegExp('\n').source === '\n';  // true, antes do ES5
new RegExp('\n').source === '\\n'; // true, começando o ES5
```

## Especificações

{{Specifications}}

## Compatibilidade com os browsers

{{Compat}}

## Veja também

- {{jsxref("RegExp.prototype.flags")}}
