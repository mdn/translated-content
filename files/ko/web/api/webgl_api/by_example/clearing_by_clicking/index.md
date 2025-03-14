---
title: 클릭을 통한 청소
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
---

{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}

어떻게 유저와 그래픽 기능들과의 상호작용을 결합시킬까. 유저가 클릭을 할 때 랜덤의 색을 가진 랜더링 컨텍스트를 청소하는 것.

{{EmbedLiveSample("랜덤_색을_가진_랜더링_컨텍스트를_청소",660,425)}}

### 랜덤 색을 가진 랜더링 컨텍스트를 청소

이 간단한 예시는 어떻게 유저 인터페이스와 {{Glossary("WebGL")}}를 결합할지에 대한 설명을 제공합니다. 유저가 캔버스 혹은 버튼을 클릭할 때 마다, 캔버스는 랜덤으로 선택된 색으로 초기화됩니다.

어떻게 내장된 {{Glossary("WebGL")}} 기능이 이벤트 핸들러의 내부를 부르는 지를 주목하세요.

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

    // Adding the same click event handler to both canvas and
    // button.
    var canvas = document.querySelector("#canvas-view");
    var button = document.querySelector("#color-switcher");
    canvas.addEventListener("click", switchColor, false);
    button.addEventListener("click", switchColor, false);

    // A variable to hold the WebGLRenderingContext.
    var gl;

    // The click event handler.
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
      // Get a random color value using a helper function.
      var color = getRandomColor();
      // Set the clear color to the random color.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color. This is
      // the function call that actually does the drawing.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Random color helper function.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

이 예시 코드는 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking)에서도 확인 가능합니다.

{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}
