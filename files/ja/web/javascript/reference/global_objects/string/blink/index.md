---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 544993667dd25e8ccd3893218138c900e2e6b134
---

{{JSRef}} {{deprecated_header}}

**`blink()`** メソッドは、文字列を (`<blink>str</blink>`) に埋め込んだ文字列を生成し、古いブラウザーにおいて文字列を点滅させるために使用します。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。`blink()` の場合、`<blink>` 要素自体が現代のブラウザーから削除されており、テキストを点滅させることは、複数のアクセシビリティ標準で忌避されています。この要素を使用することは避けてください。

## 構文

```js-nolint
blink()
```

### 返値

`<blink>` 開始タグで始まり、`str` のテキストが来て、 `</blink>` 終了タグが来る文字列です。

## 例

### blink() の使用

以下の例では文字列のメソッドを使用して、文字列の整形方法を変化させています。

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

- [`String.prototype.blink` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
