---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
---

`background-size` 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。

{{InteractiveExample("CSS Demo: background-size")}}

```css interactive-example-choice
background-size: contain;
```

```css interactive-example-choice
background-size: contain;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-size: cover;
```

```css interactive-example-choice
background-size: 30%;
```

```css interactive-example-choice
background-size: 200px 100px;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/hand.jpg");
  min-width: 100%;
  min-height: 100%;
}
```

```css
/* 关键字 */
background-size: cover
background-size: contain

/* 一个值：这个值指定图片的宽度，图片的高度隐式的为 auto */
background-size: 50%
background-size: 3em
background-size: 12px
background-size: auto

/* 两个值 */
/* 第一个值指定图片的宽度，第二个值指定图片的高度 */
background-size: 50% auto
background-size: 3em 25%
background-size: auto 6px
background-size: auto auto

/* 逗号分隔的多个值：设置多重背景 */
background-size: auto, auto     /* 不同于 background-size: auto auto */
background-size: 50%, 25%, 25%
background-size: 6px, auto, contain

/* 全局属性 */
background-size: inherit;
background-size: initial;
background-size: unset;
```

注意：没有被背景图片覆盖的背景区域仍然会显示用{{cssxref("background-color")}}属性设置的背景颜色。此外，如果背景图片设置了透明或者半透明属性，衬在背景图片后面的背景色也会显示出来。

{{cssinfo}}

## 语法

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Global values */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: revert-layer;
background-size: unset;
```

单张图片的背景大小可以使用以下三种方法中的一种来规定：

- 使用关键词 [`contain`](#contain)
- 使用关键词 [`cover`](#cover)
- 设定宽度和高度值

当通过宽度和高度值来设定尺寸时，你可以提供一或者两个数值：

- 如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为 `auto`。
- 如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。

`每个值可以是<length>`, 是 [`<percentage>`](#percentage), 或者 [`auto`](#auto).

### 属性值

- `<length>`
  - : {{cssxref("&lt;length&gt;")}} 值，指定背景图片大小，不能为负值。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 值，指定背景图片相对背景区（background positioning area）的百分比。背景区由{{cssxref("background-origin")}}设置，默认为盒模型的内容区与内边距，也可设置为只有内容区，或者还包括边框。如果{{cssxref("background-attachment","attachment")}} 为`fixed`，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。
- `auto`
  - : 以背景图片的比例缩放背景图片。
- `cover`
  - : 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 `contain` 值相反，`cover` 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。
- `contain`
  - : 缩放背景图片以完全装入背景区，可能背景区部分空白。`contain` 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。

位图一定有固有尺寸与固有比例，矢量图可能两者都有，也可能只有一个。渐变视为只有固有尺寸或者只有固有比例的图片。

> [!NOTE]
> This behavior changed in Gecko 8.0. Before this, gradients were treated as images with no intrinsic dimensions, with an intrinsic proportion identical to that of the background positioning area.

由 {{cssxref("-moz-element")}} 生成的背景图片，(which actually match an element) are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion.

> [!NOTE]
> This is not the currently-specified behavior, which is that the intrinsic dimensions and proportion should be those of the element in all cases.

背景图片大小计算：

- 如果指定了 `background-size` 的两个值并且不是`auto`：
  - : 背景图片按指定大小渲染。
- `contain` 或 `cover`:
  - : 保留固有比例，最大的包含或覆盖背景区。如果图像没有固有比例，则按背景区大小。
- `auto` 或 `auto auto`:
  - : 图像如果有两个长度，则按这个尺寸。如果没有固有尺寸与固有比例，则按背景区的大小。如果没有固有尺寸但是有固有比例，效果同 `contain`。如果有一个长度与比例，则由此长度与比例计算大小。如果有一个长度但是没有比例，则使用此长度与背景区相应的长度。
- 一个为 `auto` 另一个不是 auto:
  - : 如果图像有固有比例，则指定的长度使用指定值，未指定的长度由指定值与固有比例计算。如果图像没有固有比例，则指定的长度使用指定值，未指定的长度使用图像相应的固有长度，若没有固有长度，则使用背景区相应的长度。

注意，对于没有固有尺寸或固有比例的矢量图不是所有的浏览器都支持。特别注意测试 Firefox 7- 与 Firefox 8+，以确定不同之处能否接受。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 大图像平铺

让我们考虑一张大图像——2982x2808 Firefox 的 logo 图像。我们想将此图像的四个副本平铺到一个 300x300 像素的元素中。为实现这一点，我们可以将 `background-size` 的值固定为 150 像素。

#### HTML

```html
<div class="tiledBackground"></div>
```

#### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### 结果

{{EmbedLiveSample("大图像平铺", 340, 340)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [调整背景图片的大小](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [SVG 背景缩放](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
- {{cssxref("object-fit")}}
