---
title: 클릭을 통한 청소
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
translation_of: Web/API/WebGL_API/By_example/Clearing_by_clicking
---
<div>{{IncludeSubnav("/en-US/Learn")}}</div>

<p>{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}</p>

<div id="clearing-by-clicking">
<div class="summary">
<p>어떻게 유저와 그래픽 기능들과의 상호작용을 결합시킬까. 유저가 클릭을 할 때 랜덤의 색을 가진 랜더링 컨텍스트를 청소하는 것.</p>
</div>

<p>{{EmbedLiveSample("clearing-by-clicking-source",660,425)}}</p>

<div id="clearing-by-clicking-intro">
<h3 id="랜덤_색을_가진_랜더링_컨텍스트를_청소">랜덤 색을 가진 랜더링 컨텍스트를 청소</h3>

<p>이 간단한 예시는 어떻게 유저 인터페이스와 {{Glossary("WebGL")}}를 결합할지에 대한 설명을 제공합니다. 유저가 캔버스 혹은 버튼을 클릭할 때 마다, 캔버스는 랜덤으로 선택된 색으로 초기화됩니다.</p>

<p>어떻게 내장된 {{Glossary("WebGL")}} 기능이 이벤트 핸들러의 내부를 부르는 지를 주목하세요. </p>
</div>

<div id="clearing-by-clicking-source">
<pre class="brush: html">&lt;p&gt;A very simple WebGL program that still shows some color and
    user interaction.&lt;/p&gt;
&lt;p&gt;You can repeatedly click the empty canvas or the button below
    to change color.&lt;/p&gt;
&lt;canvas id="canvas-view"&gt;Your browser does not seem to support
    HTML5 canvas.&lt;/canvas&gt;
&lt;button id="color-switcher"&gt;Press here to switch color&lt;/button&gt;
</pre>

<pre class="brush: css">body {
  text-align : center;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : inline-block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
</pre>

<pre class="brush: js">window.addEventListener("load", function setupWebGL (evt) {
  "use strict"

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
  function switchColor () {
    // Referring to the externally defined gl variable.
    // If undefined, try to obtain the WebGLRenderingContext.
    // If failed, alert user of failure.
    // Otherwise, initialize the drawing buffer (the viewport).
    if (!gl) {
      gl = canvas.getContext("webgl")
        || canvas.getContext("experimental-webgl");
      if (!gl) {
        alert("Failed to get WebGL context.\n"
          + "Your browser or device may not support WebGL.");
        return;
      }
      gl.viewport(0, 0,
        gl.drawingBufferWidth, gl.drawingBufferHeight);
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

}, false);
</pre>

<p>The source code of this example is also available on <a href="https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking">GitHub</a>.</p>
</div>
</div>

<p>{{PreviousNext("Learn/WebGL/By_example/Clearing_with_colors","Learn/WebGL/By_example/Simple_color_animation")}}</p>
