---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
---

{{JSRef("Objetos_globales", "Math")}}

## Sumario

Devuelve el máximo entero menor o igual a un número.

## Sintaxis

```
Math.floor(x)
```

### Parámetros

- `x`
  - : Es número.

## Descripción

Como `floor` es un método estático de `Math`, siempre debe usarse como `Math.floor()`, en lugar de usarlo como un método de un objeto `Math` creado.

## Ejemplos

### Ejemplo: Usando `Math.floor`

La siguiente función devuelve el valor entero redondeado más bajo de la variable `x`:

```js
function getFloor(x) {
  return Math.floor(x);
}
```

Si se pasa `45.95` a `getFloor`, éste devuelve `45`; si se le pasa `-45.95`, devuelve `-46`.

### Ejemplo: Ajuste decimal

```js
// Cierre
(function () {
  /**
   * Ajuste decimal de un número.
   *
   * @param  {String}  type  El tipo de ajuste.
   * @param  {Number}  value  El número.
   * @param  {Integer}  exp    El exponente(el logaritmo en base 10 del ajuste).
   * @returns  {Number}      El valor ajustado.
   */
  function decimalAdjust(type, value, exp) {
    // Si el exp es indefinido o cero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Cambio
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Volver a cambiar
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Redondeo decimal
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Redondeo hacia abajo
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Redondeo hacia arriba
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Redondeo
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
// Piso
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Techo
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## Ven También

- El {{jsxref("Math")}} objeto.
- {{jsxref("Math.abs")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
