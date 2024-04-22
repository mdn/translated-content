---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

El método **`add()`** añade un nuevo elemento con un valor específico al final del objeto `Set`.

## Sintaxis

```
mySet.add(value);
```

### Parameters

- value
  - : Requerido. El valor del elemento a ser añadido al objeto `Set`.

### Return value

El objeto `Set`.

## Ejemplos

### Usando el método add

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
