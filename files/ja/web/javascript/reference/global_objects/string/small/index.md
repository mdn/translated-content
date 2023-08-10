---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`small()`** メソッドは、文字列を {{HTMLElement("small")}} 要素に埋め込んだ文字列 (`<small>str</small>`) を生成し、文字列が小さなフォントで表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
small()
```

### 返値

開始タグ `<small>` で始まり、テキスト `str` が来て、終了タグ `</small>` が来る文字列です。

## 例

### small() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.small` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
