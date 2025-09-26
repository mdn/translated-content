---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

El método **`clear()`** de las instancias {{jsxref("Map")}} remueve todos los elementos de este _map_.

{{InteractiveExample("JavaScript Demo: Map.prototype.clear()")}}

```js interactive-example
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0
```

## Sintaxis

```js-nolint
clear()
```

### Parámetros

Ningúno.

### Valor devuelto

Ningúno ({{jsxref("undefined")}}).

## Ejemplos

### Usando clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
