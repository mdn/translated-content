---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

O método **`getUTCMinutes()`** retorna os minutos na data especificada de acordo com o tempo universal.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Sintaxe

```
dateObj.getUTCMinutes()
```

### Valor retornado

Um número inteiro, entre 0 e 59, representando os minutos na data especificada de acordo com o horário universal (UTC).

## Exemplos

### Usando `getUTCMinutes()`

O seguinte exemplo atribui a parte dos minutos do tempo atual para a variável `minutes`.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
