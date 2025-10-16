---
title: String.prototype.anchor()
short-title: anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`anchor()`** は {{jsxref("String")}} 値のメソッドで、{{HTMLElement("a")}} 要素に name を付けたものに文字列を埋め込んだ文字列 (`<a name="...">str</a>`) を生成します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。
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

以下のコードは、 HTML 文字列を作成し、それを文書の本体に置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

以下の HTML が生成されます。

```html
<a name="hello">Hello, world</a>
```

> [!WARNING]
> このマークアップは不正です。`name` は {{HTMLElement("a")}} 要素の有効な属性ではなくなったためです。

`anchor()` を使用して HTML テキストを直接作成する代わりに、[`document.createElement()`](/ja/docs/Web/API/Document/createElement) などの DOM API を使用しましょう。例を示します。

```js
const contentString = "Hello, world";
const elem = document.createElement("a");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.anchor` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.anchor` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("a")}}
