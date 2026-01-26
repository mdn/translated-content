---
title: height
slug: Web/CSS/Reference/Properties/height
---

**`height`** 的 CSS 屬性指定了元素內容區域的高度。[content area](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction#content) 在元素的留白(padding)、邊框(border) 與 邊界(margin) 內。

{{cssxref("min-height")}} 與 {{cssxref("max-height")}} 的特性比 {{Cssxref("height")}} 更重要。

{{cssinfo}}

## 語法

```css
/* Keyword value */
height: auto;

/* <length> values */
height: 120px;
height: 10em;

/* <percentage> value */
height: 75%;

/* Global values */
height: inherit;
height: initial;
height: unset;
```

### 值

- `<length>`
  - : 查看 {{cssxref("&lt;length&gt;")}} 可用的單位。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 相對於元素的塊狀高度。如果沒有指定塊狀元素的高度，預設值為 `auto。`用在 root 元素 (e.g. `<html>`) 上是相對於初始塊狀元素（即顯示器的尺寸）。
- `border-box`{{experimental_inline}}
  - : If present, the preceding {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} is applied to the element's border box.
- `content-box` {{experimental_inline}}
  - : {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 是應用於元素的 content box.
- `auto`
  - : 瀏覽器將計算並選擇指定元素的高度。
- fill {{experimental_inline}}
  - : Use the `fill-available` inline size or `fill-available` block size, as appropriate to the writing mode.
- `max-content` {{experimental_inline}}
  - : The intrinsic preferred height.
- `min-content` {{experimental_inline}}
  - : The intrinsic minimum height.
- `available` {{experimental_inline}}
  - : The containing block height minus vertical margin, border and padding.
- `fit-content` {{experimental_inline}}
  - : The larger of:
    - the intrinsic minimum height
    - the smaller of the intrinsic preferred height and the available height

### 正式語法

{{csssyntax}}

## 範例

### HTML

```html
<div id="red">
  <span>I'm 50 pixels tall.</span>
</div>
<div id="green">
  <span>I'm 25 pixels tall.</span>
</div>
<div id="parent">
  <div id="child">
    <span>I'm half the height of my parent.</span>
  </div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 3px solid #999999;
}

#red {
  height: 50px;
}

#green {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- [box model](/zh-TW/docs/Web/CSS/Guides/Box_model/Introduction), {{cssxref("width")}}, {{cssxref("box-sizing")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}
