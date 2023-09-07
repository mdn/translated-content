---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef}}

La función **`Math.log2()`** retorna el logaritmo base 2 de un número, esto es

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Syntax

```
Math.log2(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor de retorno

El logaritmo base 2 del número usado como parámetro. Si el número es negativo, {{jsxref("NaN")}} será retornado.

## Descripción

Si el valor de `x` es mejor a 0, el valor de retorno es siempre {{jsxref("NaN")}}.

Debido a que `log2()` es una función estática de `Math`, siempre debe ser usado como `Math.log2()`, en lugar de ser usado como un método del objeto `Math` (`Math` no es un constructor).

Esta función es equivalente a Math.log(x) / Math.log(2). Para log2(e) use la constante {{jsxref("Math.LOG2E")}} que es 1 / {{jsxref("Math.LN2")}}.

## Ejemplos

### Usando `Math.log2()`

```js
Math.log2(3); // 1.584962500721156
Math.log2(2); // 1
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2(1024); // 10
```

## Polyfill

This Polyfill emulates the `Math.log2` function. Note that it returns imprecise values on some inputs (like 1 << 29), wrap into {{jsxref("Math.round()")}} if working with bit masks.

```js
Math.log2 =
  Math.log2 ||
  function (x) {
    return Math.log(x) * Math.LOG2E;
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
