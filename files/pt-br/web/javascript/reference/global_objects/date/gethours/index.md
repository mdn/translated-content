---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef("Global_Objects", "Date")}}

## Resumo

O método **`getHours()`** retorna a hora para a data especificada, de acordo com a hora local.

## Sintaxe

```
dateObj.getHours()
```

### Parâmetros

Nenhum.

### Retorna

O valor retornado por `getHours()` é um inteiro entre 0 e 23.

## Exemplos

### Exemplo: Usando `getHours()`

O segundo statement abaixo atribui o valor 23 à variável `hours`, baseado no valor do objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## Especificações

| **Especificação**                                                              | Status             | **Comentário**                                     |
| ------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                        | Standard           | Definição inicial. Implementado em JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.18', 'Date.prototype.getHours')}}             | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.getHours")}}

## Veja também

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
