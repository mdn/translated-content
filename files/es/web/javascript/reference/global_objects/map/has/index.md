---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

El método **`has()`** de las instancias {{jsxref("Map")}} regresa un booleano indicando si un elemento con la llave especificada existe o no en este _map_.

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

## Sintaxis

```js-nolint
has(key)
```

### Parámetros

- `key`
  - : La llave del elemento que se quiere comprobar si existe en el objeto `Map`.

### Valor devuelto

`true` si un elemento con la llave especificada existe en el objeto `Map`; de lo contrario regresa `false`.

## Ejemplos

### Usando has()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
