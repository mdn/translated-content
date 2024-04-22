---
title: Adição (+)
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

O operador de adição (`+`) produz a soma de operandos numéricos ou concatenação de strings.

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## Sintaxe

```js-nolint
x + y
```

## Descrição

O operador de adição está encarregado para duas operações distintas, adição numérica e concatenação de Strings. Ao avaliar, ele primeiro coage ambos os operandos para primitivos chamando a função do objeto [`[@@toPrimitive]()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)()(com "default" como dica), e os métodos valueOf(), e toString(), nessa ordem. Em seguida, são testados os tipos dos dois operandos:

- Se um lado é uma string, o outro operando também é [convertido em uma string](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) e eles são concatenados.
- Se ambos forem [BigInts](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/BigInt), a adição de BigInt será executada. Se um lado for um BigInt, mas o outro não, um {{jsxref("TypeError")}} será lançado.
- Caso contrário, ambos os lados são [convertidos em números](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) e a adição numérica é executada.

A concatenação de strings geralmente é considerada equivalente a [literais de modelo](/pt-BR/docs/Web/JavaScript/Reference/Template_literals) ou [String.prototype.concat()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat), mas não são. A adição força a expressão a uma chamada _primitive_ , que chama [`valueOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) em prioridade; por outro lado, literais de modelo e `concact()` converte a expressão para uma string, que chama [`toString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) em prioridade. Se a expressão tiver o método [`@@toPrimitive`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), a concatenação de strings o chama com "default" como dica, enquanto literais de modelo usam "string". Isso é importante para objetos que têm diferentes representações de string e primitivas — como [Temporal](https://github.com/tc39/proposal-temporal), cujo método `valueOf()` lança.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Você é aconselhado a não usar "" + x para executar a [coerção de string](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

## Exemplos

### Adição numérica

```js
// Number + Number -> adição
1 + 2; // 3
// Boolean + Number -> adição
true + 1; // 2
// Boolean + Boolean -> adição
false + false; // 0
```

### Concatenação de String

```js
// String + String -> concatenação
"foo" + "bar"; // "foobar"
// Number + String -> concatenação
5 + "foo"; // "5foo"
// String + Boolean -> concatenação
"foo" + false; // "foofalse"
```

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- [Operador de subtração](/pt-BR/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Operador de divisão](/pt-BR/docs/Web/JavaScript/Reference/Operators/Division)
- [Operador de multiplicação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Operador restante](/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Operador de exponenciação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operador de incremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Increment)
- [Operador de decremento](/pt-BR/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Operador de negação unário](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Operador unário plus](/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_plus)
