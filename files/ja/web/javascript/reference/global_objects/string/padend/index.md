---
title: String.prototype.padEnd()
short-title: padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`padEnd()`** は {{jsxref("String")}} 値のメソッドで、結果の文字列が指定した長さになるように、現在の文字列を他の文字列で（必要に応じて繰り返して）延長します。延長は、現在の文字列の末尾から適用されます。

{{InteractiveExample("JavaScript デモ: String.prototype.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// 予想される結果: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// 予想される結果: "200  "
```

## 構文

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### 引数

- `targetLength`
  - : 現在の `str` がパディングされた後の、結果の文字列の長さ。値が `str.length` 以下の場合、`str` はそのまま返されます。
- `padString` {{optional_inline}}
  - : 現在の `str` を埋める文字列。`padString` が `targetLength` を超える場合、その部分は終わりから切り捨てられます。既定値は空白文字 (U+0020) です。

### 返値

文字列で、 `targetLength` で指定された長さにするために、 `padString` を末尾に適用したものです。

## 例

### String.prototype.padEnd() の使用

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.padEnd` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.padEnd` のポリフィル](https://www.npmjs.com/package/string.prototype.padend)
- {{jsxref("String.prototype.padStart()")}}
