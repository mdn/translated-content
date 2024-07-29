---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

A função **`getUTCMonth()`** retorna o mês da data especificada de acordo com o horário universal, como um valor iniciado em zero (aonde zero indica o primeiro mês do ano).

## Sintaxe

```
dateObj.getUTCMonth()
```

### Valor retornado

Um número inteiro, entre 0 e 11, correspondente ao mês da data informada de acordo com o horário universal. 0 para Janeiro, 1 para Fevereiro, 2 para Março, e assim em diante.

## Exemplos

### Usando `getUTCMonth()`

O exemplo a seguir atribui a parte do mês da data atual a variável `month`.

```js
var today = new Date();
var month = today.getUTCMonth();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
