---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`bold()`** メソッドは、文字列を {{HTMLElement("b")}} 要素に埋め込んだ文字列 (`<b>str</b>`) を生成し、文字列が太字で表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
bold()
```

### 返値

`<b>` 開始タグで始まり、`str` のテキストが来て、 `</b>` 終了タグが来る文字列です。

## 例

### bold() の使用

次の例では、非推奨の文字列メソッドを使用して文字列の書式を変更しています。

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

- [`String.prototype.bold` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
