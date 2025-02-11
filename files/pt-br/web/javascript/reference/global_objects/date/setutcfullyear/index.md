---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
---

{{JSRef}}

O método **`setUTCFullYear()`** atribui o ano completo na data especificada de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
