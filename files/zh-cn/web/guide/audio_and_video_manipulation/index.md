---
title: 音频与视频处理
slug: Web/Guide/Audio_and_video_manipulation
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
</section>

网页的迷人之处在于你可以结合各种技术创造出新的形式。拥有浏览器中的原生音频和视频意味着我们可在像 {{htmlelement("canvas")}}、[WebGL](/zh-CN/docs/Web/API/WebGL_API)或者[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)等技术的辅助下，使用数据流来直接修改音频视频，例如：为音频添加混响和压缩效果，或为视频添加灰度/暗色滤镜。本文将为你提供参考

## 视频处理

读取视频中每帧的像素值的能力是十分实用的。

### 视频与canvas

{{htmlelement("canvas")}} 元素能提供一个平面，让你能在网页上画图，该功能十分强大并且可以与视频紧密耦合

The general technique is to:

总体技术过程为：

1. 从 {{htmlelement("video")}} 元素中读取一帧写到 {{htmlelement("canvas")}} 元素中。
2. 读取 `<canvas>` 元素中的数据并处理。
3. 将处理完成的数据写入 “display” 的 `<canvas>` 中（实际上可以是相同的元素）。
4. 暂停并重复。

例如，我们要处理一个视频，将其灰度显示。在本例中，我们需展示出源视频和输出的灰度帧。正常情况下，如果你要实现“添加灰度滤镜”功能，那也许可以在 `<video>` 元素的样式里添加 `dispaly: none`，目的是防止源视频被绘制到屏幕上，同时只展示显示已被更改了帧数的画布。

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
      false
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

一旦网页加载，可执行

```js
processor.doLoad();
```

#### 结果

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

这是个十分简单的例子，展示出了如何用画布来处理视频帧数。为提升效率，你应该在支持 `requestAnimationFrame` 的浏览器上运行代码时，选择使用 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}，而不是`setTimeout()`。

你还可通过在源 `<video>` 元素中采用 {{cssxref("filter-function/grayscale", "grayscale()")}} CSS 功能以达到同样的效果。

> **注意：** 由于存在潜在安全问题，如果您的视频和代码处在不同域，您需要在视频服务器上启用 [CORS (跨源资源共享)](/zh-CN/docs/Web/HTTP/CORS)

### 视频与WebGL

[WebGL](/zh-CN/docs/Web/API/WebGL_API) 是个很强大的API，它使用画布来绘制出硬件加速的3D或2D场景。你可结合WebGL与 {{htmlelement("video")}} 元素来创造视频纹理，这意味着你可将视频放置到3D场景内。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **注：** 你可在 [GitHub上找到展示视频的源代码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([在线演示](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/))。

### 播放速度

我们也可使用一个 {{htmlelement("audio")}} 与 {{htmlelement("video")}} 元素的属性来调整视频播放的速度，这个属性叫做 {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} 。 `playbackRate` 是一个数值，表示回放速率的倍数，例如0.5表示半速，而2表示倍速。

请注意，`playbackRate` 属性适用于 `<audio>` 和 `<video>`，但在这两种情况下，它改变的是播放速度，而不是音高。要操纵音频的音调的话需要使用Web audio API。参见 {{domxref("AudioBufferSourceNode.playbackRate")}} 特性。

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

#### Editable example

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

{{ EmbedLiveSample('Editable_example', 700, 450) }}

> **Note:** Try the [playbackRate example](https://jsbin.com/qomuvefu/2/edit) live.

## 音频处理

除 `playbackRate` 以外，要处理音频通常要使用[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API).

### 选择音频源

Web Audio API可接收各种音源的音频，处理好音频后将其发送回 {{domxref("AudioDestinationNode")}}，代表的是声音处理后发送回的那个输出设备。

| 如果音频源是...                                                                                                                                                 | 使用这种网页音频节点类型              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| 来自HTML {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素的音频轨道                                                                                               | {{domxref("MediaElementAudioSourceNode")}} |
| 内存中的简单原始音频数据缓冲区                                                                                                                                              | {{domxref("AudioBufferSourceNode")}}       |
| 产生正弦波或其它计算波形的振荡器                                                                                                                                            | {{domxref("OscillatorNode")}}              |
| 来自 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 的音频轨道（比如麦克风输入，可使用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}                                | {{domxref("MediaStreamAudioSourceNode")}}  |

### 音频滤镜

Web Audio API拥有多种不同的滤镜和效果，可以使用 {{domxref("BiquadFilterNode")}} 将其应用于音频中，比如

#### HTML

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

#### JavaScript

```js
const context = new AudioContext();
const audioSource = context.createMediaElementSource(
  document.getElementById("my-video")
);
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### Editable example

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
  document.getElementById("my-video")
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

{{ EmbedLiveSample('Editable_example_2', 700, 450) }}

> **Note:** unless you have [CORS](/en-US/docs/Web/HTTP/CORS) enabled, to avoid security issues your video should be on the same domain as your code.

#### 常用音频滤镜

以下为一些常用的音频滤镜类型可使用:

- Low Pass: Allows frequencies below the cutoff frequency to pass through and attenuates frequencies above the cutoff.
- High Pass: Allows frequencies above the cutoff frequency to pass through and attenuates frequencies below the cutoff.
- Band Pass: Allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range.
- Low Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies.
- High Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the higher frequencies.
- Peaking: Allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.
- Notch: Allows all frequencies through, except for a set of frequencies.
- All Pass: Allows all frequencies through, but changes the phase relationship between the various frequencies.

> **Note:** See {{domxref("BiquadFilterNode")}} for more information.

### 卷积和脉冲

也可使用 {{domxref("ConvolverNode")}} 将脉冲响应运用到音频中。**脉冲响应**指短暂声音脉冲后产生的声音（比如拍掌）。脉冲响应表示产生脉冲的环境(比如在隧道中鼓掌产生的回声)。

#### Example

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

See this [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) for an applied (but very, very silly; like, little kids will giggle kind of silly) example.

### 空间音频

我们也可使用**声坯节点**来放置音频。—{{domxref("PannerNode")}}—让我们界定出一个源锥以及位置和方向元素，所有这些都是使用3D笛卡尔坐标在3D空间中界定的。

#### Example

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

> **Note:** You can find an [example on our GitHub repository](https://github.com/mdn/webaudio-examples/tree/master/panner-node) ([see it live](https://mdn.github.io/webaudio-examples/panner-node/) also).

### JavaScript codecs

It's also possible to manipulate audio at a low level using JavaScript. This can be useful should you want to create audio codecs.

Libraries currently exist for the following formats:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> **Note:** At Audiocogs, you can [Try out a few demos](http://audiocogs.org/codecs/); Audiocogs also provides a framework, [Aurora.js](http://audiocogs.org/codecs/), which is intended to help you author your own codecs in JavaScript.

## Examples

- [Various Web Audio API (and other) examples](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube example](https://github.com/chrisdavidmills/threejs-video-cube)
- [Convolution Effects in Real-Time](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## See also

### Tutorials

- [Manipulating Video Using Canvas](/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate explained](/en-US/docs/Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Using Video frames as a WebGL Texture](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (You can also the [THREE.js](https://threejs.org) WebGL library (and others) to [achieve this effect](https://stemkoski.github.io/Three.js/Video.html))
- [Animating Textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Developing Game Audio with the Web Audio API (Room effects and filters) (2012)](https://web.dev/webaudio-games/#room-effects-and-filters)

### Reference

- The {{htmlelement("audio")}} and {{htmlelement("video")}} elements
- The {{domxref("HTMLMediaElement")}} API
- The {{htmlelement("canvas")}} element
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [AudioContext](/en-US/docs/Web/API/AudioContext)
- More info on [Spatial Audio](/en-US/docs/Web/API/BaseAudioContext/createPanner)
- [Web media technologies](/en-US/docs/Web/Media)
