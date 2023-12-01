---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`endsWith()`** メソッドは文字列が引数で指定された文字列で終わるかを判定して `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## 構文

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### 引数

- `searchString`
  - : `str` の末尾で検索される文字の集合です。[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)にすることはできません。正規表現ではない値はすべて[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`endsWith()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。
- `endPosition` {{optional_inline}}
  - : `searchString` が見つかると期待される末尾の位置（`searchString` の最後の文字 +1 のインデックス）です。既定値は `str.length` です。

### 返値

文字列が指定された文字列で終わる場合、`searchString` が空文字列の場合は **`true`**、それ以外の場合は **`false`** です。

### 例外

- {{jsxref("TypeError")}}
  - : `searchString` が[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)であった場合。

## 解説

文字列が特定の文字列で終わるかどうかを判断できます。このメソッドでは（英文字の）大文字小文字は区別されます。

## 例

### endsWith() の使用

```js
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.endsWith` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
