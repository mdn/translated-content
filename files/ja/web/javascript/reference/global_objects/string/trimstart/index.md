---
title: String.prototype.trimStart()
short-title: trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`trimStart()`** は {{jsxref("String")}} 値のメソッドで、元の文字列を変更せずに、文字列の先頭のホワイトスペースを削除した新しい文字列を返します。`trimLeft()` はこのメソッドの別名です。

{{InteractiveExample("JavaScript デモ: String.prototype.trimStart()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// 予想される結果: "   Hello world!   ";

console.log(greeting.trimStart());
// 予想される結果: "Hello world!   ";
```

## 構文

```js-nolint
trimStart()

trimLeft()
```

### 引数

なし。

### 返値

`str` の先頭のホワイトスペースを取り除いた新しい文字列です。ホワイトスペースは[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)文字と[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)で定義します。

`str` の先頭にホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `str` のコピー）。

### 別名

{{jsxref("String/trim", "trim()")}} が標準化された後、エンジンは標準外の `trimLeft` メソッドも実装しました。しかし {{jsxref("String/padStart", "padStart()")}} との整合を取るため、このメソッドが標準化された際、`trimStart` という名前が選択されました。ウェブの互換性の理由から、`trimLeft` も `trimStart` の別名として残っており、全く同じ関数オブジェクトを示します。エンジンによっては次のような意味になります。

```js
String.prototype.trimLeft.name === "trimStart";
```

## 例

### trimStart() の使用

次の例は `str` の先頭から空白を取り除きますが、末尾からは取り除きません。

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
- [es-shims による `String.prototype.trimStart` のポリフィル](https://www.npmjs.com/package/string.prototype.trimstart)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
