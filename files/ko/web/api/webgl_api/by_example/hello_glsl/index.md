---
title: Hello GLSL
slug: Web/API/WebGL_API/By_example/Hello_GLSL
---

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}

매우 간단한 색이 있는 단단한 사각형을 그려주는 쉐이더 프로그램

> **참고:** 이 예시는 대부분 모든 최신의 데스크탑 브라우저에서 동작합니다. 하지만 어떤 모바일 혹은 낡은 브라우저에서는 동작하지 않습니다. 만약 캔버스가 공백인 상태로 남아있다면, 당신은 정확히 똑같은 것을 그리는 다음 예시의 결과를 확인하실 수 있습니다. 하지만 다음으로 넘어가기 전에, 여기서 설명과 코드를 읽고 가는 것을 기억하세요

{{EmbedLiveSample("hello-glsl-source",660,425)}}

### Hello World 프로그램 in GLSL

매우 간단한 첫 쉐이더 프로그램

```html hidden
<p>Hello World! Hello GLSL!</p>
```

```html hidden
<canvas>Your browser does not seem to support
    HTML5 canvas.</canvas>
```

```css hidden
body {
  text-align : center;
}
canvas {
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
```

```html
<script type="x-shader/x-vertex" id="vertex-shader">
#version 100
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 64.0;
}
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
#version 100
void main() {
  gl_FragColor = vec4(0.18, 0.54, 0.34, 1.0);
}
</script>
```

```js hidden
;(function(){
```

<pre class="brush: js" id="livesample-js">"use strict"
window.addEventListener("load", setupWebGL, false);
var gl,
  program;
function setupWebGL (evt) {
  window.removeEventListener(evt.type, setupWebGL, false);
  if (!(gl = getRenderingContext()))
    return;

  var source = document.querySelector("#vertex-shader").innerHTML;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader,source);
  gl.compileShader(vertexShader);
  source = document.querySelector("#fragment-shader").innerHTML
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,source);
  gl.compileShader(fragmentShader);
  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var linkErrLog = gl.getProgramInfoLog(program);
    cleanup();
    document.querySelector("p").innerHTML =
      "Shader program did not link successfully. "
      + "Error log: " + linkErrLog;
    return;
  }

  initializeAttributes();

  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, 1);

  cleanup();
}

var buffer;
function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

function cleanup() {
gl.useProgram(null);
if (buffer)
  gl.deleteBuffer(buffer);
if (program)
  gl.deleteProgram(program);
}
</pre>

```js hidden
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML = "Failed to get WebGL context."
      + "Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-glsl).

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}
