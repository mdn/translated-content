---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

O método **`getUTCDate()`** retorna o dia (data) do mês na data especificada de acordo com o horário universal.

## Sintaxe

```
dateObj.getUTCDate()
```

### Retorna

Um número inteiro, entre 1 e 31, representando o dia do mês na data especificada de acordo com o horário universal.

## Exemplos

### Usando `getUTCDate()`

O exemplo a seguir atribui o dia da data atual à variável `day`:

```js
var today = new Date();
var day = today.getUTCDate();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
