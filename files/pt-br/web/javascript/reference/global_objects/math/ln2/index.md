---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

A propriedade **`Math.LN2`** representa o logaritmo natural (também conhecido como logaritmo neperiano) de 2, que é aproximadamente 0.693:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Por `LN2` ser uma propriedade estática de `Math`, deve-se sempre usá-la como `Math.LN2`, e não como uma propriedade de um objeto `Math` que você criou.

## Exemplos

### Usando `Math.LN2`

A função a seguir retorna o logaritmo natural de 2:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Especificações

| Specification                                        | Status               | Comment                                            |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.3', 'Math.LN2')}}   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.ln2', 'Math.LN2')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.ln2', 'Math.LN2')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.LN2")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
