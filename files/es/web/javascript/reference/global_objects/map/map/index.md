---
title: Map() constructor
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

El constructor **`Map()`** crea objetos de tipo {{jsxref("Map")}}.

## Sintaxis

```js-nolint
new Map()
new Map(iterable)
```

> **Nota:** `Map()` sólo puede ser construido con la palabra clave [`new`](/es/docs/Web/JavaScript/Reference/Operators/new). Intentar llamaro sin la palabra clave `new` arroja un {{jsxref("TypeError")}}.

### Parametros

- `iterable` {{optional_inline}}
  - : Un objeto {{jsxref("Array")}} u otro objeto
    [iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols) cuyos elementos sean tuplas llave-valor. (Por ejemplo, arreglos con dos elementos,
    tales como `[[ 1, 'one' ],[ 2, 'two' ]]`.) Cada tupla llave-valor es agregada al nuevo objeto `Map`.

## Ejemplos

### Creando un nuevo objeto Map

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill para `Map` en `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
