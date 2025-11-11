---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

O método **`setUTCDate()`** atribui o dia do mês para uma data especifica de acordo com o horário universal.

{{InteractiveExample("JavaScript Demo: Date.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## Sintaxe

```
dateObj.setUTCDate(dayValue)
```

### Parâmetros

- `dayValue`
  - : Um inteiro entre 1 e 31, representando o dia do mês.

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data atualizada.

## Descrição

Se um parâmetro que você especificou está fora do alcance esperado, `setUTCDate()` tentará atualizar a informação da data no objeto {{jsxref("Date")}}. Por exemplo, se você usar 40 para `dayValue`, e o mês guardado no objeto {{jsxref("Date")}} é Junho, o dia será trocado para 10 e o mês será incrementado para Julho.

## Exemplos

### Usando `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
