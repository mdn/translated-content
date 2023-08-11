---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef("Global_Objects", "Math")}}

## Sumário

A função **`Math.abs(x)`** retorna o valor absoluto de um número "x", tal qual:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>></mo><mn>0</mn></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ -x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

## Sintaxe

```
var abs = Math.abs(x);
```

### Parâmetros

- `x`
  - : Um número.

### Valor de Retorno

O valor absoluto do número passado

## Descrição

Por `abs` ser um método estático de `Math`, você sempre o usará como `Math.abs()` ao ínves de usar como método de um objeto `Math` criado por você. (`Math` não é um construtor);

## Exemplos

### Comportamento de `Math.abs()`

Passando um string não-numérica ou variável indefinida/vazia retorna `NaN`. Passando null retorna 0.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Especificações

| Specification                                        | Status               | Comment                                            |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.1', 'Math.abs')}}   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.abs', 'Math.abs')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.abs', 'Math.abs')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.abs")}}

## Veja Também

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
