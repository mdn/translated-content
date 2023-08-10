---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
---

{{JSRef}}

O método **`setDate()`** configura o dia do objeto {{jsxref("Date")}} relativamente ao início do mês configurado previamente.

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## Sintaxe

```
dateObj.setDate(dayValue)
```

### Parâmetros

- `dayValue`
  - : Um número inteiro que representa o dia do mês.

### Valor de retorno

O número de milisegundos entre 1o de janeiro de 1970 00:00:00 UTC e a data indicada (o objeto {{jsxref("Date")}} é mudado no lugar).

## Descrição

Se o `dayValue` estiver fora da extensão de valores de data para o mês, `setDate()` vai atualizar o objeto {{jsxref("Date")}} consequentemente.

Por exemplo, se 0 for fornecido para `dayValue`, a data será configurada para o último dia do mês anterior.

Se um número negativo for fornecido para `dayValue`, a data será configurada contando-se regressivamente desde o último dia do mês anterior. -1 resultará na data sendo configurada para um dia antes do último dia o mês anterior.

## Exemplos

### Usando `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07 (7th of July 1962)
theBigDay.setDate(24); // 1962-07-24 (24th of July 1962)
theBigDay.setDate(32); // 1962-08-01 (1st of August 1962)
theBigDay.setDate(22); // 1962-08-22 (22th of August 1962)
theBigDay.setDate(0); // 1962-07-31 (31th of July 1962)
theBigDay.setDate(98); // 1962-10-06 (6th of October 1962)
theBigDay.setDate(-50); // 1962-08-11 (11th of August 1962)
```

## Especificações

| Especificação                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setdate', 'Date.prototype.setDate')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setDate")}}

## Veja também

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
