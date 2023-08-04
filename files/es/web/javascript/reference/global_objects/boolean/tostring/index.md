---
title: Boolean.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef("Objetos_globales", "Boolean")}} {{ Non-standard_header() }}

## Resumen

Devuelve una cadena que representa el código fuente del objeto.

## Sintaxis

`toSource()`

### Parámetros

Ninguno.

## Descripción

El método `toSource` devuelve los siguientes valores:

- Para objetos built-in `Boolean`, `toSource` devuelve la siguiente cadena indicando que el código fuente no está disponible:

```js
function Boolean() {
   [código nativo]
}
```

- Para instancias de `Boolean`, `toSource` devuelve una cadena representando el código fuente.

Este método se utiliza habitualmente en llamadas internas por JavaScript y no en código explícito.

## Vea También

- {{jsxref("Object.prototype.toSource()")}} {{Non-standard_inline()}}
