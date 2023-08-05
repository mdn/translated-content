---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`big()`** メソッドは、文字列を {{HTMLElement("big")}} 要素の中に埋め込み (`<big>str</big>`)、文字列が大きなフォントで表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。`<big>` 要素自体は [HTML5](/ja/docs/Glossary/HTML5) で削除されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
big()
```

### 返値

`<big>` 開始タグで始まり、`str` のテキストが来て、 `</big>` 終了タグが来る文字列です。

## 例

### big() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.big` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
