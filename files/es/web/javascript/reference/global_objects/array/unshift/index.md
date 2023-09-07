---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

El método **`unshift()`** agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Sintaxis

```
arr.unshift(elemento1[, ...[, elementoN]])
```

### Parámetros

- `elementoN`
  - : Elementos a agregar al inicio del array.

### Devuelve

La nueva propiedad {{jsxref("Array.length", "length")}} del objeto sobre el cual el método fue llamado.

## Descripción

El método `unshift` inserta los valores proporcionados al inicio de un objeto del tipo array.

`unshift` es intencionalmente genérico; este método puede ser {{jsxref("Function.call", "called", "", 1)}} o {{jsxref("Function.apply", "applied", "", 1)}} a objetos similares a arrays. Objetos que no contengan una propiedad `length` reflejando una serie de propiedades numéricas consecutivas, comenzada a partir del cero, pueden no comportarse de una manera comprensible.

## Ejemplos

```js
var arr = [1, 2];

arr.unshift(0); // resultado de la llamada es 3, la nueva longitud del array
// arr es [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr es [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr es [[-3], -2, -1, 0, 1, 2]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
