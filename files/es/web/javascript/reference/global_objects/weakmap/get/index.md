---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

El método **`get()`** devuelve un elemento específico del objeto `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.get(object1));
// Expected output: 42

console.log(weakmap1.get(object2));
// Expected output: undefined
```

## Sintaxis

```
wm.get(key);
```

### Parámetros

- key
  - : Requerido. Es la llave del elemento a retornar desde el objeto WeakMap.

### Valores devueltos

El elemento asociado con la llave específica en el objeto WeakMap. Si la llave no está presente, devolverá {{jsxref("undefined")}}.

## Ejemplos

### Usando el método `get`

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Devuelve "foo".
wm.get("baz"); // Devuelve undefined.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
