---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`italics()`** メソッドは、文字列を {{HTMLElement("i")}} 要素に埋め込んだ文字列 (`<i>str</i>`) を生成し、文字列がイタリック体で表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
italics()
```

### 返値

開始タグ `<b>` で始まり、テキスト `str` が来て、終了タグ `</b>` が来る文字列です。

## 解説

`italics()` メソッドは、文字列を `<i>` 要素の中に、 "`<i>str</i>`" のように埋め込みます。

## 例

### italics() の使用

以下の例では文字列のメソッドを使用して、文字列を整形しています。

```js
const worldString = "Hello, world";
console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.italics` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
