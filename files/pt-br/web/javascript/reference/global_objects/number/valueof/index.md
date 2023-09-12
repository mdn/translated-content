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

## Specifications

| Specification                                                                        | Status               | Comment                                            |
| ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                  | {{Spec2('ES1')}}     | Definição inicial. Implementada no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.4', 'Number.prototype.valueOf')}}                   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.valueOf")}}

## See also

- {{jsxref("Number.prototype.toSource()")}}
