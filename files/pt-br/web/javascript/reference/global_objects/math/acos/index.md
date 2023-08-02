---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef}}

A função **`Math.acos()`** retorna o arco cosseno (em radianos de um numero, sendo esse

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ O unico } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

## Syntax

```
Math.acos(x)
```

### Parâmetros

Um numero.

### Retorno

O arco cosseno(em radianos) se o valor passado como parâmetro for entre -1 e 1; caso contrario retornará {{jsxref("NaN")}}.

## Description

O `Math.acos()` metodo retorna um numero entre 0 e π radians para valores passado como parâmetros entre -1 e 1. Se o valor estiver fora dessa variação será retornado {{jsxref("NaN")}}.

Porque `acos() é um metodo estático`, você sempre usará `Math.acos() ao invés de criar um Objecto Math(Math não é um construtor).`

## Exemplos

### Usando `Math.acos()`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

Para valores menores que -1 ou maiores que than 1, `Math.acos()` o método retornrá {{jsxref("NaN")}}.

## Especificações

| Specification                                          | Status               | Comment                                            |
| ------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                    | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.2', 'Math.acos')}}    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.acos', 'Math.acos')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.acos', 'Math.acos')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.acos")}}

## Veja também

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
