---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: ce2909126eb09e44c9f48d9f65d072acae827749
---

{{JSRef}}

**`includes()`** メソッドは、1 つの文字列を別の文字列の中に見出すことができるかどうかを判断し、必要に応じて `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## 構文

```js-nolint
includes(searchString)
includes(searchString, position)
```

## 引数

- `searchString`
  - : `str` 内で検索される文字列です。正規表現は使用できません。
- `position` {{optional_inline}}
  - : 文字列内で `searchString` を検索し始める位置です。（既定値は `0` です。）

### 返値

指定された文字列のどこかに検索文字列が見つかれば、**`true`**。そうでなければ **`false`** です。

### 例外

- {{jsxref("TypeError")}}
  - : `searchString` が[正規表現であった場合](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)。

## 解説

このメソッドで、ある文字列が別な文字列の中に含まれているかどうかを判断することができます。

### 大文字・小文字の区別

`includes()` メソッドは大文字と小文字が区別します。例えば、次のコードでは `false` を返します。

```js
'Blue Whale'.includes('blue')  // false を返す
```

元の文字列と検索文字列の両方をすべて小文字に変換することで、この制約を回避することができます。

```js
'Blue Whale'.toLowerCase().includes('blue')  // true を返す
```

## 例

### includes() の使用

```js
const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.includes` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
