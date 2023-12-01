---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

El método **`Promise.all(iterable)`** devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.

## Sintaxis

```
Promise.all(iterable);
```

- iterable
  - : Un objeto iterable, por ejemplo un {{jsxref("Array")}}. Vea [iterable](/es/docs/Web/JavaScript/Guide/iterable).

### Valor devuelto

Una {{jsxref("Promise")}} que se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas, o bien se rechazará cuando alguna de ellas se rechace.

## Descripción

**`Promise.all`** se cumple cuando todas las promesas del iterable dado se han cumplido, o es rechazada si alguna promesa no se cumple. {{jsxref("Promise.resolve")}}.

Si alguna de las promesas pasadas en el argumento iterable falla, la promesa `all` es rechazada inmediatamente con el valor de la promesa que fué rechazada, descartando todas las demás promesas hayan sido o no cumplidas. Si se pasa un array vacío a `all` , la promesa se cumple inmediatamente.

## Ejemplos

### Uso de `Promise.all`

`Promise.all` espera a que todo se cumpla (o bien al primer rechazo).

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

### `Promise.all` comportamiento de fallo-rápido

`Promise.all` se rechaza si uno de los elementos ha sido rechazado y `Promise.all` falla rápido: Si tienes cuatro promesas que se resuelven después de un timeout y una de ellas falla inmediatamente, entonces `Promise.all` se rechaza inmediatamente.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (reason) => {
    console.log(reason);
  },
);

//From console:
//"reject"

// Evenly, it's possible to use .catch
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((reason) => {
    console.log(reason);
  });

//From console:
//"reject"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
