---
title: Creating 3D objects using WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
---

{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

现在让我们给之前的正方形添加五个面从而可以创建一个三维的立方体。最简单的方式就是通过调用方法 {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} 使用顶点数组列表来替换之前的通过方法{{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} 直接使用顶点数组。而顶点数组列表里保存着将会被引用到一个个独立的顶点。

其实现在会存在这样一个问题：每个面需要 4 个顶点，而每个顶点会被 3 个面共享。我们会创建一个包含 24 个顶点的数组列表，通过使用数组下标来索引顶点，然后把这些用于索引的下标传递给渲染程序而不是直接把整个顶点数据传递过去，这样来减少数据传递。那么也许你就会问：那么使用 8 个顶点就好了，为什么要使用 24 个顶点呢？这是因为每个顶点虽然被 3 个面共享但是它在每个面上需要使用不同的颜色信息。24 个顶点中的每一个都会有独立的颜色信息，这就会造成每个顶点位置都会有 3 份副本。

## 定义立方体顶点位置

首先，更新 `initBuffers() 函数代码`创建顶点位置数据缓存。现在的代码看起来和渲染正方形时的代码很相似，只是比之前的代码更长因为现在有了 24 个顶点（每个面使用 4 个顶点）：

```js
var vertices = [
  // Front face
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
  -1.0,  1.0,  1.0,

  // Back face
  -1.0, -1.0, -1.0,
  -1.0,  1.0, -1.0,
   1.0,  1.0, -1.0,
   1.0, -1.0, -1.0,

  // Top face
  -1.0,  1.0, -1.0,
  -1.0,  1.0,  1.0,
   1.0,  1.0,  1.0,
   1.0,  1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0,
   1.0, -1.0, -1.0,
   1.0, -1.0,  1.0,
  -1.0, -1.0,  1.0,

  // Right face
   1.0, -1.0, -1.0,
   1.0,  1.0, -1.0,
   1.0,  1.0,  1.0,
   1.0, -1.0,  1.0,

  // Left face
  -1.0, -1.0, -1.0,
  -1.0, -1.0,  1.0,
  -1.0,  1.0,  1.0,
  -1.0,  1.0, -1.0
];
```

## 定义顶点颜色

然后我们还要为每个顶点定义颜色。下面的代码首先为每个面定义颜色，然后用一个循环语句为每个顶点定义颜色信息。

```js
var colors = [
  [1.0,  1.0,  1.0,  1.0],    // Front face: white
  [1.0,  0.0,  0.0,  1.0],    // Back face: red
  [0.0,  1.0,  0.0,  1.0],    // Top face: green
  [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  [1.0,  0.0,  1.0,  1.0]     // Left face: purple
];

var generatedColors = [];

for (j=0; j<6; j++) {
  var c = colors[j];

  for (var i=0; i<4; i++) {
    generatedColors = generatedColors.concat(c);
  }
}

var cubeVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);
```

## 定义元素（三角形）数组

既然已经创建好了顶点数组，接下来就要创建元素（三角形）数组了。

```js
var cubeVerticesIndexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);

// This array defines each face as two triangles, using the
// indices into the vertex array to specify each triangle's
// position.

var cubeVertexIndices = [
  0,  1,  2,      0,  2,  3,    // front
  4,  5,  6,      4,  6,  7,    // back
  8,  9,  10,     8,  10, 11,   // top
  12, 13, 14,     12, 14, 15,   // bottom
  16, 17, 18,     16, 18, 19,   // right
  20, 21, 22,     20, 22, 23    // left
];

// Now send the element array to GL

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
```

`代码中的 cubeVertexIndices` 数组声明每一个面都使用两个三角形来渲染。通过立方体顶点数组的索引指定每个三角形的顶点。那么这个立方体就是由 12 个三角形组成的了。

## 渲染立方体

接下来就需要在 `drawScene()` 函数里添加代码使用立方体顶点索引数据来渲染这个立方体了。代码里添加了对 {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} 和 {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}的调用：

```js
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
setMatrixUniforms();
gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
```

立方体的每个面都由 2 个三角形组成，那就是每个面需要 6 个顶点，或者说总共 36 个顶点，尽管有许多重复的。然而，因为索引数组的每个元素都是简单的整数类型，所以每一帧动画需要传递给渲染程序的数据也不是很多。

到现在为止，我们已经创建了一个颜色生动的并且会在场景中移动和旋转的立方体，这一定很酷吧。

{{EmbedGHLiveSample('webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[查看全部源代码](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample5) | [在新页面打开示例](http://mdn.github.io/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
