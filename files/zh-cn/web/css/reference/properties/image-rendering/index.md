---
title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`image-rendering`** 用于设置图像缩放算法。它适用于元素本身，适用于元素其他属性中的图像，也应用于子元素。

当页面作者指定的尺寸不是图像的原始尺寸时，{{Glossary("user agent", "用户代理")}}将缩放图像。缩放也可能由于用户互动（双指缩放）而发生。举个例子，如果有一张尺寸为 `100×100px` 的图片，但作者有意将尺寸设置为 `200×200px`（或`50×50px`），然后，图片便会根据 `image-rendering` 指定的算法，缩小或放大到新尺寸。此属性对于未缩放的图像没有影响。

> [!NOTE]
> The [Canvas API](/zh-CN/docs/Web/API/Canvas_API) can provide a [fallback solution for `crisp-edges`](http://phrogz.net/tmp/canvas_image_zoom.html) through manual image data manipulation.

## 语法

```css
/* 专有属性值 */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* 全局属性值 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

### 属性值

- `auto`
  - : 自 Gecko 1.9（Firefox 3.0）起，Gecko 使用*双线性*（_bilinear_）算法进行重新采样（高质量）。
- `smooth` {{Experimental_Inline}}
  - : 应使用能最大化图像客观观感的算法来缩放图像。特别地，会“平滑”颜色的缩放算法是可以接受的，例如双线性插值。这适用于照片等类型的图像。
- `high-quality` {{Experimental_Inline}}
  - : 与 `smooth` 相同，但更倾向于高质量的缩放。如果系统资源受到限制，在考虑降低哪些图像的质量以及降低到什么程度时，`high-quality` 的图像应该优先于任何其他值的图像。
- `crisp-edges`
  - : 必须使用可有效保留对比度和图像中的边缘的算法来对图像进行缩放，并且，该算法既不会平滑颜色，又不会在处理过程中为图像引入模糊。合适的算法包括*最近邻居*（_nearest-neighbor_）算法和其他非平滑缩放算法，比如 _2×SaI_ 和 _hqx-\*_ 系列算法。此属性值适用于像素艺术作品，例如一些网页游戏中的图像。
- `pixelated`
  - : 放大图像时，使用最近邻居算法，因此，图像看着像是由大块像素组成的。缩小图像时，算法与 `auto` 相同。

> [!NOTE]
> 早期草案中出现的 `optimizationQuality` 和 `optimizationSpeed` （来自 SVG 的对应值）分别被定义为 `smooth` 和 `pixelated`。

### 形式语法

{{csssyntax}}

## 示例

```html hidden
<div>
  <img class="auto" alt="auto" src="blumen.jpg" />
  <img class="pixelated" alt="pixelated" src="blumen.jpg" />
  <img class="crisp-edges" alt="crisp-edges" src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

```css
.auto {
  image-rendering: auto;
}

.pixelated {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

{{cssinfo}}

> [!NOTE]
> 虽然在最初此属性与 SVG 的 `image-rendering` 属性定义相近，但到现在，它们之间已有相当的差别。

## 浏览器兼容性

{{Compat}}

### 备注

> [!NOTE]
> 这是来自旧版浏览器兼容性表格的备注，保留以便查阅。可另行参阅 [Can I use](https://caniuse.com/#search=image-rendering)。

Internet Explorer 7 和 8 支持非标准的 [`-ms-interpolation-mode` 属性](<http://msdn.microsoft.com/en-us/library/ie/ms530822(v=vs.85).aspx>)，有两个属性值：`bicubic` 和 `nearest-neighbor`，和大量差距：

- 只应用于 `<img>` 等元素带的图片
- IE 7 上此属性只支持无透明度的图片
- 不能继承
- IE 7 默认值：`nearest-neighbor` (低质量)
- IE 8 默认值：`bicubic` (高质量)
- IE 9 不支持此非标准属性

WebKit 支持一个非标准属性：`-webkit-optimize-contrast`.

WebKit Nightly 支持，见 [bug](https://bugs.webkit.org/show_bug.cgi?id=146771)

Canvas 可以通过人工方式支持 [crisp-edge/optimize-contrast](http://phrogz.net/tmp/canvas_image_zoom.html) 属性。
