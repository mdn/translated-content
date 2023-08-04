---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

{{JSRef("Global_Objects", "Date")}}

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

| **Especificação**                                                          | Status             | **Comentário**                                     |
| -------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                    | Standard           | Definição inicial. Implementado em JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.16', 'Date.prototype.getDay')}}           | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getday', 'Date.prototype.getDay')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getDay")}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
