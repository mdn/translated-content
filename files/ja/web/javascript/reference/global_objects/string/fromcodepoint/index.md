---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: a49d60648404407784b04ff5ff7e16a6a8d1ac25
---

{{JSRef}}

**`String.fromCodePoint()`** 静的メソッドは指定されたコードポイントの並びを使って生成された文字列を返します。

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## 構文

```js-nolint
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### 引数

- `numN`
  - : `0` 以上 `0x10FFFF` 以下の整数で、Unicode コードポイントを表します。

### 返値

指定されたコードポイントの並びを使って生成された文字列です。

### 例外

- {{jsxref("RangeError")}}
  - : `numN` を数値に変換した後で整数でなかった場合、`0` よりも小さかった場合、`0x10FFFF` よりも大きかった場合に発生します。

## 解説

`fromCodePoint()` は `String` の静的メソッドなので、自分で生成した `String` オブジェクトのメソッドではなく、常に `String.fromCodePoint()` として使用するようにしてください。

Unicode のコードポイントは `0` から `1114111` (`0x10FFFF`) までの範囲です。`charAt()` は常に `65536` より小さい値を返しますが、これは上位のコードポイントは 16 ビットのサロゲート擬似文字のペアによって表されているからです。従って、`fromCodePoint()` は（UTF-16 コード単位である） [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length) が渡された引数の数よりも大きくなる文字列を返す可能性があります。Unicode に関する情報は[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を参照してください。

## 例

### fromCodePoint() の使用

有効な入力:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

無効な入力:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### fromCharCode() との比較

{{jsxref("String.fromCharCode()")}} では補助文字（すなわち `0x010000` – `0x10FFFF`）のコードポイントを指定することで返すことができません。補助文字を返すためには、 UTF-16 のサロゲートペアでが必要です。

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

一方、 `String.fromCodePoint()` はコードポイント（UTF-32 のコード単位に相当）を指定することで、 4 バイトの補助文字や、一般的な 2 バイトの BMP 文字を返すことができます。

```js
String.fromCodePoint(0x1f303); // または 10 進数で 127747
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.fromCodePoint` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
