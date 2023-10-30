---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 5635446aa0127d686183ddd4fd5adcc34be567da
---

{{JSRef}}

**`isWellFormed()`** は {{jsxref("String")}} 値のメソッドで、この文字列に[孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)があるかどうかを示す論理値を返します。

## 構文

```js-nolint
isWellFormed()
```

### 返値

この文字列に孤立サロゲートがある場合は `true`、そうでなれば `false`。

## 解説

JavaScript の文字列は UTF-16 エンコードです。UTF-16 エンコーディングには「サロゲートペア」の概念があり、[UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)の節で詳しく紹介されています。

`isWellFormed()` を使うと、文字列が整形式であるかどうか（つまり、孤立サロゲートを含まないかどうか）をテストすることができます。 カスタム実装と比べると、`isWellFormed()` は、エンジンが文字列の内部表現に直接アクセスできるので、より効率的です。 文字列を整形式文字列に変換する必要がある場合は、{{jsxref("String/toWellFormed", "toWellFormed()")}} メソッドを使ってください。 `isWellFormed()` を使うと、整形式でない文字列を整形式文字列とは異なる形で扱うことができ、例えば、エラーを発生させたり、無効としたりすることができます。

## 例

### isWellFormed() の使用

```js
const strings = [
  // 孤立高サロゲート
  "ab\uD800",
  "ab\uD800c",
  // 孤立低サロゲート
  "\uDFFFab",
  "c\uDFFFab",
  // 整形式
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
```

### encodeURI() のエラーを回避

{{jsxref("encodeURI")}} は渡された文字列が整形式でなかった場合にエラーが発生します。これは `isWellFormed()` を使用して、文字列を `encodeURI()` に渡す前に検査することで回避できます。

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("整形式でない文字列に遭遇しました。"); // 整形式でない文字列に遭遇しました。
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.isWellFormed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
