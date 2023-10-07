---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}} {{deprecated_header}}

O método `small()` cria um elemento HTML [`<small>`](/pt-BR/docs/Web/HTML/Element/small) que faz com que uma string seja exibida em uma fonte pequena.

## Sintaxe

```
str.small()
```

### Valor retornado

Uma string contendo um elemento HTML [`<small>`](/pt-BR/docs/Web/HTML/Element/small).

## Descrição

O método `small()` cria uma string dentro de uma tag `<small>`: `"<small>str</small>"`.

## Exemplos

### Usando `small()`

O exemplo a seguir usa métodos do objeto global String para alterar o tamanho da string:

```js
var worldString = "Olá, mundo";

console.log(worldString.small()); // <small>Olá, mundo</small>
console.log(worldString.big()); // <big>Olá, mundo</big>
console.log(worldString.fontsize(7)); // <font size="7">Olá, mundo</fontsize>
```

Com o objeto [element.style](/pt-BR/docs/Web/API/ElementCSSInlineStyle/style) você pode pegar o atributo de estilo do elemento e manipulá-lo de forma mais genérica, por exemplo:

```js
document.getElementById("#oIdDoElemento").style.fontSize = "0.7em";
```

## Especificações

| Specification                                                                    |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.small', 'String.prototype.small')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.small")}}

## Veja também

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
