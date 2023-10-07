---
title: max-content
slug: Web/CSS/max-content
---

`max-content` は大きさのキーワードで、コンテンツの内在的な最大幅や高さを表しています。テキストコンテンツの場合は、オーバーフローが発生しても、コンテンツはまったく折り返されないことを意味します。

## 構文

```css
/* 長さとして使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* グリッドトラックで使用 */
grid-template-columns: 200px 1fr max-content;

/* グローバル値 */
max-content: inherit;
max-content: initial;
max-content: revert;
max-content: unset;
```

## 例

<h3 id="Using_max-content_for_box_sizing">max-content をボックスの大きさに使用</h3>

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

<h3 id="Sizing_grid_columns_with_max-content">max-content をグリッド列の大きさに使用</h3>

#### HTML

```html
<div id="container">
  Item
  <div>Item with more text in it.</div>
  Flexible item
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

### width (および他の大きさのプロパティ) での対応

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
