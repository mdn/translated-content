---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
---

{{JSRef}}

A propriedade **`Math.LOG2E`** representa o logaritmo com base 2 de `e`, aproximadamente 1.442:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Por `LOG2E` ser uma propriedade estática de `Math`, deve-se sempre usá-la como `Math.LOG2E`, e não como propriedade de um objeto `Math` criado por você (`Math` não é um construtor).

## Exemplos

### Usando `Math.LOG2E`

A função a seguir retorna o logaritmo com base 2 de `e`:

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## Especificações

| Specification                                            | Status               | Comment                                            |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                      | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.4', 'Math.LOG2E')}}     | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.log2e', 'Math.LOG2E')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.log2e', 'Math.LOG2E')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.LOG2E")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
