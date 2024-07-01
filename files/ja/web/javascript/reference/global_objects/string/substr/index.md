---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{JSRef}} {{deprecated_header}}

**`substr()`** メソッドは、文字列の一部を、指定した位置から後方向に指定した文字数だけ返します。

> **メモ:** `substr()` は ECMAScript 仕様書の主要部にはありません。[付録 B: ウェブブラウザーのための追加 ECMAScript 機能](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) で定義されており、ブラウザー以外のランタイムでは通常オプションです。従って、コードのクロスプラットフォームの親和性を最大にするには、代わりに標準の [`String.prototype.substring()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring) または [`String.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice) メソッドを使用するよう勧められています。これら 3 つのメソッドの比較が [`String.prototype.substring()` page](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) にあります。

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## 構文

```js-nolint
substr(start)
substr(start, length)
```

### 引数

- `start`
  - : 返却する部分文字列に含まれる最初の文字の位置です。
- `length` {{optional_inline}}
  - : 取り出す文字の数です。

### 返値

指定された文字列の指定された部分が入った新しい文字列です。

## 解説

文字列の `substr()` メソッドは、その文字列の `start` のインデックスから `length` 文字分を数えて抽出します。

- `start >= str.length` である場合、空文字列が返されます。
- `start < 0` である場合、文字列の末尾から数えたインデックスになります。厳密には、この場合は `max(start + str.length, 0)` で始まる部分文字列になります。
- `start` が省略されたか {{jsxref("undefined")}} であった場合、`0` として扱われます。
- `length` が省略されたか {{jsxref("undefined")}} であった場合、または`start + length >= str.length` であった場合、`substr()` は文字列の末尾まで文字を抽出します。
- `length < 0` の場合、空文字列が返されます。
- `start` と `length` のどちらでも、{{jsxref("NaN")}} は `0` として扱われます。

`substr()` の使用を避けることが推奨されますが、レガシーコードにおいて `substr()` を `slice()` または `substring()` に移行する簡単な方法はありません。例えば、`str = "01234", a = 1, l = -2` の場合、`str.substr(a, l)`, `str.slice(a, a + l)`, `str.substring(a, a + l)` はすべて異なる結果を返します。 `substr()` は空文字列を返し、`slice()` は `"123"` を返し、`substring()` は `"0"` を返します。実際のリファクタリング方法は、`a` と `l` の範囲に関する知識に依存します。

## 例

### substr() の使用

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.substr` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
