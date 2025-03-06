---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

O método **`concat()`** combina o texto de duas ou mais strings e retorna uma nova string.

## Sintaxe

```
str.concat(string2 [, ...stringN])
```

### Parâmetros

- `string2...stringN`
  - : Strings para concatenar à **`string2`**.

### Valor retornado

Uma nova string contendo a string original concatenada à string passada como parâmetro.

## Descrição

A função **`concat()`** combina o texto de duas ou mais strings e retorna uma nova string. As alterações de texto de uma string não afetam a outra string.

Se o argumento passado não for do tipo string, o mesmo será convertido em uma string antes de ser concatenado.

## Performance

É extremamente recomendado o uso dos [operadores de atribuição](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) (`+`, `+=`) em detrimento do método `concat()`.

## Exemplos

### Usando `concat()`

O exemplo a seguir concatena uma string à outra string originando uma terceira string.

```js
var hello = "Olá, ";
console.log(hello.concat("Kevin", " tenha um bom dia."));

// retorna 'Olá, Kevin tenha um bom dia.'
```

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
