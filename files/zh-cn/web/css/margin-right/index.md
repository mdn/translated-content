---
title: margin-right
slug: Web/CSS/margin-right
---

{{CSSRef}}

## 摘要

![The effect of the CSS margin-right property on the element box](/files/4041/margin-right.svg)**`margin-right`** 属性 设置与元素相关联的盒子模型的右外边距。这个值可以为负值。

竖直排列相邻的两个盒子模型的外边距会重叠，称为 [_margin collapsing_](/zh-CN/docs/CSS/margin_collapsing).

{{cssinfo}}

## 语法

```css
/* <length> values */
margin-right: 20px; /* An absolute length */
margin-right: 1em; /* A length relative to the text size */
margin-right: 5%; /* A margin relative to the nearest block container's width */

/* Keyword values */
margin-right: auto;

/* Global values */
margin-right: inherit;
margin-right: initial;
margin-right: unset;
```

### 值

- `<length>`
  - : 一个固定宽度 {{cssxref("&lt;length&gt;")}}值：可以是一个绝对宽度，e.g. in `px`, 也可以是一个相对宽度，e.g. in `em`, 或者相对视窗的大小，e.g. in `vh`.
- `<percentage>`
  - : 以百分比为单位的 margin 值，计算时是相对于其最近的父级容器的宽度。
- `auto`

  - : auto 关键词表示在当前布局模式下，浏览器根据接收的左边距自动计算出外边距。如果有几组 margin-left 和 margin-right 设置为 auto，那么最后计算的空间分布，会根据 display，float，position 属性，自动生成以下几种情况：

    | Value of {{cssxref("display")}}                                                                   | Value of {{cssxref("float")}} | Value of {{cssxref("position")}} | Computed value of `auto`                                                                                                                                                       | Comment                                                                                     |
    | ------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
    | `inline`, `inline-block`, `inline-table`                                                          | _any_                         | `static` or `relative`           | `0`                                                                                                                                                                            | Inline layout mode                                                                          |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | _any_                         | `static` or `relative`           | `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the element inside its parent.                          | Block layout mode                                                                           |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | `left` or `right`             | `static` or `relative`           | `0`                                                                                                                                                                            | Block layout mode (floating element)                                                        |
    | _any_ `table-*`_, except_ `table-caption`                                                         | _any_                         | _any_                            | `0`                                                                                                                                                                            | Internal `table-*` elements don't have margins, use {{ cssxref("border-spacing") }} instead |
    | _any, except `flex`,_ `inline-flex`_, or_ `table-*`                                               | _any_                         | _`fixed`_ or `absolute`          | `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the border area inside the available `width`, if fixed. | Absolutely positioned layout mode                                                           |
    | `flex`, `inline-flex`                                                                             | _any_                         | _any_                            | `0`, except if there is any positive horizontal free space. In this case, it is evenly distributed to all horizontal `auto` margins.                                           | Flexbox layout mode                                                                         |

### 形式语法

{{csssyntax}}

## 实例

```
.content { margin-right: 5%; }
.sidebox { margin-right: 10px; }
.logo    { margin-right: -5px; }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
