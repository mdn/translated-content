---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

El método **`clear()`** remueve todos los elementos de un objeto `Set`.

## Sintaxis

```
mySet.clear();
```

### Valor de retorno

{{jsxref("undefined")}}.

## Ejemplos

### Usando el método clear

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size; // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size; // 0
mySet.has("bar"); // false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
