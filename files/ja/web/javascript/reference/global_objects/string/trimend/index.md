---
title: String.prototype.trimEnd()
short-title: trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`trimEnd()`** は {{jsxref("String")}} 値のメソッドで、元の文字列を変更せずに、文字列の末尾のホワイトスペースを削除した新しい文字列を返します。`trimRight()` はこのメソッドの別名です。

{{InteractiveExample("JavaScript デモ: String.prototype.trimEnd()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// 予想される結果: "   Hello world!   ";

console.log(greeting.trimEnd());
// 予想される結果: "   Hello world!";
```

## 構文

```js-nolint
trimEnd()

trimRight()
```

### 引数

なし。

### 返値

`str` の末尾のホワイトスペースを取り除いた新しい文字列です。ホワイトスペースは[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)文字と[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)で定義します。

`str` の末尾にホワイトスペースがなかった場合でも、新しい文字列が返されます（基本的には `str` のコピー）。

### 別名

{{jsxref("String/trim", "trim()")}} が標準化された後、エンジンは標準外の `trimRight` メソッドも実装しました。しかし {{jsxref("String/padEnd", "padEnd()")}} との整合を取るため、このメソッドが標準化された際、`trimEnd` という名前が選択されました。ウェブの互換性の理由から、`trimRight` も `trimEnd` の別名として残っており、全く同じ関数オブジェクトを示します。エンジンによっては次のような意味になります。

```js
String.prototype.trimRight.name === "trimEnd";
```

## 例

### trimEnd() の使用

次の例は `str` の末尾から空白を取り除きますが、先頭からは取り除きません。

```js-nolint
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.trimEnd` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.trimEnd` のポリフィル](https://www.npmjs.com/package/string.prototype.trimend)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
