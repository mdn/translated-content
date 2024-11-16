---
title: WebGL model view projection
slug: Web/API/WebGL_API/WebGL_model_view_projection
---

{{DefaultAPISidebar("WebGL")}}

本文探讨如何在 WebGL 项目中获取数据，并将其投影到适当的空间以在屏幕上显示。它假定了你具备用于平移，缩放和旋转的基本矩阵数学知识。它解释了组成 3D 场景时通常使用的三个核心矩阵：模型，视图和投影矩阵。

> [!NOTE]
> 本文还可作为 [MDN 内容套件](https://github.com/TatumCreative/mdn-model-view-projection) 提供。它还使用 `MDN`全局对象下可用的 [实用函数](https://github.com/TatumCreative/mdn-webgl) 集合。

## 模型、视图、投影矩阵

WebGL 空间中的点和多边形的个体转化由基本的转换矩阵（例如平移，缩放和旋转）处理。可以将这些矩阵组合在一起并以特殊方式分组，以使其用于渲染复杂的 3D 场景。这些组合成的矩阵最终将原始数据类型移动到一个称为裁剪空间的特殊坐标空间中。这是一个中心点位于 (0, 0, 0)，角落范围在 (-1, -1, -1) 到 (1, 1, 1) 之间，2 个单位宽的立方体。该剪裁空间被压缩到一个二维空间并栅格化为图像。

下面讨论的第一个矩阵是**模型矩阵**，它定义了如何获取原始模型数据并将其在 3D 世界空间中移动。**投影矩阵**用于将世界空间坐标转换为剪裁空间坐标。常用的投影矩阵（**透视矩阵**）用于模拟充当 3D 虚拟世界中观看者的替身的典型相机的效果。**视图矩阵**负责移动场景中的对象以模拟相机位置的变化，改变观察者当前能够看到的内容。

以下的几个部分提供了对模型，视图和投影矩阵背后的思想及实现的深入理解。这些矩阵是在屏幕上移动数据的核心，是胜过各个框架和引擎的概念。

## 裁剪空间

在 WebGL 程序中，数据通常上传到具有自己的坐标系统的 GPU 上，然后顶点着色器将这些点转换到一个称为**裁剪空间**的特殊坐标系上。延展到裁剪空间之外的任何数据都会被剪裁并且不会被渲染。如果一个三角形超出了该空间的边界，则将其裁切成新的三角形，并且仅保留新三角形在裁剪空间中的部分。

![A 3d graph showing clip space in WebGL.](clip_space_graph.svg)

上面的图像裁剪空间的可视化，所有点都必须被包含在其中。它是一个角在 (-1, -1, -1)，对角在 (1, 1, 1)，中心点在 (0, 0, 0) 的每边 2 个单位的立方体。裁剪空间使用的这个两个立方米坐标系称为归一化设备坐标（NDC）。在研究和使用 WebGL 代码时，你可能时不时的会使用这个术语。

在本节中，我们将直接将数据放入裁剪空间坐标系中。通常使用位于任意坐标系中的模型数据，然后使用矩阵进行转换，将模型坐标转换为裁剪空间系下的坐标。这个例子，通过简单地使用从 (-1，-1，-1) 到 (1,1,1) 的模型坐标值来说明剪辑空间的工作方式是最简单的。下面的代码将创建 2 个三角形，这些三角形将在屏幕上绘制一个正方形。正方形中的 Z 深度确定当前正方形共享同一个空间时在顶部绘制的内容，较小的 Z 值将呈现在较大的 Z 值之上。

### WebGLBox 例子

本示例将创建一个自定义 WebGL 对象，该对象将在屏幕上绘制一个 2D 框。

> [!NOTE]
> 每一个 WebGL 示例代码在此 [github repo](https://github.com/TatumCreative/mdn-model-view-projection/tree/master/lessons) 中可找到，并按章节组织。此外，每个章节底部都有一个 JSFiddle 链接。

#### WebGLBox Constructor

构造函数看起来像这样：

```js
function WebGLBox() {
  // 设置 canvas 和 WebGL 上下文
  this.canvas = document.getElementById("canvas");
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.gl = MDN.createContext(canvas);

  var gl = this.gl;

  // 设置一个 WebGL 程序，任何 MDN 对象相关的部分在本文之外定义
  this.webglProgram = MDN.createWebGLProgramFromIds(
    gl,
    "vertex-shader",
    "fragment-shader",
  );
  gl.useProgram(this.webglProgram);

  // 保存 attribute 和 uniform 位置
  this.positionLocation = gl.getAttribLocation(this.webglProgram, "position");
  this.colorLocation = gl.getUniformLocation(this.webglProgram, "color");

  // 告诉 WebGL 在绘制时测试深度，所以如果一个正方形后面有另一个正方形
  // 另一个正方形不会被绘制
  gl.enable(gl.DEPTH_TEST);
}
```

#### WebGLBox 绘制

现在，我们将创建一个在屏幕上绘制框的方法。

```js
WebGLBox.prototype.draw = function (settings) {
  // 创建一下 attribute 数据; 这些是最终绘制到屏幕上的三角形
  // 有两个形成一个正方形

  var data = new Float32Array([
    //Triangle 1
    settings.left,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.left,
    settings.top,
    settings.depth,

    //Triangle 2
    settings.left,
    settings.top,
    settings.depth,
    settings.right,
    settings.bottom,
    settings.depth,
    settings.right,
    settings.top,
    settings.depth,
  ]);

  // 使用 WebGL 将其绘制到屏幕上

  // 性能要点：为每个绘制创建新的缓冲器很慢
  // 这个方法仅用于说明

  var gl = this.gl;

  // 创建一个缓冲区并绑定数据
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  // 设置指向 attribute 数据的指针（三角形）
  gl.enableVertexAttribArray(this.positionLocation);
  gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);

  // 设置将在所有三角形之间共享的 color uniform
  gl.uniform4fv(this.colorLocation, settings.color);

  // 在屏幕上绘制该三角形
  gl.drawArrays(gl.TRIANGLES, 0, 6);
};
```

着色器是用 GLSL 编写的代码片段，它接收我们的点数据并最终将它们渲染到屏幕上。为了方便起见，这些着色器存储在 {{htmlelement("script")}} 元素之中，该元素通过自定义函数 `MDN.createWebGLProgramFromIds()` 引入程序中。这个方法是为这些教程编写的 [实用函数](https://github.com/TatumCreative/mdn-webgl) 集合的一部分，此处不再赘述。此函数用于处理获取一些 GLSL 源代码并将其编译为 WebGL 程序的基础操作。该函数具有三个参数 - 用于渲染程序的上下文，包含顶点着色器的 {{htmlelement("script")}} 元素的 ID 和包含片段着色器的 {{htmlelement("script")}} 元素的 ID。顶点着色器放置顶点，片段着色器为每个像素着色。

首先看一下将在屏幕上移动顶点的顶点着色器：

```glsl
// 一个顶点位置
attribute vec3 position;

void main() {

  // gl_Position 是顶点着色器对其修改后在裁剪空间的最终位置
  gl_Position = vec4(position, 1.0);
}
```

接下来，要实际将数据栅格化为像素，片段着色器将在每个像素的基础上计算评估一切，设置一个单一颜色。GPU 为需要渲染的每个像素调用着色器方法。着色器的工作是返回要用于该像素的颜色。

```glsl
precision mediump float;
uniform vec4 color;

void main() {
  gl_FragColor = color;
}
```

有了这些设置，是时候使用裁剪空间坐标直接绘制到屏幕了。

```js
var box = new WebGLBox();
```

首先在中间画一个红色框。

```js
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

接下来，在上面的红色框的后面绘制一个绿色框。

```js
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

最后，为了演示裁剪实际上发生了，这个框没有被绘制，因为它完全在裁剪空间之外，深度超出 -1.0 到 1.0 的范围。

```js
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

#### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/2x03hdc8)

![The results of drawing to clip space using WebGL.](part1.png)

#### 练习

在这一点上一个有用的练习是通过更改代码来使框在裁剪空间中移动，感受点是如何在裁剪空间中被剪切和移动的。尝试画一张有背景的方形笑脸。

## 齐次坐标

之前的裁剪空间顶点着色器主要包含以下代码：

```js
gl_Position = vec4(position, 1.0);
```

位置变量是在 `draw()` 方法中定义的，并作为 attribute 传递给着色器。这是一个三维点，但最终通过管线传递的 `gl_Position` 变量实际上是四维的 - 是 `(x,y,z,w)` 而不是 `(x,y,z)` 。 `z` 后面没有字母了，因此习惯上将第四维标记为 `w`。在上面的示例中， `w` 坐标设置为 1.0。

显而易见的问题是：“为什么要增加维度？”。事实证明，这种增加允许使用许多不错的技术来处理 3D 数据。这个增加的维度将透视的概念引入坐标系中。将其放置在适当的位置后，我们可以将 3D 坐标映射到 2D 空间中，从而允许两条平行线当它们延伸到远方时相交。 `w` 的值被用作该坐标的其他分量放除数，因此 `x`, `y` 和 `z` 的真实值被计算为 `x/w` , `y/w` 和 `z/w`（然后 `w` 也 `w/w` , 变成 1）。

三维点定义在典型的笛卡尔坐标系中。增加的第四维将这一点变为[齐次坐标](https://zh.wikipedia.org/wiki/齐次坐标)。它仍然代表 3D 空间中的一个点，并且可以通过一对简单的函数轻松地演示如何构造这种类型的坐标。

```js
function cartesianToHomogeneous(point) {
  var x = point[0];
  var y = point[1];
  var z = point[2];

  return [x, y, z, 1];
}

function homogeneousToCartesian(point) {
  var x = point[0];
  var y = point[1];
  var z = point[2];
  var w = point[3];

  return [x / w, y / w, z / w];
}
```

正如前面提到的和上面展示的函数，w 分量将和 x, y 和 z 相除。当 w 分量为非零实数时，齐次坐标很容易转换回笛卡尔空间中。现在，如果 w 分量为零会发生什么？在 JavaScript 中，返回值如下：

```js
homogeneousToCartesian([10, 4, 5, 0]);
```

计算结果为： `[Infinity, Infinity, Infinity]`.

该齐次坐标表示无穷大的某个点。这是一种方便的方式表示从原点向特定方向发射的射线。除了射线，还可以将其视为方向矢量的表示。如果将此齐次坐标和带有平移的矩阵相乘，则该平移将被有效地消去了。

当计算机上的数字非常大（或非常小）时，它们的精确度将越来越低，因为仅用这么多的“1”和“0”来表示它们。对较大的数字执行的操作越多，结果中就会积累越来越多的错误。当除以 w 时，这可以通过两个可能更小，更不易出错的数字进行运算来有效地提高非常大的数字的精度。

使用齐次坐标的最终好处是，它们非常适合与 4x4 矩阵相乘。一个顶点必须至少与矩阵的一个维数（行/列）匹配，才能与其相乘。4x4 矩阵可用于编码各种转换。实际上，典型的透视矩阵使用 w 分量除法来实现其变换。

实际上，在将齐次坐标转换回笛卡尔坐标之后（通过除以 w），会发生从裁剪空间中裁剪点和多边形的情况。该最终空间称为**归一化设备坐标**或 NDC。

为了开始使用这个思想，可以修改前面的示例，以允许使用 `w` 分量。

```js
// 重新定义三角形以使用 W 分量
var data = new Float32Array([
  //Triangle 1
  settings.left,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.right,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.left,
  settings.top,
  settings.depth,
  settings.w,

  //Triangle 2
  settings.left,
  settings.top,
  settings.depth,
  settings.w,
  settings.right,
  settings.bottom,
  settings.depth,
  settings.w,
  settings.right,
  settings.top,
  settings.depth,
  settings.w,
]);
```

然后，顶点着色器使用传入的 4 维点。

```js
attribute vec4 position;

void main() {
  gl_Position = position;
}
```

首先，我们在中间绘制一个红色框，但将 W 设置为 0.7。但坐标除以 0.7 时，它们全部会被放大。

```js
box.draw({
  top: 0.5, // x
  bottom: -0.5, // x
  left: -0.5, // y
  right: 0.5, // y
  w: 0.7, // w - 放大这个盒子

  depth: 0, // z
  color: [1, 0.4, 0.4, 1], // red
});
```

现在，我们在上面绘制一个绿色框，但是通过将 w 分量设置为 1.1 来缩小它。

```js
box.draw({
  top: 0.9, // x
  bottom: 0, // x
  left: -0.9, // y
  right: 0.9, // y
  w: 1.1, // w - 缩小这个盒子

  depth: 0.5, // z
  color: [0.4, 1, 0.4, 1], // green
});
```

最后一个框未被绘制，因为它在裁剪空间之外。深度超出 -1.0 到 1.0 范围。

```js
box.draw({
  top: 1, // x
  bottom: -1, // x
  left: -1, // y
  right: 1, // y
  w: 1.5, // w - 把这个盒子带回范围内

  depth: -1.5, // z
  color: [0.4, 0.4, 1, 1], // blue
});
```

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/mff99yu)

### ![The results of using homogeneous coordinates to move the boxes around in WebGL.](part2.png)

### 练习

- 尝试使用这些值，看看它们如何影响屏幕上渲染的内容。请注意如何通过设置其 w 分量将先前裁剪的蓝色框带回带范围内。
- 尝试创建一个在裁剪空间之外的新框，然后将其除以 w，将其返回裁剪空间。

## 模型转换

将点直接放入裁剪空间的用途有限。在现实世界的应用程序中，你拥有的源坐标不全部在裁剪空间中。因此大多数时候，你需要将模型数据和其他坐标转换到裁剪空间中。简单的立方体就是一个如何执行此操作的简单示例。立方体数据由顶点位置，立方体表面颜色和构成单个多边形的顶点位置的顺序组成（以 3 个顶点为一组，以构成立方体表面的三角形）。这些位置和颜色存储在 GL 缓冲区中，作为属性发到着色器，然后分别进行操作。

最后，计算并设置单个模型矩阵。该矩阵表示要在组成模型的每个点上执行的转换，以将其移到正确的空间，并在模型中的每个点上执行任何其他所需的转换。这不仅适用于每一个顶点，而且还适用于模型每个表面的每个点。

在这种情况下，对于动画的每一帧，一系列缩放，旋转和平移矩阵会将数据移动到裁剪空间中所需的位置。这个立方体是裁剪空间 (-1, -1, -1) 到 (1, 1, 1) 的大小，因此需要缩小以不填满整个裁剪空间。该矩阵事先已经在 JavaScript 中进行了乘法运算，直接发到着色器。

以下代码示例在 `CubeDemo` 对象上定义了一个创建模型矩阵的方法。它使用了自定义函数来创建和乘以 [MDN WebGL](https://github.com/TatumCreative/mdn-webgl) 共享代码中定义的矩阵。新的函数如下：

```js
CubeDemo.prototype.computeModelMatrix = function (now) {
  // 缩小 50%
  var scale = MDN.scaleMatrix(0.5, 0.5, 0.5);

  // 轻微旋转
  var rotateX = MDN.rotateXMatrix(now * 0.0003);

  // 根据时间旋转
  var rotateY = MDN.rotateYMatrix(now * 0.0005);

  // 稍微向下移动
  var position = MDN.translateMatrix(0, -0.1, 0);

  // 相乘，确定以相反的顺序读取它们
  this.transforms.model = MDN.multiplyArrayOfMatrices([
    position, // step 4
    rotateY, // step 3
    rotateX, // step 2
    scale, // step 1
  ]);
};
```

为了在着色器中使用它，必须将其设置在 uniforms 的位置。uniforms 的位置保存在 `locations` 对象中，如下所示：

```js
this.locations.model = gl.getUniformLocation(webglProgram, "model");
```

最后，将 uniforms 设置在那个位置，这就把矩阵交给了 GPU。

```js
gl.uniformMatrix4fv(
  this.locations.model,
  false,
  new Float32Array(this.transforms.model),
);
```

在着色器中，每个位置顶点首先被转换为齐次坐标（vec4 对象），然后与模型矩阵相乘。

```glsl
gl_Position = model * vec4(position, 1.0);
```

> [!NOTE]
> 在 JavaScript 中，矩阵乘法需要自定义函数，而在着色器中，它使用了内置在语言中的简单的 \* 运算。

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/5jofzgsh)

![Using a model matrix](part3.png)

此时，变换点的 w 值仍为 1.0。立方体仍然没有什么角度。下一节将进行此设置并修改 w 值以提供一些透视效果。

### 练习

- 使用缩放矩阵缩小立方体，并将其放置在裁剪空间中不同位置。
- 尝试将其移到裁剪空间之外。
- 调整窗口大小，然后观察盒子的变形情况。
- 添加一个 `rotateZ` 。

## 除以 W

一个开始了解立方体模型透视的简单方法是获取 Z 坐标并将其复制到 w 坐标。通常，将笛卡尔点转换为齐次坐标时，它变为 `(x,y,z,1)` ，但我们将其设置为 `(x,y,z,z)` 。实际上，我们希望确保视图中的点的 z 值大于 0，因此我们将其值改为 `((1.0 + z) * scaleFactor)` 对其进行轻微的修改。这将需要一个通常位于裁剪空间（-1 到 1）中的点，并将其移到更像（0 到 1）的空间中，具体取决于比例因子设置为什么。比例因子将最终 w 值更改为总体上更高或更低。

着色器代码如下：

```js
// 首先转换点
vec4 transformedPosition = model * vec4(position, 1.0);

// 透视有多大的影响？
float scaleFactor = 0.5;

// 通过采用介于 -1 到 1 之间的 z 值来设置 w
// 然后进行缩放为 0 到某个数，在这种情况下为 0 到 1
float w = (1.0 + transformedPosition.z) * scaleFactor;

// 使用自定义 w 分量保存新的 gl_Position
gl_Position = vec4(transformedPosition.xyz, w);
```

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/vk9r8h2c)

![Filling the W component and creating some projection.](part4.png)

看到那个深蓝色的小三角形吗？那是添加到对象上的另一个面，因为形状的旋转导致了该角延伸到裁剪空间之外，从而导致该角被裁剪掉。有关如何使用更复杂的矩阵来帮助控制和防止裁剪的介绍，请参照下面的 [Perspective matrix](#perspective_matrix)。

### 练习

如果这听起来有点抽象，请打开顶点着色器，然后使用比例因子，观察其如何将顶点向表面进一步收缩。完全更改 w 分量的值，以表示真实空间。

在下一节中，我们将执行把 Z 值复制到 w 插槽并将其转换为矩阵的步骤。

## 简单投影

填充 w 分量的最后一步实际上可以用一个简单的矩阵完成。从 identity 矩阵开始：

```js
var identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

MDN.multiplyPoint(identity, [2, 3, 4, 1]);
//> [2, 3, 4, 1]
```

然后将最后一列的 1 向上移动一个空格。

```js
var copyZ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];

MDN.multiplyPoint(copyZ, [2, 3, 4, 1]);
//> [2, 3, 4, 4]
```

但是，在最后一个示例中，我们执行了 `(z + 1) * scaleFactor`:

```js
var scaleFactor = 0.5;

var simpleProjection = [
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  scaleFactor,
  0,
  0,
  0,
  scaleFactor,
];

MDN.multiplyPoint(simpleProjection, [2, 3, 4, 1]);
//> [2, 3, 4, 2.5]
```

进一步展开我们可以看到它是如何工作的：

```js
var x = 2 * 1 + 3 * 0 + 4 * 0 + 1 * 0;
var y = 2 * 0 + 3 * 1 + 4 * 0 + 1 * 0;
var z = 2 * 0 + 3 * 0 + 4 * 1 + 1 * 0;
var w = 2 * 0 + 3 * 0 + 4 * scaleFactor + 1 * scaleFactor;
```

最后一行可以简化为：

```js
w = 4 * scaleFactor + 1 * scaleFactor;
```

然后将 scaleFactor 提取出来，我们得到：

```js
w = (4 + 1) * scaleFactor;
```

这与我们在前面示例中使用的 `(z + 1) * scaleFactor` 完全相同。

在 box demo 中，添加了一个额外的 `.computeSimpleProjectionMatrix()` 方法。在 `.draw()` 方法中调用，并将比例因子传递给它。结果应该与上一个示例相同：

```js
CubeDemo.prototype.computeSimpleProjectionMatrix = function (scaleFactor) {
  this.transforms.projection = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    scaleFactor,
    0,
    0,
    0,
    scaleFactor,
  ];
};
```

尽管结果相同，但重要的步骤还是在顶点着色器中。与其直接修改顶点，不如将其乘以一个附加的 **[projection matrix](#projection_matrix)**，该矩阵将 3D 点投影到 2D 绘图表面上：

```glsl
// 确保以相反的顺序读取转换矩阵
gl_Position = projection * model * vec4(position, 1.0);
```

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/zwyLLcbw)

![A simple projection matrix](part5.png)

## 透视矩阵

至此，我们逐步构建了自己的 3D 渲染设置。但是，我们当前构建的代码存在一些问题。首先，每当我们调整窗口大小时，它就会倾斜。另外是我们的简单投影无法处理场景数据的大范围值。大多数场景在裁剪空间中不起作用。定义与场景相关的距离是很有帮助的，这样在转换数字时不会损失精度。最后，对哪些点放在裁剪空间的内部和外部进行精度控制非常有帮助。在前面的例子中，立方体的角偶尔会被裁剪。

透视矩阵是一种可以满足这些要求的投影矩阵。也开始涉及数学更多的内容，这些示例中将不做充分解释。简而言之，它结合了除以 w（与前面的例子相同）和基于 [相似三角形](https://en.wikipedia.org/wiki/Similarity_%28geometry%29) 相似三角形的一些巧妙操作。如果你想阅读有关其背后数学的完整说明，请查看以下一些链接：

- [OpenGL 投影矩阵](http://www.songho.ca/opengl/gl_projectionmatrix.html)
- [透视投影](http://ogldev.atspace.co.uk/www/tutorial12/tutorial12.html)
- [尝试了解 WebGL 中透视矩阵背后的数学](http://stackoverflow.com/questions/28286057/trying-to-understand-the-math-behind-the-perspective-matrix-in-webgl/28301213#28301213)

关于下面使用的透视矩阵，需要注意的一件重要的事是它会翻转 z 轴。在裁剪空间中，z+ 原理观察者，而使用此矩阵，它朝向观察者。

翻转 z 轴的原因是，裁剪空间坐标系是左手坐标系（z 轴指向远离观察者并指入屏幕的位置），而数学，物理学和 3D 建模中的惯例与 OpenGL 中视图/眼睛坐标系一样，是使用右手坐标系（z 轴指向屏幕，朝向观察者）。有关的 Wikipedia 文章的更多信息：[直角坐标系](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Orientation_and_handedness), [右手法则](https://en.wikipedia.org/wiki/Right-hand_rule)。

让我们看一下 `perspectiveMatrix()` 函数，该函数计算了透视矩阵。

```js
MDN.perspectiveMatrix = function (
  fieldOfViewInRadians,
  aspectRatio,
  near,
  far,
) {
  var f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  var rangeInv = 1 / (near - far);

  return [
    f / aspectRatio,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (near + far) * rangeInv,
    -1,
    0,
    0,
    near * far * rangeInv * 2,
    0,
  ];
};
```

此函数的四个参数是：

- `fieldOfviewInRadians`
  - : 一个以弧度表示的角度，指示观看者一层可以看多少场景。数字越大，摄像机可见的越多。边缘的几何形状变得越来越失真，等同于广角镜。当视野更大时，物体通常会变小。当视野较小时，摄像机在场景中的看到的东西会越来越少。物体因透视而变形的程度要小得多，并且物体似乎更靠近相机。
- `aspectRatio`
  - : 场景的宽高比，等于其宽度除以其高度。在本示例中，就是窗口的宽度除以窗口的高度。此参数的引入最终解决了当画布调整大小和形状时模型的变形问题。
- `nearClippingPlaneDistance`
  - : 一个正数，表示到屏幕的距离是垂直于地板的平面的距离，该距离比将所有内容都裁剪的距离更近。它在裁剪空间中映射为 -1，并且不应设置为 0。
- `farClippingPlaneDistance`
  - : 一个正数，表示与平面之间的距离，超出该距离将裁剪几何体。它在裁剪空间中映射为 1.该值应保持合理的距离以接近几何图形的距离，以免在渲染时出现精度误差。
    在最新版本的盒子 demo 中， `computeSimpleProjectionMatrix()` 函数已替换为 `computePerspectiveMatrix()` 函数。

```js
CubeDemo.prototype.computePerspectiveMatrix = function () {
  var fieldOfViewInRadians = Math.PI * 0.5;
  var aspectRatio = window.innerWidth / window.innerHeight;
  var nearClippingPlaneDistance = 1;
  var farClippingPlaneDistance = 50;

  this.transforms.projection = MDN.perspectiveMatrix(
    fieldOfViewInRadians,
    aspectRatio,
    nearClippingPlaneDistance,
    farClippingPlaneDistance,
  );
};
```

着色器代码与前面的示例相同：

```js
gl_Position = projection * model * vec4(position, 1.0);
```

此外（未显示），更改了模型的位置和缩放矩阵，以使其脱离裁剪空间并进入更大的坐标系。

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/Lzxw7e1q)

![A true perspective matrix](part6.png)

### 练习

- 使用透视矩阵和模型矩阵的参数进行体验。
- 将透视矩阵替换为 [正交矩阵](https://zh.wikipedia.org/wiki/正交矩阵)。在 MDN WebGL 共享代码中可以找到 `MDN.orthographicMatrix()` 替换 `CubeDemo.prototype.computePerspectiveMatrix()` 中的 `MDN.perspectiveMatrix()` 函数。

## 视图矩阵

尽管某些图形库提供的虚拟相机可以在构成场景时可以定位和指向，但 OpenGL（以及扩展的 WebGL）却没有。这是视图矩阵的用处。它的作用是平移，旋转和缩放场景中的物体，以使根据观察者的位置和方向将它们放置到正确的位置。

### 模拟相机

这利用了爱因斯坦狭义相对论的基本理论之一：参考系和相对运动的原理说，从观察者的角度来看，你可以通过将相反的变化应用于场景中的物体来模拟改变观察者的位置和方向。无论哪种方式，结果似乎对于观察者是一样的。

假设一个位于桌子上的盒子和一个放在一米外的桌子上的相机，它指向盒子，盒子的正面指向相机。然后考虑将相机从盒子中移开，直到 2 米远（通过在相机的 Z 值增加 1 米），然后将其向左滑动 10 厘米。盒子与相机的距离缩小了一定量，并向右稍微滑动，从而在相机中看起来较小，左侧的一小部分也暴露在相机前。

现在，让我们重置场景，将盒子放回它的起始点，使相机距离盒子 2 米，并正对着盒子。但这一次，相机被锁定在桌子上无法移动或旋转。这就是在 WebGL 中运作的样子。那，我们如何模拟在空间中移动的相机？

我们没有向后和向左移动相机，而是对盒子应用了逆变换：我们将盒子向后移动 1 米，然后向右移动 10 厘米。从两个物体的角度来看，结果是一样的。

最后一步是创建**视图矩阵**，该矩阵将转换场景中的对象，以便对它们进行定位以模拟相机当前位置与方向。目前的代码可以在世界空间中移动立方体并投影所有内容以获得透视图，但我们仍然无法移动相机。

想象一下使用物理摄像机拍摄电影。你可以自由地将相机放到任何你想放置的位置，并对准任何你选择的方向。为了在 3D 图形中对此进行仿真，我们使用视图矩阵来模拟物理相机的位置和旋转。

与直接转换模型顶点的模型矩阵不同，视图矩阵会移动一个抽象的相机。实际上，顶点着色器仍然移动的是模型，而“相机”保持在原位。为了使此计算正确，必须使用变换矩阵的逆。逆矩阵实质上是逆转了变换，因此，如果我们向前移动相机，则逆矩阵会导致场景中的物体向后移动。

以下的 `computeViewMatrix()` 函数通过向内和向外，向左和向右移动的视图矩阵来激活视图矩阵。

```js
CubeDemo.prototype.computeViewMatrix = function (now) {
  var moveInAndOut = 20 * Math.sin(now * 0.002);
  var moveLeftAndRight = 15 * Math.sin(now * 0.0017);

  // 各个方向移动相机
  var position = MDN.translateMatrix(moveLeftAndRight, 0, 50 + moveInAndOut);

  // 相乘，确保以相反的顺序读取它们
  var matrix = MDN.multiplyArrayOfMatrices([
    // 练习：旋转相机的视角
    position,
  ]);

  // 翻转相机的运动操作，因为我们实际上是
  // 移动场景中的几何图形，而不是相机本身
  this.transforms.view = MDN.invertMatrix(matrix);
};
```

着色器现在使用三个矩阵。

```glsl
gl_Position = projection * view * model * vec4(position, 1.0);
```

此步骤后，GPU 管线将裁剪超出范围的顶点，并将模型向下发送到片段着色器以进行栅格化。

### 结果

[在 JSFiddle 中查看](https://jsfiddle.net/86fd797g)

![The view matrix](part7.png)

### 相关坐标系

此时，回顾并标记我们使用的各种坐标系是很有用的。首先，在**模型空间**中定义了立方体的顶点。在场景中移动模型。这些顶点需要通过应用模型矩阵转换到**世界空间**。

模型空间 → 模型矩阵 → 世界空间

相机尚未执行任何操作，需要再次移动这些点。目前它们在世界空间中，但需要将它们移动到**视图空间**（使用视图矩阵）以表示相机的位置。

世界空间 → 视图矩阵 → 视图空间

最后，需要添加**投影**（在我们的示例中是**透视矩阵**），以便将世界坐标映射到裁剪空间。

视图空间 → 投影矩阵 → 裁剪空间

### 练习

- 在场景中移动相机。
- 向视图矩阵中添加一些旋转矩阵以四处看看。
- 最后，跟踪鼠标的位置。使用 2 个旋转矩阵可以根据用户鼠标在屏幕上的位置上下移动相机。

## 参见

- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
- [三维投影](https://zh.wikipedia.org/wiki/三维投影)
