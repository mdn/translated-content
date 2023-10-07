---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef}} {{deprecated_header}}

O método `sup()` cria um elemento HTML [`<sup>`](/pt-BR/docs/Web/HTML/Element/sup) que faz com que uma string seja exibida como sobrescrito.

## Sintaxe

```
str.sup()
```

### Valor retornado

Uma string contendo um elemento HTML [`<sup>`](/pt-BR/docs/Web/HTML/Element/sup).

## Descrição

O método `sup()` cria uma string dentro de uma tag `<sup>`: `"<sup>str</sup>"`

## Exemplos

### Usando os métodos `sub()` e `sup()`

O exemplo a seguir usa os métodos {{jsxref("String.prototype.sub()", "sub()")}} e `sup()` para formatar uma string:

```js
var superText = "superscript";
var supText = "supscript";

console.log("This is what a " + superText.sup() + " looks like.");
// "This is what a <sup>superscript</sup> looks like."

console.log("This is what a " + supText.sup() + " looks like.");
// "This is what a <sup>supscript</sup> looks like."
```

## Especificações

| Specification                                                                |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.sup', 'String.prototype.sup')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.sup")}}

## Veja também

- {{jsxref("String.prototype.sup()")}}
