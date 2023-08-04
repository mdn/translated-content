---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---

{{JSRef}}

O método **`setUTCHours()`** atribui a hora para a data especificada de acordo com o horário universal, e retorna o número de milissegundos desde 1 de Janeiro de 1970 00:00:00 UTC até o horário representado pela instância {{jsxref("Date")}} atualizada.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Sintaxe

```
dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### Parâmetros

- `hoursValue`
  - : Um inteiro entre 0 e 23, representando a hora.
- `minutesValue`
  - : Opcional. Um inteiro entre 0 e 59, representando os minutos.
- `secondsValue`
  - : Opcional. Um inteiro entre 0 e 59, representando os segundos. Se você especificar o parâmetro `secondsValue`, você também deve especificar `minutesValue`.
- `msValue`
  - : Opcional. Um número entre 0 e 999, representando os milissegundos. Se você especificar o parâmetro `msValue`, você também deve especificar `minutesValue` e `secondsValue`.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especificar os parâmetros `minutesValue`, `secondsValue`, e `msValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}, e {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} serão utilizados.

Se o parâmetro que você especificou estiver fora do alcance esperado, `setUTCHours()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usa 100 para `secondsValue`, os minutos serão incrementados em 1 (`minutesValue + 1`), e 40 será usado para os segundos.

## Exemplos

### Usando `setUTCHours()`

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Especificações

| Especificação                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCHours")}}

## Veja também

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
