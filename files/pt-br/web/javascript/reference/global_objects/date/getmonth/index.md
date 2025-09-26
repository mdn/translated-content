---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

O método **`getMonth()`** retorna o mês na data especificada de acordo com o horário local, como um valor zero-based (onde o zero indica o primeiro mês do ano).

## Sintaxe

```
dateObj.getMonth()
```

### Parâmetros

Nenhum.

### Retorno

O valor retornado pelo método `getMonth()` é um inteiro entre 0 e 11. 0 corresponde a Janeiro, 1 a Fevereiro, e assim sucessivamente.

## Exemplos

### Usando o `getMonth()`

A segunda declaração abaixo atribui o valor 11 à variavel `month`, baseado no valor do objeto {{jsxref("Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## <br>Veja também

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
