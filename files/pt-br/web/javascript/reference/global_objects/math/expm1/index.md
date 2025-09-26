---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef}}

The **`Math.expm1()`** function returns `ex - 1`, where `x` is the argument, and {{jsxref("Math.E", "e", "", 1)}} the base of the natural logarithms.

{{InteractiveExample("JavaScript Demo: Math.expm1()")}}

```js interactive-example
console.log(Math.expm1(0));
// Expected output: 0

console.log(Math.expm1(1));
// Expected output: 1.718281828459045

console.log(Math.expm1(-1));
// Expected output: -0.6321205588285577

console.log(Math.expm1(2));
// Expected output: 6.38905609893065
```

## Syntax

```
Math.expm1(x)
```

### Parameters

- `x`
  - : Um número.

### Return value

Um número representando `ex - 1`, onde `e` é {{jsxref("Math.E", "Euler's number", "", 1)}} e `x` ié o argumento.

## Description

Porque `expm1()` é um método estático de is `Math`, você sempre o usurá como `Math.expm1()`, do que como um método de um objeto `Math` que você criou (`Math` não é um contrutor).

## Polyfill

This can be emulated with the help of the {{jsxref("Math.exp()")}} function:

```js
Math.expm1 =
  Math.expm1 ||
  function (x) {
    return Math.exp(x) - 1;
  };
```

## Examples

### Using `Math.expm1()`

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
