---
title: Constructor Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
---

{{JSRef}}

El constructor **`Error`** crea un objeto `Error`.

## Sintaxis

```
new Error([message[, fileName[, lineNumber]]])
```

### Parámetros

- `message`{{Optional_Inline}}
  - : Una descripción del error legible para los humanos.
- `fileName` {{Optional_Inline}}{{Non-standard_inline}}
  - : El valor de la propiedad `fileName` en el objeto `Error` creado. De manera predeterminada, el nombre del archivo que contiene el código que llamó al constructor `Error()`.
- `lineNumber` {{Optional_Inline}}{{Non-standard_inline}}
  - : El valor de la propiedad `lineNumber` en el objeto `Error` creado. De manera predeterminada, el número de línea que contiene la invocación del constructor `Error()`.

## Ejemplos

### Llamada a función o construcción `new`

Cuando se usa `Error` como una función, sin {{JSxRef("Operators/new", "new")}}, devolverá un objeto `Error`. Por lo tanto, una simple llamada a `Error` producirá el mismo resultado que la construcción de un objeto `Error` mediante la palabra clave `new`.

```js
// esto...
const x = Error("¡Fui creado usando una llamada a función!");

// ...tiene la misma funcionalidad que esta.
const y = new Error('¡Fui construido con la palabra clave "new"!');
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Sentencias/throw", "throw")}}
- {{JSxRef("Sentencias/try...catch", "try...catch")}}
