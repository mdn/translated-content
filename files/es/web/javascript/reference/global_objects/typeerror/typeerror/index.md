---
title: TypeError() constructor
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
---

{{JSRef}}

El constructor **`TypeError()`** crea un nuevo error cuando una operación no puede ser realizada, típicamente (pero no exclusivamente) cuando un valor no es del tipo esperado.

## Sintaxis

```js
new TypeError();
new TypeError(message);
new TypeError(message, fileName);
new TypeError(message, fileName, lineNumber);
```

### Parámetros

- `message` {{optional_inline}}
  - : Descripción del error humanamente legible.
- `options` {{optional_inline}}
  - : Un objeto con las siguientes propiedades:
    - `cause` {{optional_inline}}
      - : Una propiedad que indica la causa específica del error.
        Cuando se atrapa y relanza un error con un mensaje de error más especifico o útil, esta propiedad debe ser usada para pasar el error original.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : El nombre del archivo contenedor del código que causa el error.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : El número de la línea que contiene el código causante del error.

## Ejemplos

### Atrapando un TypeError

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
