---
title: "::-moz-list-bullet"
slug: Web/CSS/::-moz-list-bullet
---

{{CSSRef}}{{Non-standard_header}}

**`::-moz-list-bullet`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、順序なしリスト ({{htmlelement("ul")}}) のリスト項目 ({{htmlelement("li")}}) のマーカー（通常は点）を表します。

## 構文

```css
li::-moz-list-bullet
```

## 例

### リスト項目のマーカーのスタイル設定

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

## 関連情報

- {{cssxref(":-moz-list-number")}}
- {{cssxref("::marker")}}
