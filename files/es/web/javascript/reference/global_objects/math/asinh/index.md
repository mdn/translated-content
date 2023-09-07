---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

La función **`Math.asinh()`** retorna el arcoseno hyperbólico de un número, es decir

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

## Sintáxis

```js
Math.asinh(x);
```

### Parámetros

- `x`
  - : Un número.

### Valor de retorno

El arcoseno hyperbólico del número dado.

## Descripción

Debido a que `asinh()` es un método estático de `Math`, siempre hay que usarlo como `Math.asinh()`, en lugar de como un método del objeto `Math` que se hayamos creado (`Math` no es un constructor).

## Ejemplos

### Usos de `Math.asinh()`

```js
Math.asinh(1); // 0.881373587019543
Math.asinh(0); // 0
```

## Polyfill

As a quick and dirty hack the expression <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arsinh} (x) = \ln \left(x + \sqrt{x^{2} + 1} \right)</annotation></semantics></math> may be used directly for a coarse emulation by the following function:

```js
Math.asinh =
  Math.asinh ||
  function (x) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.log(x + Math.sqrt(x * x + 1));
    }
  };
```

Been formally correct it suffers from a number of issues related to floating point computations. Accurate result requires special handling of positive/negative, small/large arguments as it done e.g. in [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/s_asinh.c) or [GNU Scientific Library](http://git.savannah.gnu.org/cgit/gsl.git/tree/sys/invhyp.c).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
