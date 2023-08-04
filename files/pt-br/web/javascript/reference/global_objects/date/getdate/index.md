---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef("Global_Objects", "Date")}}

## Resumo

O método **`getDate()`** retorna o dia do mês da data especificada de acordo com a hora local.

## Sintaxe

```
dateObj.getDate()
```

### Parâmetros

Nenhum.

### Retorna

O valor retornado por `getDate()` é um inteiro entre 1 e 31.

## Exemplos

### Exemplo: Usando `getDate()`

O segundo statement abaixo atribui o valor 25 à variável day, baseado no valor do objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();

console.log(day); // 25
```

## Especificações

| Especificação                                                                | Status             | Comentário                                         |
| ---------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                      | Standard           | Definição inicial. Implementado em JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.9.5.14', 'Date.prototype.getDate')}}            | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.getdate', 'Date.prototype.getDate')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getDate")}}

## Veja também

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
