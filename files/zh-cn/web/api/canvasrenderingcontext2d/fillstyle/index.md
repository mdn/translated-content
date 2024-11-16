---
title: CanvasRenderingContext2D：fillStyle 属性
slug: Web/API/CanvasRenderingContext2D/fillStyle
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.fillStyle`** 属性指定用于形状内部的颜色、渐变或图案。默认样式为 `#000`（黑色）。

> [!NOTE]
> 想要了解更多填充和描边样式的示例，请参阅 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的[应用样式和颜色](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)。

## 值

可以是以下之一：

- 作为 CSS {{cssxref("&lt;color&gt;")}} 值解析的字符串。
- {{domxref("CanvasGradient")}} 对象（线性或径向渐变）。
- {{domxref("CanvasPattern")}} 对象（重复的图像）。

## 示例

### 改变形状的填充颜色

此示例将一个蓝色填充色应用到一个矩形上。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

#### 结果

{{ EmbedLiveSample('改变形状的填充颜色', 700, 160) }}

### 使用循环创建多种填充颜色

在这个示例中，我们使用两个 `for` 循环来绘制一个矩形网格，每个矩形具有不同的填充颜色。为了实现这一点，我们使用变量 `i` 和 `j` 来为每个正方形生成唯一的 RGB 颜色，并且只修改红色和绿色的值。（蓝色通道的值是固定的。）通过修改通道的值，你可以生成各种颜色的调色板。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)},
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

结果如下所示：

{{EmbedLiveSample("使用循环创建多种填充颜色", "", "160")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

在基于 WebKit 和 Blink 的浏览器中，除了这个属性之外还实现了一个不标准的、被弃用的 `ctx.setFillColor()` 方法。

```js
setFillColor(color, /* （可选） */ alpha);
setFillColor(grayLevel, /* （可选） */ alpha);
setFillColor(r, g, b, a);
setFillColor(c, m, y, k, a);
```

## 参见

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- 此属性使用的值：

  - {{cssxref("&lt;color&gt;")}} CSS 数据类型
  - {{domxref("CanvasGradient")}} 对象
  - {{domxref("CanvasPattern")}} 对象
