---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

A propriedade **`Math.E`** representa a base dos logarítmos naturais, aproximadamente 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0, 0, 0)}}

## Descrição

Como `E` é uma propriedade estática de `Math`, sempre use-a como `Math.E`, ao invés de uma propriedade de um objeto `Math` que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.E`

A seguinte função retorna o valor de _e_:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Especificações

| Especificação                                    | Status               | Comentário                                         |
| ------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                              | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.1', 'Math.E')}} | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.e', 'Math.E')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.e', 'Math.E')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.E")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
