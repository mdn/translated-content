---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
---

{{JSRef}}

O símbolo **`Symbol.matchAll`** é conhecido por retornar um iterador, que produz conrrespondências de uma expressão regular com uma string. Essa função é usada pelo método {{jsxref("String.prototype.matchAll()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.matchAll", "shorter")}}

```js interactive-example
const re = /[0-9]+/g;
const str = "2016-01-02|2019-03-07";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// Expected output: Array ["2016", "01", "02", "2019", "03", "07"]
```

## Descrição

Esse símbolo é usado pelo {{jsxref("String.prototype.matchAll()")}} e especificado no {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}. Os próximos dois exemplos retornam o mesmo resultado:

```js
"abc".matchAll(/a/);

/a/[Symbol.matchAll]("abc");
```

Esse método existe para costumizar o comportamento conrrespondente com as subclasses {{jsxref("RegExp")}}.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Usuando Symbol.matchAll

```js
let re = /[0-9]+/g;
let str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
//  Array ["2016", "01", "02", "2019", "03", "07"]
```

Veja {{jsxref("String.prototype.matchAll()")}} e {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} para mais exemplos.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
