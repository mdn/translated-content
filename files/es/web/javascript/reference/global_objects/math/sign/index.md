---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

La función **`Math.sign()`** retorna el signo de un número, indicando si el número es positivo, negativo o cero.

## Syntaxis

```
Math.sign(x)
```

### Parametros

- `x`
  - : Un número.

### Valor de retorno

Un número representando el signo del argumento dado. Si el argumento es un número positivo, negativo, cero positivo, o cero negativo, la función retornará `1`, `-1`, `0` or `-0` respectivamente. De lo contrario, retorna {{jsxref("NaN")}}.

## Descripción

Como `sign()` es un método estático de `Math`, siempre se utiliza como `Math.sign()`, en vez de un método de un objeto Math que hayas creado. (`Math` no es un constructor).

Esta función tiene 5 tipos de valores de retorno, `1`, `-1`, `0`, `-0`, `NaN`, que representan "número positivo", "número negativo", "cero positivo", "cero negativo" y {{jsxref("NaN")}} respectivamente.

El argumento pasado a esta función será convertido a tipo `x` implicitamente.

## Ejemplos

### Usando `Math.sign()`

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Polyfill

```js
if (!Math.sign) {
  Math.sign = function (x) {
    // Si x es NaN, el resultado es NaN.
    // Si x es -0, el resultado es -0.
    // Si x es +0, el resultado es +0.
    // Si x es negativo y no -0, el resultado es -1.
    // Si x es positivo y no +0, el resultado es +1.
    x = +x; // convertir a número
    if (x === 0 || isNaN(x)) {
      return Number(x);
    }
    return x > 0 ? 1 : -1;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
