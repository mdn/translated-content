---
title: 使用着色器将颜色应用于 WebGL
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

在[之前的展示](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)中我们已经创建好了一个正方形，接下来我们要做的就是给它添加一抹色彩。添加颜色可以通过修改着色器来实现。

## 给顶点着色

在 GL 中，物体是由一系列顶点组成的，每一个顶点都有位置和颜色信息。在默认情况下，所有像素的颜色（以及它所有的属性，包括位置）都由线性插值计算得来，自动形成平滑的渐变。我们以前的顶点着色器没有给顶点添加任何特定的颜色——在顶点着色器与片段着色器之间给每个像素着白色，于是整个正方形被渲染成纯白。

现在我们假设正方形的每个顶点使用不同的颜色：红，黄，绿，白，以此渲染一个渐变的色彩。第一步，要给这些顶点建立相应的颜色。首先我们要创建一个顶点颜色数组，然后将它们存在 WebGL 的缓冲区中。为实现这一功能，我们在 initBuffers() 函数中加入如下代码：

```plain
initBuffers() {
  const positionBuffer = gl.createBuffer();
  const positions = [
     1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
    -1.0, -1.0,
  ];
  gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER,
    new Float32Array(positions),
    WebGLRenderingContext.STATIC_DRAW
  );

  const colorBuffer = gl.createBuffer();
  const colors = [
    1.0,  1.0,  1.0,  1.0,    // 白
    1.0,  0.0,  0.0,  1.0,    // 红
    0.0,  1.0,  0.0,  1.0,    // 绿
    0.0,  0.0,  1.0,  1.0,    // 蓝
  ];

  gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER,
    new Float32Array(colors),
    WebGLRenderingContext.STATIC_DRAW
  );

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}
```

这段代码首先建立了一个 JavaScript 的数组，此数组中包含四组四值向量，每一组向量代表一个顶点的颜色。然后，创建一个 WebGL 缓冲区用来存储这些颜色——将数组中的值转换成 WebGL 所规定的浮点型后，存储在该缓冲区中。

为了实际使用这些颜色，我们继续修改顶点着色器，使得着色器可以从颜色缓冲区中正确取出颜色：

```html
    <script id="shader-vs" type="x-shader/x-vertex">
      attribute vec3 aVertexPosition;
      attribute vec4 aVertexColor;

      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;

      varying lowp vec4 vColor;

      void main(void) {
        gl_Position = uProjectionMatrix* uModelViewMatrix * vec4(aVertexPosition, 1.0);
        vColor = aVertexColor;
      }
    </script>
```

与之前相比，这段代码的关键不同点在于：每个顶点都与一个颜色数组中的数值相连接。

## 给片段着色

我们先来复习一下之前构造的片段着色器：

```html
    <script id="shader-fs" type="x-shader/x-fragment">
      void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
      }
    </script>
```

为使每个像素都得到插值后的颜色，我们只需要在此从 `vColor` 变量中获取这个颜色的值：

```html
    <script id="shader-fs" type="x-shader/x-fragment">
      varying lowp vec4 vColor;

      void main(void) {
        gl_FragColor = vColor;
      }
    </script>
```

这是一个非常简单的改变，每个片段只是根据其相对于顶点的位置得到一个插值过的颜色，而不是一个指定的颜色值。

## 带颜色的绘制

接下来，我们要在 `initShader()` 中初始化颜色属性，以便着色器程序使用

```js
  vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
  gl.enableVertexAttribArray(vertexColorAttribute);
```

然后，我们便可以修改 `drawScene()` 使之在绘制正方形时使用这些颜色：

```js
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
```

{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[查看完整代码](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3) | [在新页面中打开示例](http://mdn.github.io/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
