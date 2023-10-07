---
title: EvalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
---

{{JSRef}}

El constructor **`EvalError`** crea un nuevo error relacionado con la función global {{jsxref("Global_Objects/eval", "eval()")}}. Esta excepción ya no es lanzada por JavaScript, sin embargo el objeto `EvalError` permanece por compatibilidad.

## Sintaxis

```js
new EvalError();
new EvalError(message);
new EvalError(message, fileName);
new EvalError(message, fileName, lineNumber);
```

### Parámetros

- `message` {{optional_inline}}
  - : Descripción del error humanamente legible
- `fileName` {{optional_inline}}
  - : El nombre del archivo que contiene el código que causó la excepción
- `lineNumber` {{optional_inline}}
  - : El número de línea del código que causó la excepción

## Ejemplos

El objeto `EvalError` no se utiliza en la especificación actual de ECMAScript y por lo tanto no será lanzado por el tiempo de ejecución. Sin embargo, el objeto en sí se mantiene para la compatibilidad con versiones anteriores de la especificación.

### Creación de un EvalError

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
