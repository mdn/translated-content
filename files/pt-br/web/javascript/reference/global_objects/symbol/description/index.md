---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
---

{{JSRef}}

A propriedade leitura somente **`description`** é uma string que retorna a descrição opcional de objetos {{JSxRef("Symbol")}}.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.description")}}

```js interactive-example
console.log(Symbol("desc").description);
// Expected output: "desc"

console.log(Symbol.iterator.description);
// Expected output: "Symbol.iterator"

console.log(Symbol.for("foo").description);
// Expected output: "foo"

console.log(`${Symbol("foo").description}bar`);
// Expected output: "foobar"
```

## Descrição

{{JSxRef("Symbol")}} objetos podem ser criados com uma uma descrição opcional na qual podem ser usados para debbuging mas não para acessar o próprio símbolo. A `Symbol.prototype.description` propriedade pode ser usada para ler essa descrição. É diferente do `Symbol.prototype.toString()` pois não contém a string incluida "`Symbol()`". Veja os exemplos.

## Exemplos

### Usando descrição

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// símbolos conhecidos
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// símbolos globais
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{JSxRef("Symbol.prototype.toString()")}}
- Polyfill: <https://npmjs.com/symbol.prototype.description>
