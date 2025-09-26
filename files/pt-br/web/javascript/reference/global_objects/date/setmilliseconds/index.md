---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef}}

O método **`setMilliseconds()`** atribui os milissegundos para a data específica de acordo com a hora local.

{{InteractiveExample("JavaScript Demo: Date.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
```

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
