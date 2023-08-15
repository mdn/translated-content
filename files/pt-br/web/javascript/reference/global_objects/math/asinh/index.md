---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

A função **`Math.asinh()`** retorna o arco-seno hiperbólico de um número, isto é:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{o} \; y \; \text{único tal que} \; \sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## Sintaxe

```
Math.asinh(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor de retorno

O arco-seno hiperbólico de um dado número.

## Descrição

Como `asinh()` é um métodos estático de `Math`, você deve sempre chamá-lo como `Math.asinh()`, ao invés de um método de um objeto `Math` que você criou (`Math` não é um construtor).

## Exemplos

### Usando `Math.asinh()`

```js
Math.asinh(1); // 0.881373587019543
Math.asinh(0); // 0
```

## Polyfill

Como uma solução simples a expressçao<math><semantics><annotation encoding="TeX">\operatorname {arsinh} (x) = \ln \left(x + \sqrt{x^{2} + 1} \right)</annotation></semantics></math> pode ser usada diretamente para uma emulação grosseira pela seguinte função:

```js
Math.asinh =
  Math.asinh ||
  function (x) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.log(x + Math.sqrt(x * x + 1));
    }
  };
```

Apesar de formalmente correta, ela sofre de algumas problemas relacionadas à computação de ponto flutuante. Resultados precisos precisam de tratamento especial de positivos/negativos e argumentos pequenos/grandes como feitos por exemplo em em [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/s_asinh.c) ou[GNU Scientific Library](http://git.savannah.gnu.org/cgit/gsl.git/tree/sys/invhyp.c).

## Especificações

| Specification                                            | Status               | Comment             |
| -------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-math.asinh', 'Math.asinh')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-math.asinh', 'Math.asinh')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.asinh")}}

## Veja também

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
