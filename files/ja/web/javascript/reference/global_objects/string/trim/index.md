---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: d91af249c51c398ee7c0f0280e6ae5b22f6478e5
---

{{JSRef}}

**`trim()`** メソッドは、文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返す。

一方の端からのみホワイトスペースを取り除いた新しい文字列を返したい場合は、{{jsxref("String.prototype.trimStart()", "trimStart()")}} または {{jsxref("String.prototype.trimEnd()", "trimEnd()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 構文

```js-nolint
trim()
```

### 返値

`str` の先頭と末尾のホワイトスペースを取り除いた新しい文字列を表します。 ホワイトスペースは[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)文字と[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)で定義します。

`str` の先頭にも末尾にもホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `str` のコピー）。

## 例

### trim() の使用

次の例は、`str` の両端からホワイトペースを取り除きます。

```js-nolint
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
