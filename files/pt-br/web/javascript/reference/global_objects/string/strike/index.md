---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef}} {{deprecated_header}}

O método `strike()` cria um elemento HTML [`<strike>`](/pt-BR/docs/Web/HTML/Element/strike) que faz com que uma string seja exibida com o texto riscado.

## Sintaxe

```
str.strike()
```

### Valor retornado

Uma string contendo um elemento HTML [`<strike>`](/pt-BR/docs/Web/HTML/Element/strike).

## Descrição

O método `strike()` cria uma string dentro uma tag `<strike>`: "`<strike>str</strike>`".

## Exemplos

### Usando `strike()`

O exemplo a seguir usa métodos do objeto global String para alterar a formatação da string:

```js
var worldString = "Olá, mundo";

console.log(worldString.blink()); // <blink>Olá, mundo</blink>
console.log(worldString.bold()); // <b>Olá, mundo</b>
console.log(worldString.italics()); // <i>Olá, mundo</i>
console.log(worldString.strike()); // <strike>Olá, mundo</strike>
```

## Especificações

| Specification                                                                      |
| ---------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.strike', 'String.prototype.strike')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.strike")}}

## Veja também

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
