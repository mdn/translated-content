---
title: 애니메이션 잘라내기
slug: Web/API/WebGL_API/By_example/Scissor_animation
---

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}

활동을 청소하고 잘라내는 어떤 애니메이션 장난

{{EmbedLiveSample("애니메이션_잘라내기",660,425)}}

### 애니메이션 잘라내기

이번 예시에서는, 우리는 사각형을 {{domxref("WebGLRenderingContext.scissor()","scissor()")}} 와{{domxref("WebGLRenderingContext.clear()","clear()")}} 을 이용하여 그려볼 것입니다. 우리는 다시 애니메이션 루프를 타이머를 이용하여 구축할 것입니다. 이번에는 매 프레임(우리는 프레임 비율을 대강 매 17ms 마다 설정했습니다.) 대마다 업데이트 되는 사각형(잘라내는 영역)의 경우임을 주목하세요.

반대로, 사각형의 색 ({{domxref("WebGLRenderingContext.clearColor()","clearColor")}}으로 설정되는)은 오직 새로운 사각형이 생성될 때만 업데이트 됩니다. 이것은 상태 머신으로써 {{Glossary("WebGL")}} 을 보여줄 좋은 데모입니다. 각 사각형에 대하여 우리는 그것의 색을 결정하고, 매 프레임마다 위치를 결정합니다. WebGl의 깨끗한 색 상태는 새로운 사각형이 생성되어 우리가 그것을 다시 바꿀 때까지 설정 값으로 남아있습니다.

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

<pre class="brush: js" id="livesample-js">"use strict"
window.addEventListener("load", setupAnimation, false);
// Variables to hold the WebGL context, and the color and
// position of animated squares.
var gl,
  color = getRandomColor(),
  position;

function setupAnimation (evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext()))
    return;

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
  stopAnimation({type: "click"});
}

// Variables to hold the size and velocity of the square.
var size = [60, 60],
  velocity = 3.0;
function drawAnimation () {
  gl.scissor(position[0], position[1], size[0] , size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Every frame the vertical position of the square is
  // decreased, to create the illusion of movement.
  position[1] -= velocity;
  // When the sqaure hits the bottom of the drawing buffer,
  // we override it with new square of different color and
  // velocity.
  if (position[1] &#x3C; 0) {
    // Horizontal position chosen randomly, and vertical
    // position at the top of the drawing buffer.
    position = [
      Math.random()*(gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight
    ];
    // Random velocity between 1.0 and 7.0
    velocity = 1.0 + 6.0*Math.random();
    color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
  }
}

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()];
}
</pre>

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

이 예시 코드는 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation)에서도 확인 가능합니다.

{{PreviousNext("Learn/WebGL/By_example/Boilerplate_1","Learn/WebGL/By_example/Raining_rectangles")}}
