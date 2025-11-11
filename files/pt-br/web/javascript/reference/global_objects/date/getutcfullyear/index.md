---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

O método **`getUTCFullYear()`** retorna o ano na data indicada de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## Sintaxe

```
dateObj.getUTCFullYear()
```

### Retorna

Um número que representa o ano na data indicada de acordo com o horário universal.

## Descrição

O valor retornado por `getUTCFullYear()` é um número absoluto compatível com ano 2000, por exemplo, 1995.

## Exemplos

### Usando `getUTCFullYear()`

O exemplo a seguir atribui o valor de 4 dígitos do ano atual à variável `year.`

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
