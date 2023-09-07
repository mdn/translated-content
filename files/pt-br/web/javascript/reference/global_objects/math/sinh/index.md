---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
---

{{JSRef}}

A função **`Math.sinh()`** retorna o seno hiperbólico de um número, que pode ser expresso usando a {{jsxref("Math.E", "constante e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## Sintáxe

```
Math.sinh(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor retornado

O seno hiperbólico do número dado.

## Descrição

Como `sinh()` é um método estático de `Math`, você sempre deve usar como `Math.sinh()`, ao invés de um novo objeto instanciado `Math` (`Math` não é um construtor).

## Exemplos

### Usando `Math.sinh()`

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## Polyfill

Isso pode ser emulado com a ajuda da função {{jsxref("Math.exp()")}}:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  };
```

ou usando apenas uma chamada para a função {{jsxref("Math.exp()")}}:

```js
Math.sinh =
  Math.sinh ||
  function (x) {
    var y = Math.exp(x);
    return (y - 1 / y) / 2;
  };
```

## Especificações

| Especificação                                          | Status               | Comentário         |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-math.sinh', 'Math.sinh')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-math.sinh', 'Math.sinh')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.sinh")}}

## Veja também

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
