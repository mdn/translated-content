---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
---

{{JSRef}}

La función **`Math.acosh()`** retorna el arco coseno hiperbólico de un número que es:

<math display="block"><semantics><annotation encoding="TeX">Para todo x mayor ó igual a 1,se cumple que : la funcion Math.acosh(x) = arcosh(x) = al único y mayor ó igual a 0 ; tal que; cosh(y) = x</annotation></semantics></math>

## Sintaxis

```
Math.acosh(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor retornado

El arco coseno hiperbólico del número dado. Si el número es menor que 1, {{jsxref("NaN")}}.

## Descripción

Como `acosh()` es un método estático de `Math`, siempre debe ser usado como `Math.acosh()`, en vez de como un método de un objeto `Math` creado (`Math` no es constructor).

## Ejemplos

### Utilizando `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0); // NaN
Math.acosh(0.5); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
```

Para valores menores que 1 `Math.acosh()` retorna {{jsxref("NaN")}}.

## Polyfill

Para todo <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x mayor ó igual a 1</annotation></semantics></math>, se tiene que el arcosh(x) <math><semantics><annotation encoding="TeX">= ln(x + la raiz cuadrada de(x cuadrado - 1)) </annotation></semantics></math> y esto puede ser emulado con la siguiente funcion:

```js
Math.acosh =
  Math.acosh ||
  function (x) {
    return Math.log(x + Math.sqrt(x * x - 1));
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
