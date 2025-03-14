---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

El método **`set()`** añade un nuevo elemento con su `key` y `value` específicos al objeto `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
```

## Sintaxis

```
wm.set(key, value);
```

### Parámetros

- indentificador (key)
  - : Requerido. El identificador (objeto) del elemento a añadir al objeto `WeakMap`.
- valor (value)
  - : Requerido. El valor del elemento a añadir al objeto `WeakMap`.

### Valor devuelto

El objeto `WeakMap`.

## Ejemplos

### Utilización del método `set`

```js
var wm = new WeakMap();
var obj = {};

// Agregando nuevos elementos a WeakMap
wm.set(obj, "foo").set(window, "bar"); // encadenamiento
// Actualiza el un elemento en el objeto WeakMap
wm.set(obj, "baz");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
