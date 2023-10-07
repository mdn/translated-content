---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef}} {{deprecated_header}}

O método `sub()` cria um elemento HTML [`<sub>`](/pt-BR/docs/Web/HTML/Element/sub) que faz com que uma string seja exibida como subscrito (texto pequeno).

## Sintaxe

```
str.sub()
```

### Valor retornado

Uma string contendo um elemento HTML [`<sub>`](/pt-BR/docs/Web/HTML/Element/sub).

## Descrição

O método `sub()` cria uma string dentro de uma tag `<sub>`: `"<sub>str</sub>"`.

## Exemplos

### Usando os métodos `sub()` e `sup()`

Os exemplos seguintes usam o métodos `sub()` e {{jsxref("String.prototype.sup()", "sup()")}} para formatar uma string:

```js
var superText = "superscript";
var subText = "subscript";

console.log("This is what a " + superText.sup() + " looks like.");
// This is what a <sup>superscript</sup> looks like

console.log("This is what a " + subText.sub() + " looks like.");
// This is what a <sub>subscript</sub> looks like.
```

## Especificação

| Especificação                                                                | Status               | Comentário                                         |
| ---------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.sub', 'String.prototype.sub')}}     | {{Spec2('ES6')}}     | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ESDraft', '#sec-string.prototype.sub', 'String.prototype.sub')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.sub")}}

## Veja também

- {{jsxref("String.prototype.sup()")}}
