---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}

O método **`Promise.resolve(value)`** retorna um objeto {{jsxref("Promise")}} que é resolvido com o valor passado. Se o valor for _thenable_ (ex: tiver um método {{jsxref("Promise.then", "then")}}), a promise retornada irá "seguir" esse _thenable_, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor.

## Sintaxe

```
Promise.resolve(value);
Promise.resolve(promise);
Promise.resolve(thenable);
```

### Parametros

- value
  - : Argumento a ser resolvido pela `Promise`. Pode também ser uma `Promise` ou um thenable a resolver.

### Valor retornado

A {{jsxref("Promise")}} que será resolvida com o valor passado ou com a {{jsxref("Promise")}} passada como valor, caso o valor seja um objeto {{jsxref("Promise")}}

## Descrição

A função estática `Promise.resolve` retorna uma `Promise` de que será resolvida.

## Examples

### Usando o método estático `Promise.resolve`

```js
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // not called
  },
);
```

### Resolvendo um array

```js
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
  console.log(v[0]); // 1
});
```

### Resolvendo outra `Promise`

```js
var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function (v) {
  console.log(v); // true
});
```

A ordem invertida dos logs acontece devido ao fato de que os handlers são chamados assincronamente. Veja como o `then` funciona [aqui](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value).

### Resolvendo thenables e disparando Errors

```js
// Resolving a thenable object
var p1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, object casted to a Promise

p1.then(
  function (v) {
    console.log(v); // "fulfilled!"
  },
  function (e) {
    // not called
  },
);

// Thenable throws before callback
// Promise rejects
var thenable = {
  then: function (resolve) {
    throw new TypeError("Throwing");
    resolve("Resolving");
  },
};

var p2 = Promise.resolve(thenable);
p2.then(
  function (v) {
    // not called
  },
  function (e) {
    console.log(e); // TypeError: Throwing
  },
);

// Thenable throws after callback
// Promise resolves
var thenable = {
  then: function (resolve) {
    resolve("Resolving");
    throw new TypeError("Throwing");
  },
};

var p3 = Promise.resolve(thenable);
p3.then(
  function (v) {
    console.log(v); // "Resolving"
  },
  function (e) {
    // not called
  },
);
```

## Especificações

| Especificação                                                      | Status               | Comentário                        |
| ------------------------------------------------------------------ | -------------------- | --------------------------------- |
| {{SpecName('ES6', '#sec-promise.resolve', 'Promise.resolve')}}     | {{Spec2('ES2015')}}  | Definição inicial no padrão ECMA. |
| {{SpecName('ESDraft', '#sec-promise.resolve', 'Promise.resolve')}} | {{Spec2('ESDraft')}} |                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.resolve")}}

## Veja também

- {{jsxref("Promise")}}
