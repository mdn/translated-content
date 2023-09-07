---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{JSRef}} {{deprecated_header}}

O método `italics()` cria um elemento HTML [`<i>`](/pt-BR/docs/Web/HTML/Element/i) que faz com que uma string fique em itálico.

## Sintaxe

```
str.italics()
```

### Valor retornado

Uma string contendo um elemento HTML [`<i>`](/pt-BR/docs/Web/HTML/Element/i).

## Descrição

O método `italics()` cria uma string dentro de uma tag `<i>`:
`"<i>str</i>"`.

## Exemplos

### Usando `italics()`

O exemplo a seguir usa métodos do objeto global String para alterar a formatação de uma string:

```js
var worldString = "Olá, mundo";
console.log(worldString.blink()); // <blink>Olá, mundo</blink>
console.log(worldString.bold()); // <b>Olá, mundo</b>
console.log(worldString.italics()); // <i>Olá, mundo</i>
console.log(worldString.strike()); // <strike>Olá, mundo</strike>
```

## Especificações

| Specification                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.italics', 'String.prototype.italics')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.italics")}}

## Veja também

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
