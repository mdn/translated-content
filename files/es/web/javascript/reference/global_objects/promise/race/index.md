---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

El método **`Promise.race(iterable)`** retorna una promesa que se cumplirá o no tan pronto como una de las promesas del argumento iterable se cumpla o se rechace, con el valor o razón de rechazo de ésta.

## Sintaxis

```
Promise.race(iterable);
```

### Parámetros

- iterable
  - : Un objeto iterable , como por ejemplo un {{jsxref("Array")}}. Vea [iterable](/es/docs/Web/JavaScript/Guide/iterable).

### Retorna

Una {{jsxref("Promise")}} que se cumple o se rechaza tan pronto como una de las promesas dadas en el argumento iterable se cumple o se rechaza.

## Descripción

La función `race` retorna una `Promise` que se comporta como tal. Se cumple o se rechaza, lo que suceda antes en alguno de sus argumentos (iterable).

## Ejemplos

### Usando `Promise.race` – ejemplos con `setTimeout`

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "uno");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "dos"
  // Ambas se resuelven, pero la p2 antes.
});

// Ejemplo con un resolve y un reject en el mismo método race.
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "tres");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "cuatro");
});

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "tres"
    // p3 es mas rápida, así que se resuelve el race
  },
  (reason) => {
    // No es llamado
  },
);

var p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "cinco");
});
var p6 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "seis");
});

Promise.race([p5, p6]).then(
  (value) => {
    // No es llamado
  },
  (reason) => {
    console.log(reason); // "seis"
    // p6 es mas rápida, así que se rechaza
  },
);
```

## Especificaciones

{{Specifications}}

## Vea también

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
