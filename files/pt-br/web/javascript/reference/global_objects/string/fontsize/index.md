---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

O método `fontsize()` cria um elemento HTML [\<font>](/pt-BR/docs/Web/HTML/Element/font) que faz com que uma string seja exibida no tamanho da fonte especificada.

> **Nota:** O elemento `<font>` foi removido do [HTML5](/pt-BR/docs/Web/HTML/HTML5) e não deve mais ser usado. Em vez disso, web developers devem usar a [propriedade CSS correspondente](/pt-BR/docs/Web/CSS/font-size).

## Sintaxe

```
str.fontsize(size)
```

### Parâmetros

- `size`
  - : Um número inteiro entre 1 e 7.

### Valor retornado

Uma string contendo um elemento HTML [\<font>](/pt-BR/docs/Web/HTML/Element/font).

## Descrição

Ao especificar o tamanho como um inteiro, você define o tamanho da fonte do texto para um dos 7 tamanhos definidos. Ao especificar `size` como uma string como "-2", você ajusta o tamanho da fonte do texto em relação ao tamanho definido na tag [\<basefont>](/pt-BR/docs/Web/HTML/Element/basefont).

## Exemplos

### Usando `fontsize()`

O exemplo a seguir usa métodos do objeto global String para alterar o tamanho de uma string:

```js
var worldString = "Olá, mundo";

console.log(worldString.small()); // <small>Olá, mundo</small>
console.log(worldString.big()); // <big>Olá, mundo</big>
console.log(worldString.fontsize(7)); // <font size="7">Olá, mundo</fontsize>
```

Com o objeto [`element.style`](/pt-BR/docs/Web/API/ElementCSSInlineStyle/style) você pode obter o atributo `style` do elemento e manipulá-lo de forma mais genérica, por exemplo:

```js
document.getElementById("#oIdDoElemento").style.fontSize = "0.7em";
```

## Especificações

| Specification                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.fontsize', 'String.prototype.fontsize')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.fontsize")}}

## Veja também

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
