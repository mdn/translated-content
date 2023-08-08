---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef}}

O método **`toLowerCase()`** retorna o valor da string que foi chamada convertido para minúsculo.

## Sintaxe

```
str.toLowerCase()
```

### Valor retornado

Uma nova string contendo o valor da string original convertido para minúsculo.

## Descrição

O método `toLowerCase()` retorna o valor da string original convertido para minúsculo. `toLowerCase()` não altera o valor da string original.

## Exemplos

### Usando `toLowerCase()`

```js
console.log("ALFABETO".toLowerCase()); // 'alfabeto'
```

## Especificações

| Especificação                                                                                | Estado               | Comentário                                         |
| -------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                          | {{Spec2('ES1')}}     | Definição inicial. Implementada no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.16', 'String.prototype.toLowerCase')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.tolowercase', 'String.prototype.toLowerCase')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.toLowerCase")}}

## Veja também

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
