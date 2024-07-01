---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

La función **`Math.trunc()`** devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).

## Sintaxis

```
Math.trunc(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor de retorno

La parte entera del número dado.

## Descripción

A diferencia de los otros tres métodos de `Math`: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} y {{jsxref("Math.round()")}}, la forma en que `Math.trunc()` funciona es muy simple. _trunca_ (corta) el punto y los dígitos a la derecha de él, sin importar si el argumento es un número positivo o negativo.

Si el argumento es un número positivo, `Math.trunc()` es equivalente a `Math.floor();` de otra forma `Math.trunc()` es equivalente a `Math.ceil()`.

El argumento pasado a este método será convertido a un tipo numérico entero.

Debido a que `trunc()` es un método estático de `Math`, siempre úsalo como `Math.trunc()`, en lugar de como un método de un objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.trunc()`

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## Polyfill

```js
Math.trunc =
  Math.trunc ||
  function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
