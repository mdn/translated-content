---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
---

{{JSRef("Global_Objects", "Math")}}

## Resumo

A função **`Math.floor(x)`** retorna o menor número inteiro dentre o número "x".

## Sintaxe

```
Math.floor(x)
```

### Parâmetros

- `x`
  - : Um número.

## Descrição

Por `floor` ser um método estático de `Math`, você sempre irá usar como `Math.floor()`,e não como método do objeto `Math que você criou`.

## Exemplos

### Exemplo: Usando `Math.floor`

```js
Math.floor(45.95); //  45
Math.floor(-45.95); // -46
```

### Exemplo: Ajuste Decimal

```js
// Closure
(function () {
  /**
   * Decimal adjustment of a number.
   *
   * @param  {String}  type  The type of adjustment.
   * @param  {Number}  value  The number.
   * @param  {Integer}  exp    The exponent (the 10 logarithm of the adjustment base).
   * @returns  {Number}      The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
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

## Especificações

| Specification                                         | Status             | Comment             |
| ----------------------------------------------------- | ------------------ | ------------------- |
| ECMAScript 1st Edition. Implemented in JavaScript 1.0 | Standard           | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.8.2.9', 'Math.floor')}}  | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-math.floor', 'Math.floor')}}  | {{Spec2('ES6')}}   |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.floor")}}

## Veja também

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.abs")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
