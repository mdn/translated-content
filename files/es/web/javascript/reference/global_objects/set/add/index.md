---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
original_slug: Web/JavaScript/Referencia/Objetos_globales/Set/add
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

## Browser compatibility

{{Compat("javascript.builtins.Set.add")}}

## Firefox-specific notes

- Prior to Firefox 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30), `Set.prototype.add` returned `undefined` and was not chainable. This has been fixed ({{bug(1031632)}}). The behavior can be found in Chrome/v8 as well ([issue](https://code.google.com/p/v8/issues/detail?id=3410)).

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
