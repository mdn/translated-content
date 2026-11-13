---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

El método **`delete()`** de las instancias {{jsxref("Map")}} remueve el elemento especificado de este _map_ utilizando la llave del elemento que se quiere remover.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## Sintaxis

```js-nolint
mapInstance.delete(key)
```

### Parámetros

- `key`
  - : La llave de el elemento que se va a remover del objeto `Map`.

### Valor devuelto

`true` si un elemento en el objeto `Map` existía y fué removido, o `false` si el elemento no existe.

## Ejemplos

### Usando delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Regresa true. Removido exitosamente.
console.log(myMap.has("bar")); // Regresa false. El elemento "bar" ya no esta presente.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
