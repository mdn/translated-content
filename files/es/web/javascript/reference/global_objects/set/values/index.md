---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

El método **`values()`** retorna un objeto de tipo `Iterator` que contiene los valores para cada elemento en el objecto `Set` en orden de inserción.

El metodo **`keys()`** es un alias para este metodo (por similaridad con objetos {{jsxref("Map")}}); se comporta exactamente igual y retorna **valores** para cada elemento de un `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## Sintaxis

```
mySet.values();
```

### Return value

Un nuevo objeto **`Iterator`** que contiene los valores para cada elemento en el `Set` dado, en orden de inserción.

## Examples

### Using `values()`

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Set.prototype.entries()")}}
