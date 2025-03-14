---
title: Operador de Agrupamento
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

## Sumário

O operador de agrupamento `()` controla a precedência e a precedência de avaliação em expressões.

## Sintaxe

```
 ( )
```

## Descrição

O operador de agrupamento consiste em um par de parênteses em volta de uma expressão, ou sub-expressão, para ignorar a [precedência normal de operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence) de modo que expressões com menor precedência possam ser avaliadas antes de uma expressão com maior prioridade.

## Exemplos

Ignorando multiplicação e divisão primeiro, então adição e substração para avarliar adição primeiramente.

```js-nolint
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

## Especificações

{{Specifications}}

## Compatibilidade

{{Compat}}

## Veja também

- [Operator precedence](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
