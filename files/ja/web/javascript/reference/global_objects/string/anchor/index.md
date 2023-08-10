---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`anchor()`** メソッドは、{{HTMLElement("a")}} 要素に name を付けたものに文字列を埋め込んだ文字列 (`<a name="...">str</a>`) を生成します。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。
>
> HTML 仕様書では {{HTMLElement("a")}} 要素に `name` 属性を設定することを許容しなくなりましたので、このメソッドが生成するものは妥当なマークアップになりません。

## 構文

```js-nolint
anchor(name)
```

### 引数

- `name`
  - : `name` 値を表す文字列で、 `<a name="...">` 開始タグに入れられます。

### 返値

`<a name="name">` 開始タグで始まり（`name` の中の二重引用符は `&quot;` で置き換え）、`str` のテキストが続き、 `</a>` 終了タグで終わる文字列です。

## 例

### anchor() の使用

```js
const myString = "Table of Contents";

document.body.innerHTML = myString.anchor("contents_anchor");
```

以下の HTML が生成されます。

```html
<a name="contents_anchor">Table of Contents</a>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.anchor` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.link()")}}
