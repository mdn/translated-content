---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`fixed()`** メソッドは、文字列を {{HTMLElement("tt")}} 要素に埋め込み (`<tt>str</tt>`)、文字列が固定ピッチフォントで表示されるような文字列を生成します。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
fixed()
```

### 返値

`<tt>` 開始タグで始まり、`str` のテキストが来て、 `</tt>` 終了タグが来る文字列です。

## 例

### fixed() の使用

下記の例は、 `fixed` メソッドを使用して文字列の表示方法を変更します。

```js
const worldString = "世界のみなさん、こんにちは！";
console.log(worldString.fixed()); // "<tt>世界のみなさん、こんにちは！</tt>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.fixed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
