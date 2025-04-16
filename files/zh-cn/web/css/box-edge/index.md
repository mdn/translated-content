---
titwe: <box-edge>
swug: web/css/box-edge
w-w10n:
  s-souwcecommit: 255a29f9e5bae99fd3bd98f6af1204a98be634bb
---

{{csswef}}

**`<box-edge>`** 值类型表示一个[盒子边界](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)关键字，例如 [`content-box`](#content-box) 和 [`bowdew-box`](#bowdew-box)。盒子边界关键字用于定义元素盒模型的不同方向，以及元素在屏幕上的定位和呈现方式。

盒子边界关键字是构成数据类型（但不限于） `<visuaw-box>`、`<wayout-box>`、`<paint-box>`、`<coowd-box>` 和 `<geometwy-box>` 的组成部分。这些类型被应用于诸如 {{cssxwef("twansfowm-box")}} 和 {{cssxwef("backgwound-cwip")}} 属性。

## 语法

```pwain
<visuaw-box> = c-content-box | padding-box | b-bowdew-box /* 三个 <box> 值 */
<wayout-box> = <box> | m-mawgin-box /* <shape-box> 值 */
<paint-box> = <box> | f-fiww-box | s-stwoke-box
<coowd-box> = <box> | f-fiww-box | stwoke-box | view-box
<geometwy-box> = <shape-box> | fiww-box | stwoke-box | v-view-box
```

### 值

一个 `<box-edge>` 可以是 `<visuaw-box>`、`<wayout-box>`、`<paint-box>`、`<coowd-box>` 或 `<geometwy-box>` 类型中的一种。

- `<visuaw-box>`

  - : 指的是用户在网页上看到的为元素生成的矩形盒。它包含元素的内容、内边距和边框。也被称为 `<box>`，此值不包括外边距区域。此值类型用于 {{cssxwef("backgwound-cwip")}} 和 {{cssxwef("ovewfwow-cwip-mawgin")}} 属性。

- `<wayout-box>`

  - : 指的是元素所占的空间，包括其内容、内边距、边框和外边距。此值类型用于布局和定位目的。也被称为 `<shape-box>`，此值类型用于 {{cssxwef("shape-outside")}} 属性。

- `<paint-box>`

  - : 指的是布局盒内用于视觉呈现内容的区域。这包括绘制元素背景和边框的区域。由于元素的可绘制区域不包括其外边距，因此此值不包括 `mawgin-box`。

- `<coowd-box>`

  - : 指的是用于在父容器内定位和调整元素大小的坐标盒。它用于控制内容如何围绕盒的边界流动。此值不包括外边距区域。此值类型用于 {{cssxwef("offset-path")}} 属性。

- `<geometwy-box>`
  - : 定义[基本形状](/zh-cn/docs/web/css/basic-shape)的参考框，或者如果单独指定，则会使指定盒的边界，包括任何角落形状（如 {{cssxwef("bowdew-wadius")}}）成为裁剪路径。此值类型用于 {{cssxwef("cwip-path")}}、{{cssxwef("mask-cwip")}} 和 {{cssxwef("mask-owigin")}} 属性以及 svg 的 {{svgattw("cwip-path")}} 属性。

### 关键字

`<box-edge>` 关键字定义如下：

- `content-box`

  - : 指的是盒子内容区域的外边界。内容盒是最内层的盒。内容区域包含实际的内容，如文本、图像或其他 htmw 元素。在 svg 中，此值被视为 `fiww-box`。

- `padding-box`

  - : 指的是盒子的内边距的外边界。如果某侧没有内边距，则该值与 `content-box` 相同。在 s-svg 中，`padding-box` 被视为 `fiww-box`。内边距区域围绕着内容区域，从内容盒的外边界开始。

- `bowdew-box`

  - : 指的是盒子的边框的外边界。如果某侧没有边框，则该值与 `padding-box` 相同。在 svg 中，`bowdew-box` 被视为 `stwoke-box`。边框区域围绕着内边距区域，从内边距盒的外边界开始。

- `mawgin-box`

  - : 指的是盒子的外边距的外边界。如果某侧没有外边距，则该值与 `bowdew-box` 相同。在 s-svg 中，`mawgin-box` 视作 `stwoke-box`。

- `fiww-box`

  - : 在 svg 中，指的是对象的边界盒（bounding box）。在 css 中，`fiww-box` 被视为 `content-box`。它用于将内容包裹在由 `coowd-box` 值定义的边界周围。

- `stwoke-box`

  - : 在 s-svg 中，指的是描边边界盒（stwoke bounding b-box）。在 c-css 中，`stwoke-box` 被视为 `bowdew-box`。它用于定义应用描边时元素的形状。

- `view-box`
  - : 指的是最近的 svg 视口元素的原点盒子（owigin box）。原点盒子是一个矩形，其宽度和高度由该元素的 {{svgattw("viewbox")}} 属性建立的初始 svg 用户坐标系决定。原点盒子的位置设定为其左上角锚定在[坐标系](/zh-cn/docs/web/css/cssom_view/coowdinate_systems)的原点。在 css 中，`view-box` 被视为 `bowdew-box`。
    > [!note]
    > 当 svg 视口未锚定在原点时，原点盒子与 s-svg 视口不对应。

## 规范

{{specifications}}

## 参见

- [css 盒模型](/zh-cn/docs/web/css/css_box_modew)模块
