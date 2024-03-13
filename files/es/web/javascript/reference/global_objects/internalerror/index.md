---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}} {{non-standard_header}}

El objeto **`InternalError`** indica un error que se produjo internamente en el motor JavaScript.

Los principalmente casos de ejemplo son cuando algo es demasiado grande, por ejemplo:

- "demasiados casos del switch",
- "demasiados paréntesis en la expresión regular",
- "iniciador de arreglo demasiado grande",
- "demasiada recursividad".

## Constructor

- {{JSxRef("Global_Objects/InternalError/InternalError", "InternalError()")}}
  - : Crea un nuevo objeto `InternalError`.

## Propiedades de la instancia

- {{jsxref("Error.prototype.message", "InternalError.prototype.message")}}
  - : Mensaje de error. Heredado de {{JSxRef("Error")}}.
- {{jsxref("Error.prototype.name", "InternalError.prototype.name")}}
  - : Nombre del error. Heredado de {{JSxRef("Error")}}.
- {{jsxref("Error.prototype.fileName", "InternalError.prototype.fileName")}}
  - : Ruta al archivo que generó este error. Heredado de {{JSxRef("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "InternalError.prototype.lineNumber")}}
  - : Número de línea en el archivo que generó este error. Heredado de {{JSxRef("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "InternalError.prototype.columnNumber")}}
  - : Número de columna en la línea que generó este error. Heredado de {{JSxRef("Error")}}.
- {{jsxref("Error.prototype.stack", "InternalError.prototype.stack")}}
  - : Seguimiento de la pila. Heredado de {{JSxRef("Error")}}.

## Ejemplos

### Demasiada recursividad

Esta función recursiva se ejecuta 10 veces, según la condición de salida.

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida
    return;
  // hacer cosas
  loop(x + 1); // la llamada recursiva
}
loop(0);
```

Establecer esta condición en un valor extremadamente alto, no funcionará:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // hacer cosas
  loop(x + 1);
}
loop(0);

// InternalError: demasiada recursividad
```

Para obtener más información, consulta {{JSxRef("Errors/Too_much_recursion", "InternalError: demasiada recursividad.")}}

## Especificaciones

No forma parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Error")}}
- {{JSxRef("Errors/Too_much_recursion", "demasiada recursividad")}}
