---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
---

{{JSRef}}

A função **`Math.cosh()`** retorna o cosseno hiperbólico de um número, que pode ser expressada usando {{jsxref("Math.E", "constante e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

## Sintaxe

```
Math.cosh(x)
```

### Parâmetros

- **`x`**
  - : Um número.

### Valor de retorno

O cosseno hiperbólico do número dado.

## Descrição

Por `cosh()` ser um método estático de `Math`, sempre utilize como `Math.cosh()`, ao invés de como um método de um objeto `Math` que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.cosh()`

```js
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Polyfill

Isto pode ser emulado com a ajuda da função {{jsxref("Math.exp()")}}:

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
```

ou usando apenas uma chamada da função {{jsxref("Math.exp()")}}:

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    var y = Math.exp(x);
    return (y + 1 / y) / 2;
  };
```

## Especificações

| Especificações                                         |
| ------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-math.cosh', 'Math.cosh')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.cosh")}}

## See also

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
