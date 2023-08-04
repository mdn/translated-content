---
title: Clearing by clicking
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
---

{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}

此示例演示了如何通过用户单击时用随机颜色渲染上下文来将用户交互与 WebGL 图形操作结合起来。

### 用随机颜色渲染上下文

{{EmbedLiveSample("用随机颜色渲染上下文",660,425)}}

这个例子提供了一个简单的例子，说明如何结合 {{Glossary("WebGL")}} 和用户交互。每次用户点击画布或按钮时，画布都会使用一种新的随机色。

注意我们如何在事件处理函数中嵌入 {{Glossary("WebGL")}} 函数调用。

```html
<p>
  A very simple WebGL program that still shows some color and user interaction.
</p>
<p>
  You can repeatedly click the empty canvas or the button below to change color.
</p>
<canvas id="canvas-view"
  >Your browser does not seem to support HTML5 canvas.</canvas
>
<button id="color-switcher">Press here to switch color</button>
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
button {
  display: inline-block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";

    // Cleaning after ourselves. The event handler removes
    // itself, because it only needs to run once.
    window.removeEventListener(evt.type, setupWebGL, false);

    // 给 canvas 和 button 添加相同的时间处理器
    var canvas = document.querySelector("#canvas-view");
    var button = document.querySelector("#color-switcher");
    canvas.addEventListener("click", switchColor, false);
    button.addEventListener("click", switchColor, false);

    // 存放 WebGLRenderingContext 的变量
    var gl;

    // 点击事件处理器
    function switchColor() {
      // Referring to the externally defined gl variable.
      // If undefined, try to obtain the WebGLRenderingContext.
      // If failed, alert user of failure.
      // Otherwise, initialize the drawing buffer (the viewport).
      if (!gl) {
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          alert(
            "Failed to get WebGL context.\n" +
              "Your browser or device may not support WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      // 使用辅助函数获取一种随机色
      var color = getRandomColor();
      // 用随机色设置底色
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color. This is
      // the function call that actually does the drawing.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // 随机颜色辅助函数
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

这个例子的代码可以在 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking) 上下载。

{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}
