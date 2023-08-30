---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef}}

A função **`Math.pow()`** retorna a _base_ elevada ao expoente _power_, ou seja, `baseexpoente`.

## Sintaxe

```
Math.pow(base, expoente)
```

### Parâmetros

- `base`
  - : O número da base.
- `expoente`
  - : O expoente usado para elevar a `base`.

## Descrição

Como `pow()` é um método estático de `Math`, você sempre irá usá-lo como `Math.pow()`, ao invés de usá-lo como um método de um objeto do tipo `Math` que você tenha criado (`Math` não é um construtor).

## Exemplos

### Usando `Math.pow()`

```js
// simples
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
// expoentes fracionários
Math.pow(4, 0.5); // 2 (raiz quadrada de 4)
Math.pow(8, 1 / 3); // 2 (raiz cúbica de 8)
Math.pow(2, 0.5); // 1.4142135623730951 (raiz quadrada de 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (raiz cúbica de 2)
// expoentes com sinais
Math.pow(7, -2); // 0.02040816326530612 == (1/7)2 == (1/49)
Math.pow(8, -1 / 3); // 0.5 == (1/8)1/3 == 1/2
// bases com sinal
Math.pow(-7, 2); // 49 (quadrados sempre são positivos)
Math.pow(-7, 3); // -343 (cubos podem ser negativos conforme a base)
Math.pow(-7, 0.5); // NaN (números negativos não tem uma raiz quadrada real)
// devido ao fato que raízes "par" e "ímpar" são próximas,
// e limitam a precisão de ponto flutuante,
// bases negativas com expoentes fracionários sempre retornam NaN
Math.pow(-7, 1 / 3); // NaN
```

## Especificações

| Especificação                                       | Status             | Comentário                                         |
| --------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                 | {{Spec2('ES1')}}   | Definição Inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.13', 'Math.pow')}} | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-math.pow', 'Math.pow')}}    | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.pow")}}

## Veja também

- {{jsxref("Math.cbrt()")}} {{experimental_inline}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Operador Exponencial](/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation) {{experimental_inline}}
