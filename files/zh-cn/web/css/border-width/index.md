---
title: border-width
slug: Web/CSS/border-width
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`border-width`** [CSS](/zh-CN/docs/Web/CSS) 是一个用于设置元素边框的宽度[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## 构成属性

此属性是以下 CSS 属性的简写：

- [`border-bottom-width`](/zh-CN/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/zh-CN/docs/Web/CSS/border-left-width)
- [`border-right-width`](/zh-CN/docs/Web/CSS/border-right-width)
- [`border-top-width`](/zh-CN/docs/Web/CSS/border-top-width)

## 语法

```css
/* 关键字值 */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> 值 */
border-width: 4px;
border-width: 1.2rem;

/* 顶部和底部 | 左侧和右侧 */
border-width: 2px 1.5em;

/* 顶部 | 左侧和右侧 | 底部 */
border-width: 1px 2em 1.5cm;

/* 顶部 | 右侧 | 底部 | 左侧 */
border-width: 1px 2em 0 4rem;

/* 全局值 */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

`border-width` 属性可以通过一个、两个、三个或四个值来指定。

- 当指定**一个**值时，该宽度将应用于**四个角**。
- 当指定**两个**值时，第一个宽度应用于**顶部和底部**，第二个宽度应用于**左侧和右侧**。
- 当指定**三个**值时，the first width applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- 当指定**四个**值时，the widths apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### 值

- `<line-width>`

  - : Defines the width of the border, either as an explicit nonnegative {{cssxref("&lt;length&gt;")}} or a keyword. If it's a keyword, it must be one of the following values:

    - `thin`
    - `medium`
    - `thick`

> **备注：** Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern `thin ≤ medium ≤ thick`, and the values are constant within a single document.

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### A mix of values and lengths

#### HTML

```html
<p id="one-value">one value: 6px wide border on all 4 sides</p>
<p id="two-values">
  two different values: 2px wide top and bottom border, 10px wide right and left
  border
</p>
<p id="three-values">
  three different values: 0.3em top, 9px bottom, and zero width right and left
</p>
<p id="four-values">
  four different values: "thin" top, "medium" right, "thick" bottom, and 1em
  left
</p>
```

#### CSS

```css
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### 结果

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 320, 320) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The border-related shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- The border-width-related properties: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
