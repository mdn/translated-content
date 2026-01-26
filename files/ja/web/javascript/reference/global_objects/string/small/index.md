---
title: String.prototype.small()
short-title: small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`small()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("small")}} 要素に埋め込んだ文字列 (`<small>str</small>`) を生成し、この文字列が小さなフォントで表示されるようにします。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
small()
```

### 引数

なし。

### 返値

開始タグ `<small>` で始まり、テキスト `str` が来て、終了タグ `</small>` が来る文字列です。

## 例

### small() の使用

以下のコードは、HTML 文字列を生成し、それで文書の本文を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

これにより、次の HTML が生成されます。

```html
<small>Hello, world</small>
```

`small()` を使用して HTML テキストを直接生成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用すべきです。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.small` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.small` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("small")}}
