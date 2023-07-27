---
title: background-size
slug: Web/CSS/background-size
---

{{CSSRef}}

`background-size` 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。

{{EmbedInteractiveExample("pages/css/background-size.html")}}

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

- 使用关键词 [`contain`](/zh-CN/docs/Web/CSS/background-size#contain)
- 使用关键词 [`cover`](/zh-CN/docs/Web/CSS/background-size#cover)
- 设定宽度和高度值

当通过宽度和高度值来设定尺寸时，你可以提供一或者两个数值：

- 如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为 `auto`。
- 如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。

`每个值可以是<length>`, 是 [`<percentage>`](/zh-CN/docs/Web/CSS/background-size#percentage), 或者 [`auto`](/zh-CN/docs/Web/CSS/background-size#auto).

### 属性值

- `<length>`
  - : `{{cssxref("&lt;length&gt;")}}` 值，指定背景图片大小，不能为负值。
- `<percentage>`
  - : `{{cssxref("&lt;percentage&gt;")}}` 值，指定背景图片相对背景区（background positioning area）的百分比。背景区由{{cssxref("background-origin")}}设置，默认为盒模型的内容区与内边距，也可设置为只有内容区，或者还包括边框。如果{{cssxref("background-attachment","attachment")}} 为`fixed`，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。
- `auto`
  - : 以背景图片的比例缩放背景图片。
- `cover`
  - : 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 `contain` 值相反，`cover` 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。
- `contain`
  - : 缩放背景图片以完全装入背景区，可能背景区部分空白。`contain` 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。

位图一定有固有尺寸与固有比例，矢量图可能两者都有，也可能只有一个。渐变视为只有固有尺寸或者只有固有比例的图片。

> **备注：** This behavior changed in Gecko 8.0. Before this, gradients were treated as images with no intrinsic dimensions, with an intrinsic proportion identical to that of the background positioning area.

由 {{cssxref("-moz-element")}} 生成的背景图片，(which actually match an element) are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion.

> **备注：** This is not the currently-specified behavior, which is that the intrinsic dimensions and proportion should be those of the element in all cases.

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

### Formal syntax

[如何阅读 CSS 语法。](/docs/Web/CSS/Value_definition_syntax)

{{csssyntax}}

## 案例

[`background-size: cover 演示`](http://whereswalden.com/files/mozilla/background-size/page-cover.html) 与 [`background-size: contain 演示`](http://whereswalden.com/files/mozilla/background-size/page-contain.html) 在新窗口打开，这样你可以看到当背景区大小变化时 `contain` 与 `cover` 是怎样的。 [系列演示：`background-size` 及其与`background-*属性`的关联](http://whereswalden.com/files/mozilla/background-size/more-examples.html) 很好的说明了单独使用 `background-size` 及与其他属性共同使用。

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

## 备注

如果用渐变作为背景并且对它使用了`background-size` ，最好不要只用一个 auto，或者只指定一个宽度值 (例如 `background-size: 50%`)。对这两种情况 Firefox 8 有所改变，并且目前各浏览器表现不一致，不是全部浏览器都完全支持 [CSS3 `background-size` 规范](http://www.w3.org/TR/css3-background/#the-background-size) 与 [CSS3 Image Values gradient 规范](http://dev.w3.org/csswg/css3-images/#gradients) 。

```css
.bar {
  width: 50px;
  height: 100px;
  background-image: gradient(...);

  /* 不推荐 */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* 可行 */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

特别不推荐对渐变 px 与`auto`一起用，因为 Firefox 8 之前不能重复渲染，并且对于没有实现 Firefox 8 渲染特性的浏览器，不知道指定了背景的元素的确切大小。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Polyfills and Workarounds

### For Internet Explorer prior IE8

Though Internet Explorer 8 doesn't support the `background-size` property, it is possible to emulate some of its functionality using the non-standard `-ms-filter` property:

```css
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='path_relative_to_the_HTML_file', sizingMethod='scale')";
```

This simulates the value `cover`.

### In Firefox 3.5

While this property was added in Firefox 3.6, it is possible to stretch a image fully over the background in Firefox 3.5 by using {{cssxref("-moz-border-image")}}.

```css
.foo {
  background-image: url(bg-image.png);

  -webkit-background-size: 100% 100%; /* Safari 3.0 */
  -moz-background-size: 100% 100%; /* Gecko 1.9.2 (Firefox 3.6) */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  background-size: 100% 100%; /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */

  -moz-border-image: url(bg-image.png) 0; /* Gecko 1.9.1 (Firefox 3.5) */
}
```

## 参见

- [CSS Reference](/zh-CN/docs/CSS/CSS_Reference)
- [Multiple backgrounds](/zh-CN/docs/CSS/Multiple_backgrounds)
- [Scaling background images](/zh-CN/docs/CSS/Scaling_background_images)
