---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
---

{{JSRef}}La función **`Math.round()`**`retorna el valor de un número redondeado al entero más cercano.`

## Sumario

Devuelve el valor del número dado redondeado al entero más cercano.

## Sintaxis

```
Math.round(x)
```

### Parámetros

Un número.

### Valor de Retorno

El valor del número dado redondeado al entero más cercano.

## Descripción

Si la porción fraccionaría del número es 0.5 o mayor, el argumento es redondeado al siguiente número entero superior. Si la porción de la fracción del número es menor a 0.5, el argumento es redondeado al siguiente número entero inferior.

Debido a que round() es un método estático de Math, siempre se debe utilizar como Math.round(), en vez de un método del objeto Math que ha creado. (Math no es un constructor)

## Ejemplos

### Usando `Math.round()`

```js
// Retorna el valor 20
x = Math.round(20.49);

// Retorna el valor 21
x = Math.round(20.5);

// Retorna el valor -20
x = Math.round(-20.5);

// Retorna el valor -21
x = Math.round(-20.51);

// Retorna el valor 1 (!)
// Note el error de redondeo debido a la inexactitud del punto aritmético.
// Compare esto con Math.round10(1.005, -2) de el ejemplo de abajo.
x = Math.round(1.005 * 100) / 100;
```

### Redondeo decimal

```js
// Conclusión
(function () {
  /**
   * Ajuste decimal de un número.
   *
   * @param {String}  tipo  El tipo de ajuste.
   * @param {Number}  valor El numero.
   * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
   * @returns {Number} El valor ajustado.
   */
  function decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
Math.round10(1.005, -2); // 1.01 -- compare this with Math.round(1.005*100)/100 above
// Floor
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Ceil
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
