---
title: CanvasRenderingContext2D.filter
slug: Web/API/CanvasRenderingContext2D/filter
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.filter`** 是 Canvas 2D API 提供模糊、灰度等过滤效果的属性。它类似于 CSS [`filter`](/zh-CN/docs/Web/CSS/filter) 属性，并且接受相同的函数。

## 语法

```
ctx.filter = "<filter-function1> [<filter-function2] [<filter-functionN]";
ctx.filter = "none";
```

### Filter 函数

filter 属性接受{{domxref("DOMString")}}字符串，可以包含一个或多个 filter 函数。

- `url(<url>)`
  - : `url()` 函数接受一个描述 SVG 过滤器的 XML 文件的位置，并且可以包含一个针对特殊过滤元素的锚点。
- `blur(<length>)`
  - : length：CSS 长度。给绘图提供一个高斯模糊。
- `brightness(<percentage>)`
  - : Percentage：百分比。给绘图提供一个线性乘法，调节亮度的高低。
- `contrast(<percentage>)`
  - : Percentage：百分比。调节图像的对比度。当数值为 `0%` 时，图像会完全变黑。当数值为 `100%` 时，图像没有任何变化。
- `drop-shadow(<offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color>)`

  - : 给绘图提供阴影。阴影事实上是在图像下面呈现出模糊的，通过对图像的透明遮罩进行偏移绘制出一种特殊的颜色，组合而成的效果。这个函数接受 5 个参数：

    - `<offset-x>`: 查看 {{cssxref("&lt;length&gt;")}} 允许的单位。描述阴影的水平距离。
    - `<offset-y>`: 查看 {{cssxref("&lt;length&gt;")}} 允许的单位。描述阴影的垂直距离。
    - `<blur-radius>`: 数值越大，模糊就越大，从而使阴影范围变得更大颜色变得更浅。不允许为负数。
    - `<spread-radius>`: 正数会使阴影扩张变大，负数会使阴影收缩。
    - `<color>`: 查看 {{cssxref("&lt;color&gt;")}} 允许的关键字和标识符。

- `grayscale(<percentage>)`
  - : Percentage：百分比。将图像转换成灰色的图片。当值为 100% 时，图像会完全变成灰色。当值为 0% 时，图像没有任何变化。
- `hue-rotate(<degree>)`
  - : Degree：度数。对图像进行色彩旋转的处理。当值为 0 度时，图像没有任何变化。
- `invert(<percentage>)`
  - : Percentage：百分比。反色图像（呈现出照片底片的效果）。当值为 100% 时，图像会完全反色处理。当值为 0% 时，图像没有任何变化。
- `opacity(<percentage>)`
  - : Percentage：百分比。对图像进行透明度的处理。当值为 0% 时，图像完全透明。当值为 100% 时，图像没有任何变化。
- `saturate(<percentage>)`
  - : 对图像进行饱和度的处理。当值为 0% 时，图像完全不饱和。当值为 100% 时，图像没有任何变化。
- `sepia(<percentage>)`
  - : 对图像进行深褐色处理（怀旧风格）。当值为 100% 时，图像完全变成深褐色。当值为 0% 时，图像没有任何变化。
- `none`
  - : 没有使用 filter。

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义，{{domxref("CanvasRenderingContext2D")}}
- CSS {{cssxref("filter")}}
