---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---

{{JSRef}}

O método **`setMinutes()`** atribui os minutos para uma data específica de acordo com o horário local.

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## Sintaxe

```
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

### Versões anteriores ao JavaScript 1.3

```
dateObj.setMinutes(minutesValue)
```

### Parâmetros

- `minutesValue`
  - : Um inteiro entre 0 e 59, representando os mintuos.
- `secondsValue`
  - : Opcional. Um inteiro entre 0 e 59, representando os segundos. Se você especificar o parâmetro `secondsValue`, você também deve especificar `minutesValue`.
- `msValue`
  - : Opcional. Um número entre 0 e 999, representando os milissegundos. Se você especificar o parâmetro `msValue`, você deve também especificar `minutesValue` e `secondsValue`.

### Valor de retorno

O número de milissegundos entre dia 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especifica os parâmetros `secondsValue` e `msValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} e {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} são usados.

Se um parâmetro que você especificou estiver fora do alcance esperado, `setMinutes()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usa 100 para `secondsValue`, os minutos serão incrementados em 1 (`minutesValue + 1`), e 40 serão usados para segundos.

## Exemplos

### Usando `setMinutes()`

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Especificações

| Especificação                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.setminutes', 'Date.prototype.setMinutes')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.setMinutes")}}

## Veja também

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
