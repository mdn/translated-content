---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef("Objetos_globales", "ReferenceError")}}

El objeto **`ReferenceError`** representa un error cuando se hace referencia a una variable inexistente.

## Constructor

- [`ReferenceError()`](/es/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError)
  - : Crea un nuevo objeto `ReferenceError`.

## Propiedades de la instancia

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : Mensaje de error. Aunque ECMA-262 especifica que {{jsxref("ReferenceError")}} debe proporcionar su propia propiedad `message`, en [`SpiderMonkey`](/es/docs/Mozilla/Projects/SpiderMonkey), hereda {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : Nombre del error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}}
  - : Ruta al archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}}
  - : Número de línea en el archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}}
  - : Número de columna en la línea que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}}
  - : Seguimiento de la pila. Heredado de {{jsxref("Error")}}.

## Ejemplos

### Capturar un `ReferenceError`

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable no está definida"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### Crear un `ReferenceError`

```js
try {
  throw new ReferenceError("Hola", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hola"
  console.log(e.name); // "ReferenceError"
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

## Ve también

- {{jsxref("Error")}}
