---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}} {{deprecated_header}}

O método **`blink()`** cria um elemento HTML [\<blink>](/pt-BR/docs/Web/HTML/Element/blink) que faz uma string piscar.

> **Aviso:** A criação de textos que piscam é desaprovada por vários padrões de acessibilidade. O próprio elemento `<blink>` não é padrão e está obsoleto!

## Sintaxe

```
str.blink()
```

### Valor retornado

Uma string contendo um elemento HTML [\<blink>](/pt-BR/docs/Web/HTML/Element/blink).

## Descrição

O método `blink()` cria uma string dentro de uma tag `<blink>`:
`"<blink>str</blink>"`.

## Exemplos

### Usando `blink()`

Os exemplos abaixo usam métodos do objeto [String](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#M%C3%A9todos_gen%C3%A9ricos_de_Strings) para alterar a formatação de uma string:

```js
var worldString = "Olá, mundo";

console.log(worldString.blink()); // <blink>Olá, mundo</blink>
console.log(worldString.bold()); // <b>Olá, mundo</b>
console.log(worldString.italics()); // <i>Olá, mundo</i>
console.log(worldString.strike()); // <strike>Olá, mundo</strike>
```

## Especificações

| Specification                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.blink', 'String.prototype.blink')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.blink")}}

## Veja também

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
