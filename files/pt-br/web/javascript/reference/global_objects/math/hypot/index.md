---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
---

{{JSRef}}

A função **`Math.hypot()`** retorna a raiz quadrada do somátorio do quadrado de seus parâmetros, ou seja

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)} = \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

## Sintaxe

```
Math.hypot([value1[, value2[, ...]]])
```

### Parâmetros

- `value1, value2, ...`
  - : Números.

### Valor retornado

A raiz quadrada do somátorio do quadrado dos parâmetros recebidos. Se um ou mais argumentos não puderem ser convertidos para um número, {{jsxref("NaN")}} é retornado.

## Descrição

Para calcular a hipotenusa de um triângulo retângulo, ou o módulo de um número complexo, é usada a fórmula `Math.sqrt(v1*v1 + v2*v2)` (<math><semantics><msqrt><mrow><mi>v</mi><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>2</mn><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{v1^2 + v2^2}</annotation></semantics></math>) onde v1 e v2 são, ou os lados de um triângulo, ou a parte real e a imaginário de um número complexo. Para calcular a distância entre duas ou mais dimensões, basta adicionar mais exponenciações dentro da raiz quadrada, por exemplo `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)` (<math><semantics><msqrt><mrow><mi>v</mi><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>3</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>4</mn><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{v1^2 + v2^2 + v3^2 + v4^2}</annotation></semantics></math>).

A função Math.hypot() torna esta tarefa mais rápida e mais fácil, basta executar `Math.hypot(v1, v2)` , or `Math.hypot(v1, v2, v3, v4, ...)` .

Dessa maneira também se evita problemas se a magnitude dos seus número for muito grande. O maio número que se pode representar em um _double float_ em JavasScript é `Number.MAX_VALUE` = 1.797...e+308. Se os seu números são maior que 1e154, calcular o quadrado deles resultará em `Infinity`, estragando os seus resultados. Por exemplo, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Se você usar a função `Math.hypot()`, você receberá uma resposta aceitável: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Isto também é verdade para número muito pequenos. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, mas `Math.hypot(1e-200, 1e-200) = 1.4142...e-200` é uma boa resposta.

> **Nota:** Por `hypot()` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.hypot()`, e não como um método de um objeto `Math` que você criou.

Se nenhum parâmetro for passado, o resultado é +0.

Se um ou mais parâmetros não puderem ser convertidos para um número, o resultado será {{jsxref("NaN")}}.

Com apenas um parâmetro, `Math.hypot()` se comporta como `Math.abs()`.

## Examples

### Usando `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## Polyfill

O comportamento de `Math.hypot()` pode ser emulado com a seguinte função:

```js
Math.hypot =
  Math.hypot ||
  function () {
    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
      if (arguments[i] === Infinity || arguments[i] === -Infinity) {
        return Infinity;
      }
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };
```

## Especificações

| Specification                                            | Status               | Comment            |
| -------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-math.hypot', 'Math.hypot')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-math.hypot', 'Math.hypot')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.hypot")}}

## Ver também

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
