---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - リファレンス
  - String
  - UTF-32
  - Unicode
  - ポリフィル
browser-compat: javascript.builtins.String.fromCodePoint
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---
{{JSRef}}

**`String.fromCodePoint()`** 静的メソッドは指定されたコードポイントのシーケンスを使って生成された文字列を返します。

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## 構文

```js
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, ..., numN)
```

### 引数

- `num1, ..., numN`
  - : コードポイントの並びです。

### 返値

指定されたコードポイントの並びを使って生成された文字列です。

### 例外

- 無効な Unicode コードポイントが与えられた場合、{{jsxref("Errors/Not_a_codepoint", "RangeError")}} (例えば "RangeError: NaN is not a valid code point") が発生します。

## 解説

このメソッドは ({{jsxref("String")}} オブジェクトでは*なく*) 文字列を返します。

`fromCodePoint()` メソッドは {{jsxref("String")}} の静的なメソッドなので、自ら生成した {{jsxref("String")}} オブジェクトのメソッドとしてではなく、常に `String.fromCodePoint()` として使用してください。

## ポリフィル

`String.fromCodePoint` メソッドは ECMAScript 2015 で追加されました。まだすべてのウェブブラウザーや環境で対応していないかもしれません。

ポリフィルとして以下のコードを使用してください。

```js
if (!String.fromCodePoint) (function(stringFromCharCode) {
    var fromCodePoint = function(_) {
      var codeUnits = [], codeLen = 0, result = "";
      for (var index=0, len = arguments.length; index !== len; ++index) {
        var codePoint = +arguments[index];
        // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
        // The surrounding `!(...)` is required to correctly handle `NaN` cases
        // The (codePoint>>>0) === codePoint clause handles decimals and negatives
        if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint))
          throw RangeError("Invalid code point: " + codePoint);
        if (codePoint <= 0xFFFF) { // BMP code point
          codeLen = codeUnits.push(codePoint);
        } else { // Astral code point; split in surrogate halves
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          codeLen = codeUnits.push(
            (codePoint >> 10) + 0xD800,  // highSurrogate
            (codePoint % 0x400) + 0xDC00 // lowSurrogate
          );
        }
        if (codeLen >= 0x3fff) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result + stringFromCharCode.apply(null, codeUnits);
    };
    try { // IE 8 only supports `Object.defineProperty` on DOM elements
      Object.defineProperty(String, "fromCodePoint", {
        "value": fromCodePoint, "configurable": true, "writable": true
      });
    } catch(e) {
      String.fromCodePoint = fromCodePoint;
    }
}(String.fromCharCode));
```

## 例

## `fromCodePoint()` の使用

有効な入力:

```js
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
```

無効な入力:

```js
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### `fromCharCode()` との比較

{{jsxref("String.fromCharCode()")}} では補助文字 (すなわち `0x010000` – `0x10FFFF`) のコードポイントを指定することで返すことができません。
補助文字を返すためには、 UTF-16 のサロゲートペアでが必要です。

```js
String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"
```

一方、 `String.fromCodePoint()` はコードポイント (UTF-32 のコードユニットに相当) を指定することで、 4 バイトの補助文字や、一般的な 2 バイトの BMP 文字を返すことができます。

```js
String.fromCodePoint(0x1F303); // または 10 進数で 127747
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `String.fromCodePoint` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
