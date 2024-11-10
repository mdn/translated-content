---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef}}

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
