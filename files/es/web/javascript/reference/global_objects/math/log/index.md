---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef}}

La función **`Math.log()`** devuelve la base neutral de un número (base {{jsxref ("Math.E", "e")}})

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{el unico} \; y \; \text{tal que} \; e^y = x</annotation></semantics></math>

La función en JavaScrcrip **`Math.log()`** es equivalente a _ln(x)_ en matematicas.

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Sintaxis

```
Math.log(x)
```

### Parametetros

- `x`
  - : Es un numero.

### Retorna el valor

La base natural (base {{jsxref("Math.E", "e")}}) del número dado. Si el número es negativo, se devuelve {{jsxref("NaN")}}

## Descripcion

If the value of `x` is negative, the return value is always {{jsxref("NaN")}}.

Because `log()` is a static method of `Math`, you always use it as `Math.log()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If you need the natural log of 2 or 10, use the constants {{jsxref("Math.LN2")}} or {{jsxref("Math.LN10")}} . If you need a logarithm to base 2 or 10, use {{jsxref("Math.log2()")}} or {{jsxref("Math.log10()")}} . If you need a logarithm to other bases, use Math.log(x) / Math.log(otherBase) as in the example below; you might want to precalculate 1 / Math.log(otherBase) .

## Examples

### Using `Math.log()`

```js
Math.log(-1); // NaN, out of range
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### Using `Math.log()` with a different base

The following function returns the logarithm of `y` with base `x` (ie. <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

If you run `getBaseLog(10, 1000)` it returns `2.9999999999999996` due to floating-point rounding, which is very close to the actual answer of 3.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
