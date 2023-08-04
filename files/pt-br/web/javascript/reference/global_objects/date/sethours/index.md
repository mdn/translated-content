---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
---

{{JSRef}}

O método **`setHours()`** atribui as horas para uma data especificada de acordo com a hora local e retorna o número de milissegundos desde do dia 1 de Janeiro de 1970 00:00:00 UTC até o tempo representado pela instância {{jsxref("Date")}} atualizada.

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## Sintaxe

```
dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### Versões anteriores ao JavaScript 1.3

```
dateObj.setHours(hoursValue)
```

### Parâmetros

- `hoursValue`
  - : Idealmente, um número inteiro entre 0 e 23, representando a hora. Se um valor maior que 23 for fornecido, a data e hora será incrementada pelas horas extras.
- `minutesValue`
  - : Opcional. Idealmente, um número inteiro entre 0 e 59, representando os minutos. Se um valor maior que 59 for fornecido, a data e hora será incrementada em minutos extras.
- `secondsValue`
  - : Opcional. Idealmente, um número inteiro entre 0 e 59, representando os segundos. Se um valor maior que 59 for fornecido, a data e hora será incrementada em segundos extras. Se você especificar o parâmetro `secondsValue`, também deverá especificar parâmetro `minutesValue`.
- `msValue`
  - : Opcional. Idealmente, um número entre 0 e 999, representando os milissegundos. Se um valor maior que 999 for fornecido, a data e hora será incrementada em milissegundos extras. Se você especificar o parâmetro `msValue`, você também deve especificar `minutesValue` e `secondsValue`.

### Valor de retorno

O número de milissegundos entre dia 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especifica os parâmetros `minutesValue`, `secondsValue`, e `msValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}, {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}}, e {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} são usados.

Se um parâmetro que você especificar estiver fora do intervalo esperado, `setHours()` tenta atualizar as informações de data no objeto {{jsxref("Date")}}. Por exemplo, se você usa 100 para `secondsValue`, os minutos serão incrementados em 1 (`minutesValue + 1`), e 40 serão usados para os segundos.

## Exemplos

### Usando `setHours()`

```js
var theBigDay = new Date();
theBigDay.setHours(7);
```

## Especificações

| Especificação                                                                      |
| ---------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setHours")}}

## Veja também

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
