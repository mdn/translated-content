---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

O método `toUpperCase()` retorna o valor da string original convertido em letras maiúsculas.

## Sintaxe

```
str.toUpperCase()
```

### Valor retornado

Uma nova string representando a string original convertida em maiúsculas.

### Exceções

- {{jsxref("TypeError")}}
  - : Quando chamado em uma string contendo valor {{jsxref("null")}} ou {{jsxref("undefined")}}, por exemplo, `String.prototype.toUpperCase.call(undefined)`.

## Descrição

O método `toUpperCase()` retorna o valor da string convertido para letras maiúsculas. `toUpperCase()` não altera o valor da string original.

## Exemplos

### Uso básico

```js
console.log("alfabeto".toUpperCase()); // 'ALFABETO'
```

## Especificações

| Especificação                                                                                | Status               | Comentário                                         |
| -------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                          | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.4.18', 'String.prototype.toUpperCase')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.touppercase', 'String.prototype.toUpperCase')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.toUpperCase")}}

## Veja também

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
