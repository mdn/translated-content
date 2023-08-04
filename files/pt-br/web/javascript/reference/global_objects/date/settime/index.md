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

| Especificação                                                                    | Status               | Comentário                                         |
| -------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.27', 'Date.prototype.setTime')}}                | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.settime', 'Date.prototype.setTime')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.settime', 'Date.prototype.setTime')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setTime")}}

## Veja também

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
