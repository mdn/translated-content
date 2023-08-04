---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

O método **`setUTCSeconds()`** atribui os segundos para a data especificada de acordo com o horário universal.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Sintaxe

```
dateObj.setUTCSeconds(secondsValue[, msValue])
```

### Parâmetros

- `secondsValue`
  - : Um inteiro entre 0 e 59, representando os segundos.
- `msValue`
  - : Opcional. Um número entre 0 e 999, representando os milissegundos.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especifica o parâmetro `msValue`, o valor retornado pelo método {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} é utilizado.

Se o parâmetro que você especificou está fora do alcance esperado, `setUTCSeconds()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 100 para `secondsValue`, os minutos guardados no objeto {{jsxref("Date")}} irá ser incrementado em 1, e 40 será usado para os segundos.

## Exemplos

### Usando `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Especificações

| Especificação                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setUTCSeconds")}}

## Veja também

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
