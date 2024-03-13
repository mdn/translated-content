---
title: 动画纹理
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

在本演示中，我们以上一个示例为基础，将静态纹理替换为正在播放的 mp4 视频文件的帧。实际上，这很容易做到，而且观看起来很有趣，所以让我们开始吧。你可以使用类似的代码来使用任何类型的数据（例如 {{ HTMLElement("canvas") }}）作为纹理的源。

## 获取视频

第一步是创建将用于检索视频帧的 {{ HTMLElement("video") }} 元素：

> **备注：** 请将以下声明添加到“webgl-demo.js”脚本的开头：

```js
// 当视频可以复制到纹理中时将被设置为 true
let copyVideo = false;
```

> **备注：** 请将以下函数添加到“webgl-demo.js”脚本中：

```js
function setupVideo(url) {
  const video = document.createElement("video");

  let playing = false;
  let timeupdate = false;

  video.playsInline = true;
  video.muted = true;
  video.loop = true;

  // 等待以下两个事件
  // 确保 video 中已有数据

  video.addEventListener(
    "playing",
    () => {
      playing = true;
      checkReady();
    },
    true,
  );

  video.addEventListener(
    "timeupdate",
    () => {
      timeupdate = true;
      checkReady();
    },
    true,
  );

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      copyVideo = true;
    }
  }

  return video;
}
```

首先，我们创建一个视频元素。我们将其设置为自动播放、静音和循环播放视频。然后，我们设置了两个事件以确保视频正在播放并且时间轴已更新。我们需要进行这两项检查，因为如果将尚无可用数据的视频上传到 WebGL，它将产生错误。检查这两个事件可确保有可用数据，并且可以安全地开始将视频上传到 WebGL 纹理。在上面的代码中，我们确认是否同时发生了这两个事件。如果是这样，我们将全局变量设置 `copyVideo` 为 true，以表示可以安全地开始将视频复制到纹理。

最后，我们将 `src` 属性设置为 start 并调用 `play` 以开始加载和播放视频。

## 用视频帧作为纹理

接下来的更改是初始化纹理，这很简单，因为它不再需要加载图像文件。相反，它所做的只是创建一个空的纹理对象，在其中放置一个像素，然后设置其过滤条件以供后续使用：

> **备注：** 请将“webgl-demo.js”中的 `loadTexture()` 函数替换为以下代码：

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 因为视频必须通过互联网下载
  // 可能需要一些时间才能准备好
  // 因此在纹理中放置一个像素，以便我们
  // 可以立即使用它。
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // 不透明的蓝色
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  // 关闭 mips 并将包裹（wrapping）设置为边缘分割（clamp to edge）
  // 这样无论视频的尺寸如何，都可以正常工作。
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

> **备注：** 请将以下函数添加到“webgl-demo.js”中：

```js
function updateTexture(gl, texture, video) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    srcFormat,
    srcType,
    video,
  );
}
```

你之前已经看过此代码。它与上一个示例中的 image onload 函数几乎相同——除了我们调用 `texImage2D()` 时传入的是 {{ HTMLElement("video") }} 元素，而不是 `Image` 对象。WebGL 知道如何获取当前帧并将其用作纹理。

然后，我们需要在 `main()` 函数中调用几个新的函数。

> **备注：** 在你的 `main()` 函数中，将调用 `loadTexture()` 的代码替换为以下内容：

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> **备注：** 你还需要将 [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) 文件下载到你本地与你的 JavaScript 文件相同的目录中。

> **备注：** 在你的 `main()` 函数中，将 `render()` 函数替换为以下内容：

```js
// 重复绘制场景
function render(now) {
  now *= 0.001; // 转换为秒
  deltaTime = now - then;
  then = now;

  if (copyVideo) {
    updateTexture(gl, texture, video);
  }

  drawScene(gl, programInfo, buffers, texture, cubeRotation);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
}
```

如果 `copyVideo` 为真，我们将会在调用 `drawScene()` 之前调用 `updateTexture()`。

这就是实现动画纹理的全部内容！

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[查看完整的代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [在新页面中打开这个演示](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## 参见

- [在 Firefox 中使用音视频](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
