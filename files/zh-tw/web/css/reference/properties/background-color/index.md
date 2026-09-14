---
title: background-color
slug: Web/CSS/Reference/Properties/background-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`background-color`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定元素的背景顏色。

{{InteractiveExample("CSS Demo: background-color")}}

```css interactive-example-choice
background-color: brown;
```

```css interactive-example-choice
background-color: #74992e;
```

```css interactive-example-choice
background-color: rgb(255 255 128);
```

```css interactive-example-choice
background-color: rgb(255 255 128 / 0.5);
```

```css interactive-example-choice
background-color: hsl(50 33% 25%);
```

```css interactive-example-choice
background-color: hsl(50 33% 25% / 0.75);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 語法

```css
/* 關鍵字值 */
background-color: red;
background-color: indigo;

/* 十六進位值 */
background-color: #bbff00; /* 完全不透明 */
background-color: #bf0; /* 完全不透明簡寫 */
background-color: #11ffee00; /* 完全透明 */
background-color: #1fe0; /* 完全透明簡寫 */
background-color: #11ffeeff; /* 完全不透明 */
background-color: #1fef; /* 完全不透明簡寫 */

/* RGB 值 */
background-color: rgb(255 255 128); /* 完全不透明 */
background-color: rgb(117 190 218 / 50%); /* 50% 透明 */

/* HSL 值 */
background-color: hsl(50 33% 25%); /* 完全不透明 */
background-color: hsl(50 33% 25% / 75%); /* 75% 不透明，即 25% 透明 */

/* 特殊關鍵字值 */
background-color: currentcolor;
background-color: transparent;

/* 全域值 */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

`background-color` 屬性被指定為單一的 `<color>` 值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 背景的單一顏色。它會被算繪在任何指定的 {{cssxref("background-image")}} 後方，但顏色仍然會透過圖片中的任何透明部分顯示出來。

## 無障礙

確保背景顏色與其上方文字顏色之間的對比度足夠高，這點非常重要，如此一來視力不佳的使用者才能閱讀頁面內容。

顏色對比度是透過比較文字和背景顏色值的亮度來決定的。為了符合目前的 [Web 內容無障礙指南（WCAG）](https://www.w3.org/WAI/standards-guidelines/wcag/)，文字內容需要 4.5:1 的對比度，而像標題這樣較大的文字則需要 3:1 的對比度。大文字的定義為 18.66px 且[粗體](/zh-TW/docs/Web/CSS/Reference/Properties/font-weight)或更大，或 24px 或更大。

- [WebAIM：顏色對比度檢查器](https://webaim.org/resources/contrastchecker/)
- [MDN 理解 WCAG，指南 1.4 解釋](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [理解成功標準 1.4.3 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 為方塊上色

此範例展示了如何使用不同的 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值將 `background-color` 應用於 HTML {{HTMLelement("div")}} 元素。

#### HTML

```html
<div class="example-one">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="example-two">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="example-three">Lorem ipsum dolor sit amet, consectetuer</div>
```

#### CSS

```css
.example-one {
  background-color: transparent;
}

.example-two {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.example-three {
  background-color: #777799;
  color: #ffffff;
}
```

#### 結果

{{EmbedLiveSample("為方塊上色", 200, 150)}}

### 為表格上色

此範例展示了如何在 HTML {{HTMLelement("table")}} 元素上使用 `background-color`，包括 {{HTMLelement("tr")}} 列和 {{HTMLelement("td")}} 儲存格。

#### HTML

```html
<table>
  <tr id="r1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td id="c13">13</td>
  </tr>
  <tr id="r2">
    <td id="c21">21</td>
    <td id="c22">22</td>
    <td id="c23">23</td>
  </tr>
  <tr id="r3">
    <td id="c31">31</td>
    <td id="c32">32</td>
    <td id="c33">33</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### 結果

{{EmbedLiveSample('為表格上色', "100%", "100%")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [多重背景](/zh-TW/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("&lt;color&gt;")}} 資料型別
- 其他與顏色相關的屬性：{{cssxref("color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}} 和 {{cssxref("column-rule-color")}}
