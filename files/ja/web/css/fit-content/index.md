---
title: fit-content
slug: Web/CSS/fit-content
tags:
  - CSS
  - キーワード
  - リファレンス
  - ウェブ
  - fit-content
browser-compat: css.properties.width.fit-content
translation_of: Web/CSS/fit-content
---
{{CSSRef}}

**`fit-content`** は `fit-content(stretch)` として動作します。実際には、ボックスは利用可能な空間を使用しますが、{{cssxref("max-content")}} 以上にはならないことを意味します。

{{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} のレイアウトされたボックスの大きさとして使用される場合、最大寸法と最小寸法は、コンテンツの寸法を参照します。

> **Note:** CSS Sizing の仕様では、{{cssxref("fit-content()", "fit-content()")}} という関数も定義されています。このページではキーワード版について詳しく説明します。

## 構文

```css
width: fit-content
block-size: fit-content
```

## 例

<h3 id="Using_fit-content_for_box_sizing">fit-content を使用してボックスの大きさを指定</h3>

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">Item with more text in it, hopefully we have added enough text so the text will start to wrap.</div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: -moz-fit-content;
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_fit-content_for_box_sizing", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

### width (および他の大きさのプロパティ) での対応

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("max-content")}}
