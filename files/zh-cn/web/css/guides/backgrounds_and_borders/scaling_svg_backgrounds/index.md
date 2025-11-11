---
title: SVG 背景缩放
slug: Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds
---

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

```html
<svg>
  <title>对角渐变</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
      <stop style="stop-color:pink" offset="0" />
      <stop style="stop-color:goldenrod" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g)" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('无尺寸无比例', 200, 180) }}

### 指定一个维度的尺寸，但无固定比例

这个图片指定了 100px 的宽但是没有高度也没有固定的比例。我们可以说这是一个可以在一条街道上无线延伸的壁纸。

```html
<svg width="100">
  <title>垂直渐变（具有固定宽度）</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: purple;" offset="0" />
      <stop style="stop-color: lime;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('指定一个维度的尺寸，但无固定比例', 200, 180) }}

### 指定一个维度的尺寸，有固定比例

这个图片指定了 100px 的高但没有宽。同时指定了一个 3:4 的比例，除非是故意放大到不成比例的尺寸（也就是说，通过显式指定宽度和高度到不是这个比例）

```html
<svg height="100" viewBox="0 0 3 4" preserveAspectRatio="none">
  <title>垂直渐变（具有固定横纵比）</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop style="stop-color: teal;" offset="0" />
      <stop style="stop-color: orange;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('指定一个维度的尺寸，有固定比例', 200, 180) }}

### 无宽高，有固定比例

这个图片既没有指定高度也没有指定宽度。它指定的是 1:1 的固定比例。就像软件的图标一样。它总是保持正方形，而且可以用于任何尺寸，例如 32x32、128x128 和 512x512。

```html
<svg viewBox="0 0 1 1" preserveAspectRatio="none">
  <title>固定比例</title>
  <defs>
    <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop style="stop-color: navy;" offset="0" />
      <stop style="stop-color: maroon;" offset="1" />
    </linearGradient>
  </defs>
  <rect style="fill: url(#g);" width="100%" height="100%" />
</svg>
```

{{ EmbedLiveSample('无宽高，有固定比例', 200, 180) }}

## 缩放示例

现在让我们来看看这些图片在各种缩放情景下怎么展现。以下例子都是宽 300 高 200 像素的矩形。此外，{{ cssxref("background-repeat") }} 都设为了 no-repeat，以便看得出来缩放的情况。

> [!NOTE]
> 以下截屏只表达**符合预期的**渲染效果。目前不是所有的浏览器都能正确的渲染这些代码。

### 两个维度都指定尺寸

如果你使用 {{ cssxref("background-size") }} 指定了两条边的长度，those lengths are always used, per rule 1 above. In other words, the image will always get stretched to the dimensions you specify, regardless of whether or not the source image has specified its dimensions and/or aspect ratio.

#### 无尺寸无比例

在此示例中，没有为图像设置尺寸和固定比例：

```html hidden live-sample___scaling1
<div></div>
```

```css hidden live-sample___scaling1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: 125px 175px;
}
```

{{ EmbedLiveSample('scaling1', 200, 230) }}

#### 指定一个维度的尺寸，无固定比例

在这个示例中，为图像指定了一个维度的尺寸，但没有设置固定比例：

```html hidden live-sample___scaling2
<div></div>
```

```css hidden live-sample___scaling2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 250px 150px;
}
```

{{ EmbedLiveSample('scaling2', 200, 230) }}

#### 指定一个维度的尺寸，有固定比例

```html hidden live-sample___scaling3
<div></div>
```

在这个示例中，为图像显式指定一个维度的尺寸以及固定比例，意味着两个维度都被有效定义。为 `background-size` 设置绝对高度和宽度会覆盖 SVG 中设置的尺寸：

```css hidden live-sample___scaling3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 275px 125px;
}
```

{{ EmbedLiveSample('scaling3', 200, 230) }}

#### 未指定宽度和高度，有固定比例

在这个示例中，为图像指定了固定比例，但没有设置尺寸：

```html hidden live-sample___scaling4
<div></div>
```

```css hidden live-sample___scaling4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___scaling4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 250px 100px;
}
```

{{ EmbedLiveSample('scaling4', 200, 230) }}

### 使用 contain 或者 cover

当 {{ cssxref("background-size") }} 指定为 `cover` 时，图片能多小就多小，只要依然能覆盖整个背景区域。而指定为 `contain` 则会使得图片能多大就多大，只要不被背景裁切就好。

For an image with an intrinsic ratio, exactly one size matches the `cover`/fit criteria alone. But if there is no intrinsic ratio specified, `cover`/fit isn't sufficient, so the large/small constraints choose the resulting size.

#### 无尺寸无比例

在这个示例中，没有为图像设置尺寸和固定比例。如果图像没有设置尺寸和固有比例，那么规则 2 和规则 3 不适用，所以规则 4 适用：背景图片会覆盖整个背景区域。这满足最大或最小（largest-or-smallest）约束。

```html hidden live-sample___cc1
<div></div>
```

```css hidden live-sample___cc1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc1', 200, 230) }}

#### 指定一个维度的尺寸，无固定比例

在这个示例中，为图像设置一个维度的尺寸，但没有设置固定比例。适用规则 4，图片会被缩放以覆盖整个背景区域。

```html hidden live-sample___cc2
<div></div>
```

```css hidden live-sample___cc2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc2', 200, 230) }}

#### 指定一个维度的尺寸，有固定比例

Things change when you specify an intrinsic ratio. In this case, rule 1 isn't relevant, so rule 2 is applied: we try to preserve any intrinsic ratio (while respecting `contain` or `cover`). For example, preserving a 3:4 intrinsic aspect ratio for a 300x200 box with `contain` means drawing a 150x200 background.

##### contain 示例

```html hidden live-sample___cc3
<div></div>
```

Given this CSS:

```css hidden live-sample___cc3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc3', 200, 230) }}

Notice how the entire image is rendered, fitting as best as possible into the box without clipping any of it away.

##### cover 示例

```html hidden live-sample___cc5
<div></div>
```

```css hidden live-sample___cc5
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc5
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc5', 200, 230) }}

Here, the 3:4 ratio is preserved while still stretching the image to fill the entire box. That causes the bottom of the image to be clipped away.

#### 无尺寸有固定比例

When using an image with no intrinsic dimensions but an intrinsic ratio, things work similarly.

##### contain 示例

```html hidden live-sample___cc6
<div></div>
```

```css hidden live-sample___cc6
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc6
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: contain;
}
```

{{ EmbedLiveSample('cc6', 200, 230) }}

Notice that the image is sized to fit the smallest dimension while preserving the 1:1 aspect ratio.

##### cover 示例

```html hidden live-sample___cc7
<div></div>
```

```css hidden live-sample___cc7
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___cc7
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: cover;
}
```

{{ EmbedLiveSample('cc7', 200, 230) }}

Here, the image is sized so that it fills the largest dimension. The 1:1 aspect ratio has been preserved, although with this source image, that can be difficult to see.

### Automatic sizing using "auto" for both dimensions

If {{ cssxref("background-size") }} is set to `auto` or `auto auto`, rule 2 says that rendering must preserve any intrinsic ratio that's provided.

#### 无尺寸无固定比例

当尺寸为“auto”的背景图片未指定固定比例和尺寸时，规则 4 生效，且图片的渲染将覆盖整个背景区域。

```html hidden live-sample___both-auto1
<div></div>
```

```css hidden live-sample___both-auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto1
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto1', 200, 230) }}

#### 指定一个维度的尺寸，无固定比例

If no intrinsic ratio is specified, but at least one dimension is specified, rule 3 takes effect, and we render the image obeying those dimensions.

```html hidden live-sample___both-auto2
<div></div>
```

```css hidden live-sample___both-auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto2', 200, 230) }}

Note here that the width, which is specified in the source SVG at 100 pixels, is obeyed, while the height fills the background area since it's not specified (either explicitly or by an intrinsic ratio).

#### 指定一个维度的尺寸，有固定比例

If we have an intrinsic ratio with a fixed dimension, that fixes both dimensions in place. Knowing one dimension and a ratio is, as has been mentioned already, the same as specifying both dimensions explicitly.

```html hidden live-sample___both-auto3
<div></div>
```

```css hidden live-sample___both-auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto3', 200, 230) }}

Since this image has an explicit 100 pixel height, the 3:4 ratio explicitly sets its width at 75 pixels, so that's how it's rendered in the `auto` case.

#### 无固定尺寸有固定比例

When an intrinsic ratio is specified, but no dimensions, rule 4 is applied — except that rule 2 also applies. The image is therefore rendered just like for the `contain` case.

```html hidden live-sample___both-auto4
<div></div>
```

```css hidden live-sample___both-auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___both-auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: auto auto;
}
```

{{ EmbedLiveSample('both-auto4', 200, 230) }}

### Using "auto" and one specific length

Given rule 1, specified dimensions are always used, so we need to use our rules only to determine the second dimension.

#### 无尺寸无固定比例

If the image has no dimensions or intrinsic ratio, rule 4 applies, and we use the background area's dimension to determine the value for the `auto` dimension.

```html hidden live-sample___auto0
<div></div>
```

```css hidden live-sample___auto0
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto0
div {
  background-image: url(no-dimensions-or-ratio.svg);
  background-size: auto 140px;
}
```

{{ EmbedLiveSample('auto0', 200, 230) }}

Here, the width is determined using the background area's width per rule 4, while the height is the 140px specified in the CSS.

#### 指定一个维度的尺寸，无固定比例

If the image has one specified dimension but no intrinsic ratio, that specified dimension is used per rule 3 if that dimension is set to `auto` in the CSS.

```html hidden live-sample___auto1
<div></div>
```

```css hidden live-sample___auto1
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto1
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: 200px auto;
}
```

{{ EmbedLiveSample('auto1', 200, 230) }}

Here, the 200px specified in the CSS overrides the 100px width specified in the SVG, per rule 1. Since there's no intrinsic ratio or height provided, `auto` selects the height of the background area as the height for the rendered image.

```html hidden live-sample___auto2
<div></div>
```

```css hidden live-sample___auto2
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto2
div {
  background-image: url(100px-wide-no-height-or-ratio.svg);
  background-size: auto 125px;
}
```

{{ EmbedLiveSample('auto2', 200, 230) }}

In this case, the width is specified as auto in the CSS, so the 100px width specified in the SVG is selected, per rule 3. The height is set at 125px in the CSS, so that is selected per rule 1.

#### 指定一个维度的尺寸，有固定比例

When a dimension is specified, rule 1 applies that dimension from the SVG to the rendered background unless specifically overridden by the CSS. When an intrinsic ratio is also specified, that's used to determine the other dimension.

```html hidden live-sample___auto3
<div></div>
```

```css hidden live-sample___auto3
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto3
div {
  background-image: url(100px-height-3x4-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto3', 200, 230) }}

In this case, we've overridden the height of the image in the CSS to be 150px, so rule 1 is applied. The intrinsic 3:4 aspect ratio then determines the width for the `auto` case.

#### 未指定尺寸有固定比例

If no dimensions are specified in the SVG, the specified dimension in the CSS is applied, then the intrinsic ratio is used to select the other dimension, per rule 2.

```html hidden live-sample___auto4
<div></div>
```

```css hidden live-sample___auto4
div {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  border: 2px solid black;
}
```

```css live-sample___auto4
div {
  background-image: url(no-dimensions-1x1-ratio.svg);
  background-size: 150px auto;
}
```

{{ EmbedLiveSample('auto4', 200, 230) }}

The width is set by the CSS to 150px. The `auto` value for the height is computed using that width and the 1:1 aspect ratio to be 150px as well, resulting in the image above.

## 参见

- {{cssxref("background-size")}}
- [CSS 背景和边框](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders)模块
