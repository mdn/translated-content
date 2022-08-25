---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
tags:
  - JavaScript
  - Propriedade
  - Prototype
  - Referencia
  - RegExp
  - Expressões Regulares
browser-compat: javascript.builtins.RegExp.global
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/global
---
{{JSRef}}

A propriedade **`global`** indica se a flag `g` é ou não usada com a expressão regular. `global` é uma propriedade de apenas leitura de uma expressão regular individual.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}{{js_property_attributes(0, 0, 1)}}

## Descrição

O valor de `global` é um {{jsxref("Boolean")}} e `true` se a flag `g` foi usada; se não, `false`. A flag `g` indica que a expressão regular deve ser testada com todas as possíveis combinações numa string. A expressão regular definada tanto como `global` (`g`) e `sticky` (`y`) vão ignorar a flag `global` e performar sticky matches.

Você não pode mudar essa propriedade diretamente.

## Exemplos

### Usando global

```js
const regex = new RegExp('foo', 'g');

console.log(regex.global);  // true

const str = 'fooexamplefoo';

const str1 = str.replace(regex, '');

console.log(str1);  // Output: example

const regex1 = new RegExp('foo');

const str2 = str.replace(regex1, '');

console.log(str2);  // Output: examplefoo
```

## Especificações

{{Specifications}}

## Compatibilidade com os browsers

{{Compat}}

## Veja também

- {{jsxref("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
