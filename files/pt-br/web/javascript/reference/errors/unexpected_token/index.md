---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que deu errado?

Uma construção específica da linguagem era esperada, mas algo não foi fornecido. Isto deve ser um simples erro de digitação.

## Exemplos

### Expressão esperada

Por exemplo, quando funções são chamadas, vírgulas sem um valor na sequência não são permitidas. O JavaScript esperarará outro argumento, como pode ser qualquer expressão.

```js-nolint example-bad
Math.max(2, 42,);
// SyntaxError: expected expression, got ')'
```

O correto é omitir a vírgula ou adicionar outro argumento:

```js example-good
Math.max(2, 42);
Math.max(2, 42, 13 + 37);
```

## Veja também

- {{jsxref("Math.max()")}}
