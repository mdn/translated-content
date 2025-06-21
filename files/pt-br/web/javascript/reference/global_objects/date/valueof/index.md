---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

O método **`valueOf()`** retorna o valor primitivo do objeto {{jsxref("Date")}}.

{{InteractiveExample("JavaScript Demo: Date.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## Sintaxe

```
dateObj.valueOf()
```

### Valor de retorno

O número de milissegundos entre 1 de Janeiro de 1970 00:00:00 UTC e a data.

## Descrição

O método `valueOf()` retorna o valor primitivo do objeto {{jsxref("Date")}} como um tipo de dado numérico, o número de milissegundos desde a meia noite do dia 1 de Janeiro de 1970 UTC.

Este método é funcionalmente equivalente ao método {{jsxref("Date.prototype.getTime()")}}.

Este método é geralmente chamado internamente pelo JavaScript e não explícito em código.

## Exemplos

### Usando `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf(); // atribui -424713600000 to myVar
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
