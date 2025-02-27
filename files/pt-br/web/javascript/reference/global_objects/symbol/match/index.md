---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
---

{{JSRef}}

O símbolo **`Symbol.match`** é conhecido por especificar a compatibilidade de uam expressão regular contra uma string. Essa função é chamada pelo método {{jsxref("String.prototype.match()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.match")}}

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

## Descrição

Essa função também é usada para identificar se um objeto tem o comportamento de uma expressão regular. Por exemplo, os métodos {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} e {{jsxref("String.prototype.includes()")}}, verificar se o primeiro agumento é uma expressão regular e irá lançar um {{jsxref("TypeError")}} se eles forém. Agora, se o símbolo `match` é configurado para `false` (ou um valor [Falsy](/pt-BR/docs/Glossary/Falsy) ), ele indica que o objeto não tem intensão de ser usado como um ojbeto de expressão regular

{{js_property_attributes(0,0,0)}}

## Exemplos

### Desativando a verificação `isRegExp`

O seguinte código vai lançar um {{jsxref("TypeError")}}:

```js
"/bar/".startsWith(/bar/);

// Lança um TypeError, como /bar/ é uma expressão regular
// não Symbol.match não é modificado.
```

Entretanto, se você configurar `Symbol.match` para `false`, a verificação `isRegExp` (que usa a propriedade `match` ) que o objeto não é uma expressão regular. O método `startsWith` e `endsWith` não vão lançar um `TypeError` como consequência.

```js
var re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}
