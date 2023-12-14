---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef}}

A propriedade **`Math.PI`** representa a proporção entre circunferência de um círculo com o seu diâmetro, aproximadamente 3.14159:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}

{{js_property_attributes(0, 0, 0)}}

## Descrição

Como `PI` é uma propriedade estática de `Math`, sempre use-a como `Math.PI`, ao invés de uma propriedade de um objeto `Math` que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.PI`

A seguinte função usa `Math.PI` para calcular a circunferência de um círculo com um dado raio.

```js
function calcularCircunferencia(raio) {
  return 2 * Math.PI * raio;
}

calcularCircunferencia(1); // 6.283185307179586
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Math")}}
