---
title: String.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`includes()`** は {{jsxref("String")}} 値のメソッドで、大文字と小文字を区別して検索を行い、指定された文字列がこの文字列内で見つかるかどうかを判断し、必要に応じて `true` または `false` を返します。

{{InteractiveExample("JavaScript デモ: String.prototype.includes()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
// 予想される結果: "The word "fox" is in the sentence"
```

## 構文

```js-nolint
includes(searchString)
includes(searchString, position)
```

## 引数

- `searchString`
  - : `str` の中で検索される文字の集合です。[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)にすることはできません。正規表現ではない値はすべて[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)ので、省略したり `undefined` を渡したりすると、`includes()` は `"undefined"` という文字列を検索します。これはおそらく望むところではないでしょう。
- `position` {{optional_inline}}
  - : 文字列内で `searchString` を検索し始める位置です。（既定値は `0` です。）

### 返値

検索文字列が指定された文字列の中で見つかった場合、`searchString` が空文字列の場合は **`true`**。そうでなければ **`false`** です。

### 例外

- {{jsxref("TypeError")}}
  - : `searchString` が[正規表現であった場合](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)に発生します。

## 解説

このメソッドで、ある文字列が別な文字列の中に含まれているかどうかを判断することができます。

### 大文字小文字の区別

`includes()` メソッドは大文字と小文字が区別します。例えば、次のコードでは `false` を返します。

```js
"Blue Whale".includes("blue"); // false を返す
```

元の文字列と検索文字列の両方をすべて小文字に変換することで、この制約を回避することができます。

```js
"Blue Whale".toLowerCase().includes("blue"); // true を返す
```

## 例

### includes() の使用

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.includes` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.includes` のポリフィル](https://www.npmjs.com/package/string.prototype.includes)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
