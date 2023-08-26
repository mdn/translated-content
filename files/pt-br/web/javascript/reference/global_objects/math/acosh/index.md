---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
---

{{JSRef}}

A função Math.acosh() retorna o arco cosseno hiperbólico de um número, onde

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math>

## Sintaxe

```
Math.acosh(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor retornado

The hyperbolic arc-cosine of the given number. If the number is less than **1**, {{jsxref("NaN")}}.

O arco cosseno hiperbólico do número recebido. Se o número for menor que 1, {{jsxref("NaN")}} é retornado.

## Descrição

Por `acosh()` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.acosh()`, e não como um método de um objeto `Math` que você criou.

## Exemplos

### Usando `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0); // NaN
Math.acosh(0.5); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
```

For values less than 1 `Math.acosh()` returns {{jsxref("NaN")}}.

Para valores menores que 1, `Math.acosh()` retornará {{jsxref("NaN")}}.

## Polyfill

Para todo <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x \geq 1</annotation></semantics></math>, temos <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math>. Dessa maneira, este comportamento pode ser emulado da seguinte maneira:

```js
Math.acosh =
  Math.acosh ||
  function (x) {
    return Math.log(x + Math.sqrt(x * x - 1));
  };
```

## Especificações

| Specification                                            | Status               | Comment            |
| -------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-math.acosh', 'Math.acosh')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-math.acosh', 'Math.acosh')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.acosh")}}

## See also

- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
