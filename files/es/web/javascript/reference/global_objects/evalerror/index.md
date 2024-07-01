---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

El objeto **`EvalError`** indica un error relacionado con la función global {{jsxref("Global_Objects/eval", "eval()")}}. Esta excepción ya no es lanzada por JavaScript, sin embargo el objeto `EvalError` permanece por compatibilidad.

## Constructor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Crea un nuevo objeto `EvalError`.

## Propiedades de instancia

- {{jsxref("Error.prototype.message", "EvalError.prototype.message")}}
  - : Mensaje de error.
- {{jsxref("Error.prototype.name", "EvalError.prototype.name")}}
  - : Nombre del error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}
  - : Ruta de acceso al archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}
  - : Número de línea en el archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}
  - : Número de columna en la línea que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}
  - : Seguimiento de pila. Heredado de {{jsxref("Error")}}.

## Ejemplos

El objeto `EvalError` no se utiliza en la especificación actual de ECMAScript y por lo tanto no será lanzado en tiempo de ejecución. Sin embargo, el objeto en sí se mantiene para la compatibilidad con versiones anteriores de la especificación.

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
