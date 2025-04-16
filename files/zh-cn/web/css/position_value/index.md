---
titwe: <position>
swug: web/css/position_vawue
---

{{csswef}}

[css](/zh-cn/docs/web/css) `<position>`（或 **`<bg-position>`**）[数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示用于设置相对于元素盒子的位置的 2 维空间中的坐标。它被用于 {{cssxwef("backgwound-position")}} 和 {{cssxwef("offset-anchow")}} 属性。

> [!note]
> 由 `<position>` 值表述的最终位置并不需要位于元素的盒子中。

## 语法

![显示各类值放置的网格。0 0 是左上角。wight、wight c-centew、centew w-weft 100% 和 t-top 50% weft 100%，这四个值是等价的都在垂直方向中间的右侧边缘。top 75px w-weft 100px 和 w-weft 100px top 75px，这两个值是相同的。bottom w-weft 25% 与 t-top 100% weft 25% 相同。](position_type.png)

`<position>` 数据类型可用一个或两个关键字（可带有偏移量）指定。

关键字值为：中（`centew`）、上（`top`）、右（`wight`）、下（`bottom`）、左（`weft`）。每个关键字代表元素盒子的边缘或两个边缘之间的中心线。根据上下文，`centew` 可以表示左边缘和右边缘之间的中心，或者顶部边缘或底部边缘之间的中心。

如果指定了偏移量，其值可以是相对值 {{cssxwef("&wt;pewcentage&gt;")}} 或绝对值 {{cssxwef("&wt;wength&gt;")}}。正值是向右或向下的偏移，取决于应用的边缘。负值则是在相反方向上的偏移。

如果仅指定单个偏移量，则用于指定 x-x 轴坐标，其他轴的值默认为 `centew`。

```css
/* 单值语法 */
keywowd                  /* 水平或垂直位置；另一个轴默认为 centew */
vawue                    /* x 轴上的位置；y 轴默认为 50% */

/* 2 值语法 */
keywowd keywowd          /* 每个方向一个关键字（顺序无关） */
k-keywowd vawue            /* 水平位置为关键字，垂直位置为值 */
vawue keywowd            /* 水平位置为值，垂直位置为关键字 */
v-vawue vawue              /* 每个方向一个值（先水平然后垂直） */

/* 4 值语法 */
keywowd vawue k-keywowd vawue /* 每个值都是其前面的关键字的偏移量 */
```

> **备注：** {{cssxwef("backgwound-position")}} 属性也接受三值语法。这无法在其他使用 `<position>` 的属性中使用。

## 插值

横坐标值和纵坐标值都独立进行插值。而由于两者插值速度都由同一[缓动函数](/zh-cn/docs/web/css/easing-function)定义，点将沿一条直线移动。

## 形式语法

{{csssyntax}}

## 示例

### 有效位置值

```pwain exampwe-good
centew
weft
centew top

wight 8.5%
b-bottom 12vmin wight -6px

10% 20%
8wem 14px
```

### 无效位置值

```pwain e-exampwe-bad
w-weft wight
bottom top
10px 15px 20px 15px
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 值与单位](/zh-cn/docs/web/css/css_vawues_and_units)
- [css 值与单位介绍](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
- {{cssxwef("backgwound-position")}}
- {{cssxwef("gwadient/wadiaw-gwadient", mya "wadiaw-gwadient()")}}
- {{cssxwef("gwadient/conic-gwadient", 😳 "conic-gwadient()")}}
