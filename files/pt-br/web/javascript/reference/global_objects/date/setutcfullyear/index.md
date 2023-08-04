---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
---

{{JSRef}}

O método **`setUTCFullYear()`** atribui o ano completo na data especificada de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}

## Sintaxe

```
dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])
```

### Parâmetros

- `yearValue`
  - : Um inteiro especificando o valor numérico do ano, por exemplo, 1995.
- `monthValue`
  - : Opcional. Um inteiro entre 0 e 11 representando os meses Janeiro até Dezembro.
- `dayValue`
  - : Opcional. Um inteiro entre 1 e 31 representando o dia do mês. Se você especificar o parâmetro `dayValue`, vocẽ deve especificar `monthValue` também.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especificar os parâmetros `monthValue` e `dayValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} e {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} serão utilizados.

Se um parâmetro que você especificou está fora do alcance esperado, `setUTCFullYear()` tentará atualizar os outros parâmetros e a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você especificar 15 para o `monthValue`, o ano será incrementado em 1 (`yearValue + 1`), e 3 será usado para o mês.

## Exemplos

### Usando `setUTCFullYear()`

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Especificações

| Especificação                                                                                  |
| ---------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCFullYear")}}

## Veja também

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
