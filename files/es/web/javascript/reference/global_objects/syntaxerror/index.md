---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError
original_slug: Web/JavaScript/Referencia/Objetos_globales/SyntaxError
browser-compat: javascript.builtins.SyntaxError
---
{{JSRef}}

El objeto **`SyntaxError`** represta un error cuando se trata de interpretar código que resulta ser inválido sintácticamente. Esto ocurre cuando el motor de JavaScript encuentra el orden de los tokens o los token mismos no son conformes a la sinstaxis del lenguaje cuando se analiza el código.

## Constructor

- {{jsxref("Global_Objects/SyntaxError/SyntaxError", "SyntaxError()")}}
  - : Crea un nuevo objeto `SyntaxError`.

## Propiedades de instancia

- {{jsxref("Error.prototype.message", "SyntaxError.prototype.message")}}
  - : Mensaje de error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "SyntaxError.prototype.fileName")}}
  - : Ruta al archivo que ha provocado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "SyntaxError.prototype.lineNumber")}}
  - : Número de línea en el archivo que ha provocado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "SyntaxError.prototype.columnNumber")}}
  - : Número de columna en el archivo que ha provocado este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "SyntaxError.prototype.stack")}}
  - : Trazado de la pila de ejecución. Heredado de {{jsxref("Error")}}.

## Ejemplos

### Controlando un SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### Creando un SyntaxError

```js
try {
  throw new SyntaxError("Hello", "someFile.js", 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message); // Hello
  console.error(e.name); // SyntaxError
  console.error(e.fileName); // Ejemplo.js
  console.error(e.lineNumber); // 10
  console.error(e.columnNumber); // 0
  console.error(e.stack); // @debugger eval code:3:9
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error")}}
