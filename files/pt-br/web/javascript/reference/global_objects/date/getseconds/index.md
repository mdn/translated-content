---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

O método **`getSeconds()`** retorna os segundos de uma data específica de acordo com o horário local.

## Sintaxe

```
dateObj.getSeconds()
```

### Retorna

Um número inteiro, entre 0 e 59, representando os segundos de uma data específica de acordo com o horário local.

## Exemples

### Usando o `getSeconds()`

The second statement below assigns the value 30 to the variable `seconds`, based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object `Xmas95`.

No exemplo a seguir, a segunda linha atribui o valor 30 à variável `seconds`, baseado no valor do objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
