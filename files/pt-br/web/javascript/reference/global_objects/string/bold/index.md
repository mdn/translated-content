---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef}} {{deprecated_header}}

O método **`bold()`** cria um elemento HTML [\<b>](/pt-BR/docs/Web/HTML/Element/b) que faz com que uma string seja exibida em negrito.

## Sintaxe

```
str.bold()
```

### Valor retornado

Uma string contendo um elemento HTML [\<b>](/pt-BR/docs/Web/HTML/Element/b) .

## Descrição

O método `bold()` cria uma string dentro de uma tag `<b>`:
`"<b>str</b>"`.

## Exemplos

### Usando `bold()`

Os exemplos abaixo usam métodos do objeto [String](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#M%C3%A9todos_gen%C3%A9ricos_de_Strings) para alterar a formatação de uma string:

```js
var worldString = "Olá, mundo";

console.log(worldString.blink()); // <blink>Olá, mundo</blink>
console.log(worldString.bold()); // <b>Olá, mundo</b>
console.log(worldString.italics()); // <i>Olá, mundo</i>
console.log(worldString.strike()); // <strike>Olá, mundo</strike>
```

## Especificações

| Specification                                                                  |
| ------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.bold', 'String.prototype.bold')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.bold")}}

## Veja também

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
