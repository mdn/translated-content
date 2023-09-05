---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}O método **`getUTCHours()`** retorna o número de horas na data especificada de acordo com o horário universal (UTC).

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

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

| Especificação                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getUTCHours")}}

## Veja também

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
