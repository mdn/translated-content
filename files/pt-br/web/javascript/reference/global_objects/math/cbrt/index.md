---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef}}

A função **`Math.cbrt()`** retorna a raiz cúbica de um número, isto é

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo> =</mo><mtext> y, tal que</mtext><mspace width="thickmathspace"></mspace><mtext></mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique} \; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

## Sintaxe

```
Math.cbrt(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor de retorno

A raiz cúbica do número fornecido.

## Descrição

Porque `cbrt()` é um método estático de `Math`, você sempre irá utilizar como `Math.cbrt()`, ao invés de um método de um objeto `Math` que você tenha criado (`Math` não é um construtor).

## Exemplos

### Utilizando `Math.cbrt()`

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948734
```

## Polyfill

Para todo <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="TeX">x \geq 0</annotation></semantics></math>, temos <math><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>/</mo><mn>3</mn></mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation></semantics></math>, então isto pode ser simulado pela seguinte função:

```js
if (!Math.cbrt) {
  Math.cbrt = function (x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
  };
}
```

## Especificações

| Especificação                                          | Status               | Comentário        |
| ------------------------------------------------------ | -------------------- | ----------------- |
| {{SpecName('ES6', '#sec-math.cbrt', 'Math.cbrt')}}     | {{Spec2('ES6')}}     | Definição inicial |
| {{SpecName('ESDraft', '#sec-math.cbrt', 'Math.cbrt')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.cbrt")}}

## Veja também

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
