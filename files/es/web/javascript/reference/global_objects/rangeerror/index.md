---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
translation_of: Web/JavaScript/Reference/Global_Objects/RangeError
browser-compat: javascript.builtins.RangeError
---
{{JSRef}}

El objeto **`RangeError`** indica un error cuando un valor no se encuentra dentro de un rango de valores permitidos.

## Descripción

Se lanza un `RangeError` cuando se intenta pasar un valor como argumento a una función
que no permite un rango que incluye el valor.

Esto puede ocurrir cuando:

- pasas un valor que no es uno de los valores de cadena permitidos a {{jsxref("String.prototype.normalize()")}}, o
- cuando intentas crear una matriz de una longitud inválida con el constructor {{jsxref("Array")}}, o
- cuando pasas valores inválidos a los métodos numéricos {{jsxref("Number.prototype.toExponential()")}},
  {{jsxref("Number.prototype.toFixed()")}} o {{jsxref("Number.prototype.toPrecision()")}}.

## Constructor

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Crea un nuevo objecto `RangeError`.

## Propiedades de instancia

- {{jsxref("Error.prototype.message", "RangeError.prototype.message")}}
  - : Mensaje de error.
- {{jsxref("Error.prototype.name", "RangeError.prototype.name")}}
  - : Nombre del error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}}
  - : Ruta al archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}}
  - : Número de línea en el archivo que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}}
  - : Número de columna en la línea que generó este error. Heredado de {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}}
  - : Seguimiento de pila. Heredado de {{jsxref("Error")}}.

## Ejemplo

### Usando RangeError (para valores numéricos)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("El argumento debe estar entre -500 y 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Manejar el error
  }
}
```

### Usando RangeError (para valores no numéricos)

```js
function check(value) {
  if (["apple", "banana", "carrot"].includes(value) === false) {
    throw new RangeError(
      'El argumento debe de ser una "apple", "banana", o "carrot".'
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Manejar el error
  }
}
```

## Especificaciones

{{Specifications}}

## Compativilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
