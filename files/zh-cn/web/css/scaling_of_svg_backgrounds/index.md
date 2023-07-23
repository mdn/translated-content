---
title: SVG 背景缩放
slug: Web/CSS/Scaling_of_SVG_backgrounds
---

{{CSSRef}}

SVG 相比其他格式为我们提供了更多的灵活性，与此同时当我们把它用作背景图形 {{ cssxref("background-image") }} 时有更多需要我们注意的东西，尤其是在我们使用 {{ cssxref("background-size") }} 属性时。本文描述了在使用这些属性时如何处理 SVG 图像的缩放。

## 规则概要

大部分计算方式可以用这四条规则来概括。这些规则基本上涵盖了大部分情况除了个别边缘问题。

1. 当 {{ cssxref("background-size") }} 指定了固定的尺寸（百分比或者其他单位），会按照固定的尺寸来。
2. 当图片自身存在固有的比例（宽高比恒定，诸如 16:9、4:3、2.39:1、1:1 等等)，渲染出的尺寸使用这个比例。
3. 当图像指定了尺寸，并且这个尺寸没有被修改，则使用指定的尺寸。
4. 当不是上述情况时，则图像将呈现与背景区域相同的大小。

总体来说，上列尺寸计算规则关心的是一个图像有无定义的尺寸和比例，与图片格式没有关系。具有固定尺寸的 SVG 图像依然被视为大小相同的光栅图像。

## 源图片示例

在深入研究使用{{ cssxref("background-size") }}并不同类型图片的影响并且得到结果之前，我们先来看看不同尺寸和大小的图像示例。

在每个例子中，图像被渲染在 150x150 的容器内，并且在下方提供了 SVG 文件资源

### 无尺寸无比例

下面这个图片既没有尺寸也没有比例。这种情况不会关心它的尺寸也不关心它的长宽比例。无论你的屏幕尺寸和长宽比如何，这都是一个很好的渐变桌面背景。

![no-dimensions-or-ratio.png](no-dimensions-or-ratio.png)

[SVG 源码](https://mdn.dev/archives/media/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg)

### 指定一个维度的尺寸，但无固定比例

这个图片指定了 100px 的宽但是没有高度也没有固定的比例。我们可以说这是一个可以在一条街道上无线延伸的壁纸。

![100px-wide-no-height-or-ratio.png](100px-wide-no-height-or-ratio.png)

[SVG 源码](https://mdn.dev/archives/media/attachments/2012/07/09/3468/af73bea307a10ffe2559df42fad199e3/100px-wide-no-height-or-ratio.svg)

### 指定一个维度的尺寸，有固定比例

这个图片指定了 100px 的高但没有宽。同时指定了一个 3:4 的比例，除非是故意放大到不成比例的尺寸（也就是说，通过显式指定宽度和高度到不是这个比例）

![100px-height-3x4-ratio.png](100px-height-3x4-ratio.png)

[SVG 源码](https://mdn.dev/archives/media/attachments/2012/07/09/3467/fd0c534c506be06d52f0a954a59863a6/100px-height-3x4-ratio.svg)

### 无宽高，有固定比例

这个图片既没有指定高度也没有指定宽度。它指定的是 1:1 的固定比例。就像软件的图标一样。它总是保持正方形，而且可以用于任何尺寸，例如 32x32，128x128，和 512x512。

![no-dimensions-1x1-ratio.png](no-dimensions-1x1-ratio.png)

[SVG 源码](https://mdn.dev/archives/media/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg)

## 缩放示例

现在让我们来看看这些图片在各种缩放情景下怎么展现。以下例子都是宽 300 高 200 像素的矩形。此外， {{ cssxref("background-repeat") }} 都设为了 no-repeat，以便看得出来缩放的情况。

> **备注：** 以下截屏只表达**符合预期的**渲染效果。目前不是所有的浏览器都能正确的渲染这些代码。

### 两个维度都指定尺寸

如果你使用 {{ cssxref("background-size") }} 指定了两条边的长度，those lengths are always used, per rule 1 above. In other words, the image will always get stretched to the dimensions you specify, regardless of whether or not the source image has specified its dimensions and/or aspect ratio.

#### Source: No dimensions or intrinsic ratio

Given this CSS:

```css
background: url(no-dimensions-or-ratio.svg);
background-size: 125px 175px;
```

The rendered output would look like this:

![fixed-no-dimensions-or-ratio.png](fixed-no-dimensions-or-ratio.png)

#### Source: One specified dimension, no intrinsic ratio

Given this CSS:

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 250px 150px;
```

The rendered output would look like this:

![fixed-100px-wide-no-height-or-ratio.png](fixed-100px-wide-no-height-or-ratio.png)

#### Source: One specified dimension with intrinsic ratio

Given this CSS:

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 275px 125px;
```

The rendered output would look like this:

![fixed-100px-height-3x4-ratio.png](fixed-100px-height-3x4-ratio.png)

#### Source: No specified width or height with intrinsic ratio

Given this CSS:

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 250px 100px;
```

The rendered output would look like this:

![fixed-no-dimensions-1x1-ratio.png](fixed-no-dimensions-1x1-ratio.png)

### 使用 contain 或者 cover

当 {{ cssxref("background-size") }} 指定为 `cover` 时，图片能多小就多小，只要依然能覆盖整个背景区域。而指定为 `contain` 则会使得图片能多大就多大，只要不被背景裁切就好。

For an image with an intrinsic ratio, exactly one size matches the `cover`/fit criteria alone. But if there is no intrinsic ratio specified, `cover`/fit isn't sufficient, so the large/small constraints choose the resulting size.

#### Source: No dimensions or intrinsic ratio

If an image doesn't specify either dimensions or an intrinsic ratio, neither rule 2 nor rule 3 apply, so rule 4 takes over: the background image is rendered covering the entire background area. This satisfies the largest-or-smallest constraint.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: contain;
```

The rendered output looks like this:

![no-dimensions-or-ratio-contain.png](no-dimensions-or-ratio-contain.png)

#### Source: One specified dimension, no intrinsic ratio

Similarly, if the image has one dimension specified but no intrinsic ratio, rule 4 applies, and the image is scaled to cover the entire background area.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: contain;
```

The rendered output looks like this:

![100px-wide-no-height-or-ratio-contain.png](100px-wide-no-height-or-ratio-contain.png)

#### Source: One specified dimension with intrinsic ratio

Things change when you specify an intrinsic ratio. In this case, rule 1 isn't relevant, so rule 2 is applied: we try to preserve any intrinsic ratio (while respecting `contain` or `cover`). For example, preserving a 3:4 intrinsic aspect ratio for a 300x200 box with `contain` means drawing a 150x200 background.

##### contain case

```css
background: url(100px-height-3x4-ratio.svg);
background-size: contain;
```

The rendered output looks like this:

![100px-height-3x4-ratio-contain.png](100px-height-3x4-ratio-contain.png)

Notice how the entire image is rendered, fitting as best as possible into the box without clipping any of it away.

##### cover case

```css
background: url(100px-height-3x4-ratio.svg);
background-size: cover;
```

The rendered output looks like this:

![100px-height-3x4-ratio-cover.png](100px-height-3x4-ratio-cover.png)

Here, the 3:4 ratio is preserved while still stretching the image to fill the entire box. That causes the bottom of the image to be clipped away.

#### Source: No dimensions with intrinsic ratio

When using an image with no intrinsic dimensions but an intrinsic ratio, things work similarly.

##### contain case

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: contain;
```

The rendered output looks like this:

![no-dimensions-1x1-ratio-contain.png](no-dimensions-1x1-ratio-contain.png)

Notice that the image is sized to fit the smallest dimension while preserving the 1:1 aspect ratio.

##### cover case

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: cover;
```

The rendered output looks like this:

![no-dimensions-1x1-ratio-cover.png](no-dimensions-1x1-ratio-cover.png)

Here, the image is sized so that it fills the largest dimension. The 1:1 aspect ratio has been preserved, although with this source image, that can be difficult to see.

### Automatic sizing using "auto" for both dimensions

If {{ cssxref("background-size") }} is set to `auto` or `auto auto`, rule 2 says that rendering must preserve any intrinsic ratio that's provided.

#### Source: No dimensions or intrinsic ratio

When no intrinsic ratio or dimensions are specified by the source image, rule 4 takes effect, and the image is rendered to fill the background area.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto auto;
```

The rendered output looks like this:

![auto-no-dimensions-or-ratio.png](auto-no-dimensions-or-ratio.png)

#### Source: One dimension and no intrinsic ratio

If no intrinsic ratio is specified, but at least one dimension is specified, rule 3 takes effect, and we render the image obeying those dimensions.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto auto;
```

The rendered output looks like this:

![auto-100px-wide-no-height-or-ratio.png](auto-100px-wide-no-height-or-ratio.png)

Note here that the width, which is specified in the source SVG at 100 pixels, is obeyed, while the height fills the background area since it's not specified (either explicitly or by an intrinsic ratio).

#### Source: One dimension and an intrinsic ratio

If we have an intrinsic ratio with a fixed dimension, that fixes both dimensions in place. Knowing one dimension and a ratio is, as has been mentioned already, the same as specifying both dimensions explicitly.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: auto auto;
```

The rendered output looks like this:

![auto-100px-height-3x4-ratio.png](auto-100px-height-3x4-ratio.png)

Since this image has an explicit 100 pixel height, the 3:4 ratio explicitly sets its width at 75 pixels, so that's how it's rendered in the `auto` case.

#### Source: No fixed dimensions with intrinsic ratio

When an intrinsic ratio is specified, but no dimensions, rule 4 is applied — except that rule 2 also applies. The image is therefore rendered just like for the `contain` case.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: auto auto;
```

The rendered output looks like this:

![auto-no-dimensions-1x1-ratio.png](auto-no-dimensions-1x1-ratio.png)

### Using "auto" and one specific length

Given rule 1, specified dimensions are always used, so we need to use our rules only to determine the second dimension.

#### Source: No dimensions or intrinsic ratio

If the image has no dimensions or intrinsic ratio, rule 4 applies, and we use the background area's dimension to determine the value for the `auto` dimension.

```css
background: url(no-dimensions-or-ratio.svg);
background-size: auto 150px;
```

![1auto-no-dimensions-or-ratio.png](1auto-no-dimensions-or-ratio.png)

Here, the width is determined using the background area's width per rule 4, while the height is the 140px specified in the CSS.

#### Source: One specified dimension with no intrinsic ratio

If the image has one specified dimension but no intrinsic ratio, that specified dimension is used per rule 3 if that dimension is set to `auto` in the CSS.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: 200px auto;
```

![100px-wide-no-height-or-ratio-length-auto.png](100px-wide-no-height-or-ratio-length-auto.png)

Here, the 200px specified in the CSS overrides the 100px width specified in the SVG, per rule 1. Since there's no intrinsic ratio or height provided, `auto` selects the height of the background area as the height for the rendered image.

```css
background: url(100px-wide-no-height-or-ratio.svg);
background-size: auto 125px;
```

![100px-wide-no-height-or-ratio-auto-length.png](100px-wide-no-height-or-ratio-auto-length.png)

In this case, the width is specified as auto in the CSS, so the 100px width specified in the SVG is selected, per rule 3. The height is set at 125px in the CSS, so that is selected per rule 1.

#### Source: One specified dimension with intrinsic ratio

When a dimension is specified, rule 1 applies that dimension from the SVG to the rendered background unless specifically overridden by the CSS. When an intrinsic ratio is also specified, that's used to determine the other dimension.

```css
background: url(100px-height-3x4-ratio.svg);
background-size: 150px auto;
```

![1auto-100px-height-3x4-ratio.png](1auto-100px-height-3x4-ratio.png)

In this case, we've overridden the height of the image in the CSS to be 150px, so rule 1 is applied. The intrinsic 3:4 aspect ratio then determines the width for the `auto` case.

#### Source: No specified dimensions with intrinsic ratio

If no dimensions are specified in the SVG, the specified dimension in the CSS is applied, then the intrinsic ratio is used to select the other dimension, per rule 2.

```css
background: url(no-dimensions-1x1-ratio.svg);
background-size: 150px auto;
```

![1auto-no-dimensions-1x1-ratio.png](1auto-no-dimensions-1x1-ratio.png)

The width is set by the CSS to 150px. The `auto` value for the height is computed using that width and the 1:1 aspect ratio to be 150px as well, resulting in the image above.

## See also

- {{cssxref("background-size")}}
- Blog post: [Properly resizing vector image backgrounds](http://whereswalden.com/2011/10/21/properly-resizing-vector-image-backgrounds/)
