---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

A função **`Math.sign()`** retorna o sinal de um número, indicando se o número é positivo, negativo ou zero.

## Sintaxe

```
Math.sign(x)
```

### Parâmetros

- `x`
  - : Se o parametro passado ao for numerico, a função irá converter o parametro em Um número.

### Valor retornado

Um número representando o sinal do argumento fornecido.

Se o argumento é um número positivo, o retorno será 1;

Se o numero passado for negativo, o retorno será -1

Se o argumento for um zero positivo , o retorno será +0

Se o argumento for 0 negativo , o retorno será -0

. Qualquer outro valor que não seja numérico (string transformada em numero por ex.), o retorno será {{jsxref("NaN")}}

## Descrição

Pela razão de `sign()` ser um método estático de `Math`, você sempre deve usá-lo como `Math.sign()`, e não como um método do objeto `Math` que você criou (`Math` não é um construtor).

Esta função possui 5 tipos de valores retornados, `1`, `-1`, `0`, `-0`, `NaN`, que representam "número positivo", "número negativo", "zero positivo", "zero negativo" e {{jsxref("NaN")}}, respectivamente.

O argumento passado para esta função será implicitamente convertido para o tipo `numérico`.

## Exemplos

### Usando `Math.sign()`

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Polyfill

```js
if (!Math.sign) {
  Math.sign = function (x) {
    // Se x é NaN, o resultado é NaN.
    // Se x é -0, o resultado é -0.
    // Se x é +0, o resultado é +0.
    // Se x é negativo e não -0, o resultado é -1.
    // Se x é positivo e não +0, o resultado é +1.
    return (x > 0) - (x < 0) || +x;
    // Uma representação mais estética é mostrada abaixo
    //
    // ( (x > 0) ? 1 : 0 )  // se x é positivo então mais um
    //          +           // senão (porque não poder ser - e +)
    // ( (x < 0) ? -1 : 0 ) // se x é negativo então menos um
    //         ||           // se x é 0, -0, NaN, ou não é um número,
    //         +x           // Então o resultado será x, (ou) se x não é
    //                      // um número, então converte x para número
  };
}
```

No polyfill acima, nenhuma coerção de tipo extra é necessária para tornar numéricos as expressões `(x > 0) ou (x < 0)` , porque subtraindo-as um do outro força uma conversão de tipo de booleano para numérico.

## Especificações

| Especificação                                          | Status               | Comentário         |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-math.sign', 'Math.sign')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-math.sign', 'Math.sign')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.sign")}}

## Veja também

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
