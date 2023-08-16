---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

O método **`Promise.race(iterable)`** retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.

## Sintaxe

```
Promise.race(iterable);
```

### Parâmetros

- iterable
  - : Um objeto iterável, como um {{jsxref("Array")}}. Veja [iterável](/pt-BR/docs/Web/JavaScript/Guide/iterable).

## Descrição

A função `race` retorna uma `Promise` que é estabelecida da mesma forma que a primeira promise passada estabelecer. Ela resolve ou rejeita, o que acontecer primeiro.

## Exemplos

### Usando `Promise.race` – exemplos com `setTimeout`

```js
var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function (value) {
  console.log(value); // "two"
  // Ambos resolvem, mas p2 é mais rápido
});

var p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(
  function (value) {
    console.log(value); // "three"
    // p3 é mais rápido, então ela resolve
  },
  function (reason) {
    // Não é chamado
  },
);

var p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(
  function (value) {
    // Não é chamado
  },
  function (reason) {
    console.log(reason); // "six"
    // p6 é mais rápido, então ela rejeita
  },
);
```

## Especificações

| Especificação                                            | Status           | Comentário                           |
| -------------------------------------------------------- | ---------------- | ------------------------------------ |
| {{SpecName('ES6', '#sec-promise.race', 'Promise.race')}} | {{Spec2('ES6')}} | Definição inicial em um padrão ECMA. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.race")}}

## Ver também

- {{jsxref("Promise")}}
