---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

{{JSRef}}

O método **`setFullYear()`** atribui o ano completo para a data especificada de acordo com o horário universal (UTC). Retorna uma nova data e hora.

{{InteractiveExample("JavaScript Demo: Date.setFullYear()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setFullYear(1969);

console.log(event.getFullYear());
// Expected output: 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Expected output: 0
```

## Sintaxe

```
dateObj.setFullYear(yearValue[, monthValue[, dateValue]])
```

### Parâmetros

- `yearValue`
  - : Um inteiro especificando o valor número de um ano, por exemplo, 1995.
- `monthValue`
  - : Opcional. Um inteiro entre 0 e 11 representando os meses Janeiro até Dezembro.
- `dateValue`
  - : Opcional. Um inteiro entre 1 e 31 representando o dia do mês. Se você especificar o parâmetro `dateValue`, você deve também especificar `monthValue`.

### Valor retornado

O número de milisegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especificar os parâmetros `monthValue` e `dateValue`, os valores retornados dos métodos {{jsxref("Date.prototype.getMonth()", "getMonth()")}} e {{jsxref("Date.prototype.getDate()", "getDate()")}} são usados.

Se um parâmetro que você especificou está fora do alcance esperado, `setFullYear()` tenta atualizar os outros parâmetros e a informação de data no objeto {{jsxref("Date")}} adequadamente. Por exemplo, se você especificar 15 para o `monthValue`, o ano será incrementado em 1 (`yearValue + 1`), e 3 é usado para o mês.

## Exemplos

### Usando `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
