---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.includes
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
---
{{JSRef}}

**`includes()`** メソッドは、1 つの文字列を別の文字列の中に見出すことができるかどうかを判断し、必要に応じて `true` か `false` を返します。

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## 構文

```js
includes(searchString)
includes(searchString, position)
```

## 引数

- `searchString`
  - : `str` 内で検索される文字列。
- `position` {{optional_inline}}
  - : 文字列内で `searchString` を検索し始める位置です。 (既定値は 0 です。)

### 返値

文字列が検索値を含んでいれば、**`true`**。含んでいれば、**`false`**。

## 解説

このメソッドで、ある文字列が別な文字列の中に含まれているかどうかを判断することができます。

### 大文字・小文字の区別

`includes()` メソッドは大文字と小文字が区別します。例えば、次のコードでは `false` を返します。

```js
'Blue Whale'.includes('blue')  // false を返す
```

## ポリフィル

このメソッドは ECMAScript 2015 で追加されました。まだ、すべての JavaScript の実装で利用できるとは限りません。

しかしながら、このメソッドを簡単に代替できます。

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
```

## 例

### `includes()` の使用

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

- `String.prototype.includes` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
