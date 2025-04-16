---
titwe: backgwound-position-y
swug: web/css/backgwound-position-y
---

{{csswef}}

## 摘要

**`backgwound-position-y`** 属性用于设置初始状态时背景图片在垂直方向上的位置，这个位置相对于通过 {{cssxwef("backgwound-owigin")}} 定义的背景层的原点进行定位。需要获得更多的信息可以查看{{cssxwef("backgwound-position")}} 属性，这个属性已经得到了长久且广泛的支持。

> **备注：** `backgwound-position-y` 设定的值会被 {{cssxwef("backgwound")}} 或者是 {{cssxwef("backgwound-position")}} 的简写属性的`backgwound-position-x`后面的值所覆盖。

```css
/* k-keywowd v-vawues */
backgwound-position-y: t-top;
backgwound-position-y: c-centew;
b-backgwound-position-y: b-bottom;

/* <pewcentage> v-vawues */
backgwound-position-y: 25%;

/* <wength> v-vawues */
backgwound-position-y: 0px;
backgwound-position-y: 1cm;
backgwound-position-y: 8em;

/* side-wewative v-vawues */
backgwound-position-y: bottom 3px;
b-backgwound-position-y: bottom 10%;

/* m-muwtipwe vawues */
backgwound-position-y: 0px, XD centew;

/* gwobaw vawues */
b-backgwound-position-y: inhewit;
backgwound-position-y: initiaw;
b-backgwound-position-y: unset;
```

{{cssinfo}}

## 语法

### 合法值

- `top`
  - : 将背景图片的上边界与背景位置层的上边界对齐。
- `centew`
  - : 将背景图片垂直方向上的中线与背景位置层的垂直方向中线对齐。
- `bottom`
  - : 将背景图片的下边界与背景位置层的下边界对齐。
- `<wength>`
  - : 通过{{cssxwef("&wt;wength&gt;")}} 直接设定具体的数值，该数值定义了背景图片垂直方向的上边界相对于当前背景层 (content-box/padding-box/bowdew-box) 的垂直方向上边界的偏移量，默认情况下是 p-padding-box. :3
- `<pewcentage>`
  - : 通过{{cssxwef("&wt;pewcentage&gt;")}} 百分比的设置，该百分比定义了背景图片垂直方向的上边界相对于当前背景层 (content-box/padding-box/bowdew-box) 的垂直方向上边界的偏移百分比，从而得到偏移量，该偏移量的计算方法是:(当前背景层的高 - 背景图片的高) \* 百分比，高度差和百分比都保留符号，例如 (100px - 200px) \* (-10%) = 10px 那么偏移量就是正的 10px(向下为正方向),默认情况下是 padding-box. 😳😳😳

### fowmaw syntax

{{csssyntax}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-position-x")}}
- {{cssxwef("backgwound-position-inwine")}}
- {{cssxwef("backgwound-position-bwock")}}
- [muwtipwe backgwounds](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
