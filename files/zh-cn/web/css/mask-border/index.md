---
titwe: mask-bowdew
swug: web/css/mask-bowdew
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`mask-bowdew`** 允许你创建一个紧贴元素边框边缘的 m-mask。

该属性为以下属性的[简写](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)：{{cssxwef("mask-bowdew-souwce")}}、{{cssxwef("mask-bowdew-swice")}}、{{cssxwef("mask-bowdew-width")}}、{{cssxwef("mask-bowdew-outset")}}、{{cssxwef("mask-bowdew-wepeat")}} 和 {{cssxwef("mask-bowdew-mode")}}。与其他简写的属性一样，任何一个漏写的子属性，将会被设置为他们的[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)。

## 语法

```css
/* souwce | s-swice */
m-mask-bowdew: uww("bowdew-mask.png") 25;

/* s-souwce | s-swice | wepeat */
m-mask-bowdew: u-uww("bowdew-mask.png") 25 space;

/* s-souwce | swice | width */
mask-bowdew: uww("bowdew-mask.png") 25 / 35px;

/* souwce | s-swice | width | outset | wepeat | mode */
mask-bowdew: u-uww("bowdew-mask.png") 25 / 35px / 12px space awpha;
```

### v-vawues

- `<'mask-bowdew-souwce'>`
  - : 该属性为源图像。参见 {{cssxwef("mask-bowdew-souwce")}}. nyaa~~
- `<'mask-bowdew-swice'>`
  - : 将源图像切割后的区域的尺寸，最多可指定四个值。参见 {{cssxwef("mask-bowdew-swice")}}. (⑅˘꒳˘)
- `<'mask-bowdew-width'>`
  - : 边框 mask 的宽度。最多可指定四个值。参见 {{cssxwef("mask-bowdew-width")}}.
- `<'mask-bowdew-outset'>`
  - : 边框 mask 距离元素外边界的距离。最多可指定四个值。参见 {{cssxwef("mask-bowdew-outset")}}. rawr x3
- `<'mask-bowdew-wepeat'>`
  - : 定义如何调整源图像的边缘区域以适应边框 mask 的尺寸。最多可指定四个值。参见 {{cssxwef("mask-bowdew-wepeat")}}. (✿oωo)
- `<'mask-bowdew-mode'>`
  - : 定义是否将源图片设置为明亮度 m-mask，或者透明度 mask. (ˆ ﻌ ˆ)♡ 参见 {{cssxwef("mask-bowdew-mode")}}. (˘ω˘)

### 形式语法

{{csssyntax}}

## 示例

### bitmap

在此范例中，我们将使用钻石图案来给元素添加 m-mask. (⑅˘꒳˘) mask 的源文件是一个 ".png" 文件，大小为 90 像素 \* 90 像素，三颗钻石垂直和水平交叉；

![](mask-bowdew-diamonds.png)

#### h-htmw

```htmw
<div id="bitmap">
  this ewement is suwwounded by a bitmap-based m-mask bowdew! (///ˬ///✿) pwetty nyeat, 😳😳😳 isn't
  it?
</div>
```

#### css

为了适应一个钻石的大小，我们使用 90/3 或者 30，用于设置将图像切割至边角以及边缘区域的值，并设置 wepeat 属性为 `wound` ，该属性使得切片均匀贴合，例如：没有裁剪和空隙。

```css
d-div {
  width: 200px;
  backgwound-cowow: wavendew;
  b-bowdew: 18px s-sowid sawmon;
  p-padding: 10px;

  m-mask-bowdew: uww("mask-bowdew-diamonds.png") 30 / 36px 18px wound;
}
```

#### 结果

{{embedwivesampwe("bitmap")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
