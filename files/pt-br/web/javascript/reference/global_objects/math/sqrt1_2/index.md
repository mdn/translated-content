---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---

{{JSRef}}

A propriedade `Math.SQRT1_2` representa a raiz quadrada de <math><semantics><mfrac><mn>1</mn><mn>2</mn></mfrac><annotation encoding="TeX">\frac{1}{2}</annotation></semantics></math>, que é aproximadamente 0.707:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Por `SQRT1_2` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.SQRT1_2()`, e não como um método de um objeto `Math` que você criou.

## Exemplos

### Usando `Math.SQRT1_2`

A função a seguir retorna 1 sobre a raiz quadrada de 2:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Especificações

| Specification                                                | Status               | Comment                                            |
| ------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                          | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.7', 'Math.SQRT1_2')}}       | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.SQRT1_2")}}

## Veja também

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
