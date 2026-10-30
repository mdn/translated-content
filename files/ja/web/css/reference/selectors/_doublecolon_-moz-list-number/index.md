---
title: "`::-moz-list-number` 擬似要素 (CSS)"
short-title: ::-moz-list-number
slug: Web/CSS/Reference/Selectors/::-moz-list-number
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

**`::-moz-list-number`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、順序付きリスト（{{HTMLElement("ol")}}）内のリストアイテム（{{HTMLElement("li")}}）のマーカー（通常は数値）を表します。

## 構文

```css
li::-moz-list-number {
  /* ... */
}
```

## 例

### HTML

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
