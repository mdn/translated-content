---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`OffscreenCanvas`** 提供了一个可以脱离屏幕渲染的 canvas 对象。它在窗口环境和[web worker](/zh-CN/docs/Web/API/Web_Workers_API)环境均有效。

## 构造函数

- {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}
  - : `OffscreenCanvas` 构造函数。创建一个新的 `OffscreenCanvas` 对象。

## 属性

- {{domxref("OffscreenCanvas.height")}}
  - : offscreen canvas 对象的高度。
- {{domxref("OffscreenCanvas.width")}}
  - : offscreen canvas 对象的宽度。

## 方法

- {{domxref("OffscreenCanvas.getContext()")}}
  - : 为 offscreen canvas 对象返回一个渲染画布。
- {{domxref("OffscreenCanvas.toBlob()")}}
  - : 创建一个代表 canvas 中的图像的{{domxref("Blob")}}对象。
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
  - : 从 `OffscreenCanvas` 最近渲染的图像创建一个 {{domxref("ImageBitmap")}} 对象。

## 例子

### 同步显示 `OffscreenCanvas` 中的帧

一种方式是使用`OffscreenCanvas` API，也就是用已经包含`OffscreenCanvas`对象的{{domxref("RenderingContext")}} 来生成新的帧。每次一个新的帧在画布中完成渲染，{{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} 方法都会被调用来保存最近渲染的图像。该方法返回一个{{domxref("ImageBitmap")}}对象，该对象可以被用在各种 Web APIs 中，也可以用在下一个 canvas 中，并且不需要转换备份。

为了显示`ImageBitmap`，你可以用{{domxref("ImageBitmapRenderingContext")}}上下文，通过一个 canvas（可见的）元素调用`canvas.getContext("bitmaprenderer")`方法来创建它。该上下文只提供用`ImageBitmap`替换 canvas 的内容的功能。调用{{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} 以前的渲染结果并且通过 OffscreenCanvas 保存`ImageBitmap`，会在 canvas 里显示`ImageBitmap`并且转换其所有权到 canvas。一个单独的 OffscreenCanvas 可以将帧转换到任意数量的其他`ImageBitmapRenderingContext`对象。

提供两个 {{HTMLElement("canvas")}} 元素

```html
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

下面的代码会用 `OffscreenCanvas` 提供渲染结果，就像上面描述的一样。

```js
var one = document.getElementById("one").getContext("bitmaprenderer");
var two = document.getElementById("two").getContext("bitmaprenderer");

var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

// ... some drawing for the first canvas using the gl context ...

// Commit rendering to the first canvas
var bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// ... some more drawing for the second canvas using the gl context ...

// Commit rendering to the second canvas
var bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### 异步显示 `OffscreenCanvas` 生成的帧

另一种使用 `OffscreenCanvas` API 的方式，是在一个{{HTMLElement("canvas")}}元素上调用{{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}}，也可以在[worker](/zh-CN/docs/Web/API/Web_Workers_API)或主线程，上调用，这将从主线程的{{domxref("HTMLCanvasElement")}}对象返回一个`OffscreenCanvas` 对象。调用{{domxref("OffscreenCanvas.getContext", "getContext()")}} 会从这个 `OffscreenCanvas` 获取一个[RenderingContext](/zh-CN/docs/Web/API/RenderingContext)。

main.js (主线程代码):

```js
var htmlCanvas = document.getElementById("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

offscreencanvas.js (web work 代码):

```js
onmessage = function (evt) {
  var canvas = evt.data.canvas;
  var gl = canvas.getContext("webgl");

  // ... some drawing using the gl context ...

  // Push frames back to the original HTMLCanvasElement
  gl.commit();
};
```

也可以在 worker 中使用 requestAnimationFrame

```js
onmessage = function (evt) {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // ... some drawing using the gl context ...
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参见

- [WebGL Off the Main Thread – Mozilla Hacks](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/)
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
- {{domxref("WebGLRenderingContext.commit()")}}
