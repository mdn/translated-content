---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
---

{{JSRef}}La función **Math.exp()** devuelve `ex`, donde `x` es el argumento, y `e` es {{jsxref("Math.E", "El número de Euler (también conocido como la constante de Napier)", "", 1)}}, la base de los algoritmos naturales.

## Sintaxis

```
Math.exp(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor devuelto

Un número represetando `ex`, donde `e` es {{jsxref("Math.E", "número de Euler", "", 1)}} y `x` es el argumento.

## Descripción

Porque `exp()` es un método estático de `Math`, siempre úsalo como `Math.exp()`, en vez de un método de un objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.exp()`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
