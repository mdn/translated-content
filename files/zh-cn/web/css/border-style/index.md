---
title: border-style
slug: Web/CSS/border-style
---

## 概述

{{CSSRef("CSS Borders")}}

`border-style` 是一个 [CSS](/zh-CN/docs/CSS) 简写属性，用来设定元素所有边框的样式。

> **备注：** `border-style` 默认值是 `none`，这意味着如果您只修改 {{ Cssxref("border-width") }} 和 {{ Cssxref("border-color") }} 是不会出现边框的。

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## 语法

```css
/* Apply to all four sides */
border-style: dashed;

/* horizontal | vertical */
border-style: dotted solid;

/* top | horizontal | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: unset;
```

### 取值

- `<br-style>`

  - : 关键字用于描述边框样式。它可以有以下取值：

    | `none`   |     | 和关键字 `hidden` 类似，不显示边框。在这种情况下，如果没有设定背景图片，{{ cssxref("border-width") }} 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`none` 值优先级最低，意味着如果存在其他的重叠边框，则会显示为那个边框。 |
    | -------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `hidden` |     | 和关键字 `none` 类似，不显示边框。在这种情况下，如果没有设定背景图片，{{ cssxref("border-width") }} 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`hidden` 值优先级最高，意味着如果存在其他的重叠边框，边框不会显示。       |
    | `dotted` |     | 显示为一系列圆点。标准中没有定义两点之间的间隔大小，视不同实现而定。圆点半径是 {{ cssxref("border-width") }} 计算值的一半。                                                                                                                         |
    | `dashed` |     | 显示为一系列短的方形虚线。标准中没有定义线段的长度和大小，视不同实现而定。                                                                                                                                                                          |
    | `solid`  |     | 显示为一条实线。                                                                                                                                                                                                                                    |
    | `double` |     | 显示为一条双实线，宽度是 {{ cssxref("border-width") }} 。                                                                                                                                                                                           |
    | `groove` |     | 显示为有雕刻效果的边框，样式与 `ridge` 相反。                                                                                                                                                                                                       |
    | `ridge`  |     | 显示为有浮雕效果的边框，样式与 `groove` 相反。                                                                                                                                                                                                      |
    | `inset`  |     | 显示为有陷入效果的边框，样式与 `outset` 相反。当它指定到 {{ cssxref("border-collapse") }} 为 `collapsed` 的单元格时，会显示为 `groove` 的样式。                                                                                                     |
    | `outset` |     | 显示为有突出效果的边框，样式与 `inset` 相反。当它指定到 {{ cssxref("border-collapse") }} 为 `collapsed` 的单元格时，会显示为 `ridge` 的样式。                                                                                                       |

### 形式语法

{{csssyntax}}

## 示例

### 包含所有属性取值的表格

以下是一个所有取值的例子

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* 定义表格外观 */
table {
  border-width: 3px;
  background-color: #52e396;
}
tr,
td {
  padding: 2px;
}

/* border-style 示例 */
.b1 {
  border-style: none;
}
.b2 {
  border-style: hidden;
}
.b3 {
  border-style: dotted;
}
.b4 {
  border-style: dashed;
}
.b5 {
  border-style: solid;
}
.b6 {
  border-style: double;
}
.b7 {
  border-style: groove;
}
.b8 {
  border-style: ridge;
}
.b9 {
  border-style: inset;
}
.b10 {
  border-style: outset;
}
```

#### 输出

{{ EmbedLiveSample('包含所有属性取值的表格', 300, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 和边框有关的 CSS 简写属性：{{ Cssxref("border") }}, {{ Cssxref("border-width") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-radius") }}
