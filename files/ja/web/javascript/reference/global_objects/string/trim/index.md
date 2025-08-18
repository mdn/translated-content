---
title: String.prototype.trim()
short-title: trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`trim()`** は {{jsxref("String")}} 値のメソッドで、この文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返します。

一方の端からのみホワイトスペースを取り除いた新しい文字列を返したい場合は、{{jsxref("String/trimStart", "trimStart()")}} または {{jsxref("String/trimEnd", "trimEnd()")}} を使用してください。

{{InteractiveExample("JavaScript デモ: String.prototype.trim()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// 予想される結果: "   Hello world!   ";

console.log(greeting.trim());
// 予想される結果: "Hello world!";
```

## 構文

```js-nolint
trim()
```

### 引数

なし。

### 返値

`str` の先頭と末尾のホワイトスペースを取り除いた新しい文字列を表します。 ホワイトスペースは[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)文字と[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)で定義します。

`str` の先頭にも末尾にもホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `str` のコピー）。

## 例

### trim() の使用

次の例は、`str` の両端からホワイトペースを取り除きます。

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
