---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

El método **`values()`** de las instancias {{jsxref("Map")}} regresa un nuevo objeto _[iterator de mapa](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ que contiene los valores de cada elemento en este _map_ en orden de inserción.

{{InteractiveExample("JavaScript Demo: Map.prototype.values")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"
```

## Sintaxis

```js-nolint
values()
```

### Parámetros

Ningúno.

### Valor devuelto

Un nuevo [objeto de tipo iterator iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Ejemplos

### Usando values()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
