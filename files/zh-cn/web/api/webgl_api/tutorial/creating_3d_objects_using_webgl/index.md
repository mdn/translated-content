---
title: 使用 WebGL 创建 3D 对象
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

现在让我们给之前的正方形添加五个面从而可以创建一个三维的立方体。最简单的方式就是通过调用方法 {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} 使用顶点数组列表来替换之前的通过方法{{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} 直接使用顶点数组。而顶点数组列表里保存着将会被引用到一个个独立的顶点。

其实现在会存在这样一个问题：每个面需要 4 个顶点，而每个顶点会被 3 个面共享。我们会创建一个包含 24 个顶点的数组列表，通过使用数组下标来索引顶点，然后把这些用于索引的下标传递给渲染程序而不是直接把整个顶点数据传递过去，这样来减少数据传递。那么也许你就会问：那么使用 8 个顶点就好了，为什么要使用 24 个顶点呢？这是因为每个顶点虽然被 3 个面共享但是它在每个面上需要使用不同的颜色信息。24 个顶点中的每一个都会有独立的颜色信息，这就会造成每个顶点位置都会有 3 份副本。

## 定义立方体顶点位置

首先，更新 `initBuffers()` 函数中代码来创建立方体的顶点位置缓存区。现在的代码看起来和渲染正方形时的代码很相似，只是比之前的代码更长因为现在有了 24 个顶点（每个面使用 4 个顶点）：

> **备注：** 在“init-buffers.js”文件 `initPositionBuffer()` 函数中，用下面代码替换 `positions`：

```js
const positions = [
  // Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

由于我们给顶点添加了 Z 分量，因此我们需要将 `vertexPosition` 属性的 `numComponents` 更新为 3。

> **备注：** 在“draw-scene.js”文件 `setPositionAttribute()` 函数中，将 `numComponents` 从 `2` 改为 `3`:

```js
const numComponents = 3;
```

## 定义顶点颜色

然后我们还要为每个顶点定义颜色。下面的代码首先为每个面定义颜色，然后用一个循环语句为每个顶点定义颜色信息。

> **备注：** 在“init-buffers.js”文件 `initColorBuffer()` 函数中，用下面代码替换 `colors` 定义：

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

// Convert the array of colors into a table for all the vertices.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## 定义元素（三角形）数组

既然已经创建好了顶点数组，接下来就要创建元素（三角形）数组了。

> **备注：** 在“init-buffer.js”文件中添加下面的函数：

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );
  return indexBuffer;
}
```

`indices` 数组声明每一个面都使用两个三角形来渲染。通过立方体顶点数组的索引指定每个三角形的顶点。那么这个立方体就是由 12 个三角形组成的了。

> **备注：** 在“init-buffers.js”文件 `initBuffers()`函数中，添加下面的代码替换之前的 `return` 代码片段：

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## 渲染立方体

接下来就需要在 `drawScene()` 函数里添加代码使用立方体顶点索引数据来渲染这个立方体了。代码里添加了对 {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} 和 {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}的调用：

> **备注：** 在 `drawScene()` 函数中，`gl.useProgram` 代码前添加如下代码：

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> **备注：** 在“draw-scene.js”文件 `drawScene()` 函数中，用下面这段代码替换之前 `gl.drawArrays()`：

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

立方体的每个面都由 2 个三角形组成，那就是每个面需要 6 个顶点，或者说总共 36 个顶点，尽管有许多重复的。然而，因为索引数组的每个元素都是简单的整数类型，所以每一帧动画需要传递给渲染程序的数据也不是很多。

最后，让我们把变量 `squareRotation` 替换成 `cubeRotation` 并添加 X 轴的第二个旋转。

> **备注：** 在“webgl-demo.js”文件的头部，把变量 `squareRotation` 替换成 `cubeRotation`：

```js
let cubeRotation = 0.0;
```

> **备注：** 在 `drawScene()` 函数声明中，将变量 `squareRotation` 替换成 `cubeRotation`：

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> **备注：** 在 `drawScene()` 函数中，用下面代码替换之前的 `mat4.rotate` 函数：

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around (Z)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.7, // amount to rotate in radians
  [0, 1, 0],
); // axis to rotate around (Y)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.3, // amount to rotate in radians
  [1, 0, 0],
); // axis to rotate around (X)
```

> **备注：** 在 `main()` 函数中，替换 `drawScene()` 函数调用参数中的 `squareRotation` 为 `cubeRotation`：

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

到现在为止，我们已经创建了一个颜色生动的并且会在场景中移动和旋转的立方体，这一定很酷吧。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[查看全部源代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [在新页面打开示例](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
