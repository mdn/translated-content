---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef}}

La función **`Math.expm1()`** regresa `e^x - 1`, donde `x` es el argumento, y {{jsxref("Math.E", "e", "", 1)}} la base del logaritmo natural.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}El código para este ejemplo interactivo está almacenado en un repositorio de GitHub. Sí te gustaría contribuir al proyecto de ejemplos interactivos If you'd like to contribute, por favor clona <https://github.com/mdn/interactive-examples> y envíanos un pull request.

## Sintaxis

```
Math.expm1(x)
```

### Parámetos

- `x`
  - : Un número.

### Valor de retorno

Un número representando `e^x - 1`, donde `e` es {{jsxref("Math.E", "Número de Euler", "", 1)}} y `x` es el argumento.

## Descripción

Debido a que `expm1()` es un método estático de `Math`, uselo siempre como `Math.expm1()`, en lugar de como un método del objeto `Math` que creó (`Math` no es un constructor).

## Ejemplos

### Usando Math.expm1()

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
```

## Polyfill

Esto puede ser emulado con la ayuda de la función {{jsxref("Math.exp()")}}:

```js
Math.expm1 =
  Math.expm1 ||
  function (x) {
    return Math.exp(x) - 1;
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
