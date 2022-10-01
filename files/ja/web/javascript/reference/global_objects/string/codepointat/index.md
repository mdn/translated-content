---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

**`codePointAt()`** メソッドは、 Unicode コードポイント値である負ではない整数を返します。

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## 構文

```
str.codePointAt(pos)
```

### 引数

- `pos`
  - : コードポイント値を返す `str` の中の要素の位置です。

### 返値

与えられた `pos` の位置にあるコードポイント値を表す数値です。 `pos` の位置に要素がない場合は {{jsxref("undefined")}} を返します。

## 解説

指定された位置に要素が存在しない場合は {{jsxref("undefined")}} を返します。 `pos` の位置から UTF-16 サロゲートペアが始まらない場合は、 `pos` の位置のコードユニットを返します。

## 例

### codePointAt() の使用

```js
'ABC'.codePointAt(1)           // 66
'\uD800\uDC00'.codePointAt(0)  // 65536

'XYZ'.codePointAt(42)          // undefined
```

### codePointAt() の繰り返し

```js
for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
   console.log(codePoint.codePointAt(0).toString(16))
}
// '1f40e', '1f471', '2764'
```

## ポリフィル

次のプログラムは、 ECMAScript 2015 で定義された `codePointAt()` をネイティブで対応していないブラウザーで利用できるよう String を拡張します。

```js
/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if ( // check if it’s the start of a surrogate pair
        first >= 0xD800 && first <= 0xDBFF && // high surrogate
        size > index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.codePointAt")}}

## 関連情報

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
