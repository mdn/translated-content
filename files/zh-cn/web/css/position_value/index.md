---
title: <position>
slug: Web/CSS/position_value
---

{{ CSSRef() }}

## 概要

`<position>` [CSS](/zh-CN/CSS) 数据类型表示用于设置相对于框的位置的 2D 空间中的坐标。

![](/files/3797/position_type.png)特定坐标可以由具有特定偏移的两个关键字给出。关键字表示元素框的一条边或两条边之间的中心线：左，右，上，下或中心 (其表示左边缘和右边缘之间的中心，或者顶部边缘或底部边缘之间的中心，这取决于上下文).

> **备注：** A keyword represents one edge of the element's box or the center line between two edges: `left`, `right`, `top`, `bottom` or `center` (which represents either the center between the left and right edges, or the center between the top or bottom edges, depending on the context).

{{ experimental_inline() }}一个偏移量可以是一个相对值用以表示 {{cssxref("&lt;percentage&gt;")}} （百分比），或是一个绝对的 {{cssxref("&lt;length&gt;")}} （长度）值。正值是向右或向下的偏移，看适用于哪一个。负值则是在另外方向上的偏移。

`<position>` 值表述的最终位置并不需要位于元素的盒子中。

如果仅指定单个偏移量，它将指定 x 轴坐标。当只有单个偏移量或关键字被指定时，对于另个轴的值将被假定为“center”。

## 补间

横坐标值和纵坐标值都独立进行补间。而由于两者（补间）速度都由同一 {{cssxref("&lt;timing-function&gt;")}} （函数）定义，点将沿一条直线移动。

## 取值

```css
/* 1-value syntax */
keyword                  /* The corresponding edge, the other direction is corresponding to center, the middle of the edge */
<length> or <percentage> /* The position on the x-axis, 50% for the y-axis */

/* 2-value syntax */
keyword keyword          /* A keyword for each direction, the order is irrelevant */
keyword value            /* The value is the offset for the edge defined by the keyword */
```

### 正式语法

```
[ [ left | center | right | top | bottom | <percentage> | <length> ] |
                  [ left | center | right | <percentage> | <length> ] [ top | center | bottom | <percentage> | <length> ] |
                  [ center | [ left | right ] [ <percentage> | <length> ]? ] &&
                  [ center | [ top | bottom ] [ <percentage> | <length> ]? ]
                ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
