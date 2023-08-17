---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef}}

A função **`Math.atanh()`** retorna o arco tangente hiperbólico de um número, onde

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

## Sintaxe

```
Math.atanh(x)
```

### Parâmetros

- `x`
  - : O número.

### Valor retornado

O arco tangente hiperbólico do parâmetro recebido.

## Descrição

Por `atanh()` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.atanh()`, e não como um método de um objeto `Math` que você criou.

## Exemplos

### Usando `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

For values greater than 1 or less than -1, {{jsxref("NaN")}} is returned.

Para valores menores que -1 ou maiores que 1, {{jsxref("NaN")}} é retornado.

## Polyfill

Para <math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&#x3C;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &#x3C; 1</annotation></semantics></math>, temos <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math>, esse comportamento pode ser emulado com a seguinte função:

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## Especificações

| Specification                                            | Status               | Comment            |
| -------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-math.atanh', 'Math.atanh')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-math.atanh', 'Math.atanh')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.atanh")}}

## Veja também

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
