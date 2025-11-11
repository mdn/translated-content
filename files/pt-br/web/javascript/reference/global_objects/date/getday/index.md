---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

{{JSRef}}

## Resumo

O método **`getDay()`** retorna o dia da semana para a data especificada de acordo com a hora local, onde 0 representa o Domingo.

## Sintaxe

```
dateObj.getDay()
```

### Parâmetros

Nenhum.

### Retorna

O valor retornado por `getDay()` é um inteiro que corresponde com o dia da semana: 0 para Domingo, 1 para Segunda-Feira, 2 para Terça-Feira, e assim por diante.

## Exemplos

### Exemplo: Usando `getDay()`

O segundo statement abaixo atribui o valor 1 à variável weekday (dia da semana), baseado no valor do objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`. A data 25 de Dezembro de 1995 é uma Segunda-Feira.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
