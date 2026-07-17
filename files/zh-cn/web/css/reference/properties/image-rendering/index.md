---
title: "`image-rendering` CSS 属性"
short-title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: d314d089e9be9ac78a91ba95ee80cad7d3cbe8c2
---

**`image-rendering`** [CSS](/zh-CN/docs/Web/CSS) 属性设置图像缩放算法。该属性作用于元素本身、其其他属性中设置的任何图像，以及其后代元素。

{{InteractiveExample("CSS 演示：image-rendering")}}

```css interactive-example-choice
image-rendering: auto;
```

```css interactive-example-choice
image-rendering: smooth;
```

```css interactive-example-choice
image-rendering: crisp-edges;
```

```css interactive-example-choice
image-rendering: pixelated;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/lizard.png" />
</section>
```

```css interactive-example
#example-element {
  height: 480px;
  object-fit: cover;
}
```

当页面作者指定的尺寸与图像固有尺寸不同时，{{Glossary("user agent", "用户代理")}}会对图像进行缩放。用户交互（例如缩放页面）也可能导致缩放。例如，若图像的固有尺寸为 `100×100px`，但其实际尺寸为 `200×200px`（或 `50×50px`），则图像会按 `image-rendering` 指定的算法放大（或缩小）。该属性对未缩放的图像没有效果。

## 语法

```css
/* 关键字值 */
image-rendering: auto;
image-rendering: smooth;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* 全局值 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### 值

- `auto`
  - : 缩放算法由用户代理决定。自 1.9 版（Firefox 3.0）起，Gecko 使用*双线性*重采样（高质量）。
- `smooth`
  - : 图像应使用能最大程度优化视觉效果的算法进行缩放。特别是允许“平滑”颜色的缩放算法，例如双线性插值。该值适用于照片等图像。
- `crisp-edges`
  - : 图像使用诸如“最近邻”等算法进行缩放，以保留图像中的对比度和边缘。通常适用于像素画或线条图等图像，不会产生模糊或颜色平滑。
- `pixelated`
  - : 图像先使用“最近邻”或类似算法缩放到原始图像尺寸的最近整数倍，再使用平滑插值将图像调整到最终所需尺寸。这样可以在放大分辨率不是原始尺寸整数倍时，保留“像素化”外观，同时避免引入缩放伪影。

> [!NOTE]
> 早期草案中出现的值 `optimizeQuality` 和 `optimizeSpeed`（来自其 SVG 对应属性 {{SVGAttr("image-rendering")}}）分别被定义为 `smooth` 和 `pixelated` 的同义词。

> [!NOTE]
> [CSS 图像](/zh-CN/docs/Web/CSS/Guides/Images)模块为 `image-rendering` 属性定义了 `high-quality` 值，用于表示偏好更高质量的缩放，但目前没有任何浏览器支持该值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置图像缩放算法

在本示例中，同一图像重复显示四次，每次应用不同的 `image-rendering` 值。

```html hidden
<div>
  <img
    class="auto"
    alt="一张白色和黄色花朵的小照片，背景是绿叶。图像比其显示尺寸大约小 33%。这种放大会使图像显得模糊，物体之间的边缘明显较软。"
    src="blumen.jpg" />
  <img
    class="smooth"
    alt="与上一张相同的照片，放大程度也相同。支持 image-rendering 属性的 smooth 值的浏览器会以尽量优化外观的方式显示该图像。"
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="与上一张相同的照片，放大程度也相同。支持 image-rendering 属性的 pixelated 值的浏览器会以非常像素化的方式显示该图像。单个像素清晰可见，边缘看起来更加锐利。"
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="与前面相同的照片，放大程度也相同。支持 image-rendering 属性的 crisp-edges 值的浏览器会以非常像素化的方式显示该图像。在这些示例中，pixelated 与 crisp-edges 版本几乎看不出差别。"
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.smooth {
  image-rendering: smooth;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### 结果

{{EmbedLiveSample("设置图像缩放算法", 260, 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-resolution")}}
- [CSS 图像](/zh-CN/docs/Web/CSS/Guides/Images)模块
- SVG {{SVGAttr("image-rendering")}} 属性
