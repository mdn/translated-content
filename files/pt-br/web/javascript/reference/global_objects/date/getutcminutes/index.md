---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

O método **`getUTCMinutes()`** retorna os minutos na data especificada de acordo com o tempo universal.

{{InteractiveExample("JavaScript Demo: Date.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45
```

## Sintaxe

```
dateObj.getUTCMinutes()
```

### Valor retornado

Um número inteiro, entre 0 e 59, representando os minutos na data especificada de acordo com o horário universal (UTC).

## Exemplos

### Usando `getUTCMinutes()`

O seguinte exemplo atribui a parte dos minutos do tempo atual para a variável `minutes`.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
