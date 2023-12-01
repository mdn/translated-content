---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

{{JSRef}}

El método **`toFixed()`** formatea un número usando notación de punto fijo.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Sintaxis

```
numObj.toFixed([digitos])
```

### Parametros

- `digitos`
  - : Opcional. El número de digitos que aparecen después del punto decimal; este puede ser un valor entre 0 y 20, inclusive, algunas implementaciones pueden soportar un rango más amplio de valores. Si el argumento es omitido, es tratado como 0.

### Valor Devuelto

Una cadena que representa el número dado, usando notación de punto fijo.

### Excepciones

- {{jsxref("RangeError")}}
  - : Si `digits` es demasiado pequeño o demasiado grande. Los valores entre 0 y 20, inclusive, no causarán un error tipo `{{jsxref("RangeError")}}`. Las implementaciones también pueden admitir valores cada vez más grandes.
- {{jsxref("TypeError")}}
  - : Si este método se invoca en un objeto que no es un {{jsxref("Number")}}.

## Descripción

**`toFixed()`** devuelve una representación de cadena de `numObj` que no usa notación exponencial y tiene exactamente `dígitos` dígitos después del decimal. El número se redondea si es necesario, y la parte fraccional se rellena con ceros si es necesario para que tenga la longitud especificada.Si `numObj` es mayor que `1e+21`, este metodo llama a {{jsxref("Number.prototype.toString()")}} y retorna una cadena de notacion exponencial.

## Examples

### Using `toFixed`

```js
var numObj = 12345.6789;

numObj.toFixed(); // Returns '12346': note rounding, no fractional part
numObj.toFixed(1); // Returns '12345.7': note rounding
numObj.toFixed(6); // Returns '12345.678900': note added zeros
(1.23e20).toFixed(2); // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2); // Returns '0.00'
(2.34).toFixed(1); // Returns '2.3'
(2.35).toFixed(1); // Returns '2.4'. Note that it rounds up in this case.
-(2.34).toFixed(1); // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1); // Returns '-2.3' (...unless you use parentheses)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
