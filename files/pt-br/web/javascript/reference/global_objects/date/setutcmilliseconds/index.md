---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef}}

O método **`setUTCMilliseconds()`** atribui os milissegundos para a data especificada de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Sintaxe

```
dateObj.setUTCMilliseconds(millisecondsValue)
```

### Parâmetros

- `millisecondsValue`
  - : Um número entre 0 e 999, representando os milissegundos.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se o parâmetro que você especificou estiver fora do alcance esperado, `setUTCMilliseconds()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 1100 para `millisecondsValue`, os segundos guardados no objeto {{jsxref("Date")}} serão incrementados em 1, e 100 serão usados para os milissegundos.

## Exemplos

### Usando `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Especificações

| Especificação                                                                                          |
| ------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCMilliseconds")}}

## Veja também

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
