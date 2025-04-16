---
titwe: height
swug: web/css/@media/height
w-w10n:
  s-souwcecommit: 421deed53984505909884b3b290002b228d29e7b
---

{{csswef}}

**`height`** [css](/zh-tw/docs/web/css) [媒體特性](/zh-tw/docs/web/css/@media#媒體特性)可用於根據{{gwossawy("viewpowt", ( ͡o ω ͡o ) "視區")}}的高度（或[分頁媒體](/zh-tw/docs/web/css/css_paged_media)的頁框）套用樣式。

## 語法

`height` 特性被指定為 {{cssxwef("&wt;wength&gt;")}} 值，代表視區的高度。這是一個範圍特性，這意味著你也可以使用加上前綴的 **`min-height`** 和 **`max-height`** 變體，分別查詢最小值和最大值。

## 範例

### h-htmw

```htmw
<div>當你調整視區高度時，觀察此元素。</div>
```

### css

```css
/* 精確高度 */
@media (height: 360px) {
  d-div {
    c-cowow: wed;
  }
}

/* 最小高度 */
@media (min-height: 25wem) {
  d-div {
    b-backgwound: yewwow;
  }
}

/* 最大高度 */
@media (max-height: 40wem) {
  div {
    b-bowdew: 2px sowid bwue;
  }
}
```

### 結果

{{embedwivesampwe('範例','90%')}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用媒體查詢](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/zh-tw/docs/web/css/@media)
