---
title: canvas 的优化
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

{{HTMLElement("canvas")}}元素是众多广泛使用的网络 2D 图像渲染标准之一。它被广泛用于游戏及复杂的图像可视化中。然而，随着网站和应用将 canvas 画布推至极限，性能开始成为问题。此文目标是给使用 canvas 画布元素的优化带来建议，去保证你的网站或者应用表现卓越。

## 性能贴士

下面是一些改善性能的建议

### 在离屏 canvas 上预渲染相似的图形或重复的对象

如果发现自己在每个动画帧上重复了一些相同的绘制操作，请考虑将其分流到屏幕外的画布上。然后，您可以根据需要频繁地将屏幕外图像渲染到主画布上，而不必首先重复生成该图像的步骤。

```js
myEntity.offscreenCanvas = document.createElement("canvas");
myEntity.offscreenCanvas.width = myEntity.width;
myEntity.offscreenCanvas.height = myEntity.height;
myEntity.offscreenContext = myEntity.offscreenCanvas.getContext("2d");

myEntity.render(myEntity.offscreenContext);
```

### 避免浮点数的坐标点，用整数取而代之

当你画一个没有整数坐标点的对象时会发生子像素渲染。

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

浏览器为了达到抗锯齿的效果会做额外的运算。为了避免这种情况，请保证在你调用{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}函数时，用{{jsxref("Math.floor()")}}函数对所有的坐标点取整。

### 不要在用`drawImage`时缩放图像

在离屏 canvas 中缓存图片的不同尺寸，而不要用{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}去缩放它们。

### 使用多层画布去画一个复杂的场景

在您的应用程序中，您可能会发现某些对象需要经常移动或更改，而其他对象则保持相对静态。在这种情况下，可能的优化是使用多个`<canvas>`元素对您的项目进行分层。

例如，假设您有一个游戏，其 UI 位于顶部，中间是游戏性动作，底部是静态背景。在这种情况下，您可以将游戏分成三个`<canvas>`层。UI 将仅在用户输入时发生变化，游戏层随每个新框架发生变化，并且背景通常保持不变。

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }
  canvas {
    position: absolute;
  }
  #ui-layer {
    z-index: 3;
  }
  #game-layer {
    z-index: 2;
  }
  #background-layer {
    z-index: 1;
  }
</style>
```

### 用 CSS 设置大的背景图

如果像大多数游戏那样，你有一张静态的背景图，用一个静态的{{HTMLElement("div")}}元素，结合{{cssxref("background")}} 特性，以及将它置于画布元素之后。这么做可以避免在每一帧在画布上绘制大图。

### 用 CSS transforms 特性缩放画布

[CSS transforms](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transforms) 使用 GPU，因此速度更快。最好的情况是不直接缩放画布，或者具有较小的画布并按比例放大，而不是较大的画布并按比例缩小。

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = "scale(" + scaleToFit + ")";
```

### 关闭透明度

如果你的游戏使用画布而且不需要透明，当使用 [`HTMLCanvasElement.getContext()`](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 创建一个绘图上下文时把 `alpha` 选项设置为 `false` 。这个选项可以帮助浏览器进行内部优化。

```js
var ctx = canvas.getContext("2d", { alpha: false });
```

### 更多的贴士

- 将画布的函数调用集合到一起（例如，画一条折线，而不要画多条分开的直线）
- 避免不必要的画布状态改变
- 渲染画布中的不同点，而非整个新状态
- 尽可能避免 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}特性
- 尽可能避免[text rendering](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- 尝试不同的方法来清除画布 ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. 调整 canvas 大小)
- 有动画，请使用{{domxref("window.requestAnimationFrame()")}} 而非{{domxref("window.setInterval()")}}
- 请谨慎使用大型物理库

## 参见

- [Improving HTML5 Canvas Performance – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
