---
title: String.prototype.fixed()
short-title: fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`fixed()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("tt")}} 要素に埋め込み (`<tt>str</tt>`)、この文字列が固定幅フォントで表示されるような文字列を生成します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。 `fixed()` の場合、 `<tt>` 要素自体が HTML 仕様から除去され、使用できなくなりました。ウェブ開発者は、代わりに [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
fixed()
```

### 引数

なし。

### 返値

`<tt>` 開始タグで始まり、`str` のテキストが来て、 `</tt>` 終了タグが来る文字列です。

## 例

### fixed() の使用

以下のコードは、 HTML 文字列を作成し、それを文書の本体に置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fixed();
```

これにより、次の HTML が生成されます。

```html
<tt>Hello, world</tt>
```

> [!WARNING]
> このマークアップは、`tt` が有効な要素でなくなったため、不正です。

`fixed()` を使用して HTML テキストを直接作成する代わりに、CSS を使用してフォントを操作してください。例えば、 {{domxref("HTMLElement/style", "element.style")}} 属性を使用して、 {{cssxref("font-family")}} を操作することができます。

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.fixed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.fixed` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("tt")}}
