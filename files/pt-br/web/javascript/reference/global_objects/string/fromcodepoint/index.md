---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---

{{JSRef}}

O método estático **String.fromCodePoint()** retorna uma seqüência de caracteres criado usando a seqüência especificada de pontos de código.

## Syntax

```
String.fromCodePoint(num1[, ...[, numN]])
```

### Parâmetros

- `num1, ..., numN`
  - : Uma sequência de pontos de código.

### Exceções

- {{jsxref("RangeError")}}
  - : O {{jsxref("RangeError")}} é lançado se um ponto de código Unicode inválido é dado (por exemplo, "RangeError: NaN não é um ponto de código válido").

## Descrição

Como o fromCodePoint() é um método estático do {{jsxref("String")}}, você sempre vai chamar esse método como **String.fromCodePoint()✔** em vez de usá-lo como um método de uma string que você criar, como **"minha string".fromCodePoint()❌**.

## Exemplos

### Usando `fromCodePoint()`

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

```js
// String.fromCharCode() alone cannot get the character at such a high code point
// The following, on the other hand, can return a 4-byte character as well as the
// usual 2-byte ones (i.e., it can return a single character which actually has
// a string length of 2 instead of 1!)
console.log(String.fromCodePoint(0x2f804)); // or 194564 in decimal
```

## Polyfill

O método **String.fromCodePoint** foi adicionado ao padrão ECMAScript na versão 6 e pode não ser suportado em todos os navegadores da Web ou em todos os ambientes ainda. Use o código abaixo para um polyfill:

```js
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
if (!String.fromCodePoint) {
  (function () {
    var defineProperty = (function () {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    })();
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function () {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return "";
      }
      var result = "";
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
          codePoint < 0 || // not a valid Unicode code point
          codePoint > 0x10ffff || // not a valid Unicode code point
          floor(codePoint) != codePoint // not an integer
        ) {
          throw RangeError("Invalid code point: " + codePoint);
        }
        if (codePoint <= 0xffff) {
          // BMP code point
          codeUnits.push(codePoint);
        } else {
          // Astral code point; split in surrogate halves
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xd800;
          lowSurrogate = (codePoint % 0x400) + 0xdc00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, "fromCodePoint", {
        value: fromCodePoint,
        configurable: true,
        writable: true,
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  })();
}
```

## Especificações

| Specification                                                            | Status           | Comment             |
| ------------------------------------------------------------------------ | ---------------- | ------------------- |
| {{SpecName('ES6', '#sec-string.fromcodepoint', 'String.fromCodePoint')}} | {{Spec2('ES6')}} | Initial definition. |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.fromCodePoint")}}

## Veja também

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
