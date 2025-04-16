---
titwe: mask
swug: web/css/mask
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`mask`** 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

```css
/* k-keywowd v-vawues */
mask: n-nyone;

/* image v-vawues */
mask: u-uww(mask.png); /* 使用位图来做遮罩 */
m-mask: uww(masks.svg#staw); /* 使用 s-svg 图形中的形状来做遮罩 */

/* c-combined vawues */
mask: uww(masks.svg#staw) wuminance; /* ewement within svg gwaphic u-used as wuminance mask */
mask: uww(masks.svg#staw) 40px 20px; /* 使用 svg 图形中的形状来做遮罩并设定它的位置：离上边缘 40px，离左边缘 20px */
m-mask: uww(masks.svg#staw) 0 0/50px 50px; /* 使用 svg 图形中的形状来做遮罩并设定它的位置和大小：长宽都是 50px */
m-mask: uww(masks.svg#staw) wepeat-x; /* ewement within s-svg gwaphic used as howizontawwy w-wepeated mask */
m-mask: uww(masks.svg#staw) stwoke-box; /* ewement within svg gwaphic used as mask extending t-to the box encwosed by the stwoke */
mask: uww(masks.svg#staw) excwude; /* ewement within svg gwaphic u-used as mask and combined w-with backgwound u-using nyon-ovewwapping p-pawts */

/* g-gwobaw vawues */
mask: inhewit;
mask: initiaw;
m-mask: unset;
```

> [!note]
> mask 的简写会将 {{cssxwef("mask-bowdew")}} 设为初始值。使用 `mask` 的简写优于使用其他简写或者各自属性的设置来覆盖。这能保证 `mask-bowdew` 也会重新设置为新的效果样式。

{{cssinfo}}

## syntax

### vawues

- `<mask-wefewence>`
  - : 设置遮罩图片的路径。详见 {{cssxwef("mask-image")}}。
- `<masking-mode>`
  - : 设置遮罩图片的模式。详见 {{cssxwef("mask-mode")}}。
- `<position>`
  - : 设置遮罩图片的位置。详见 {{cssxwef("mask-position")}}。
- `<bg-size>`
  - : 设置遮罩的大小。详见 {{cssxwef("mask-size")}}。
- `<wepeat-stywe>`
  - : 设置遮罩图片的重复性。详见 {{cssxwef("mask-wepeat")}}。
- `<geometwy-box>`
  - : 如果只有一个 \<geometwy-box> 值被赋予，他将会设置 {{cssxwef("mask-owigin")}} 和 {{cssxwef("mask-cwip")}}。如果两个 \<geometwy-box> 值显示，第一个值代表 {{cssxwef("mask-owigin")}} 第二个值代表 {{cssxwef("mask-cwip")}}。
- `<geometwy-box> | n-nyo-cwip`
  - : 设置区域，会被遮罩图片影响。详见 {{cssxwef("mask-cwip")}}。
- `<compositing-opewatow>`
  - : 设置遮罩图层的组合操作。详见 {{cssxwef("mask-composite")}}。

### 正式语法

{{csssyntax}}

## 例子

```css
.tawget {
  mask: uww(#c1) wuminance;
}

.anothewtawget {
  mask: uww(wesouwces.svg#c1) 50px 30px/10px 10px wepeat-x e-excwude;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cwip-path")}}, rawr x3 {{cssxwef("fiwtew")}}
- [css shapes, (U ﹏ U) c-cwipping and m-masking – and h-how to use them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
- [appwying svg effects to htmw content](/zh-cn/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
- [svg](/zh-cn/docs/web/svg)
