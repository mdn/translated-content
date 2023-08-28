---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef}}

A propriedade **`Math.LOG10E`** representa o logaritmo com base 10 de `e`, aproximadamente 0.434:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Por `LOG10E` ser uma propriedade estática de `Math`, deve-se sempre usá-la como `Math.LOG10E`, e não como propriedade de um objeto `Math` criado por você (`Math` não é um construtor).

## Exemplos

### Usando `Math.LOG10E`

A função a seguir retorna o logaritmo com base 10 de `e`:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Especificações

| Specification                                              | Status               | Comment                                            |
| ---------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                        | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.5', 'Math.LOG10E')}}      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.log10e', 'Math.LOG10E')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.LOG10E")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
