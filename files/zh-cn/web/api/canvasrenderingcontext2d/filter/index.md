---
title: CanvasRenderingContext2D：filter 属性
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: 592bea250bec05a3b641b0372cb7eddfd24616fb
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.filter`** 属性是用来提供模糊、灰度等滤镜效果。它类似于 CSS {{cssxref("filter")}} 属性，并且接受相同的值。

## 值

`filter` 属性接受字符串形式的值，可以是 `"none"`，或者是以下一个或多个滤镜函数。

- [`url()`](/zh-CN/docs/Web/CSS/url_function)
  - : 一个 CSS {{cssxref("url_function", "url()")}}。接受任意一个可以解析为 SVG 滤镜元素的 URL。其可以是元素的 ID、外部 XML 文件的路径，甚至是一个数据 URL 编码的 SVG 值。
- [`blur()`](/zh-CN/docs/Web/CSS/filter-function/blur)
  - : 一个 CSS {{cssxref("&lt;length&gt;")}}。将高斯模糊应用于绘图。它定义了高斯函数的标准偏差值，即屏幕上多少像素混合在一起；因此，较大的值会产生更模糊的效果。值为 `0` 时保持输入不变。
- [`brightness()`](/zh-CN/docs/Web/CSS/filter-function/brightness)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。将线性乘数应用于绘图，使其看起来更亮或更暗。低于 `100%` 的值会使图像变暗，而高于 `100%` 的值会使其变亮。值为 `0%` 会生成完全黑色的图像，值为 `100%` 保持输入不变。
- [`contrast()`](/zh-CN/docs/Web/CSS/filter-function/contrast)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。调整绘图的对比度。值为 `0%` 会生成完全黑色的绘图，值为 `100%` 保持绘图不变。
- [`drop-shadow()`](/zh-CN/docs/Web/CSS/filter-function/drop-shadow)
  - : 将阴影效果应用于绘图。阴影效果实际上是绘图 alpha 蒙版的模糊、偏移版本，以特定颜色绘制，位于绘图下方。此函数最多接受五个参数：
    - `<offset-x>`
      - : 参见 {{cssxref("&lt;length&gt;")}} 允许的单位。指定阴影的水平偏移距离。
    - `<offset-y>`
      - : 参见 {{cssxref("&lt;length&gt;")}} 允许的单位。指定阴影的垂直偏移距离。
    - `<blur-radius>`
      - : 此值越大，模糊程度越高，因此阴影会变得更大更淡。不允许使用负值。
    - `<color>`
      - : 参见 {{cssxref("&lt;color&gt;")}} 允许的关键字和表示法。
- [`grayscale()`](/zh-CN/docs/Web/CSS/filter-function/grayscale)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。将绘图转换为灰度。值为 `100%` 完全灰度化，值为 `0%` 保持绘图不变。
- [`hue-rotate()`](/zh-CN/docs/Web/CSS/filter-function/hue-rotate)
  - : 一个 CSS {{cssxref("&lt;angle&gt;")}}。对绘图应用色相旋转。值为 `0deg` 保持输入不变。
- [`invert()`](/zh-CN/docs/Web/CSS/filter-function/invert)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。反转绘图。值为 `100%` 完全反转，值为 `0%` 保持绘图不变。
- [`opacity()`](/zh-CN/docs/Web/CSS/filter-function/opacity)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。对绘图应用透明度。值为 `0%` 完全透明，值为 `100%` 保持绘图不变。
- [`saturate()`](/zh-CN/docs/Web/CSS/filter-function/saturate)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。修改绘图饱和度。值为 `0%` 完全不饱和，值为 `100%` 保持绘图不变。
- [`sepia()`](/zh-CN/docs/Web/CSS/filter-function/sepia)
  - : 一个 CSS {{cssxref("&lt;percentage&gt;")}}。将绘图转换为深褐色。值为 `100%` 完全深褐色，值为 `0%` 保持绘图不变。
- `none`
  - : 不应用滤镜。初始值。

## 示例

要查看这些示例，请确保使用支持此特性的浏览器；请参阅以下的兼容性表格。

### 应用模糊

这是一段使用 `filter` 属性的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.filter = "blur(4px)";
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
```

#### 结果

{{ EmbedLiveSample('应用模糊', 700, 180) }}

### 应用多个滤镜

你可以组合任意数量的滤镜。此示例将 `contrast`、`sepia` 和 `drop-shadow` 滤镜应用于一张犀牛的照片。

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
<div style="display:none;">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" />
</div>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  // 绘制未经滤镜处理的图像
  ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

  // 绘制应用滤镜后的图像
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
  ctx.drawImage(image, 400, 0, -image.width * 0.6, image.height * 0.6);
});
```

#### 结果

{{ EmbedLiveSample('应用多个滤镜', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- CSS {{cssxref("filter")}}
- CSS {{cssxref("&lt;filter-function&gt;")}}
