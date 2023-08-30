---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
---

{{JSRef}}

A propriedade **`Math.SQRT2`** representa a raiz quadrada de 2, que é aproximadamente 1.414:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descrição

Por `SQRT2` ser uma propriedade estática de `Math`, deve-se sempre usá-la como `Math.SQRT2`, e não como propriedade de um objeto `Math` criado por você (`Math` não é um construtor).

## Examples

### Usando `Math.SQRT2`

A função a seguir retorna a raiz quadrada de 2:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Especificações

| Specification                                            | Status               | Comment                                            |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                      | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.8', 'Math.SQRT2')}}     | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.sqrt2', 'Math.SQRT2')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.sqrt2', 'Math.SQRT2')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.SQRT2")}}

## Veja também

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
