---
title: CanvasRenderingContext2D.createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
---

{{APIRef}}

**`CanvasRenderingContext2D.createPattern()`** 是 Canvas 2D API 使用指定的图像 ({{domxref("CanvasImageSource")}}) 创建模式的方法。它通过 repetition 参数在指定的方向上重复元图像。此方法返回一个{{domxref("CanvasPattern")}}对象。

## 语法

```
CanvasPattern ctx.createPattern(image, repetition);
```

### 参数

- `image`

  - : 作为重复图像源的 {{domxref("CanvasImageSource")}} 对象。可以是下列之一：

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}}),
    - {{domxref("HTMLVideoElement")}} ({{HTMLElement("video")}}),
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}}),
    - {{domxref("CanvasRenderingContext2D")}},
    - {{domxref("ImageBitmap")}},
    - {{domxref("ImageData")}},
    - {{domxref("Blob")}}.

- `repetition`

  - : {{domxref("DOMString")}}，指定如何重复图像。允许的值有：

    - `"repeat"` (both directions),
    - `"repeat-x"` (horizontal only),
    - `"repeat-y"` (vertical only),
    - `"no-repeat"` (neither).

    如果为空字符串 (`''`) 或 {{jsxref("null")}} (但不是 {{jsxref("undefined")}})，repetition 将被当作"repeat"。

### 返回值

- {{domxref("CanvasPattern")}}
  - : 描述模式的不透明对象

## 示例

### 从图像创建图案

这是一段简单的代码片段，使用 createPattern 方法创建一个指定图像和重复的{{domxref("CanvasPattern")}} 对象。创建完成后，可以使用{{domxref("CanvasPattern.setTransform()")}}方法对图案进行变形。如示例所示，你可以把此模式赋值给当前的{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}，当你使用{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 方法时，会在 canvas 上绘制出效果。

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
img.onload = () => {
  // Only use the image after it's loaded
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('从图像创建图案', 700, 310) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
