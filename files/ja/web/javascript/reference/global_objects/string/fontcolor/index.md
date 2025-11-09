---
title: String.prototype.fontcolor()
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`fontcolor()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("font")}} 要素に埋め込み (`<font color="...">str</font>`)、この文字列が指定されたフォント色で表示されるようにする文字列を生成します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。 `fontcolor()` の場合、`<font>` 要素は HTML 仕様書から除去されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
fontcolor(color)
```

### 引数

- `color`
  - : 16 進数の RGB 値または文字列リテラルで色を表す文字列です。 [CSS 色リファレンス](/ja/docs/Web/CSS/Reference/Values/color_value)に、色名の文字列リテラルの一覧があります。

### 返値

開始タグ `<font color="color">` （`color` の中の二重引用符は `&quot;` に置き換えられます）、`str` のテキストが来て、終了タグ `</font>` が来る文字列です。

## 解説

`fontcolor()` メソッド自体は、単純に文字列の部品を検証や正規化せずに接続するだけです。しかし、妥当な {{HTMLElement("font")}} 要素を作成するには、16 進数の RGB で表現する場合は、 `rrggbb` の書式を使用する必要があります。例えば、サーモン色は red=FA, green=80, blue=72 であるため、サーモン色の RGB 値は "`FA8072`" です。

## 例

### fontcolor() の使用

以下のコードは、 HTML 文字列を生成し、それで文書の本体を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

これにより、次の HTML が生成されます。

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> このマークアップは不正です。`font` は有効な要素でなくなったためです。

`fontcolor( )` を使用して HTML テキストを直接作成する代わりに、 CSS を使用してフォントを操作するべきです。例えば、 {{domxref("HTMLElement/style", "element.style")}} 属性を使用して {{cssxref("color")}} を操作することができます。

```js
document.getElementById("yourElemId").style.color = "red";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.fontcolor` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.fontcolor` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("font")}}
