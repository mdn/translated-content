---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef}}

A função **`Math.log2()`** retorna o logaritmo de base 2 de um número, que é

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

## Sintaxe

```
Math.log2(x)
```

### Parâmetros

`x` Um número.

### Retorno

O logaritmo de base 2 de um número. Caso o número seja negativo, {{jsxref("NaN")}} é retornado.

## Descrição

Caso o valor de `x` seja menor que 0, então o retorno será sempre {{jsxref("NaN")}}.

Por `log2()` ser um método estático de `Math`, você sempre o usará como `Math.log2()`, ao invés de usá-lo como método de um objeto `Math` criado (`Math` não é um construtor).

Esta função é equivalente a `Math.log(x)/Math.log(2)`. Para log2(e) use a constante {{jsxref("Math.LOG2E")}} que é 1 / {{jsxref("Math.LN2")}}.

## Exemplos

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

Este Polyfill simula a função `Math.log2`. Note que é retornado um valor não prcesiso Observe que é retornado valores imprecisos em algumas entradas (like 1 << 29), envolva em {{jsxref("Math.round()")}} se estiver trabalhando com máscaras de bits.

```js
Math.log2 =
  Math.log2 ||
  function (x) {
    return Math.log(x) * Math.LOG2E;
  };
```

## Especificações

| Especificação                                          | Status               | Comentário          |
| ------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-math.log2', 'Math.log2')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-math.log2', 'Math.log2')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.log2")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
