---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
---

{{JSRef}} {{deprecated_header}}

O método `fontcolor()` cria um elemento HTML [\<font>](/pt-BR/docs/Web/HTML/Element/font) que faz com que uma string seja exibida na cor especificada.

> **Nota:** O elemento `<font>` foi removido do [HTML5](/pt-BR/docs/Web/HTML/HTML5) e não deve mais ser usado. Em vez disso, web developers devem usar a [propriedade CSS correspondente](/pt-BR/docs/Web/CSS/color_value).

## Sintaxe

```
str.fontcolor(color)
```

### Parâmetros

- `color`
  - : Deve ser um string que expresse uma cor em formato hexadecimal ou o nome, em Inglês, de uma cor. Os nomes das cores estão listados na referência de [cores CSS](/pt-BR/docs/Web/CSS/color_value#Palavras-chave_de_cores).

### Valor retornado

Uma string contendo um elemento HTML [\<font>](/pt-BR/docs/Web/HTML/Element/font).

## Descrição

Se você expressar uma cor em formato hexadecimal, deve usar o formato `rrggbb`. Por exemplo, os valores RGB hexadecimais para salmão são vermelho = FA, verde = 80 e azul = 72, portanto, o tripleto RGB para salmão é "FA8072".

## Exemplos

### Usando `fontcolor()`

O exemplo a seguir usa o método `fontcolor()` para alterar a cor de uma string, produzindo uma string com a tag HTML `<font>`.

```js
var worldString = "Olá, mundo";

console.log(worldString.fontcolor("red") + " está vermelho nesta linha");
// '<font color="red">Olá, mundo</font> está vermelho nesta linha'

console.log(
  worldString.fontcolor("FF00") + " está vermelho em hexadecimal nesta linha",
);
// '<font color="FF00">Olá, mundo</font> está vermelho em hexadecimal nesta linha'
```

Com o objeto [`element.style`](/pt-BR/docs/Web/API/ElementCSSInlineStyle/style) você pode obter o atributo `style` do elemento e manipulá-lo de forma mais genérica, por exemplo:

```js
document.getElementById("#oIdDoElemento").style.color = "red";
```

## Especificações

| Specification                                                                            |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.fontcolor', 'String.prototype.fontcolor')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.fontcolor")}}

## Veja também

- {{jsxref("String.prototype.fontsize()")}}
