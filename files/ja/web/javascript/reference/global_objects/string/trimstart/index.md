---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`trimStart()`** メソッドは、元の文字列を変更せずに、文字列の先頭のホワイトスペースを削除した新しい文字列を返します。`trimLeft()` はこのメソッドの別名です。

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 構文

```js-nolint
trimStart()

trimLeft()
```

### 返値

`str` の先頭のホワイトスペースを取り除いた新しい文字列です。ホワイトスペースは[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)文字と[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)で定義します。

`str` の先頭にホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `str` のコピー）。

### 別名

{{jsxref("String/trim", "trim()")}} が標準化された後、エンジンは標準外の `trimLeft` メソッドも実装しました。しかし {{jsxref("String/padEnd", "padEnd()")}} との整合を取るため、このメソッドが標準化された際、`trimStart` という名前が選択されました。ウェブの互換性の理由から、`trimLeft` も `trimStart` の別名として残っており、全く同じ関数オブジェクトを示します。エンジンによっては次のような意味になります。

```js
String.prototype.trimLeft.name === "trimStart";
```

## 例

### trimStart() の使用

次の例は `str` の末尾から空白を取り除きますが、先頭からは取り除きません。

```js-nolint
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.trimStart` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
