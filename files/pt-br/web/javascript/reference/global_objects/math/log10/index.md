---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
---

{{JSRef}}

A função **`Math.log10()`** retorna o logaritmo de base 10 de um número, que é

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

## Sintaxe

```
Math.log10(x)
```

### Parâmetros

- `x`
  - : Um número.

### Retorno

O logaritmo de base 10 de um número. Caso o número seja negativo, {{jsxref("NaN")}} é retornado.

## Descrição

Caso o valor de `x` seja menor que 0, então o retorno será sempre {{jsxref("NaN")}}.

Por `log10()` ser um método estático de `Math`, você sempre o usará como `Math.log10()`, ao invés de usá-lo como método de um objeto `Math` criado (`Math` não é um construtor).

Esta função é equivalente a Math.log(x) / Math.log(10). Para log10(e) use a constante {{jsxref("Math.LOG10E")}} que é 1 / {{jsxref("Math.LN10")}}.

## Exemplos

### Usando `Math.log10()`

```js
Math.log10(2); // 0.3010299956639812
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10(100000); // 5
```

## Polyfill

Isso pode ser simulado a partir da seguinte função:

```js
Math.log10 =
  Math.log10 ||
  function (x) {
    return Math.log(x) * Math.LOG10E;
  };
```

## Especificações

| Especificação                                            | Status               | Comentário          |
| -------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-math.log10', 'Math.log10')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-math.log10', 'Math.log10')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.log10")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
