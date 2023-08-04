---
title: Hello GLSL
slug: Web/API/WebGL_API/By_example/Hello_GLSL
---

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}

该例子将演示一个绘制固态颜色的矩形的简单着色器程序。

> **备注：** 本例子能在大多数现代桌面版浏览器上运行。但或许不能在移动端或者古老的浏览器上运行。如果 canvas 显示一片空白，你可以试着用下一个例子检查一下输出是否绘制的是同样的图形。但要记住在前往下一个例子之前，要仔细阅读本页并动手写代码。

### 用 GLSL 语言写 Hello World 程序

{{EmbedLiveSample("用 GLSL 语言写 Hello World 程序",660,425)}}

第一个非常简单的着色器程序。

```html hidden
<p>Hello World! Hello GLSL!</p>
```

```html hidden
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
```

```css hidden
body {
  text-align: center;
}
canvas {
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

```js
"use strict";
window.addEventListener("load", setupWebGL, false);
var gl, program;
function setupWebGL(evt) {
  window.removeEventListener(evt.type, setupWebGL, false);
  if (!(gl = getRenderingContext())) return;

  var source = document.querySelector("#vertex-shader").innerHTML;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, source);
  gl.compileShader(vertexShader);
  source = document.querySelector("#fragment-shader").innerHTML;
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, source);
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
      "Shader program did not link successfully. " + "Error log: " + linkErrLog;
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
  if (buffer) gl.deleteBuffer(buffer);
  if (program) gl.deleteProgram(program);
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

该例子的源代码能在 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-glsl)获得。

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}
