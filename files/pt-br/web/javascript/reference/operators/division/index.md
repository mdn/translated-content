---
title: Divisão (/)
slug: Web/JavaScript/Reference/Operators/Division
---

{{jsSidebar("Operators")}}

O operador de divisão (`/`) produz o quociente de seus operandos onde o operando esquerdo é o dividendo e o operando direito é o divisor.

{{InteractiveExample("JavaScript Demo: Expressions - Division operator")}}

```js interactive-example
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / "3");
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
```

## Sintaxe

```js-nolint
x / y
```

## Exemplos

### Divisão básica

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5
```

### Divisão por zero

```js
2.0 / 0; // Infinito

2.0 / 0.0; // Infinito, porque 0.0 === 0

2.0 / -0.0; // -Infinito
```

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- [Operador de adição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Addition)
- [Operador de subtração](/pt-BR/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Operador de multiplicação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Operador restante](/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Operador de exponenciação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operador de incremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Increment)
- [Operador de decremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Operador de negação unário](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Operador unário plus](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_plus)
