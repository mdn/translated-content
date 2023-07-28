---
title: CanvasRenderingContext2D.fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
---

{{APIRef}}

**`CanvasRenderingContext2D.fillStyle`** 是 Canvas 2D API 使用内部方式描述颜色和样式的属性。默认值是 `#000` （黑色）。

参见 [Canvas Tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) 的 [Applying styles and color](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) 章节。

## 语法

```
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### 选项

- `color`
  - : {{domxref("DOMString")}} 字符串，被转换成 CSS {{cssxref("&lt;color&gt;")}} 颜色值。
- `gradient`
  - : {{domxref("CanvasGradient")}} 对象（线性渐变或者放射性渐变）.
- `pattern`
  - : {{domxref("CanvasPattern")}} 对象（可重复图像）。

## 示例

### 改变形状的填充颜色

这是一段简单的代码片段，使用 `fillStyle` 属性设置不同的颜色。

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

### `fillStyle` 使用 `for` 循环的例子

在这个例子中，我们使用两个 `for` 循环绘制一个矩形表格，每个单元格都有不同的颜色。最终的结果图像看起来像屏幕截图，其实没有令人惊叹的事情发生。我们使用两个变量 i 和 j 为每一个单元格生成唯一的 RGB 颜色，并且只改变红色和绿色的数值。蓝色通道的值是固定不变的。通过修改这些通道，你能生成各种各样的调色板。通过逐步地增加，你能实现类似 Photoshop 的调色板。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.fillStyle =
      "rgb(" +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ",0)";
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

结果看起来像是这样的：

{{EmbedLiveSample("fillStyle_使用_for_循环的例子", 160, 160, "canvas_fillstyle.png")}}

## 规格描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### WebKit/Blink-specific 注解

- 支持 WebKit- 和 Blink-based 的浏览器中，有一个不标准的、被反对的方法 `ctx.setFillColor()` 已经实现。

  ```js
  setFillColor(color, optional alpha);
  setFillColor(grayLevel, optional alpha);
  setFillColor(r, g, b, a);
  setFillColor(c, m, y, k, a);
  ```

## 参见

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- 此属性使用的值：

  - {{cssxref("&lt;color&gt;")}} CSS 数据类型
  - {{domxref("CanvasGradient")}} 对象
  - {{domxref("CanvasPattern")}} 对象
