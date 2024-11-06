---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

El objeto **`TypeError`** representa un error cuando una operación no puede ser completada, típicamente (pero no exclusivamente) cuando un valor no es del tipo esperado.

Un `TypeError` puede ser lanzado cuando:

- Un operando o argumento pasado a una función es incompatible con el tipo esperado por el operador o función.
- Cuando se intenta modificar un valor que no puede ser alterado.
- Cuando se intenta usar un valor de una forma inapropiada.

## Constructor

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : Crea un nuevo objeto `TypeError`.

## Propiedades de instancia

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : Mensaje del error.
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : Nombre del error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "TypeError.prototype.cause")}}
  - : Causa del error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}} {{non-standard_inline}}
  - : Ruta al archivo que ha lanzado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Numero de línea donde se ha lanzado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Numero de columna donde se ha lanzado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}} {{non-standard_inline}}
  - : Seguimiento de pila. Heredado de {{jsxref("Error")}}.

## Ejemplos

### Capturar un TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // Respuesta: true
  console.log(e.message); // Respuesta: "null has no properties"
  console.log(e.name); // Respuesta: "TypeError"
  console.log(e.fileName); // Respuesta: "Scratchpad/1"
  console.log(e.lineNumber); // Respuesta: 2
  console.log(e.columnNumber); // Respuesta: 2
  console.log(e.stack); // Respuesta: "@Scratchpad/2:2:3\n"
}
```

### Crear un TypeError

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // Respuesta: true
  console.log(e.message); // Respuesta: "Hello"
  console.log(e.name); // Respuesta: "TypeError"
  console.log(e.fileName); // Respuesta: "someFile.js"
  console.log(e.lineNumber); // Respuesta: 10
  console.log(e.columnNumber); // Respuesta: 0
  console.log(e.stack); // Respuesta: "@Scratchpad/2:2:9\n"
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error")}}
