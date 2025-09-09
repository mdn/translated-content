---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}O método **`getUTCHours()`** retorna o número de horas na data especificada de acordo com o horário universal (UTC).

{{InteractiveExample("JavaScript Demo: Date.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## Sintaxe

```
dateObj.getUTCHours()
```

### Valor retornado

Um número inteiro, entre 0 e 23, representando as horas em uma data de acordo com o horário universal (UTC).

## Exemplos

### Usando `getUTCHours()`

O exemplo a seguir atribui a porção de horas do horário corrente à variável `hours`.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
