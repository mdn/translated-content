---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

O método **`setUTCSeconds()`** atribui os segundos para a data especificada de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
