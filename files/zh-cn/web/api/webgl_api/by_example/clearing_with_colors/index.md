---
title: 清除画布
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}

这个例子将展示如何用一个单色清除画布

### 使用单一颜色清除 WebGl 区域

{{EmbedLiveSample("使用单一颜色清除 WebGl 区域",660,425)}}

这是一个最简单的 WebGL 代码。通过{{domxref("WebGLRenderingContext","rendering context", "", 1)}}设置好状态后，直接将整个区域清除为绿色。要注意 css 已经将 canvas 画布设置为黑色了，所以当画布变为绿色时，我们就知道神奇的 WebGL 魔法起作用了！

此外，你需要注意用单色绘制图像是两个步骤：首先，通过使用{{domxref("WebGLRenderingContext.clearColor()","clearColor()")}}设置清除色为绿色。这只会改变 Webgl 内部的一个状态，但并不会绘制任何东西。接下来，我们就真的开始绘制了，使用{{domxref("WebGLRenderingContext.clear()","clear()")}}方法，这是一个典型的用 webgl 绘制的方法，webgl 实际上只有少数的几个绘制方法 (clear() 就是其中之一)。其他方法大多都是类似设置或改变 WebGl 状态和变量的（例如设置 clearcolor）。

这里有许多属性和方法作用于 Webgl，清除方法只是你第一个掌握的，这也就是为什么 WebGL／OpenGl 经常被叫做状态机，通过调整这些属性和方法可以修改 WebGL 内部的状态，从而进行输出（例如先设置好绿色，在清除画布的时候像素点都变成了绿色）

最后，我们知道在 WebGl 中颜色格式是由 RGBA（红，绿，蓝，透明度）组成的，因此 clearColor() 方法接受四个参数

```html
<p>A very simple WebGL program that shows some color.</p>
<!-- Text within a canvas element is displayed
    only if canvas is not supported. -->
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
```

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
```

```js
// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it,
// and to not mess up the global scope. We are giving the event
// handler a name (setupWebGL) so that we can refer to the
// function object within the function itself.
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";

    // Cleaning after ourselves. The event handler removes
    // itself, because it only needs to run once.
    window.removeEventListener(evt.type, setupWebGL, false);

    // References to the document elements.
    var paragraph = document.querySelector("p"),
      canvas = document.querySelector("canvas");

    // Getting the WebGL rendering context.
    var gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    // If failed, inform user of failure. Otherwise, initialize
    // the drawing buffer (the viewport) and clear the context
    // with a solid color.
    if (!gl) {
      paragraph.innerHTML =
        "Failed to get WebGL context. " +
        "Your browser or device may not support WebGL.";
      return;
    }
    paragraph.innerHTML = "Congratulations! Your browser supports WebGL. ";
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    // Set the clear color to darkish green.
    gl.clearColor(0.0, 0.5, 0.0, 1.0);
    // Clear the context with the newly set color. This is
    // the function call that actually does the drawing.
    gl.clear(gl.COLOR_BUFFER_BIT);
  },
  false,
);
```

这个例子的代码可以在 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors) 上下载。

{{PreviousNext("Web/API/WebGL_API/By_example/Detect_WebGL","Web/API/WebGL_API/By_example/Clearing_by_clicking")}}
