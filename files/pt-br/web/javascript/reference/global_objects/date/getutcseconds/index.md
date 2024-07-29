---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

O método **`getUTCSeconds()`** retorna os segundos na data informada de acordo com a hora universal.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}

## Sintaxe

```
dateObj.getUTCSeconds()
```

### Valor de retorno

Um número inteiro, entre 0 e 59, representando os segundos da data informada de acordo com a hora universal.

## Exemplos

### Usando `getUTCSeconds()`

The following example assigns the seconds portion of the current time to the variabl

O exemplo a seguir atribui a parte dos segundos da hora atual à variável `seconds`.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
