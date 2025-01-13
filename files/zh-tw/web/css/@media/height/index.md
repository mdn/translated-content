---
title: height
slug: Web/CSS/@media/height
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

**`height`** [CSS](/zh-TW/docs/Web/CSS) [媒體特性](/zh-TW/docs/Web/CSS/@media#媒體特性)可用於根據{{glossary("viewport", "視區")}}的高度（或[分頁媒體](/zh-TW/docs/Web/CSS/CSS_paged_media)的頁框）套用樣式。

## 語法

`height` 特性被指定為 {{cssxref("&lt;length&gt;")}} 值，代表視區的高度。這是一個範圍特性，這意味著你也可以使用加上前綴的 **`min-height`** 和 **`max-height`** 變體，分別查詢最小值和最大值。

## 範例

### HTML

```html
<div>當你調整視區高度時，觀察此元素。</div>
```

### CSS

```css
/* 精確高度 */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* 最小高度 */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* 最大高度 */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
```

### 結果

{{EmbedLiveSample('範例','90%')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用媒體查詢](/zh-TW/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/zh-TW/docs/Web/CSS/@media)
