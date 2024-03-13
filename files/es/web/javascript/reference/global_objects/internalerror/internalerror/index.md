---
title: Constructor InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
---

{{JSRef}} {{non-standard_header}}

El constructor **`InternalError()`** crea un error que indica un error que ocurrió internamente en el motor de JavaScript. Por ejemplo: **"InternalError**: demasiada recursividad".

## Sintaxis

```
new InternalError([message[, fileName[, lineNumber]]])
```

### Parámetros

- `message`
  - : Opcional. Una descripción del error legible para los humanos.
- `fileName`
  - : Opcional. El nombre del archivo que contiene el código que provocó la excepción.
- `lineNumber`
  - : Opcional. El número de línea del código que provocó la excepción.

## Ejemplos

### Crear un nuevo `InternalError`

```js
new InternalError("Fallo del motor");
```

## Especificaciones

No forma parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Error")}}
