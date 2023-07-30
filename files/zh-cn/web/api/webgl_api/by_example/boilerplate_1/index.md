---
title: Boilerplate 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
---

{{PreviousNext("Learn/WebGL/By_example/Canvas_size_and_WebGL","Learn/WebGL/By_example/Scissor_animation")}}

这个例子描述了从现在开始将要隐藏重复的代码片断，以及定义一个 JavaScript 函数复用以简化 WebGL 初始化。

## 用于设置 WebGL 呈现上下文的复用代码

现在你很习惯看到相同的{{Glossary("HTML")}}, {{Glossary("CSS")}}和{{Glossary("JavaScript")}}重复一遍又一遍。所以我们从现在起要隐藏他们。这将使我们能够专注于代码最有趣的部分相关学习{{Glossary("WebGL")}}。

特别是，在 HTML 的{{HTMLElement("p")}}元素包含一些描述性的文本页面也可以是错误消息；一个{{HTMLElement("canvas")}} 元素;和一个可选的{{HTMLElement("button")}}。CSS 规则包含`body`, `canvas`, 和`button`。任何额外的冗余的 CSS 和 HTML 将不会显示在页面的具体的例子。

在以下示例中，我们将使用一个 JavaScript 函数功能，`getRenderingContext()` ，来初始化{{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}}。现在，您应该能够了解什么功能。基本上，它得到了 WebGL 从画布元素，渲染上下文初始化绘图缓冲区，清除它黑色，并返回初始化上下文。在错误的情况下，它会显示一个错误消息，并返回 {{jsxref("null")}}。

最后，所有 JavaScript 代码将运行在一个直接的函数，这是一种常见的 JavaScript 技术 (see {{Glossary("Function")}})。函数声明和调用也将被隐藏。

### HTML

```html
<p>[ Some descriptive text about the example. ]</p>
<button>[ Optional button element. ]</button>
<canvas>Your browser does not seem to support HTML5 canvas.</canvas>
```

### CSS

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
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

### JavaScript

```js
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

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/boilerplate-1).

{{PreviousNext("Learn/WebGL/By_example/Canvas_size_and_WebGL","Learn/WebGL/By_example/Scissor_animation")}}
