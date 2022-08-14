---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - CSS Styles
  - HTML Colors
  - Reference
  - Styling HTML
  - border-color
  - borders
  - colors
  - recipe:css-shorthand-property
browser-compat: css.properties.border-color
translation_of: Web/CSS/border-color
---
{{CSSRef}}

**`border-color`** 是一種[CSS](/zh-TW/docs/Web/CSS) [簡寫屬性](/zh-TW/docs/Web/CSS/Shorthand_properties)，用來綜合設定元件四邊框線的顏色。

{{EmbedInteractiveExample("pages/css/border-color.html")}}

border-color 雖可一次設定四邊框線色彩，但每個邊框亦可用以下屬性分別指定：{{CSSxRef("border-top-color")}}、{{CSSxRef("border-right-color")}}、{{CSSxRef("border-bottom-color")}}、{{CSSxRef("border-left-color")}}；能因應文字書寫方向改變框線相對位置（the writing mode-aware）的屬性如：{{CSSxRef("border-block-start-color")}}、{{CSSxRef("border-block-end-color")}}、{{CSSxRef("border-inline-start-color")}}、{{CSSxRef("border-inline-end-color")}}，也可達成分別指定的功能。

關於更多邊框色彩的設定說明，請見{{SectionOnPage("/zh-TW/docs/Web/HTML/Applying_color", "borders")}}。

## Constituent properties 屬性組成

border-color簡寫的屬性值內容由以下CSS的屬性值構成。

- [`border-bottom-color`](/zh-TW/docs/Web/CSS/border-bottom-color)
- [`border-left-color`](/zh-TW/docs/Web/CSS/border-left-color)
- [`border-right-color`](/zh-TW/docs/Web/CSS/border-right-color)
- [`border-top-color`](/zh-TW/docs/Web/CSS/border-top-color)

## 語法

```css
/* <color> values */
border-color: red;

/* top and bottom | left and right */
border-color: red #f015ca;

/* top | left and right | bottom */
border-color: red rgb(240,30,50,.7) green;

/* top | right | bottom | left */
border-color: red yellow green blue;

/* Global values */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

`border-color` 屬性值可設定一到四個輸入值。

- 一個值：將單一顏色指定給**全部四個邊**。
- 兩個值：依顏色排列順序分別指定給：**上下邊**、**左右邊**。
- 三個值：依顏色排列順序分別指定給：**上邊框**、**左右邊**、**下邊框**。
- 四個值：依顏色排列順序，沿邊框順時鐘方向，分別指定給：**上邊框**、**右邊框**、**下邊框**、**左邊框**。

### 屬性值

- {{CSSxRef("&lt;color&gt;")}}
  - : 定義框線的顏色。

## Formal definition 語法定義

{{CSSInfo}}

## Formal syntax 語法規則

{{csssyntax}}

## 範例

### 完整的border-color簡寫使用

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> is equivalent to</p>
  <ul><li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* 設定每個div的邊框與樣式 */
/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### 成果

{{EmbedLiveSample("完整的border-color簡寫使用", 600, 700)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 與border-color相關的CSS屬性：{{CSSxRef("border")}}、{{CSSxRef("border-top-color")}}、 {{CSSxRef("border-right-color")}}、{{CSSxRef("border-bottom-color")}}、{{CSSxRef("border-left-color")}}。
- 其他框線屬性：{{CSSxRef("border-width")}}、{{CSSxRef("border-style")}}
- 資料型態 {{CSSxRef("&lt;color&gt;")}}
- 其他顏色相關屬性：{{CSSxRef("color")}}、{{CSSxRef("background-color")}}、{{CSSxRef("outline-color")}}、{{CSSxRef("text-decoration-color")}}、{{CSSxRef("text-emphasis-color")}}、{{CSSxRef("text-shadow")}}、{{CSSxRef("caret-color")}}、{{CSSxRef("column-rule-color")}}
- [以CSS指定HTML元件的顏色](/zh-TW/docs/Web/CSS/CSS_Colors/Applying_color)
