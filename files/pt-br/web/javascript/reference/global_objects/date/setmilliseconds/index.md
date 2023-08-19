---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef}}

O método **`setMilliseconds()`** atribui os milissegundos para a data específica de acordo com a hora local.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Sintaxe

```
dateObj.setMilliseconds(millisecondsValue)
```

### Parâmetros

- `millisecondsValue`
  - : Um número entre 0 e 999, representando os milissegundos.

### Valor de retorno

O número de milissegundos entre dia 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você especifica um número fora do alcance esperado, a informação de data no objeto {{jsxref("Date")}} é atualizado de acordo. Por exemplo, se você especifica 1005, o número de segundos é incrementado em 1, e 5 é utilizado para os milissegundos.

## Exemplos

### Usando `setMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Especificações

| Especificação                                                                                    |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setMilliseconds")}}

## Veja também

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
