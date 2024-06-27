---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.strokeStyle`** 属性用于描述画笔（绘制图形）颜色或者样式。默认值是 `#000` (黑色)。

> **备注：** 关于更多画笔和填充样式，参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中[应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)这一章节。

## 值

以下之一：

- `color`
  - : 作为 [CSS](/en-US/docs/Web/CSS) 值 {{cssxref("&lt;color&gt;")}} 解析的字符串。
- `gradient`
  - : 一个 {{domxref("CanvasGradient")}} 对象（线性或径向渐变）。
- `pattern`
  - : 一个 {{domxref("CanvasPattern")}} 对象（重复图像）。

## 示例

### 更改形状的轮廓线颜色

这个例子为一个矩形应用了蓝色的描边颜色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

#### 结果

{{ EmbedLiveSample('更改形状的轮廓线颜色', 700, 160) }}

### 使用循环创建多种轮廓线颜色

在这个例子中，我们使用了两个 `for` 循环和 {{domxref("CanvasRenderingContext2D.arc", "arc()")}} 方法来绘制一个圆形网格，每个圆形都有不同的描边颜色。为此，我们使用两个变量 `i` 和 `j` 为每个圆生成一个唯一的 RGB 颜色，并且只修改绿色和蓝色的值。（红色通道的值是固定的。）

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

结果如下显示：

{{EmbedLiveSample("使用循环创建多种轮廓线颜色", "", "180")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

在基于 WebKit- 和 Blink- 的浏览器中，除了此属性外，还实现了一个不标准的并且不赞成使用的方法 `ctx.setStrokeColor()` 。

```js
setStrokeColor(color);
setStrokeColor(color, alpha);
setStrokeColor(grayLevel);
setStrokeColor(grayLevel, alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## 参见

- 定义该属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
