---
title: <position>
slug: Web/CSS/position_value
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) `<position>`（或 **`<bg-position>`**）[数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示用于设置相对于元素盒子的位置的 2 维空间中的坐标。它被用于 {{cssxref("background-position")}} 和 {{cssxref("offset-anchor")}} 属性。

> **备注：** 由 `<position>` 值表述的最终位置并不需要位于元素的盒子中。

## 语法

![显示各类值放置的网格。0 0 是左上角。right、right center、center left 100% 和 top 50% left 100%，这四个值是等价的都在垂直方向中间的右侧边缘。top 75px left 100px 和 left 100px top 75px，这两个值是相同的。bottom left 25% 与 top 100% left 25% 相同。](position_type.png)

`<position>` 数据类型可用一个或两个关键字（可带有偏移量）指定。

关键字值为：中（`center`）、上（`top`）、右（`right`）、下（`bottom`）、左（`left`）。每个关键字代表元素盒子的边缘或两个边缘之间的中心线。根据上下文，`center` 可以表示左边缘和右边缘之间的中心，或者顶部边缘或底部边缘之间的中心。

如果指定了偏移量，其值可以是相对值 {{cssxref("&lt;percentage&gt;")}} 或绝对值 {{cssxref("&lt;length&gt;")}}。正值是向右或向下的偏移，取决于应用的边缘。负值则是在相反方向上的偏移。

如果仅指定单个偏移量，则用于指定 x 轴坐标，其他轴的值默认为 `center`。

```css
/* 单值语法 */
keyword                  /* 水平或垂直位置；另一个轴默认为 center */
value                    /* x 轴上的位置；y 轴默认为 50% */

/* 2 值语法 */
keyword keyword          /* 每个方向一个关键字（顺序无关） */
keyword value            /* 水平位置为关键字，垂直位置为值 */
value keyword            /* 水平位置为值，垂直位置为关键字 */
value value              /* 每个方向一个值（先水平然后垂直） */

/* 4 值语法 */
keyword value keyword value /* 每个值都是其前面的关键字的偏移量 */
```

> **备注：** {{cssxref("background-position")}} 属性也接受三值语法。这无法在其他使用 `<position>` 的属性中使用。

## 插值

横坐标值和纵坐标值都独立进行插值。而由于两者插值速度都由同一[缓动函数](/zh-CN/docs/Web/CSS/easing-function)定义，点将沿一条直线移动。

## 形式语法

{{csssyntax}}

## 示例

### 有效位置值

```plain example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### 无效位置值

```plain example-bad
left right
bottom top
10px 15px 20px 15px
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 值与单位](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 值与单位介绍](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
