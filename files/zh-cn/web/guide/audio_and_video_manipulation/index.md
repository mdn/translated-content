---
title: 音频与视频处理
slug: Web/Guide/Audio_and_video_manipulation
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
</section>

Web 的迷人之处在于你可以结合各种技术创造出新的形式。拥有浏览器中的原生音频和视频意味着我们可在像 {{htmlelement("canvas")}}、[WebGL](/zh-CN/docs/Web/API/WebGL_API) 或 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 等技术的辅助下使用这类数据流，例如：为音频添加混响和压缩效果，或为视频添加灰度/暗色滤镜。本文将为你提供相关的参考。

## 视频处理

读取视频中每帧的像素值的能力是十分实用的。

### 视频与 canvas

{{htmlelement("canvas")}} 元素能提供一个平面，让你能在网页上画图，该功能十分强大并且可以与视频紧密结合。

总体技术过程为：

1. 从 {{htmlelement("video")}} 元素中读取一帧写到 {{htmlelement("canvas")}} 元素中。
2. 读取 `<canvas>` 元素中的数据并处理。
3. 将处理完成的数据写入“显示”的 `<canvas>` 中（实际上可以是相同的元素）。
4. 暂停并重复。

例如，我们要处理一个视频，将其灰度显示。在本例中，我们需展示出源视频和输出的灰度帧。正常情况下，如果你要实现“添加灰度滤镜”功能，那也许可以在 `<video>` 元素的样式里添加 `dispaly: none`，目的是防止源视频被绘制到屏幕上，同时只展示显示已被更改了帧的画布。

#### HTML

我们可将视频播放器和 `<canvas>` 元素如此设置：

```html
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### JavaScript

该代码负责更变帧数。

```js
const processor = {
  timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
      this.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");

    this.video.addEventListener(
      "play",
      () => {
        this.width = this.video.width;
        this.height = this.video.height;
        this.timerCallback();
      },
      false,
    );
  },

  computeFrame() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      const grey =
        (frame.data[i * 4 + 0] +
          frame.data[i * 4 + 1] +
          frame.data[i * 4 + 2]) /
        3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  },
};
```

一旦网页加载完成，可以调用

```js
processor.doLoad();
```

#### 结果

{{EmbedLiveSample("视频与 canvas", '100%', 580)}}

这是个十分简单的例子，展示出了如何用画布来处理视频帧。为提升效率，你应该在支持 `requestAnimationFrame` 的浏览器上运行代码时，选择使用 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}，而不是 `setTimeout()`。

你还可通过在源 `<video>` 元素中采用 {{cssxref("filter-function/grayscale", "grayscale()")}} CSS 功能以达到同样的效果。

> **备注：** 由于存在潜在安全问题，如果你的视频和代码处在不同域，你需要在视频服务器上启用 [CORS（跨源资源共享）](/zh-CN/docs/Web/HTTP/CORS)。

### 视频与 WebGL

[WebGL](/zh-CN/docs/Web/API/WebGL_API) 是个很强大的 API，它使用画布来绘制出硬件加速的 3D 或 2D 场景。你可结合 WebGL 与 {{htmlelement("video")}} 元素来创造视频纹理，这意味着你可将视频放置到 3D 场景内。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **备注：** 你可在 [GitHub 上找到演示的源代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8)（[查看在线演示](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)）。

### 播放速度

我们也可使用一个 {{htmlelement("audio")}} 与 {{htmlelement("video")}} 元素的属性来调整视频播放的速度，这个属性叫做 {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}}。`playbackRate` 是一个数值，表示回放速率的倍数，例如 0.5 表示半速，而 2 表示倍速。

请注意，`playbackRate` 属性适用于 `<audio>` 和 `<video>`，但在这两种情况下，它改变的是播放速度，而不是音高。要调整音频的音调则需使用 Web Audio API。参见 {{domxref("AudioBufferSourceNode.playbackRate")}} 属性。

#### HTML

```html
<video
  id="my-video"
  controls
  src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"></video>
```

#### JavaScript

```js
const myVideo = document.getElementById("my-video");
myVideo.playbackRate = 2;
```

#### 可编辑示例

```html hidden
<video id="my-video" controls="true" width="480" height="270">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
const myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea
>
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", setPlaybackRate);
window.addEventListener("load", setPlaybackRate);
```

{{ EmbedLiveSample('可编辑示例', 700, 450) }}

> **备注：** 尝试在线的 [playbackRate 示例](https://jsbin.com/qomuvefu/2/edit)。

## 音频处理

除 `playbackRate` 以外，处理音频通常要使用 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)。

### 选择音频源

Web Audio API 可接收各种音源的音频，处理好音频后将其发送回 {{domxref("AudioDestinationNode")}}，代表的是声音处理后发送到的那个输出设备。

| 如果音频源是...                                                                                                                             | 使用这种网页音频节点类型                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 来自 HTML {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素的音频轨道                                                               | {{domxref("MediaElementAudioSourceNode")}} |
| 内存中的简单原始音频数据缓冲区                                                                                                              | {{domxref("AudioBufferSourceNode")}}       |
| 产生正弦波或其他计算波形的振荡器                                                                                                            | {{domxref("OscillatorNode")}}              |
| 来自 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 的音频轨道（比如麦克风输入，可使用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} | {{domxref("MediaStreamAudioSourceNode")}}  |

### 音频滤镜

Web Audio API 拥有多种不同的滤镜和效果，可以使用 {{domxref("BiquadFilterNode")}} 将其应用于音频中，比如

#### HTML

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

#### JavaScript

```js
const context = new AudioContext();
const audioSource = context.createMediaElementSource(
  document.getElementById("my-video"),
);
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### 可编辑示例

```html hidden
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
  filter.type = "lowshelf";
  filter.frequency.value = 1000;
  filter.gain.value = 25;
</textarea>
```

```js hidden
const context = new AudioContext();
const audioSource = context.createMediaElementSource(
  document.getElementById("my-video"),
);
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  setFilter();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", setFilter);
window.addEventListener("load", setFilter);
```

{{ EmbedLiveSample('可编辑示例_2', 700, 450) }}

> **备注：** 除非你启用了 [CORS](/zh-CN/docs/Web/HTTP/CORS)，否则，为避免安全问题，你的视频应与你的代码处于同一个域中。

#### 常用音频滤镜

以下为一些可以使用的常用音频滤镜类型：

- 低通（Low Pass）：允许低于截止频率的信号通过，并减弱高于截止频率的信号。
- 高通（High Pass）：允许高于截止频率的信号通过，并减弱低于截止频率的信号。
- 带通（Band Pass）：允许一定范围内的频率通过，并减弱低于或高于该频率范围的信号。
- 低频搁架（Low Shelf）：允许所有频率通过，但增强（或减弱）较低频率的信号。
- 高频搁架（High Shelf）：允许所有频率通过，但增强（或减弱）较高频率的信号。
- 峰值（Peaking）：允许所有频率的信号通过，但增强（或减弱）一定频率范围的信号。
- 陷波（Notch）：允许所有频率的信号通过，但一组频率除外。
- 全通（All Pass）：允许所有频率的信号通过，但改变个频率之间的相位关系。

> **备注：** 参见 {{domxref("BiquadFilterNode")}} 以了解详情。

### 卷积和脉冲

也可使用 {{domxref("ConvolverNode")}} 将脉冲响应运用到音频中。**脉冲响应**指短暂声音脉冲后产生的声音（比如拍掌）。脉冲响应表示产生脉冲的环境（比如在隧道中鼓掌产生的回声）。

#### 示例

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

参见 [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) 以获取应用示例（示例较为尴尬）。

### 空间音频

我们也可使用 **panner 节点**来对音频定位。panner 节点——{{domxref("PannerNode")}}——可以让我们界定出一个源锥（位置和方向）元素，所有这些都是使用 3D 笛卡尔坐标在 3D 空间中界定的。

#### 示例

```js
const panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> **备注：** 你可以在 [GitHub 仓库中找到示例](https://github.com/mdn/webaudio-examples/tree/master/panner-node)（也可以[查看在线演示](https://mdn.github.io/webaudio-examples/panner-node/)）。

### JavaScript 编解码器

还可以使用 JavaScript 在底层操控音频。如果你想创建音频编解码器（codec），那这会很有用。

目前存在以下格式的库：

- AAC：[AAC.js](https://github.com/audiocogs/aac.js)
- ALAC：[alac.js](https://github.com/audiocogs/alac.js)
- FLAC：[flac.js](https://github.com/audiocogs/flac.js)
- MP3：[mp3.js](https://github.com/audiocogs/mp3.js)
- Opus：[Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis：[vorbis.js](https://github.com/audiocogs/vorbis.js)

> **备注：** 你可以在 Audiocogs [尝试一些演示](http://audiocogs.org/codecs/)；Audiocogs 还提供了一个框架——[Aurora.js](http://audiocogs.org/codecs/)，旨在帮助你使用 JavaScript 创建自己的编解码器。

## 示例

- [各种 Web Audio API（及其他）示例](https://github.com/mdn/webaudio-examples)
- [THREE.js 视频立方体示例](https://github.com/chrisdavidmills/threejs-video-cube)
- [实时卷积效应](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## 参见

### 教程

- [使用 Canvas 处理视频](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate 解释](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web 空间音效基础](/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [将视频帧作为 WebGL 纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#用视频帧作为纹理)（你也可以使用 [THREE.js](https://threejs.org) WebGL 库（或其他库）来[实现这个效果](https://stemkoski.github.io/Three.js/Video.html)）
- [WebGL 动画纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [使用 Web Audio API 开发游戏音频（房间效果和滤镜）（2012）](https://web.dev/webaudio-games/#room-effects-and-filters)

### 参考

- {{htmlelement("audio")}} 和 {{htmlelement("video")}} 元素
- {{domxref("HTMLMediaElement")}} API
- {{htmlelement("canvas")}} 元素
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
- [AudioContext](/zh-CN/docs/Web/API/AudioContext)
- [空间音效](/zh-CN/docs/Web/API/BaseAudioContext/createPanner)的更多相关内容
- [Web 媒体技术](/zh-CN/docs/Web/Media)
