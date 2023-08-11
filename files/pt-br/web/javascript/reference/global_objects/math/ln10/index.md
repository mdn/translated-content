---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
---

{{JSRef}}

A propriedade **`Math.LN10`** representa o logaritmo natural de 10, aproximadamente 2.302:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Como `LN10` é uma propriedade estática de `Math`, você sempre deve usa-lo como `Math.LN10`, ao invés de uma propriedade do objeto `Math` que você tenha criado (`Math` não é um construtor).

## Exemplos

### Usando `Math.LN10`

A seguinte função retorna o log natural de 10:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Especificações

| Especificação                                          | Status               | Comentário                                         |
| ------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                    | {{Spec2('ES1')}}     | Definição inicial. Implementado em JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.2', 'Math.LN10')}}    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.ln10', 'Math.LN10')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.ln10', 'Math.LN10')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.LN10")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
