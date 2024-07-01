---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}O método **`setTime()`** atribui ao objecto {{jsxref("Date")}} a hora representada pelo número de milisegundos desde 1 de janeiro de 1970 as 00:00:00 UTC.{{EmbedInteractiveExample("pages/js/date-settime.html")}}

## Sintáxe

```
dateObj.setTime(timeValue)
```

### Parâmetros

- `timeValue`
  - : Um inteiro representando o número de milisegundos desde 1 de janeiro 1970, 00:00:00 UTC.

### Valor retornado

O número de milisegundos entre 1 de janeiro de 1970 00:00:00 UTC e a data atualizada (efetivamente, o valor do argumento).

## Descrição

Use o método `setTime()` para ajudar a atribuir data e hora para outro objeto {{jsxref("Date")}}.

## Exemplos

### Usando `setTime()`

```js
var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
