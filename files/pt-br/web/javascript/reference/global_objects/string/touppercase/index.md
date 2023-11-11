---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

O método `toUpperCase()` retorna o valor da string original convertido em letras maiúsculas.

## Sintaxe

```
str.toUpperCase()
```

### Valor retornado

Uma nova string representando a string original convertida em maiúsculas.

### Exceções

- {{jsxref("TypeError")}}
  - : Quando chamado em uma string contendo valor {{jsxref("null")}} ou {{jsxref("undefined")}}, por exemplo, `String.prototype.toUpperCase.call(undefined)`.

## Descrição

O método `toUpperCase()` retorna o valor da string convertido para letras maiúsculas. `toUpperCase()` não altera o valor da string original.

## Exemplos

### Uso básico

```js
console.log("alfabeto".toUpperCase()); // 'ALFABETO'
```

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
