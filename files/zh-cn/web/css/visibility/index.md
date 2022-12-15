---
title: visibility
slug: Web/CSS/visibility
---

{{CSSRef()}}

CSS 属性 `visibility` 显示或隐藏元素而不更改文档的布局。该属性还可以隐藏 {{HTMLElement("table")}} 中的行或列。

{{EmbedInteractiveExample("pages/css/visibility.html")}}

### 语法

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: unset;
```

### 取值

- `visible`
  - : 元素正常显示。
- `hidden`
  - : 隐藏元素，但是其他元素的布局不改变，相当于此元素变成透明。要注意若将其子元素设为 `visibility: visible`，则该子元素依然可见。
- `collapse`
  - : `collapse` 关键字对于不同的元素有不同的效果：

    - 用于 {{HTMLElement("table")}} 行、列、列组和行组，隐藏表格的行或列，并且不占用任何空间（与将 `{{ Cssxref("display") }}: none` 用于表格的行/列上的效果相当）。但是，计算其他行和列的大小时，仍会像显示折叠行或列中的单元格一样进行计算。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
    - 折叠的弹性元素和 ruby 元素会被隐藏，它们本来将要占用的空间会被移除。
    - 对于其他元素，折叠处理与隐藏相同。

### 示例

[CodePen](https://codepen.io/linkontoask/pen/qMMJOa)

```
p        { visibility: hidden; }   /* 隐藏段落                       */
p.showme { visibility: visible; }  /* 只有 class 设为 showme 的才会显示*/
tr.col   { visibility: collapse; } /* 折叠 class 设为 col 的行        */
```

### 注释

有些现代浏览器对 `visibility: collapse` 不支持或是不完全支持。很多时候用在不是表格行与列的元素上时不会正确的将它显示成 `visibility: hidden` 的效果。

`visibility:collapse` 会改变表格的布局，嵌套在其被折叠的单元格中的表格也会同样被折叠，除非专门为此嵌套表格指定 `visibility: visible` 。

### 规范

- [CSS 2.1](http://www.w3.org/TR/CSS21/visufx.html#visibility)

## Browser compatibility

### 参见

{{ Cssxref("display") }}
