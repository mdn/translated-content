---
title: 动画纹理
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---

{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

在本演示中，我们以上一个示例为基础，将静态纹理替换为正在播放的 mp4 视频文件的帧。实际上，这很容易做到，而且观看起来很有趣，所以让我们开始吧。您可以使用类似的代码来使用任何类型的数据（例如 {{ HTMLElement("canvas") }}) 作为纹理的源。

## 获取视频

第一步是创建 {{ HTMLElement("video") }} 将用于检索视频帧的元素：

```js
// will set to true when video can be copied to texture
var copyVideo = false;

function setupVideo(url) {
  const video = document.createElement('video');

  var playing = false;
  var timeupdate = false;

  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  // Waiting for these 2 events ensures
  // there is data in the video

  video.addEventListener('playing', function() {
     playing = true;
     checkReady();
  }, true);

  video.addEventListener('timeupdate', function() {
     timeupdate = true;
     checkReady();
  }, true);

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

首先，我们创建一个视频元素。我们将其设置为自动播放，静音和循环播放视频。然后，我们设置了两个事件以确保视频正在播放并且时间轴已更新。我们需要进行这两项检查，因为如果将视频上传到 WebGL 尚无可用数据，它将产生错误。检查这两个事件可确保有可用数据，并且可以安全地开始将视频上传到 WebGL 纹理。在上面的代码中，我们确认是否同时发生了这两个事件。如果是这样，我们将全局变量设置 `copyVideo` 为 true，以表示可以安全地开始将视频复制到纹理。

最后，我们将 `src` 属性设置为 start 并调用 `play` 以开始加载和播放视频。

## 用视频帧作为纹理

接下来的更改是 `initTexture()`，它变得更加简单，因为它不再需要加载图像文件。相反，它所做的只是创建一个空的纹理对象，在其中放置一个像素，然后设置其过滤条件供以后使用：

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because video has to be download over the internet
  // they might take a moment until it's ready so
  // put a single pixel in the texture so we can
  // use it immediately.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  // Turn off mips and set  wrapping to clamp to edge so it
  // will work regardless of the dimensions of the video.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

这里是 `updateTexture()` 方法，这是完成实际工作的地方：

```js
function updateTexture(gl, texture, video) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                srcFormat, srcType, video);
}
```

您之前已经看过此代码。它与上一个示例中的 image onload 函数几乎相同 - 除非我们调用 `texImage2D()`，不是传递 `Image` 对象，而是传递 {{ HTMLElement("video") }} 元素。WebGL 知道如何拉出当前帧并将其用作纹理。

然后，在 `main()` 代替通话，以 `loadTexture()` 在前面的例子中，我们调用 `initTexture()` 之后 `setupVideo()`。

在 `render()` 是否 `copyVideo` 为真的定义中，则 `updateTexture()` 每次调用 `drawScene()` 函数之前都会调用一次。

```js
  const texture = initTexture(gl);

  const video = setupVideo('Firefox.mp4');

  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    if (copyVideo) {
      updateTexture(gl, texture, video);
    }

    drawScene(gl, programInfo, buffers, texture, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
```

下面是结果：

{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[查看完整的代码](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8) | [在新页中打开这个 demo](https://mdn.github.io/webgl-examples/tutorial/sample8/)

## 参见

- [Using audio and video in Firefox](/zh-CN/Using_HTML5_audio_and_video)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
