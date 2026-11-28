---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "Invalid code point" は、{{jsxref("NaN")}} の値、負の整数 (-1)、整数でない値 (5.4)、または 0x10FFFF (1114111) より大きい値が {{jsxref("String.fromCodePoint()")}} で使用された場合に発生します。

## メッセージ

```plain
RangeError: Invalid code point -1 (V8-based)
RangeError: -1 is not a valid code point (Firefox)
RangeError: Arguments contain a value that is out of range of code points (Safari)
```

## エラー型

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.fromCodePoint()")}} は、{{jsxref("NaN")}} の値、負の整数 (-1)、整数でない値 (5.4)、または 0x10FFFF (1114111) より大きい値が渡されたときに、このエラーを発生させます。

[コードポイント](https://ja.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E7%82%B9)は、Unicode の符号空間における値で、整数 `0` から `0x10FFFF` までの範囲をとります。

## 例

### 無効なケース

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### 有効なケース

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // 'Є' (U+0404)
String.fromCodePoint(0x2f804); // '你' (U+2F804)
String.fromCodePoint(194564); // '你'
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // '𝌆a𝌇'
```

## 関連情報

- {{jsxref("String.fromCodePoint()")}}
