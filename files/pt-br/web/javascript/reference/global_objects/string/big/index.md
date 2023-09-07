---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef}} {{deprecated_header}}

O método **big()** cria um elemento HTML [\<big>](/pt-BR/docs/Web/HTML/Element/big) fazendo com que o texto dentro dele seja exibido uma uma fonte maior.

> **Nota:** O elemento \<big> foi removido no [HTML5](/pt-BR/docs/Web/Guide/HTML/HTML5) e não deve mais ser usado. Em vez disso, web developers devem usar a [propriedade CSS correspondente](/pt-BR/docs/Web/CSS/font-size).

## Sintaxe

```
str.big()
```

### Valor retornado

Uma string contendo um elemento HTML.

## Descrição

O método `big()` cria uma string dentro de uma tag `<big>`:
`"<big>str</big>"`.

## Exemplos

### Usando `big()`

Os exemplos abaixo usam métodos do objeto [String](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#M%C3%A9todos_gen%C3%A9ricos_de_Strings) para alterar o tamanho de uma string:

```js
var worldString = "Olá, mundo";

console.log(worldString.small()); // <small>Olá, mundo</small>
console.log(worldString.big()); // <big>Olá, mundo</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Olá, Mundo</fontsize>
```

Com o objeto `element.style` você pode selecionar o atributo `style` do elemento e manipulá-lo de forma mais genérica, por exemplo:

```js
document.getElementById("#oIdDoElemento").style.fontSize = "2em";
```

## Especificações

| Specification                                                                |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.big', 'String.prototype.big')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.big")}}

## Veja também

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
