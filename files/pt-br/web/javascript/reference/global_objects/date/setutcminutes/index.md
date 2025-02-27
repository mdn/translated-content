---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---

{{JSRef}}

O método **`setUTCMinutes()`** atribui os minutos para uma data específica de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
```

## Sintaxe

```
dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
```

### Parâmetros

- `minutesValue`
  - : Um inteiro entre 0 e 59, representando os minutos.
- `secondsValue`
  - : Opcional. Um inteiro entre 0 e 59, reprensentando os segundos. Se vocẽ especificar o parâmetro `secondsValue`, você também deve especificar `minutesValue`.
- `msValue`
  - : Opcional. Um número entre 0 e 999, representando os milissegundos. Se você especificar o parâmetro `msValue`, você também deve especificar `minutesValue` e `secondsValue`.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se vocẽ não especificar os parâmetros `secondsValue` e `msValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} e {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} são utilizados.

Se o parâmetro que você especificou estiver fora do alcance esperado, `setUTCMinutes()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 100 para `secondsValue`, os minutos serão incrementados em 1 (`minutesValue + 1`), e 40 será usado para os segundos.

## Exemplos

### Usando `setUTCMinutes()`

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
