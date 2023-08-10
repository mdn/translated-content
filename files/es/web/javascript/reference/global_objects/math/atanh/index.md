---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef}}

La función **`Math.atanh()`** nos retorna un arco hiperbólico de un numero, eso es:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ el unico } \; y \; \text{de tal manera que} \; \tanh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## Sintaxis

```
Math.atanh(x)
```

### Parametros

- _x_
  - : Un numero.

### Retorna un valor

El arco hiperbolico tangible nos otorga un numero.

## Descripción

Por que `atanh()` es un metodo estatico de `Math`, tu siempre puedes usar eso como `Math.atanh()`, se puede usar como un metod de `Math` objeto que tu creaste (`Math` no es un constructor).

## Polimorfismo

Para <math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&#x3C;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation></semantics></math>, tenemos <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math> por lo que esto puede estar emulado con la siguiente función:

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## Ejemplos

### Using `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinito
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinito
Math.atanh(2); // NaN
```

Para valores mayores a 1 o menores a -1, {{jsxref("NaN")}} retorna.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Puedes leer

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
