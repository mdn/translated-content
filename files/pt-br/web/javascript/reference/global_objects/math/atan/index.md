---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
---

{{JSRef}}

A função **`Math.atan()`** retorna a arco tangente (em radianos) de um número, onde

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x</annotation></semantics></math>

## Sintaxe

```
Math.atan(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor retornado

O arco tangente (em radianos) do parâmetro recebido.

## Descrição

O método `Math.atan()` retorna um valor numérico entre <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> e <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> radianos.

Por `atan()` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.atan()`, e não como um método de um objeto `Math` que você criou.

## Exemplos

### Usando `Math.atan()`

```js
Math.atan(1); // 0.7853981633974483
Math.atan(0); // 0
Math.atan(-0); // -0

Math.atan(Infinity); //  1.5707963267948966
Math.atan(-Infinity); // -1.5707963267948966

// The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
Math.atan(y / x);
```

Talvez você queira evitar usar **±**`Infinity` por motivos estéticos. Nesse caso, {{jsxref("Math.atan2()")}} com `0` como segundo parâmentro pode ser uma solução melhor.

## Especificações

| Specification                                          | Status               | Comment                                            |
| ------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                    | {{Spec2('ES1')}}     | Definição inicial. Implementado em JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.4', 'Math.atan')}}    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.atan', 'Math.atan')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.atan', 'Math.atan')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.atan")}}

## Veja também

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
