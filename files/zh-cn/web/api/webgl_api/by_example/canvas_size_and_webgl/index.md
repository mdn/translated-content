---
title: Canvas size and WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
---

{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}

此 WebGL 案例将探究设置（或不设置）Canvas 属性的宽高值在浏览器中显示的影响。

## canvas 属性值大小对 WebGL 渲染的作用

{{EmbedLiveSample("canvas 属性值大小对 WebGL 渲染的作用",660,180)}}

使用 {{domxref("WebGLRenderingContext.scissor()","scissor()")}} 和 {{domxref("WebGLRenderingContext.clear()","clear()")}} 我们可以观察到 canvas 属性大小是如何影响 WebGL 绘图展示的。

第一个 canvas 元素通过 css 样式定义了元素的大小，之后通过 javascript 获取该元素的 {{domxref("Element.clientWidth","clientWidth")}} 和{{domxref("Element.clientHeight","clientHeight")}} 值，并分别赋值给元素的 {{domxref("HTMLCanvasElement.width","width")}} 和{{domxref("HTMLCanvasElement.height","height")}}。

相反的，第二个 canvas 元素并没有这样做，canvas 内部对象的{{domxref("HTMLCanvasElement.width","width")}} 和 {{domxref("HTMLCanvasElement.height","height")}} 属性值仍然是默认值，这样导致在浏览器中实际画布大小是不同的。

使用 {{domxref("WebGLRenderingContext.scissor()","scissor()")}} 和{{domxref("WebGLRenderingContext.clear()","clear()")}}在 canvas 中绘制矩形的效果是清晰可见的，在第一个 canvas 中，通过指定位置和像素大小，可以得到我们想要的效果，但是在第二个 canvas 中，这个矩形的位置、大小都是错误展示的。

```html
<p>Compare the two canvases.</p>
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
```

```css
body {
  text-align: center;
}
canvas {
  display: inline-block;
  width: 120px;
  height: 80px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
```

```js
window.addEventListener(
  "load",
  function () {
    "use strict";
    var firstCanvas = document.getElementsByTagName("canvas")[0],
      secondCanvas = document.getElementsByTagName("canvas")[1];
    firstCanvas.width = firstCanvas.clientWidth;
    firstCanvas.height = firstCanvas.clientHeight;
    [firstCanvas, secondCanvas].forEach(function (canvas) {
      var gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        document.querySelector("p").innerHTML =
          "Failed to get WebGL context. " +
          "Your browser or device may not support WebGL.";
        return;
      }
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(30, 10, 60, 60);
      gl.clearColor(1.0, 1.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    });
  },
  false,
);
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl).

{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}
