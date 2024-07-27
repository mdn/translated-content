---
title: CanvasRenderingContext2D：lineDashOffset 属性
slug: Web/API/CanvasRenderingContext2D/lineDashOffset
l10n:
  sourceCommit: 1cd766933b00753370868cdd3b64b74ba17fe646
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.lineDashOffset`** 属性用于设置虚线偏移量或者称为“相位”。

> [!NOTE]
> 要绘制线条，需调用 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} 方法。

## 值

一个浮点数，指定线条虚线的偏移量。默认值为 `0.0`。

## 示例

### 偏移虚线

此示例绘制了两条虚线。第一条没有虚线偏移量。第二条虚线的偏移量为 4。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);

// 无偏移量的虚线
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// 偏移量为 4 的虚线
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineDashOffset = 4;
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### 结果

带有偏移的虚线用红色绘制。

{{ EmbedLiveSample('偏移虚线', 700, 180) }}

### 蚂蚁线

“[蚂蚁线](https://en.wikipedia.org/wiki/Marching_ants)”效果是一种动画技巧，经常出现在计算机绘图程序的套索工具中。它能帮助用户根据图片背景动态变化的边界来区分选择的边界。

```html hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 5) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{ EmbedLiveSample('蚂蚁线', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- [应用样式和色彩](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
