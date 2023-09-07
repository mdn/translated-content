---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef}}

A função **`Math.log()`** retorna o logaritmo natural(base {{jsxref("Math.E", "e")}}) de um número, que é:

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

## Sintaxe

```
Math.log(x)
```

### Parâmetros

- `x`
  - : Um número.

### Retorno

O logaritmo natural (base {{jsxref("Math.E", "e")}}) de um número dado. Se o número é negativo, {{jsxref("NaN")}} é retornado.

## Descrição

Se o valor de `x` é negativo, o retorno será sempre {{jsxref("NaN")}}.

Por `log()` ser um método estático de `Math`, você sempre o usará como `Math.log()`, ao invés de um método de um objeto de `Math` que você criou(`Math` não é um construtor).

Caso você precise do logaritmo natural de 2 ou 10, use as constantes {{jsxref("Math.LN2")}} ou {{jsxref("Math.LN10")}} . Caso você precise de um logaritmo de base 2 ou 10, use {{jsxref("Math.log2()")}} ou {{jsxref("Math.log10()")}} . Caso você precise utilizar logaritmo de outras bases, use Math.log(x) / Math.log(outraBase) como no exemplo abaixo; talvez você queira pré-calcular 1 / Math.log(outraBase) .

## Exemplos

### Usando `Math.log()`

```js
Math.log(-1); // NaN, out of range
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### Usando `Math.log()` como uma base diferente

As funções a seguir retornam o logaritmo de `y` na base `x` (ie. <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Caso você execute `getBaseLog(10, 1000)` será retornado `2.9999999999999996` devido ao arredondamento de ponto-flutuante, o qual é bem próximo do retorno exato de 3.

## Especificações

| Specification                                        | Status               | Comment                                            |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.10', 'Math.log')}}  | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.log', 'Math.log')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.log', 'Math.log')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.log")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
