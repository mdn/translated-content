---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

o método **`getUTCMilliseconds()`** retorna os milisegundos na data especificada, de acordo com o horário universal (UTC).

## Sintaxe

```
dateObj.getUTCMilliseconds()
```

### Valor de retorno

Um número inteiro, entre 0 e 999, representando os milisegundos na data especificada de acordo com o horário universal (UTC).

## Exemplos

### Usando `getUTCMilliseconds()`

O exemplo a seguir associa a parte dos milissegundos do tempo atual à variável `milissegundos`.

```js
var hoje = new Date();
var milissegundos = today.getUTCMilliseconds();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
