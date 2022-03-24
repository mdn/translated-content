---
title: ':-moz-first-node'
slug: Web/CSS/:-moz-first-node
tags:
  - CSS
  - CSS:Mozilla 拡張
  - NeedsCompatTable
  - 標準外
  - 擬似クラス
  - リファレンス
  - セレクター
translation_of: Web/CSS/:-moz-first-node
---
{{Non-standard_header}}{{CSSRef}}

**`:-moz-first-node`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、他の要素の最初の子要素であるあらゆる要素を表します。 {{Cssxref(":first-child")}} とは異なり、最初の子要素の前に（ホワイトスペース以外の）テキストがあると一致しません。

> **Note:** 要素の先頭にあるホワイトスペースは `:-moz-first-node` の決定において無視されます。

## 構文

```css
:-moz-first-node
```

## 例

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This matches!</span>
  <span>This doesn't match.</span>
</p>

<p>
  Blahblah.
  <span>This doesn't match because it's preceded by text.</span>
</p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
