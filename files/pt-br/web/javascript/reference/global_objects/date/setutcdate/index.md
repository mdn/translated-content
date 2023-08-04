---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

O método **`setUTCDate()`** atribui o dia do mês para uma data especifica de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Sintaxe

```
dateObj.setUTCDate(dayValue)
```

### Parâmetros

- `dayValue`
  - : Um inteiro entre 1 e 31, representando o dia do mês.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se um parâmetro que você especificou está fora do alcance esperado, `setUTCDate()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 40 para `dayValue`, e o mês guardado no objeto {{jsxref("Date")}} é Junho, o dia será trocado para 10 e o mês será incrementado para Julho.

## Exemplos

### Usando `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Especificações

| Especificação                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcdate', 'Date.prototype.setUTCDate')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCDate")}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
