---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Método
  - Promise
  - Promesa
  - Reference
browser-compat: javascript.builtins.Promise.resolve
---

{{JSRef}}

El método **`Promise.resolve()`** "resuelve" un valor dado en {{jsxref("Promise")}}. Si el valor es una promesa, se devuelve esa promesa; si el valor es [*thenable*](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), `Promise.resolve()` llamará al método `then()` con dos devoluciones de llamada que preparó; de lo contrario, la promesa devuelta se completará con el valor.

Esta función aplana las capas anidadas de objetos similares a promesas (por ejemplo, una promesa que cumple con una promesa cumplida con algo) en una sola capa — una promesa que cumple con un valor no válido.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Sintaxis

```js-nolint
Promise.resolve(value)
```

### Parámetros

- `value`
  - : Argumento a resolver por esta `Promise`. También puede ser una `Promise` o una que posiblemente se pueda resolver.

### Valor de retorno

Una {{jsxref("Promise")}} que se resuelve con el valor dado, o la promesa pasada como valor, si el valor era un objeto `promise`. Se puede cumplir o rechazar; por ejemplo, resolver una promesa rechazada aún dará como resultado una promesa rechazada.

## Descripción

La función estática `Promise.resolve` devuelve una `Promise` que es
resuelta.

## Ejemplos

### Uso del método estático `Promise.resolve`

```js
Promise.resolve('Success').then(
  (value) => {
    console.log(value); // "Éxito"
  },
  (reason) => {
    // no se llama
  },
);
```

### Resolver un arreglo

```js
const p = Promise.resolve([1,2,3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Resolver otra `Promise`

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// registros, en orden:
// original === cast ? true
// value: 33
```

El orden invertido de los registros se debe al hecho de que los controladores `then`
se llaman asíncronamente. Ve cómo funciona `then` [aquí](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#valor_de_retorno).

### Resolver thenables y lanzar Errores

```js
// Resolver un objeto thenable
const p1 = Promesa.resolve({
  then(onFulfill, onReject) {
    onFulfill('fulfilled!');
  },
});
console.log(p1 instanceof Promise) // true, objeto convertido a Promise

p1.then(
  (v) => {
    console.log(v); // "¡cumplida!"
  },
  (e) => {
    // no se llama
  },
);

// Thenable lanzado antes de la devolución de llamada
// Promesa rechazada
const thenable = {
  then(onFulfilled) {
    throw new TypeError('Throwing');
    onFulfilled('Resolving');
  },
};

const p2 = Promise.resolve(thenable);
p2.then(
  (v) => {
    // no se llama
  },
  (e) => {
    console.error(e); // TypeError: Throwing
  },
);

// Thenable lanzado después de la devolución de llamada
// Promesa se resuelve
const thenable = {
  then(onFulfilled) {
    onFulfilled('Resolving');
    throw new TypeError('Throwing');
  },
};

const p3 = Promise.resolve(thenable);
p3.then(
  (v) => {
    console.log(v); // "Resolviendo"
  },
  (e) => {
    // no se llama
  },
);
```

Los thenables anidados se "aplanarán profundamente" en una sola promesa.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // El thenable se cumple con otro thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable)
  .then((v) => {
    console.log(v); // 42
  });
```

> **Advertencia:** No llames a `Promise.resolve()` en un thenable que se resuelve solo. Eso conduce a una recursividad infinita, porque intenta aplanar una promesa infinitamente anidada.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable)  // Dará lugar a una recursividad infinita.
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- {{jsxref("Promise")}}
