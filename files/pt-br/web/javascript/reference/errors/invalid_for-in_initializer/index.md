---
title: "SyntaxError: as declarações da cabeça do laço for-in podem não ter inicializadores"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

O JavaScript em [modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)-somente exceção
"as declarações for-in loop head podem não ter inicializadores"
isso ocorre quando a cabeça de um [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) contém
uma expressão inicializadora, tal como `for (var i = 0 in obj)`. Isto não é
permitido em laços for-in em modo estrito. Além disso, declarações léxicas com inicializadores como `for (const i = 0 in obj)` também não são permitidas fora do modo estrito.

## Mensagem

```
SyntaxError: for-in loop variable declaration may not have an initializer. (V8-based)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: a lexical declaration in the head of a for-in loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-in loop header. (Safari)
```

## Tipo de erro

{{jsxref("SyntaxError")}}.

## O que ocorreu errado?

A cabeça de um laço [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) contém uma expressão inicializadora.
Ou seja, uma variável é declarada e atribuída um valor `for (var i = 0 in obj)`.
No modo não estrito, esta declaração de cabeça é silenciosamente ignorada e comporta-se como `for (var i in obj)`.
No [modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode), contudo, é lançado um `SyntaxError`. Além disso, declarações léxicas com inicializadores como `for (const i = 0 in obj)` também não são permitidas fora do modo estrito, e produzirão sempre um `SyntaxError`.

## Exemplos

Esse exemplo lança um `SyntaxError`:

```js example-bad
const obj = { a: 1, b: 2, c: 3 };

for (const i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Laço for-in válido

Pode remover o inicializador (`i = 0`) na cabeça do laço de entrada.

```js example-good
const obj = { a: 1, b: 2, c: 3 };

for (const i in obj) {
  console.log(obj[i]);
}
```

### Iteração de array

O laço for...in [não deve ser usado para iteração de Array](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in).
Pretendia utilizar um laço [`for`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
em vez de um laço `for-in` para iterar um {{jsxref("Array")}}? O
laço `for` permite também definir um inicializador então:

```js example-good
const arr = ["a", "b", "c"];

for (let i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Veja também

- [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)
  – also disallows an initializer in both strict and non-strict mode.
- [`for`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for) –
  preferred for array iteration, allows to define an initializer.
