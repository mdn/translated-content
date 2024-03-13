---
title: margin-left
slug: Web/CSS/margin-left
---

{{CSSRef}}

![Area on which CSS margin-left apply](/files/4039/margin-left.svg)**`margin-left`** 属性 设置与元素相关联的盒子模型的左外边距。这个值可以为负值。

竖直排列相邻的两个盒子模型的外边距会重叠 _[margin collapsing](/zh-CN/docs/CSS/margin_collapsing)。_

在长度 (width) 被约束这种极少情况下，( `即当所有的宽度，左边界，边界，填充内容区域和边缘都被定义`), 左边界`会被忽略，`如果被制定为 auto 值，会有相同的计算值。

{{cssinfo()}}

## Syntax

```css
/* <length> values */
margin-left: 10px; /* 绝对长度 */
margin-left: 1em; /* 相对于字号的长度 */
margin-left: 5%; /* 相对最近块元素的宽度 */

/* Keyword values */
margin-left: auto;

/* Global values */
margin-left: inherit;
margin-left: initial;
margin-left: unset;
```

### Values

- `<length>`
  - : 一个固定宽度 {{cssxref("&lt;length&gt;")}} 值 : 可以是一个绝对宽度，e.g. in `px`, 也可以是个相对宽度，e.g. in `em`, 或者相对视窗的大小，e.g. in `vh`.
- `<percentage>`
  - : 百分比值 {{cssxref("&lt;percentage&gt;")}} 最近的块容器的宽度 _width_ .
- `auto`

  - : auto 关键词表示在当前布局模式下，浏览器根据接收的左边距自动计算出外边距。如果有几组 margin-left 和 margin-right 设置为 auto，那么最后计算的空间分布，会根据 display，float，position 属性，自动生成以下几种情况：

    | Value of {{cssxref("display")}}                                                                   | Value of {{cssxref("float")}} | Value of {{cssxref("position")}} | Computed value of `auto`                                                                                                                                                       | Comment                                                                                     |
    | ------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
    | `inline`, `inline-block`, `inline-table`                                                          | _any_                         | `static` or `relative`           | `0`                                                                                                                                                                            | Inline layout mode                                                                          |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | _any_                         | `static` or `relative`           | `0`, 除非`margin-left`和 `margin-right` 同时都设置为 `auto`。这样的话，元素就被设置为基于父元素居中。                                                                          | Block layout mode                                                                           |
    | `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption` | `left` or `right`             | `static` or `relative`           | `0`                                                                                                                                                                            | Block layout mode (floating element)                                                        |
    | _any_ `table-*`_, except_ `table-caption`                                                         | _any_                         | _any_                            | `0`                                                                                                                                                                            | Internal `table-*` elements don't have margins, use {{ cssxref("border-spacing") }} instead |
    | _any, except `flex`,_ `inline-flex`_, or_ `table-*`                                               | _any_                         | _`fixed`_ or `absolute`          | `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the border area inside the available `width`, if fixed. | Absolutely positioned layout mode                                                           |
    | `flex`, `inline-flex`                                                                             | _any_                         | _any_                            | 在水平方向上有空余空间的情况下，空余的空间会被平均分给水平方向上写有 margin-left:auto 属性的元素的外边距                                                                       | Flexbox layout mode                                                                         |

### Formal syntax

{{csssyntax()}}

## Examples

```
.content { margin-left:   5%; }
.sidebox { margin-left: 10px; }
.logo    { margin-left: -5px; }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
