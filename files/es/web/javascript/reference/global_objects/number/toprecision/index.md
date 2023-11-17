---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef}}

El método **`toPrecision()`** devuelve una cadena que representa un objeto {{jsxref("Number")}} según la precisión especificada.

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## Sintaxis

```
numObj.toPrecision([precision])
```

### Parámetros

- `precision`
  - : Opcional. Un entero que especifica el número de digitos significativos.

### Valor devuelto

Una cadena que representa un objeto {{jsxref("Number")}} en punto fijo o en notación exponencial redondeada a `precision` de digitos significativos. Vea la discusión acerca del redondeo en la descripción del método {{jsxref("Number.prototype.toFixed()")}} , que además aplica a `toPrecision()`.

Si el parámetro `precision` es omitido, se comporta como {{jsxref("Number.prototype.toString()")}}. Si el parámetro `precision` es un valor no entero, el valor es redondeado al entero más cercano.

### Exceptions

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : If `precision` is not between 1 and 100 (inclusive), a {{jsxref("RangeError")}} is thrown. Implementations are allowed to support larger and smaller values as well. ECMA-262 only requires a precision of up to 21 significant digits.

## Ejemplos

### Usando `toPrecision`

```js
var numObj = 5.123456;

console.log(numObj.toPrecision()); // logs '5.123456'
console.log(numObj.toPrecision(5)); // logs '5.1235'
console.log(numObj.toPrecision(2)); // logs '5.1'
console.log(numObj.toPrecision(1)); // logs '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // logs '0.000123'
console.log(numObj.toPrecision(5)); // logs '0.00012300'
console.log(numObj.toPrecision(2)); // logs '0.00012'
console.log(numObj.toPrecision(1)); // logs '0.0001'

// observe que bajo algunas circunstancias el valor retornado es en notación exponencial
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
