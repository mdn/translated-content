---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

O método **`getMilliseconds()`** retorna os milissegundos em uma data específica de acordo com o horário local.

## Sintaxe

```
dateObj.getMilliseconds()
```

### Retorna

Um número, entre 0 e 999, representando os milissegundos de uma data de acordo com o horário local.

## Exemplos

### Usando o `getMilliseconds()`

O exemplo a seguir atribui a porção de milissegundos do horário atual à variável `milliseconds`:

```js
var today = new Date();
var milliseconds = today.getMilliseconds();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
