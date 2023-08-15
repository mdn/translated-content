---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef}}

A função **`Math.cos()`** ,que é estatica, retorna o [cosseno](https://pt.wikipedia.org/wiki/cosseno) de um ângulo, que deve estar em [radianos](https://pt.wikipedia.org/wiki/radianos). A expressão é <math style="display: inline;"><mstyle displaystyle="true"><mfrac><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>adjacent</mtext> </mrow></mrow></msub><msub><mrow><mtext>length</mtext> </mrow><mrow><mrow><mtext>hypotenuse</mtext> </mrow></mrow></msub></mfrac></mstyle></math>.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Sintaxe

```
Math.cos(x)
```

### Parâmetros

- `x`
  - : Ângulo em radianos

### Valor de retorno

O cosseno do número: x

## Descrição

`Math.cos()` é um método que retorna um número entre -1 e 1, que representa o cosseno de um ângulo.

Já que `cos()` é um método estático de `Math`, você sempre deve usar `Math.cos()`, ao invez de criar um objeto de `Math` (`Math` não tem construtor).

## Exemplos

### Usando `Math.cos()`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## Especificações

| Especificação                                        | Status               | Comentário                                         |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.7', 'Math.cos')}}   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.cos', 'Math.cos')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.cos', 'Math.cos')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.cos")}}

## Veja também

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
