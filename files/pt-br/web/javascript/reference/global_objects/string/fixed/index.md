---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef}} {{deprecated_header}}

O método **`fixed()`** cria um elemento HTML [`<tt>`](/pt-BR/docs/Web/HTML/Element/tt) que faz com que uma string seja exibida em uma fonte de densidade fixa.

## Sintaxe

```
str.fixed()
```

### Valor retornado

Uma string que representa o elemento HTML [\<tt>](/pt-BR/docs/Web/HTML/Element/tt).

## Descrição

O método `fixed()` cria uma string dentro de uma tag `<tt>`:
`"<tt>str</tt>"`.

## Exemplos

### Usando `fixed()`

O exemplo a seguir usa o método `fixed()` para alterar a formatação de uma string:

```js
var worldString = "Olá, mundo";
console.log(worldString.fixed()); // "<tt>Olá, mundo</tt>"
```

## Especificações

| Specification                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.fixed', 'String.prototype.fixed')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.fixed")}}

## Veja também

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
