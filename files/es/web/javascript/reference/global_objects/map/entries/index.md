---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

El método **`entries()`** de las instancias {{jsxref("Map")}} regresa un nuevo objeto _[iterador de mapa](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ que contiene las tuplas `[llave, valor]` para cada elemento en este _map_ en orden de inserción.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Sintaxis

```js-nolint
entries()
```

### Parámetros

Ningúno.

### Valor devuelto

Un nuevo [objeto de tipo iterator iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Ejemplos

### Usando entries()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
