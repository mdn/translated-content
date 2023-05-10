---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef}}

A propriedade **`name`** representa o nome do tipo do erro. O valor inicial é "Error".

## Descrição

Por padrão, instâncias {{jsxref("Error")}} recebem o nome "Error". A propriedade `name`, em adição na propriedade {{jsxref("Error.prototype.message", "message")}}, é usado pelo método {{jsxref("Error.prototype.toString()")}} para criar a string de representação do erro.

## Exemplos

### Disparando um erro personalizado

```js
const e = new Error("Malformed input"); // e.name é 'Error'

e.name = "ParseError";
throw e;
// e.toString() vai retornar 'ParseError: Malformed input'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
