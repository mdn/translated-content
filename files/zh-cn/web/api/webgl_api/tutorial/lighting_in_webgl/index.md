---
title: Lighting in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

在使用灯光之前，首先我们需要了解，与定义更广泛的 OpenGL 不同，WebGL 并没有继承 OpenGL 中灯光的支持。所以你只能由自己完全得控制灯光。幸运得是，这也并不是很难，本文接下来就会介绍完成灯光的基础。

## 在 3D 空间中模拟现实灯光

在 3D 空间中模拟现实世界的灯光的具体原理和细节绝非本篇文章能够描述清楚的，但是对灯光模型有一定的了解对我们的学习还是很有帮助的。虽然这里没办法深入讲解，但是维基百科中的[Phong 着色法](https://zh.wikipedia.org/wiki/Phong%E8%91%97%E8%89%B2%E6%B3%95)给出了一个不错的概要介绍，其中包含了最常用的几种光照模型。

光源类型可以概括成如下三种：

**环境光** 是一种可以渗透到场景的每一个角落的光。它是非方向光并且会均匀地照射物体的每一个面，无论这个面是朝向哪个方向的。

**方向光** 是一束从一个固定的方向照射过来的光。这种光的特点可以理解为好像是从一个很遥远的地方照射过来的，然后光线中的每一个光子与其他光子都是平行运动的。举个例子来说，阳光就可以认为是方向光。

**点光源光** 是指光线是从一个点发射出来的，是向着四面八方发射的。这种光在我们的现实生活中是最常被用到的。举个例子来说，电灯泡就是向各个方向发射光线的。

以我们的需要来看，我们会简化光照模型，只考虑简单的方向光和环境光，不会考虑任何镜面反射和点光源。这样的话，我们只需要在我们使用的环境光上加上照射到旋转立方体的方向光就可以了。在这里可以看到之前的[旋转立方体的例子](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。

虽然可以抛开了点光源和镜面反射，但是关于方向光还是有两点需要注意一下：

1. 需要在每个顶点信息中加入面的**朝向法线**。这个法线是一个垂直于这个顶点所在平面的向量。
2. 需要明确方向光的传播方向，可以使用一个**方向向量**来定义。

接着，我们会更新顶点着色器，考虑到环境光，再考虑到方向光（方向光的作用会因为光线方向与面的夹角关系而不同），计算每一个顶点的颜色。实现这一目标的代码如下。

## 建立顶点法线

首先我们需要做的是建立一个数组来存放立方体所有顶点的法线。由于立方体是一个很简单的物体，所以很容易实现；显然如果是对复杂物体，则法线的计算方法需要更深入的研究。(注：译者调试后发现此处 new WebGLFloatArray(...) 可能应该使用 new Float32Array())

```js
cubeVerticesNormalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);

var vertexNormals = [
  // Front
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

  // Back
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

  // Top
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

  // Bottom
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  // Right
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

  // Left
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
];

gl.bufferData(
  gl.ARRAY_BUFFER,
  new WebGLFloatArray(vertexNormals),
  gl.STATIC_DRAW,
);
```

现在我们应该对此非常熟悉了；创建新的 buffer，将它和 gl.ARRAR_BUFFER 绑定在一起，然后通过调用 bufferData() 把我们的顶点法线数组一起传入。

然后我们在 drawScene() 中添加代码，将法线数组和着色器的 attribute 绑定起来以便着色器能够获取到法线数组的信息。

（此处变量 vertexNormalAttribute 应该在 initShader() 函数中声明，并赋值：vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal"）; gl.enableVertexAttribArray(vertexNormalAttribute);)

```js
gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesNormalBuffer);
gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
```

最后，我们（为了读者便于理解，此处代码应该在 setMatrixUniforms() 函数中添加）需要更新下代码，在着色器中建立和传递法线向量矩阵，用这个矩阵来处理当前立方体相对于光源位置法线向量的转换 (注：译者调试后发现此处 new WebGLFloatArray(...) 应该使用 new Float32Array())：

```js
var normalMatrix = mvMatrix.inverse();
normalMatrix = normalMatrix.transpose();
var nUniform = gl.getUniformLocation(shaderProgram, "uNormalMatrix");
gl.uniformMatrix4fv(
  nUniform,
  false,
  new WebGLFloatArray(normalMatrix.flatten()),
);
```

## 更新着色器

现在着色器需要的所有数据已经全部可以获取到了（或者说全部准备好了），我们需要更新下着色器本身的代码。

### 顶点着色器

首先更新顶点着色器，让它给每一个基于环境光和方向光的顶点一个着色器值。让我们看下代码：

```html
<script id="shader-vs" type="x-shader/x-vertex">
  attribute highp vec3 aVertexNormal;
  attribute highp vec3 aVertexPosition;
  attribute highp vec2 aTextureCoord;

  uniform highp mat4 uNormalMatrix;
  uniform highp mat4 uMVMatrix;
  uniform highp mat4 uPMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.6, 0.6, 0.6);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
    highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
</script>
```

一旦顶点位置计算完毕，我们就可以获得纹理对应于顶点的坐标，从而计算出顶点的阴影。

我们先根据立方体位置和朝向，通过顶点法线乘以法线矩阵来转换法线。接着我们可以通过计算转换过后的法线与方向向量（即，光来自的方向）的点积来计算得出顶点反射方向光的量。如果计算出的这个值小于 0，则我们把值固定设为 0，因为你不会有小于 0 的光。

当方向光的量计算完，我们可以通过获取环境光并且添加方向光的颜色和要提供的定向光的量来生成光照值（lighting value）。最终结果我们会得到一个 RGB 值，用于片段着色器调整我们渲染的每一个像素的颜色。

### 片段着色器

片段着色器现在需要根据顶点着色器计算出的光照值来更新：

```js
<script id="shader-fs" type="x-shader/x-fragment">
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    mediump vec4 texelColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
</script>
```

和先前我们做的例子一样，我们获取纹理的颜色（原文“color of the texel”? 此处个人觉得应该就是指纹理的颜色），不同的是在设置片段颜色之前，我们将纹理的颜色乘以光照值来调整纹理以达到我们光源的效果。

效果就是这样！

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample7/index.html', 670, 510) }}

[查看完整的源码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [在新标签页中查看演示](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## 读者练习

显然这是一个很简单的例子，实现了基本的每个顶点的照明。对于更高级的图形，你将可能需要实现每个像素（或者说更多像素）的照明，但这会帮助你朝着正确的方向前行。

你也可以尝试光源方向颜色等等。

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
