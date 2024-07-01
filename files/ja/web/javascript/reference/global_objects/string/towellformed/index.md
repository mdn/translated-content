---
title: String.prototype.toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
l10n:
  sourceCommit: 5635446aa0127d686183ddd4fd5adcc34be567da
---

{{JSRef}}

**`toWellFormed()`** は {{jsxref("String")}} 値のメソッドで、この文字列のすべての[孤立サロゲート](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)を Unicode 置換文字 U+FFFD に置き換えた文字列を返します。

## 構文

```js-nolint
toWellFormed()
```

### 返値

この文字列のコピーで、孤立サロゲートをすべて Unicode 置換文字 U+FFFD に置き換えた新しい文字列です。 もし `str` が[整形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed) であれば、やはり新しい文字列が返されます（基本的には `str` のコピーです）。

## 解説

JavaScript の文字列は UTF-16 でエンコードされています。UTF-16 エンコーディングにはサロゲートペアという概念があり、これは [UTF-16 文字、Unicode コードポイント、書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)で詳しく紹介されています。

`toWellFormed()` はこの文字列のコード単位を走査し、すべての孤立サロゲートを[Unicode 置換文字](<https://ja.wikipedia.org/wiki/特殊用途文字_(Unicodeのブロック)>) U+FFFD <code>&#fffd;</code> に置き換えます。これは、返す文字列が整形式であることを保証し、{{jsxref("encodeURI")}} のような整形式文字列を期待する関数で使用することができます。カスタム実装と比較して、`toWellFormed()` は、エンジンが文字列の内部表現に直接アクセスすることができるので、より効率的です。

整形式ではない文字列が {{domxref("TextEncoder")}} のような特定の文脈で使用された場合、自動的に同じ置換文字を使って整形された文字列に変換されます。孤立サロゲートがレンダリングされるとき、それらは置換文字（疑問符が内側にある菱形）としてもレンダリングされます。

## 例

### toWellFormed() の使用

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
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### encodeURI() のエラーを防止

{{jsxref("encodeURI")}} は渡された文字列が整形式でない場合、エラーを発生させます。これは `toWellFormed()` によって文字列を最初に整形式文字列に変換しておくことで防ぐことができます。

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.toWellFormed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
