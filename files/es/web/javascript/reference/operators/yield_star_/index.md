---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

`La expresión` **`yield*`** es usada para delegar a otro {{jsxref("Statements/function*", "generator")}} u objeto iterable.

## Sintaxis

```
yield* [[expression]];
```

- `expression`
  - : La expresión que retorna un objeto iterable

## Descripción

La expresión `yield*` itera sobre el operador realizando yield de cada valor retornado por este.

El valor de la expresion `yield*` es el valor retornado por el iterador en si mismo cuando es finalizado (ej., cuando `done` es true).

## Ejemplos

### Delegando a otro generator

En el siguiente código, los valores declarados con yield en `g1()` son devueltos por las llamadas a `next()` al igual que en `g2()`.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Otros objetos iterables

Además de los objetos generator, `yield*` también se puede usar `yield sobre otros tipos de iterables`, ej. arrays, strings u objetos arguments.

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### El valor de la expresión `yield*`

`yield*` es una expresión, no una declaración, por lo que se evalua como un valor.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// g4() returned { value: "foo", done: true } at this point

console.log(result); // "foo"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Protocolos de iteración](/es/docs/Web/JavaScript/Referencia/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
