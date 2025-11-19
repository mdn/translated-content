---
title: String.prototype.fontsize()
short-title: fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

**`fontsize()`** は {{jsxref("String")}} 値のメソッドで、この文字列を {{HTMLElement("font")}} 要素に埋め込み (`<font size="...">str</font>`)、この文字列が指定されたフォントサイズで表示されるようにする文字列を生成します。

> [!NOTE]
> [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`fontsize()` の場合、`<font>` 要素は HTML 仕様書から除去されており、今後使用するべきではありません。代わりにウェブ開発者は [CSS](/ja/docs/Web/CSS) プロパティを使用してください。

## 構文

```js-nolint
fontsize(size)
```

### 引数

- `size`
  - : 1 ～ 7 の整数、または 1 ～ 7 の符号付き整数を表す文字列です。

### 返値

開始タグ `<font size="size">` （`size` の中の二重引用符は `&quot;` に置き換えられます）、`str` のテキストが来て、終了タグ `</font>` が来る文字列です。

## 解説

`fontsize()` メソッド自体は、単純に文字列の部品を検証や正規化せずに接続するだけです。しかし、妥当な {{HTMLElement("font")}} 要素を作成するには、大きさを整数で指定した場合は、 `str` のフォントの大きさを 7 つの定義済みの大きさで設定します。 `size` を "-2" または "+3" のような文字列で指定すると、 `str` のフォントの大きさを既定値からの相対的な大きさで設定します。

## 例

### fontsize() の使用

以下のコードは、HTML 文字列を作成し、それで文書の本体を置き換えます。

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

これにより、次の HTML が生成されます。

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> このマークアップは不正です。`font` は有効な要素でなくなったためです。

`fontsize( )` を使用して HTML テキストを直接作成する代わりに、 CSS を使用してフォントを操作するべきです。例えば、 {{domxref("HTMLElement/style", "element.style")}} 属性を使用して {{cssxref("font-size")}} を操作することができます。

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.fontsize` のポリフィルは (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.fontsize` のポリフィル](https://www.npmjs.com/package/es-string-html-methods)
- [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_ラッパーメソッド)
- {{HTMLElement("font")}}
