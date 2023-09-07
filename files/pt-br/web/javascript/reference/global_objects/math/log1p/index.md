---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
---

{{JSRef}}

A função **`Math.log1p()`** retorna o logaritmo natural (base {{jsxref("Math.E", "e")}}) de 1 + um número, isto é

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Sintaxe

```
Math.log1p(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor de retorno

O logaritmo natural (base {{jsxref("Math.E", "e")}}) de **1** mais o número fornecido. Se o número for menor que **-1**, {{jsxref("NaN")}} será retornado.

## Descrição

Para valores muito pequenos de _x_, adicionando 1 pode reduzir ou eliminar precisão. Valores double floats costuman te dar em torno de 15 digitos de precisão no JavaScript. 1 + 1e-15 = 1.000000000000001, porém, 1 + 1e-16 = 1.000000000000000 e portanto, exatamente 1.0 naquele resultado, porque os números que passam de 15 digitos são arredondados.

Quando você calcula log(1 + x), você obterá um resultado muito perto de x, se x for um valor pequeno (isto é, porque eles são chamados logaritmos 'naturais'). Se você calcular Math.log(1 + 1.1111111111e-15) você obterá uma resposta perto de1.1111111111e-15. Ao invés, você vai acabar obtendo o logaritmo de 1.00000000000000111022 (o arrendondamento é feito em binário, portanto, as vezes isso pode parecer estranho), então você obterá o resultado 1.11022...e-15, com somente 3 digitos corretos. Se, ao invés, você calcular Math.log1p(1.1111111111e-15) você terá um retorno mais preciso de 1.1111111110999995e-15 com 15 digitos corretos de precisão (na verdade 16 nesse caso).

Se o valor de `x` for menor que -1, o valor retornado será sempre {{jsxref("NaN")}}.

Por conta do `log1p()` ser um metódo estático de `Math`, você sempre chamará como `Math.log1p()`, ao invés de chamar como um método de um objeto `Math` que você tenha criado (`Math` não é um construtor).

## Exemplos

### Usando `Math.log1p()`

```js
Math.log1p(1); // 0.6931471805599453
Math.log1p(0); // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Polyfill

Isto pode ser implementado com a seguinte função:

```js
Math.log1p =
  Math.log1p ||
  function (x) {
    return Math.log(1 + x);
  };
```

## Especificações

| Especificação                                            | Status               | Comentário          |
| -------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-math.log1p', 'Math.log1p')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-math.log1p', 'Math.log1p')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.log1p")}}

## Veja também

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
