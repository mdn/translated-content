---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

O método **`codePointAt()`** retorna um número inteiro não negativo que é o valor do ponto de código Unicode.

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## Sintaxe

```
str.codePointAt(pos)
```

### Parâmetros

- `pos`
  - : A posição de um elemento em uma string a partir do qual retorna o valor do ponto de código.

### Valor retornado

Um número que representa o valor do ponto de código do caractere na `pos` fornecida. Se não houver nenhum elemento na `pos`, {{jsxref ("undefined")}} é retornado.

## Descrição

Se não houver nenhum elemento na posição especificada, é retornado o valor de {{jsxref ("undefined")}}. Se nenhum par substituto UTF-16 começar na `pos`, a unidade de código na `pos` será retornada.

## Polyfill

O seguinte código cria no objeto global String a função `codePointAt()` conforme especificado em ECMAScript 2015 para navegadores sem suporte nativo:

```js
/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function () {
    "use strict"; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function () {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    })();
    var codePointAt = function (position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) {
        // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if (
        // check if it’s the start of a surrogate pair
        first >= 0xd800 &&
        first <= 0xdbff && // high surrogate
        size > index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, "codePointAt", {
        value: codePointAt,
        configurable: true,
        writable: true,
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  })();
}
```

## Exemplos

### Usando `codePointAt()`

```js
"ABC".codePointAt(1); // retorna 66
"\uD800\uDC00".codePointAt(0); // retorna 65536

"XYZ".codePointAt(42); // retorna undefined
```

### Criando um loop com `codePointAt()`

```js
for (let codePoint of "\ud83d\udc0e\ud83d\udc71\u2764") {
  console.log(codePoint.codePointAt(0).toString(16));
}
// retorna '1f40e', '1f471', '2764'
```

## Especificações

| Especificação                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.codePointAt")}}

## Veja também

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
