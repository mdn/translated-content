---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

El método **`keys()`** de las instancias {{jsxref("Map")}} regresa un nuevo objeto _[iterator de map](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ que contiene las llaves para cada elemento en este _map_ en orden de inserción.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## Sintaxis

```js-nolint
keys()
```

### Parámetros

Ningúno.

### Valor devuelto

Un nuevo [objeto iterator iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Ejemplos

### Usando keys()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
