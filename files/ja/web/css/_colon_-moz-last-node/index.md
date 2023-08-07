---
title: ":-moz-last-node"
slug: Web/CSS/:-moz-last-node
---

{{Non-standard_header}}{{CSSRef}}

**`:-moz-last-node`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、他の要素の最後の子要素であるあらゆる要素を表します。 {{Cssxref(":last-child")}} とは異なり、最後の子要素の後に（ホワイトスペース以外の）テキストがあると一致しません。

> **メモ:** 要素の末尾にあるホワイトスペースは `:-moz-last-node` の決定において無視されます。

## 構文

```css
:-moz-last-node {}
```

## 例

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This does not match.</span>
  <span>This matches!</span>
</p>

<p>
  <span>This doesn't match because it's followed by text.</span>
  Blahblah.
</p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの仕様にも含まれていません。

## 関連情報

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
