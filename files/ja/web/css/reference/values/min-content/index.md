---
title: min-content
slug: Web/CSS/Reference/Values/min-content
original_slug: Web/CSS/min-content
l10n:
  sourceCommit: 3d8560ff659dea02550ce8b7e4633cf76a389131
---

`min-content` は大きさのキーワードで、コンテンツの内在的な最小幅を表しています。テキストコンテンツの場合は、コンテンツがすべてのソフトラッピングの機会を使用した場合に、最も長い単語と同じくらい小さくなることを意味します。

## 構文

```css
/* 長さとして使用 */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* グリッドトラックで使用 */
grid-template-columns: 200px 1fr min-content;
```

## 例

### min-content をボックスの大きさに使用

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}

### min-content をグリッド列の大きさに使用

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
  grid-template-columns: min-content min-content 1fr;
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

{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("max-content")}}, {{cssxref("fit-content")}}
