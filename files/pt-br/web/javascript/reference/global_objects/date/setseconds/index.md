---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
---

{{JSRef}}

O método **`setSeconds()`** atribui os segundos na data especificada de acordo com o tempo local.

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## Sintaxe

```
dateObj.setSeconds(secondsValue[, msValue])
```

### Versões anteriores ao JavaScript 1.3

```
dateObj.setSeconds(secondsValue)
```

### Parâmetros

- `secondsValue`
  - : Um inteiro entre 0 e 59, representando os segundos.
- `msValue`
  - : Opcional. Um número entre 0 e 999, representando os milissegundos.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especifica o parâmetro `msValue`, o valor retornado do método {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} é utilizado.

Se um parâmetro que você especificou está fora do alcance esperado, `setSeconds()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 100 para `secondsValue`, os minutos guardados no objeto {{jsxref("Date")}} serão incrementados em 1, e 40 serão usados para os segundos.

## Exemplos

### Usando `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Especificações

| Especificação                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setseconds', 'Date.prototype.setSeconds')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setSeconds")}}

## Veja também

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
