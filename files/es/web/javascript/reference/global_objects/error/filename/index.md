---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
---

{{jsRef}} {{non-standard_header}}

La propiedad **`fileName`** contiene la ruta al archivo que generó este error.

## Descripción

Esta propiedad no estándar contiene la ruta al archivo que generó este error. Si se llama desde un contexto de depuración, devuelve las herramientas de desarrollo de Firefox, por ejemplo, "código de evaluación del depurador".

## Ejemplos

### Usar `fileName`

```js
var e = new Error("No se pudo procesar la entrada");
throw e;
// e.fileName podría verse como "file:///C:/ejemplo.html"
```

## Especificaciones

No forma parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
