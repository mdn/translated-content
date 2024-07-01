---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---

{{JSRef}}

El método **`Promise.resolve(value)`** retorna un objeto {{jsxref("Promise")}} que es resuelto con el valor dado. Si el valor es una _promise_, esa _promise_ es devuelta; si el valor es un _thenable_ (si tiene un {{jsxref("Promise.then", "método \"then\"")}}), el valor devuelto le seguirá a ese _thenable_, adoptando su estado; de otro modo la _promise_ devuelta estará completada con el valor.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

La fuente para esta demostración interactiva se encuentra en un repositorio de GitHub. Si te gustaría contribuir al proyecto de la demostración interactiva, por favor clona <https://github.com/mdn/interactive-examples> y envíanos una _pull request_.

## Sintáxis

```js
Promise.resolve(value);
Promise.resolve(promise);
Promise.resolve(thenable);
```

### Parámetros

- value
  - : Argumento por resolver por esta `Promise`. También puede ser una `Promise` o un _thenable_ por resolver.

### Valor retornado

Una {{jsxref("Promise")}} que es resuelta con el valor dado, o con la _promise_ pasada como valor, si el valor era un objeto _promise_.

## Descripción

La función estática `Promise.resolve` retorna una `Promise` que es resuelta.

## Ejemplos

### Utilizando el método estático `Promise.resolve`

```js
Promise.resolve("Éxito").then(
  function (value) {
    console.log(value); // "Éxito"
  },
  function (value) {
    // no es llamada
  },
);
```

### Resolviendo un arreglo

```js
var p = Promise.resolve([1, 2, 3]);
p.then(function (v) {
  console.log(v[0]); // 1
});
```

### Resolviendo otra `Promise`

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function (value) {
  console.log("valor: " + value);
});
console.log("original === cast ? " + (original === cast));

// registros, en orden:
// original === cast ? true
// valor: 33
```

El orden invertido de los registros se debe al hecho de que los _handler_ `then` sean llamados asíncronamente. Vea cómo funciona `then` [aquí](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value).

### Resolviendo thenables y arrojando Errores

```js
// Resolviendo un objeto thenable
var p1 = Promise.resolve({
  then: function (onFulfill, onReject) {
    onFulfill("¡Completada!");
  },
});
console.log(p1 instanceof Promise); // true, objeto convertido en una Promise
j;
p1.then(
  function (v) {
    console.log(v); // "¡Completada!"
  },
  function (e) {
    // no es llamada
  },
);

// Thenable arroja antes del callback
// Rechaza la Promise
var thenable = {
  then: function (resolve) {
    throw new TypeError("Arrojando");
    resolve("Resolviendo");
  },
};

var p2 = Promise.resolve(thenable);
p2.then(
  function (v) {
    // no es llamada
  },
  function (e) {
    console.log(e); // TypeError: Arrojando
  },
);

// Thenable arroja después del callback
// Resuelve la Promise
var thenable = {
  then: function (resolve) {
    resolve("Resolviendo");
    throw new TypeError("Arrojando");
  },
};

var p3 = Promise.resolve(thenable);
p3.then(
  function (v) {
    console.log(v); // "Resolviendo"
  },
  function (e) {
    // no es llamada
  },
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Promise")}}
