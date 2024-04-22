---
title: Operador Exponencial
slug: Web/JavaScript/Reference/Operators/Exponentiation
---

{{jsSidebar("Operators")}}

## Sumário

O **operador de exponenciação (`**`)** retorna o resultado de elevar o primeiro operando à potência do
segundo operando. É equivalente ao método `Math.pow`, exceto que também aceita números do tipo BigInt
como operandos.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## Sintaxe

```js
x ** y;
```

## Descrição

O operador de exponenciação é associativo à direita: `a ** b ** c` é igual a `a ** (b ** c)`.

Na maioria das linguagens, como PHP, Python e outras que têm um operador de exponenciação `(**)`,
o operador de exponenciação é definido para ter uma precedência maior do que os operadores unários,
como o unário `+` e unário `-`, mas há algumas exceções.
Por exemplo, no Bash, o operador `**` é definido para ter uma precedência menor do que os operadores unários.

Em JavaScript, é impossível escrever uma expressão de exponenciação ambígua.
Ou seja, você não pode colocar um operador unário (`+ / - / ~ /! / delete / void / typeof`)
imediatamente antes do número base; fazer isso causará um SyntaxError.

```js
    -2 ** 2;
    // // 4 no Bash, -4 em outros idiomas.
    // Isso é inválido em JavaScript, pois a operação é ambígua.

    -(2 ** 2);
    // -4 em JavaScript e a intenção do autor não é ambígua.
```

Observe que algumas linguagens de programação usam o símbolo circunflexo `^` para exponenciação,
mas o JavaScript usa esse símbolo para o operador `XOR lógico bit a bit`.

## Exemplos

### Exponenciação básica

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
NaN ** 2; // NaN
```

### Associatividade

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### Uso com operadores unários

Para inverter o sinal do resultado de uma expressão de exponenciação:

```js
-(2 ** 2); // -4
```

Para forçar a base de uma expressão de exponenciação a ser um número negativo:

```js
(-2) ** 2; // 4
```

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Operador condicional if](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [Operador de adição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Addition)
- [Operador de subtração](/pt-BR/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Operador de multiplicação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Operador de divisão](/pt-BR/docs/Web/JavaScript/Reference/Operators/Division)
- [Operador de resto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Operador de incremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Increment)
- [Operador de decremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Operador de negação unária](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Operador de adição unária](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_plus)
