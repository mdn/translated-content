---
title: 使用 WebGL 创建 2D 内容
slug: Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}

一旦创建 WebGL 上下文创建成功，你就可以在这个上下文里渲染画图了。而对我们而言最简单的事，莫过于绘制一个没有纹理的 2D 图形了。那就让我们从画出一个正方形开始吧。

本项目的完整源代码[可在 GitHub 上获得](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2)。

## 引入 glMatrix 库

该项目使用了 [glMatrix](https://glmatrix.net/) 库来执行其矩阵操作，因此需要引入它。本次示例通过 CDN 形式引入使用。

> **备注：** 更新“index.html”文件，让它看起来像这样：

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <link rel="stylesheet" href="./webgl.css" type="text/css" />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous"
      defer></script>
    <script src="webgl-demo.js" type="module" defer></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

## 渲染场景

在开始前，我们首先需要明确最重要的一点，虽然我们的例子只是画一个二维物体，但我们仍然是在把它画在一个三维空间里。所以，我们依然需要创建着色器，通过它来渲染我们的简单场景并画出我们的物体。往下，我们将展示正方形是怎样一步步被画出来的。

### 着色器

**着色器是**使用 [OpenGL ES 着色语言](http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf)(**GLSL**) 编写的程序，它携带着绘制形状的顶点信息以及构造绘制在屏幕上像素的所需数据，换句话说，它负责记录着像素点的位置和颜色。

绘制 WebGL 时候有两种不同的着色器函数，**顶点着色器和片段着色器。**你需要通过用 GLSL 编写这些着色器，并将代码文本传递给 WebGL，使之在 GPU 执行时编译。顺便一提，顶点着色器和片段着色器的集合我们通常称之为**着色器程序。**

下面我们通过在 WebGL 环境绘制一个 2D 图像的例子快速介绍这两种着色器。

#### 顶点着色器

每次渲染一个形状时，顶点着色器会在形状中的每个顶点运行。它的工作是将输入顶点从原始坐标系转换到 WebGL 使用的[**裁剪空间**](/zh-CN/docs/Web/API/WebGL_API/WebGL_model_view_projection#裁剪空间)坐标系，其中每个轴的坐标范围从 -1.0 到 1.0，并且不考虑纵横比，实际尺寸或任何其他因素。

顶点着色器需要对顶点坐标进行必要的转换，在每个顶点基础上进行其他调整或计算，然后通过将其保存在由 GLSL 提供的特殊变量（我们称为 gl_Position）中来返回变换后的顶点

顶点着色器根据需要，也可以完成其他工作。例如，决定哪个包含 {{Glossary("texel")}} 面部纹理的坐标，可以应用于顶点；通过法线来确定应用到顶点的光照因子等。然后将这些信息存储在[变量（varyings)](/zh-CN/docs/Web/API/WebGL_API/Data#varyings)或[属性 (attributes)](/zh-CN/docs/Web/API/WebGL_API/Data#Attributes)属性中，以便与片段着色器共享

以下的顶点着色器接收一个我们定义的属性（aVertexPosition）的顶点位置值。之后这个值与两个 4x4 的矩阵（uProjectionMatrix 和 uModelMatrix）相乘; 乘积赋值给 gl_Position。有关投影和其他矩阵的更多信息，[在这里您可能可以找到有帮助的文章](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html)。

> **备注：** 添加下面代码到 `main()` 函数中：

```js
// Vertex shader program

const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
```

这个例子中，我们没有计算任何光照效果，因为我们还没有应用到场景，它将后面的 [WebGL 光照](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)章节介绍。同样我们也还没应用任何纹理，这将在[WebGL 添加纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)章节补充。

#### 片段着色器

**片段着色器**在顶点着色器处理完图形的顶点后，会被要绘制的每个图形的每个像素点调用一次。它的职责是确定像素的颜色，通过指定应用到像素的纹理元素（也就是图形纹理中的像素），获取纹理元素的颜色，然后将适当的光照应用于颜色。之后颜色存储在特殊变量 gl_FragColor 中，返回到 WebGL 层。该颜色将最终绘制到屏幕上图形对应像素的对应位置。

在这种情况下，我们每次都会返回白色，因为我们只是在画一个白色的正方形，没有使用光照。

> **备注：** 添加下面代码到 `main()` 函数中：

```js
const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

### 初始化着色器

现在我们已经定义了两个着色器，我们需要将它们传递给 WebGL，编译并将它们连接在一起。下面的代码通过调用 `loadShader()`，为着色器传递类型和来源，创建了两个着色器。然后创建一个附加着色器的程序，将它们连接在一起。如果编译或链接失败，代码将弹出 alert。

> **备注：** 将下面两个函数添加到“webgl-demo.js”文件中：

```js
//
//  初始化着色器程序，让 WebGL 知道如何绘制我们的数据
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // 创建着色器程序

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // 如果创建失败，alert
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(shaderProgram),
    );
    return null;
  }

  return shaderProgram;
}

//
// 创建指定类型的着色器，上传 source 源码并编译
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader),
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
```

loadShader 函数将 WebGL 上下文，着色器类型和`源码`作为参数输入，然后按如下步骤创建和编译着色器：

1. 调用{{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}}.创建一个新的着色器。

2. 调用{{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}}.将源代码发送到着色器。

3. 一旦着色器获取到源代码，就使用{{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}}.进行编译。

4. 为了检查是否成功编译了着色器，将检查着色器参数 gl.COMPILE_STATUS 状态。通过调用{{domxref("WebGLRenderingContext.getShaderParameter", "gl.getShaderParameter()")}}获得它的值，并指定着色器和我们想要检查的参数的名字（gl.COMPILE_STATUS）。如果返回错误，则着色器无法编译，因此通过{{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}从编译器中获取日志信息并 alert，然后删除着色器返回 null，表明加载着色器失败。

5. 如果着色器被加载并成功编译，则返回编译的着色器。

我们可以像这样调用这段代码

> **备注：** 添加下面代码到 `main()` 函数中：

```js
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
```

在创建着色器程序之后，我们需要查找 WebGL 返回分配的输入位置。在上述情况下，我们有一个属性和两个 [Uniform](/zh-CN/docs/Web/API/WebGL_API/Data#uniforms) 。属性从缓冲区接收值。顶点着色器的每次迭代都从分配给该属性的缓冲区接收下一个值。uniform 类似于 JavaScript 全局变量。它们在着色器的所有迭代中保持相同的值。由于属性和统一的位置是特定于单个着色器程序的，因此我们将它们存储在一起以使它们易于传递

> **备注：** 添加下面代码到 `main()` 函数中：

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};
```

## 创建对象

在画正方形前，我们需要创建一个缓冲器来存储它的顶点。我们会用到名字为 initBuffers() 的函数。当我们了解到更多 WebGL 的高级概念时，这段代码会将有更多参数，变得更加复杂，并且用来创建更多的三维物体。

> **备注：** 创建一个新文件叫“init-buffers.js”，并填写如下内容：

```js
function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };
```

这段代码简单给出了绘画场景的本质。首先，它调用 gl 的成员函数 {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}} 得到了缓冲对象并存储在顶点缓冲器。然后调用 {{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}} 函数绑定上下文。

当上一步完成，我们创建一个 Javascript 数组去记录每一个正方体的每一个顶点。然后将其转化为 WebGL 浮点型类型的数组，并将其传到 gl 对象的 {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}} 方法来建立对象的顶点。

**绘制场景**

当着色器和物体都创建好后，我们可以开始渲染这个场景了。因为我们这个例子不会产生动画，所以 drawScene() 方法非常简单。它还使用了几个工具函数，稍后我们会介绍。

> **备注：** 创建一个新文件叫“draw-scene.js”，并填写如下内容：

```js
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0],
  ); // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2; // pull out 2 values per iteration
    const type = gl.FLOAT; // the data in the buffer is 32bit floats
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix,
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}

// Tell WebGL how to pull out the positions from the position
// buffer into the vertexPosition attribute.
function setPositionAttribute(gl, buffers, programInfo) {
  const numComponents = 2; // pull out 2 values per iteration
  const type = gl.FLOAT; // the data in the buffer is 32bit floats
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set of values to the next
  // 0 = use type and numComponents above
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

export { drawScene };
```

第一步，用背景色擦除画布，接着建立摄像机透视矩阵。设置 45 度的视图角度，并且设置一个适合实际图像的宽高比。指定在摄像机距离 0.1 到 100 单位长度的范围内的物体可见。

接着加载特定位置，并把正方形放在距离摄像机 6 个单位的的位置。然后，我们绑定正方形的顶点缓冲到上下文，并配置好，再通过调用 {{domxref("WebGLRenderingContext.drawArrays()", "drawArrays()")}} 方法来画出对象。

最后，让我们引入 `initBuffers()` 和 `drawScene()`。

> **备注：** 在“webgl-demo.js”文件头部添加如下代码：

```js
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
```

> **备注：** 在 `main()` 函数结尾处添加如下代码：

```js
// Here's where we call the routine that builds all the
// objects we'll be drawing.
const buffers = initBuffers(gl);

// Draw the scene
drawScene(gl, programInfo, buffers);
```

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample2/index.html', 670, 510) }}

如果你的浏览器支持 WebGL 的话，[可以点击这里看看 DEMO](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample2/)。完整的源代码从[这里](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample2)获得

## 矩阵通用计算

矩阵计算是一个很复杂的运算。没人会想去自己写完所有代码来处理这些运算。通常人们使用一个矩阵运算库，而不会自己实现矩阵运算。在这个例子中我们使用的是[glMatrix library](http://glmatrix.net/).

## 参见

- [Matrices](https://webglfundamentals.org/webgl/lessons/webgl-2d-matrices.html) WebGLFundamentals
- [Matrices](http://mathworld.wolfram.com/Matrix.html) 线上数学百科全书
- 维基百科上的[矩阵](https://zh.wikipedia.org/wiki/矩阵)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL")}}
