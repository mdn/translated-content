---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
translation_of: Web/JavaScript/Reference/Global_Objects/URIError
browser-compat: javascript.builtins.URIError
---
{{JSRef}}

El objeto **`URIError`** representa un error cuando una función de manejo de URI
global se usó de manera incorrecta.

## Constructor

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : Crea un nuevo objeto `URIError`.

## Propiedades de instancia

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : Mensaje de error.
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : Nombre de error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}}
  - : Ruta al archivo que provocó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}}
  - : Número de línea en el archivo que provocó este error. Heredado de
    {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}}
  - : Número de columna en la línea que provocó este error. Heredado de
    {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}}
  - : Rastro de pila. Heredado de {{jsxref("Error")}}.

## Ejemplos

### Atrapando un URIError

```js
try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Creando un URIError

```js
try {
  throw new URIError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
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
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
