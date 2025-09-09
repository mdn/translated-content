---
title: String.prototype.link()
short-title: link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`link()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("a")}} 要素に埋め込み (`<a href="...">str</a>`)、他の URL へのハイパーテキストリンクとして使用される文字列を生成します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

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

以下のコードは、HTML 文字列を作成し、それで文書の本体を置き換えます。

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

これにより、次の HTML が生成されます。

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

`link(` を使用して HTML テキストを直接作成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用すべきです。例を示します。

```js
const contentString = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.link` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.link` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("a")}}
