---
title: Scissor animation
slug: Web/API/WebGL_API/By_example/Scissor_animation
---

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}

使用剪切和清除操作实现一些动画的简单 WebGL 的例子。

### 剪切动画

{{EmbedLiveSample("剪切动画",660,425)}}

本例中，我们使用{{domxref("WebGLRenderingContext.scissor()","scissor()")}} 和 {{domxref("WebGLRenderingContext.clear()","clear()")}}。我们再次建立一个动画循环使用计时器。注意，这次是方块的位置 (剪切区) 更新每一帧 (我们设置帧率大约每 17 毫秒，约 60 fps -帧每秒)

相比之下，方块的颜色 (用{{domxref("WebGLRenderingContext.clearColor()","clearColor")}}) 仅创建一个新的方块。这是一个很好的演示{{Glossary("WebGL")}}是一个状态机。对于每一个方块，我们设置它的颜色，然后只更新它的位置每一帧。WebGL 的清晰的颜色状态维持在设定值，直到我们再次改变它创建一个新的方块。

```html hidden
<p>
  WebGL animation by clearing the drawing buffer with solid color and applying
  scissor test.
</p>
<button id="animation-onoff">
  Press here to
  <strong>[verb goes here]</strong>
  the animation
</button>
```

```html hidden
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
```

```css hidden
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
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js hidden
;(function(){
```

```js
"use strict";
window.addEventListener("load", setupAnimation, false);
// Variables to hold the WebGL context, and the color and
// position of animated squares.
var gl,
  color = getRandomColor(),
  position;

function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;

  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(color[0], color[1], color[2], 1.0);
  // Unlike the browser window, vertical position in WebGL is
  // measured from bottom to top. In here we set the initial
  // position of the square to be at the top left corner of the
  // drawing buffer.
  position = [0, gl.drawingBufferHeight];

  var button = document.querySelector("button");
  var timer;
  function startAnimation(evt) {
    button.removeEventListener(evt.type, startAnimation, false);
    button.addEventListener("click", stopAnimation, false);
    document.querySelector("strong").innerHTML = "stop";
    timer = setInterval(drawAnimation, 17);
    drawAnimation();
  }
  function stopAnimation(evt) {
    button.removeEventListener(evt.type, stopAnimation, false);
    button.addEventListener("click", startAnimation, false);
    document.querySelector("strong").innerHTML = "start";
    clearInterval(timer);
  }
  stopAnimation({ type: "click" });
}

// Variables to hold the size and velocity of the square.
var size = [60, 60],
  velocity = 3.0;
function drawAnimation() {
  gl.scissor(position[0], position[1], size[0], size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Every frame the vertical position of the square is
  // decreased, to create the illusion of movement.
  position[1] -= velocity;
  // When the sqaure hits the bottom of the drawing buffer,
  // we override it with new square of different color and
  // velocity.
  if (position[1] < 0) {
    // Horizontal position chosen randomly, and vertical
    // position at the top of the drawing buffer.
    position = [
      Math.random() * (gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight,
    ];
    // Random velocity between 1.0 and 7.0
    velocity = 1.0 + 6.0 * Math.random();
    color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
  }
}

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()];
}
```

```js hidden
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML =
      "Failed to get WebGL context." +
      "Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation).

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}
