---
title: CSS `::-moz-list-bullet` 擬似クラス
short-title: ::-moz-list-bullet
slug: Web/CSS/Reference/Selectors/::-moz-list-bullet
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

**`::-moz-list-bullet`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、順序なしリスト ({{htmlelement("ul")}}) のリスト項目 ({{htmlelement("li")}}) のマーカー（通常は点）を表します。

## 構文

```css
li::-moz-list-bullet {
  /* ... */
}
```

## 例

### リストアイテムのマーカーのスタイル設定

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### 結果

{{ EmbedLiveSample('Styling list item markers') }}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::-moz-list-number")}}
- {{cssxref("::marker")}}
