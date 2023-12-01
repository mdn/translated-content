---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
---

{{jsSidebar("Errors")}}

JavaScript の例外 "Invalid code point" は、 {{jsxref("NaN")}} 値、負の整数 (-1)、 整数以外 (5.4)、 0x10FFFF より大きい数 (1114111) が {{jsxref("String.fromCodePoint()")}} で使用された場合に発生します。

## メッセージ

```js
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chromium)
```

## エラーの種類

{{jsxref("RangeError")}}

## エラーの原因

{{jsxref("String.fromCodePoint()")}} は、 {{jsxref("NaN")}} 値、負の整数 (-1)、 整数以外 (5.4)、 0x10FFFF より大きい数 (1114111) が渡されるとこのエラーを発生します。

[コードポイント](https://ja.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E7%82%B9)は、 Unicode 文字集合の値です。これは整数 `0` から `0x10FFFF` までの範囲です。

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

### 有効な場合

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

## 関連情報

- {{jsxref("String.fromCodePoint()")}}
