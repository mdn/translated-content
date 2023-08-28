---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`link()`** メソッドは、文字列を {{HTMLElement("a")}} 要素に埋め込み (`<a href="...">str</a>`)、他の URL へのハイパーテイストリンクとして使用される文字列を生成します。

> **メモ:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
link(url)
```

### 引数

- `url`
  - : `<a>` 要素の `href` 属性を指定する任意の文字列です。これは妥当な（相対または絶対）URL で、すべての `&` の文字を `&amp;` でエスケープしたものです。

### 返値

開始タグ `<a href="url">` （`url` の中の二重引用符は `&quot;` に置き換えられます）、`str` のテキストが来て、終了タグ `</a>` が来る文字列です。

## 例

### link() の使用

以下の例は、"MDN" という語を、Mozilla Developer Network へのハイパーテキストリンクとして表示します。

```js
const hotText = "MDN";
const url = "https://developer.mozilla.org/";

console.log(`クリックで ${hotText.link(url)} へ戻ります。`);
// クリックで <a href="https://developer.mozilla.org/">MDN</a> へ戻ります。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.link` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.anchor()")}}
- {{domxref("document.links")}}
