---
title: border-spacing
slug: Web/CSS/border-spacing
---

{{CSSRef("CSS Tables")}}

## 概述

`border-spacing` 属性指定相邻单元格边框之间的距离（只适用于 [边框分离模式](/zh-CN/docs/Web/CSS/border-collapse) ）。相当于 HTML 中的 `cellspacing` 属性，但是第二个可选的值可以用来设置不同于水平间距的垂直间距。

`border-spacing` 值也适用于表格的外层边框上，即表格的边框和第一行的、第一列的、最后一行的、最后一列的单元格之间的间距是由表格相应的（水平的或垂直的）边框间距（border-spacing）和相应的（上，右，下或左）内边距之和。

该属性只适用于 {{ Cssxref("border-collapse") }} 值是 `separate` 的时候。

{{cssinfo}}

## 语法

```plain
/* <length> */
border-spacing: 2px;

/* horizontal <length> | vertical <length> */
border-spacing: 1cm 2em;

/* Global values */
border-spacing: inherit;
border-spacing: initial;
border-spacing: unset;
```

### 值

- _length_
  - : 描述单元格之间的水平和垂直距离的一个 {{cssxref("&lt;length&gt;")}} 值。它只在单值语法下使用。
- _horizontal_
  - : 描述相邻两列的单元格之间的水平距离的一个 {{cssxref("&lt;length&gt;")}} 值。它只在双值语法下使用。
- _vertical_
  - : 描述相邻两行的单元格之间的垂直距离的一个 {{cssxref("&lt;length&gt;")}} 值。它只在双值语法下使用。
- `inherit`
  - : 一个表示父元素的 `border-spacing` 的计算值的关键字，其父元素必须应用了 `border-spacing` 。

### 正式语法

{{csssyntax}}

## 示例

[查看在线演示](/samples/cssref/border-spacing.html)

```css
table {
  border-spacing: 10px 5px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
