---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: a92a2bb31cf5d79808878701f0344a4eabf12963
---

{{JSRef}}

**`startsWith()`** メソッドは文字列が引数で指定された文字列で始まるかを判定して `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## 構文

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### 引数

- `searchString`
  - : `str` の先頭で検索される文字の集合です。[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)にすることはできません。正規表現ではない値はすべて[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`startsWith()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。
- `position` {{optional_inline}}
  - : `searchString` が見つかると期待される開始位置（`searchString` の先頭の文字のインデックス）です。既定値は `0` です。

### 返値

文字列が指定された文字列で始まる場合、`searchString` が空文字列の場合は **`true`**、それ以外の場合は **`false`** です。

### 例外

- {{jsxref("TypeError")}}
  - : `searchString` が[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)であった場合。

## 解説

文字列が特定の文字列で終わるかどうかを判断できます。このメソッドでは（英文字の）大文字小文字は区別されます。

## 例

### startsWith() の使用

```js
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.startsWith` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
