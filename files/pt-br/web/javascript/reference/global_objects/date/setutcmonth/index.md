---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

{{JSRef}}

O método **`setUTCMonth()`** atribui o mês para a data especificada de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## Sintaxe

```
dateObj.setUTCMonth(monthValue[, dayValue])
```

### Parâmetros

- `monthValue`
  - : Um inteiro entre 0 e 11, representando os meses de Janeiro até Dezembro.
- `dayValue`
  - : Opcional. Um inteiro de 1 a 31, representando o dia do mês.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se você não especificar o parâmetro `dayValue`, o valor retornado do método {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} é utilizado.

Se um parâmetro que você especificou está fora do alcance especificado, `setUTCMonth()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 15 para `monthValue`, o ano irá incrementar em 1, e 3 será usado para o mês.

## Exemplos

### Usando `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
