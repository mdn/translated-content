---
title: CanvasRenderingContext2D：reset() 方法
slug: Web/API/CanvasRenderingContext2D/reset
l10n:
  sourceCommit: bf8f50a256ded858442d49d532754d830c1a2bcd
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.reset()`** 方法用于将渲染上下文重置为其默认状态，使其可以被重新使用以绘制其他内容，而无需显式地重置所有属性。

重置操作会清除后备缓冲区、绘制状态堆栈、任何定义的路径和样式。这包括当前的[变换](/zh-CN/docs/Web/API/CanvasRenderingContext2D#变换)矩阵、[合成](/zh-CN/docs/Web/API/CanvasRenderingContext2D#合成)属性、裁剪区域、虚线列表、[线型](/zh-CN/docs/Web/API/CanvasRenderingContext2D#线型)、[文本样式](/zh-CN/docs/Web/API/CanvasRenderingContext2D#文本样式)、[阴影](/zh-CN/docs/Web/API/CanvasRenderingContext2D#阴影)、[图像平滑](/zh-CN/docs/Web/API/CanvasRenderingContext2D#图像平滑)、[滤镜](/zh-CN/docs/Web/API/CanvasRenderingContext2D#滤镜)等等。

## 语法

```js-nolint
reset()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下示例展示了如何使用 `reset()` 在重新绘制前完全清除上下文。

首先，我们定义一个按钮和一个画布。

```css
#toggle-reset {
  display: block;
}
```

```html
<button id="toggle-reset">Toggle</button>
<canvas id="my-house" width="500" height="200"></canvas>
```

接下来，代码获取画布的 `2d` 上下文，并定义了可以使用该上下文绘制矩形和圆形的函数。

```js
// 获取 2d 上下文
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

function drawRect() {
  // 设置线条宽度
  ctx.lineWidth = 10;

  // 描绘矩形边框
  ctx.strokeRect(50, 50, 150, 100);

  // 创建填充文本
  ctx.font = "50px serif";
  ctx.fillText("Rect!", 70, 110);
}

function drawCircle() {
  // 设置线条宽度
  ctx.lineWidth = 5;

  // 描绘圆形边框
  ctx.beginPath();
  ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // 创建填充文本
  ctx.font = "25px sans-serif";
  ctx.fillText("Circle!", 265, 100);
}
```

然后，我们使用这里的函数绘制矩形。按钮可以切换绘制圆形和矩形。请注意，每次绘制前调用 `reset()` 方法以清除上下文。

```js
drawRect();

// 使用按钮在圆形和矩形之间切换
let toggle = true;
const mybutton = document.getElementById("toggle-reset");

mybutton.addEventListener("click", () => {
  ctx.reset(); // 清除上下文！
  if (toggle) {
    drawCircle();
  } else {
    drawRect();
  }
  toggle = !toggle;
});
```

结果如下所示：

{{EmbedLiveSample("示例", 500, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
