---
title: "Document: linkColor プロパティ"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}} {{Deprecated_header}}

**`Document.linkColor`** プロパティは、文書内のリンクの色を取得または設定します。

このプロパティは非推奨です。代替手段として、 CSS の {{cssxref("color")}} プロパティを HTML のアンカーリンク ({{HtmlElement("a")}}) または {{cssxref(":link")}} 擬似クラスで設定することができます。もう一つの代替手段に `document.body.link` がありますが、これは [HTML 4.01 で非推奨になりました](https://www.w3.org/TR/html401/struct/global.html#adef-link)。

### 引数

文字列で、色を単語 (例えば `red`) または 16 進値 (例えば `#ff0000`) で表します。

## 例

```js
document.linkColor = "blue";
```

## 仕様書

HTML5

`Document.linkColor` は [DOM Level 2 HTML で非推奨になりました](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)。

## ブラウザーの互換性

{{Compat}}

Mozilla Firefox におけるこのプロパティの既定値は、青 (16 進数で `#0000ee`) です。

## 関連情報

- {{domxref("document.vlinkColor")}}
- {{domxref("document.alinkColor")}}
