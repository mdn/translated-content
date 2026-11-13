---
title: String.prototype.padStart()
short-title: padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`padStart()`** は {{jsxref("String")}} 値のメソッドで、指定された文字列でこの文字列をパディングし（必要に応じて繰り返したり切り捨てたりして）、結果の文字列が指定された長さを示すようにします。パディングは、この文字列の先頭から適用されます。

{{InteractiveExample("JavaScript デモ: String.padStart()")}}

```js interactive-example
const str = "5";

console.log(str.padStart(2, "0"));
// 予想される結果: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// 予想される結果: "************5581"
```

## 構文

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### 引数

- `targetLength`
  - : 現在の文字列の延長後に返される文字列の長さです。この値が現在の文字列の長さよりも短い場合、文字列がそのまま返されます。
- `padString` {{optional_inline}}
  - : 現在の文字列を延長するための文字列です。 `padString` が `targetLength` より長い場合は、右からその長さ分が切り捨てられます。
    この引数の既定値は、空白文字 (U+0020) です。

### 返値

現在の文字列の先頭に `padString` が適用された、指定された `targetLength` の長さの文字列です。

## 例

### 基本的な例

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### 数値を固定長文字列へ変換

```js
// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.padStart` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.padStart` のポリフィル](https://www.npmjs.com/package/string.prototype.padstart)
- {{jsxref("String.prototype.padEnd()")}}
