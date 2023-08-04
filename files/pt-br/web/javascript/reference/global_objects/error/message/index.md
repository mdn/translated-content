---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef}}

A propriedade **`message`** é a descrição legível para humanos de um erro.

## Descrição

Esta propriedade contém uma breve descrição do erro se ele estiver disponível ou foi definido. A propriedade `message` combinada com a propriedade {{jsxref("Error.prototype.name", "name")}} é usada pelo metodo {{jsxref("Error.prototype.toString()")}} para criar a string de representação do erro.

Por padrão, a propriedade `message` é uma string vazia, mas esse comportamento pode ser substituído por uma instância especificando uma mensagem como o primeiro argumento para o construtor {{jsxref("Error/Error", "Error")}}.

## Exemplos

### Disparando um erro personalizado

```js
const e = new Error("Não foi possível analisar a entrada");
// e.message é 'Não foi possível analisar a entrada'
throw e;
```

## Especificações

{{Specifications}}

## Compatibilidade de Browser

{{Compat}}

## Veja também

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
