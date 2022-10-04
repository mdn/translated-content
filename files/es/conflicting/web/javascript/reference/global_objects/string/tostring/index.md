---
title: String.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - Cadena
  - JavaScript
  - No estandar
  - Prototipo
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/String/toSource
---
{{JSRef}} {{non-standard_header}}

El método **`toSource()`** devuelve una cadena que representa el código fuente del objeto.

## Sintaxis

```js
String.toSource()
str.toSource()
```

### Valor devuelto

Una cadena que representa el código fuente del objeto.

## Descripción

El método `toSource()` devuelve los siguientes valores:

Para el objeto incorporado {{jsxref("String")}}, `toSource()` devuelve la siguiente cadena indicando que el código fuente no está disponible:

```js
function String() {
    [native code]
}
```

Para instancias de {{jsxref("String")}} o cadenas literales, `toSource()` devuelve una cadena representando el código fuente.

Este método usualmente es llamado internamente por JavaScript y no explícitamente en código.

## Especificaciones

No es parte de ningún estándar. Implementado en JavaScript 1.3.

## Compatibilidad entre navegadores

{{Compat("javascript.builtins.String.toSource")}}

## Véase también

- {{jsxref("Object.prototype.toSource()")}}
