---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

{{CSSRef}}

`max-content` は大きさのキーワードで、コンテンツの{{glossary("intrinsic size", "内在的な")}}最大幅や高さを表します。テキストコンテンツの場合、これはオーバーフローが発生しても、コンテンツがまったく折り返されないことを意味します。

## 構文

```css
/* 長さとして使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* グリッドトラックで使用 */
grid-template-columns: 200px 1fr max-content;
```

## 例

### max-content をボックスの大きさに使用

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item with more text in it which will overflow the fixed width box.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_max-content_for_box_sizing", "100%", 200)}}

### max-content をグリッド列の大きさに使用

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>Item with more text in it.</div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample("Sizing_grid_columns_with_max-content", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS ボックスサイズ](/ja/docs/Web/CSS/CSS_box_sizing)モジュール
