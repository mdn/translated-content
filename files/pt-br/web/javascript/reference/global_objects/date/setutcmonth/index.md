---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

{{JSRef}}

O método **`setUTCMonth()`** atribui o mês para a data especificada de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Sintaxe

```
dateObj.setUTCMonth(monthValue[, dayValue])
```

### Parâmetros

- `monthValue`
  - : Um inteiro entre 0 e 11, representando os meses de Janeiro até Dezembro.
- `dayValue`
  - : Opcional. Um inteiro de 1 a 31, representando o dia do mês.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especificar o parâmetro `dayValue`, o valor retornado do método {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} é utilizado.

Se um parâmetro que você especificou está fora do alcance especificado, `setUTCMonth()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 15 para `monthValue`, o ano irá incrementar em 1, e 3 será usado para o mês.

## Exemplos

### Usando `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Especificações

| Especificação                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCMonth")}}

## Veja também

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
