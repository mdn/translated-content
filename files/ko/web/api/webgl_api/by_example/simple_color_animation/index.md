---
title: 간단한 색깔 애니메이션
slug: Web/API/WebGL_API/By_example/Simple_color_animation
---

{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}

{{Glossary("WebGL")}} 를 청소함으로써 매 초 마다 랜덤 색이 버퍼에 그려지는 매우 기본적인 색깔 애니메이션.

{{EmbedLiveSample("초기화가_있는_컬러_애니메이션",660,425)}}

### 초기화가 있는 컬러 애니메이션

이 예시는 유저 인터페이스 뿐만 아니라, {{Glossary("WebGL")}}와 함께 간단한 컬러 애니메이션 설명을 제공합니다. 유저는 버튼을 클릭함으로써, 애니메이션을 시작하고, 종료하고, 다시시작할 수 있습니다.

이번에 우리는 이벤트 핸들러 내부에서 {{Glossary("WebGL")}} 함수 콜을 넣을 것입니다. 클릭 이벤트 핸들러는 추가적으로 시작하고 멈추는 기본적인 유저 상호작용을 가능하게 합니다. 타이머와 타이머 핸들러 기능은 애니메이션 반복을 구축합니다. 애니메이션 반복은 일정한 주기로 실행되는 그리기 명령의 집합입니다.(일반적으로 모든 프레임; 이 경우 초당 1번)

```html
<p>A simple WebGL program that shows color animation.</p>
<p>You can click the button below to toggle the color animation on or off.</p>
<canvas id="canvas-view"
  >Your browser does not seem to support HTML5 canvas.</canvas
>
<button id="animation-onoff">
  Press here to
  <strong>[verb goes here]</strong>
  the animation
</button>
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
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    // A variable to hold a timer that drives the animation.
    var timer;

    // Click event handlers.
    var button = document.querySelector("#animation-onoff");
    var verb = document.querySelector("strong");
    function startAnimation(evt) {
      button.removeEventListener(evt.type, startAnimation, false);
      button.addEventListener("click", stopAnimation, false);
      verb.innerHTML = "stop";
      // Setup animation loop by redrawing every second.
      timer = setInterval(drawAnimation, 1000);
      // Give immediate feedback to user after clicking, by
      // drawing one animation frame.
      drawAnimation();
    }
    function stopAnimation(evt) {
      button.removeEventListener(evt.type, stopAnimation, false);
      button.addEventListener("click", startAnimation, false);
      verb.innerHTML = "start";
      // Stop animation by clearing the timer.
      clearInterval(timer);
    }
    // Call stopAnimation() once to setup the initial event
    // handlers for canvas and button.
    stopAnimation({ type: "click" });

    var gl;
    function drawAnimation() {
      if (!gl) {
        var canvas = document.getElementById("canvas-view");
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          clearInterval(timer);
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
      // Set the WebGLRenderingContext clear color to the
      // random color.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color.
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

이 예시 코드는 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/simple-color-animation)에서도 확인 가능합니다.

{{PreviousNext("Learn/WebGL/By_example/Clearing_by_clicking","Learn/WebGL/By_example/Color_masking")}}
