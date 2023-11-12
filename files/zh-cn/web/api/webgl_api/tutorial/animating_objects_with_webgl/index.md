---
title: 用 WebGL 让目标动起来
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

在此示例中，我们实际上将旋转正方形平面。

## 使正方形旋转

让我们开始旋转正方形。我们需要的第一件事是创建一个变量，用于跟踪正方形的当前旋转：

```js
var squareRotation = 0.0;
```

现在我们需要更新`drawScene()`函数以在绘制正方形时将当前旋转应用于正方形。转换为正方形的初始绘图位置后，我们像这样应用旋转：

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  squareRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around
```

这会将 modelViewMatrix 的当前值`squareRotation`绕 Z 轴旋转。

要进行动画制作，我们需要添加`squareRotation`随时间更改值的代码。为此，我们可以创建一个新变量来跟踪上次动画播放的时间（我们称之为`then`），然后将以下代码添加到主函数的末尾

```js
var then = 0;

// Draw the scene repeatedly
function render(now) {
  now *= 0.001; // convert to seconds
  const deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, deltaTime);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

该代码用于 `requestAnimationFrame` 要求浏览器在每一帧上调用函数“`render`”。`requestAnimationFrame` 自页面加载以来经过的时间（以毫秒为单位）。我们将其转换为秒，然后从中减去，以计算 `deltaTime` 自渲染最后一帧以来的秒数。在 drawscene 的结尾，我们添加了要更新的代码 `squareRotation`。

```js
squareRotation += deltaTime;
```

该代码使用自上次我们更新值以来所经过的时间`squareRotation`来确定旋转正方形的距离。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[查看完整代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [在新页面中打开示例](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
