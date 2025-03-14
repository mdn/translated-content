---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

O método **`getMinutes()`** retorna os minutos em uma data específica de acordo com o horário local.

## Sintaxe

```
dateObj.getMinutes()
```

### Retorna

Um número inteiro, entre 0 e 59, representando os minutos em uma data de acordo com o horário local.

## Exemplos

### Usando o `getMinutes()`

The second statement below assigns the value 15 to the variable `minutes`, based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object `Xmas95`.

No exemplo abaixo, a segunda linha atribui o valor 15 à variável `minutes`, baseado no valor de objeto {{jsxref("Global_Objects/Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
