---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef}}

O método **`setUTCMilliseconds()`** atribui os milissegundos para a data especificada de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCMilliseconds()")}}

```js interactive-example
const date1 = new Date("2018-01-24T12:38:29.069Z");

console.log(date1.getUTCMilliseconds());
// Expected output: 69

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());
// Expected output: 420
```

## Sintaxe

```
dateObj.setUTCMilliseconds(millisecondsValue)
```

### Parâmetros

- `millisecondsValue`
  - : Um número entre 0 e 999, representando os milissegundos.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se o parâmetro que você especificou estiver fora do alcance esperado, `setUTCMilliseconds()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 1100 para `millisecondsValue`, os segundos guardados no objeto {{jsxref("Date")}} serão incrementados em 1, e 100 serão usados para os milissegundos.

## Exemplos

### Usando `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
