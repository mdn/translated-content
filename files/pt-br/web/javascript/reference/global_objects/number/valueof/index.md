---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef}}

O método **`valueOf()`** retorna o valor primitivo contido no objeto {{jsxref("Number")}}.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## Sintaxe

```
numObj.valueOf()
```

### Valor retornado

Um número representando o valor primitivo do objeto {{jsxref("Number")}}.

## Descrição

Este método normalmente é invocado internamente pelo JavaScript e não explicitamente em um código web.

## Exemplos

### Utilizando `valueOf`

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{jsxref("Number.prototype.toSource()")}}
