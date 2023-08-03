---
title: Обработка аудио и видео
slug: Web/Guide/Audio_and_video_manipulation
---

Веб-технологии примечательны тем, что они позволяют использовать различные инструменты в совокупности. Например, можно проводить манипуляции над имеющимися в браузере аудио и видео потоками с помощью {{htmlelement("canvas")}}, [WebGL](/ru/docs/Web/WebGL) или [Web Audio API](/ru/docs/Web/API/Web_Audio_API): напрямую изменять аудио и видео, т.е. добавлять эффекты к аудио (реверберацию, компрессор), или к видео (фильтры ч/б, сепия и т.д.). В этой статье рассказывается о том, как это сделать.

> **Примечание:** **Далее** ещё в процессе перевода.

## Обработка видео

Иногда удобно перенимать индивидуально размеры кадра в пикселях с каждого конкретного видео.

### Видео и холст (canvas)

Элемент "холст" ({{htmlelement("canvas")}}) — представляет поверхность (область) для рисования графикой на веб-странице. Это очень мощный инструмент, поэтому он может использоваться совместно с видео.

Обычно это происходит следующим образом:

1. Write a frame from the {{htmlelement("video")}} element to an intermediary {{htmlelement("canvas")}} element.
2. Read the data from the intermediary `<canvas>` element and manipulate it.
3. Write the manipulated data to your "display" `<canvas>`.
4. Pause and repeat.

For example, let's process a video to display it in greyscale. In this case, we'll show both the source video and the output greyscale frames. Ordinarily, if you were implementing a "play video in greyscale" feature, you'd probably add `display: none` to the style for the `<video>` element, to keep the source video from being drawn to the screen while showing only the canvas showing the altered frames.

#### HTML

We can set up our video player and `<canvas>` element like this:

```html
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### JavaScript

This code handles altering the frames.

```js
var processor = {
  timerCallback: function () {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    var self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad: function () {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;

    this.video.addEventListener(
      "play",
      function () {
        self.width = self.video.width;
        self.height = self.video.height;
        self.timerCallback();
      },
      false,
    );
  },

  computeFrame: function () {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;

    for (var i = 0; i < l; i++) {
      var grey =
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

Когда страница загрузилась осуществите вызов:

```js
processor.doLoad();
```

#### Результат

{{EmbedLiveSample("Видео_и_холст_canvas", '100%', 580)}}

This is a pretty simple example showing how to manipulate video frames using a canvas. For efficiency, you should consider using {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} instead of `setTimeout()` when running on browsers that support it.

> **Примечание:** Due to potential security issues if your video is on a different domain than your code, you'll need to enable [CORS (Cross Origin Resource Sharing)](/ru/docs/Web/HTTP/Access_control_CORS) on your video server.

### Видео и WebGL

[WebGL](/ru/docs/Web/WebGL) is a powerful API that uses canvas to draw hardware-accelerated 3D or 2D scenes. You can combine WebGL and the {{htmlelement("video")}} element to create video textures, which means you can put video inside 3D scenes.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **Примечание:** You can find the [source code of this demo on GitHub](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8) ([see it live](https://mdn.github.io/webgl-examples/tutorial/sample8/) also).

### Скорость воспроизведения

We can also adjust the rate that audio and video plays at using an attribute of the {{htmlelement("audio")}} and {{htmlelement("video")}} element called {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}}. `playbackRate` is a number that represents a multiple to be applied to the rate of playback, for example 0.5 represents half speed while 2 represents double speed.

Note that the `playbackRate` property works with both `<audio>` and `<video>`, but in both cases, it changes the playback speed but _not_ the pitch. To manipulate the audio's pitch you need to use the Web Audio API. See the {{domxref("AudioBufferSourceNode.playbackRate")}} property.

#### HTML

```html
<video
  id="my-video"
  controls
  src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"></video>
```

#### JavaScript

```js
var myVideo = document.getElementById("my-video");
myVideo.playbackRate = 2;
```

```html hidden
<video id="my-video" controls="true" width="480" height="270">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea
>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", setPlaybackRate);
window.addEventListener("load", setPlaybackRate);
```

{{ EmbedLiveSample('Playable_code', 700, 425) }}

> **Примечание:** Попробуйте запустить [этот пример](http://jsbin.com/qomuvefu/2/edit).

## Обработка аудио

`playbackRate` aside, to manipulate audio you'll typically use the [Web Audio API](/ru/docs/Web/API/Web_Audio_API).

### Выбор источника аудио

The Web Audio API can receive audio from a variety of sources, then process it and send it back out to an {{domxref("AudioDestinationNode")}} representing the output device to which the sound is sent after processing.

| If the audio source is...                                                                                                                                             | Use this Web Audio node type               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| An audio track from an HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}} element                                                                              | {{domxref("MediaElementAudioSourceNode")}} |
| A plain raw audio data buffer in memory                                                                                                                               | {{domxref("AudioBufferSourceNode")}}       |
| An oscillator generating a sine wave or other computed waveform                                                                                                       | {{domxref("OscillatorNode")}}              |
| An audio track from [WebRTC](/ru/docs/Web/API/WebRTC_API) (such as the microphone input you can get using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}. | {{domxref("MediaStreamAudioSourceNode")}}  |

### Аудио фильтры

The Web Audio API has a lot of different filter/effects that can be applied to audio using the {{domxref("BiquadFilterNode")}}, for example.

#### HTML

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

#### JavaScript

```js
var context = new AudioContext(),
  audioSource = context.createMediaElementSource(
    document.getElementById("my-video"),
  ),
  filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

```html hidden
<video
  id="my-video"
  controls="true"
  width="480"
  height="270"
  crossorigin="anonymous">
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;</textarea
>
```

```js hidden
var context = new AudioContext(),
  audioSource = context.createMediaElementSource(
    document.getElementById("my-video"),
  ),
  filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  setFilter();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", setFilter);
window.addEventListener("load", setFilter);
```

{{ EmbedLiveSample('Playable_code_2', 700, 425) }}

> **Примечание:** unless you have [CORS](/ru/docs/Web/HTTP/Access_control_CORS) enabled, to avoid security issues your video should be on the same domain as your code.

#### Типичные для аудио фильтры

These are some of the common types of audio filter you can apply:

- Low Pass: Allows frequencies below the cutoff frequency to pass through and attenuates frequencies above the cutoff.
- High Pass: Allows frequencies above the cutoff frequency to pass through and attenuates frequencies below the cutoff.
- Band Pass: Allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range.
- Low Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies.
- High Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the higher frequencies.
- Peaking: Allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.
- Notch: Allows all frequencies through, except for a set of frequencies.
- Allpass: Allows all frequencies through, but changes the phase relationship between the various frequencies.

> **Примечание:** Более подробно смотрите здесь: {{domxref("BiquadFilterNode")}}

### Convolutions and impulses

It's also possible to apply impulse responses to audio using the {{domxref("ConvolverNode")}}. An **impulse response** is the sound created after a brief impulse of sound (like a hand clap). An impulse response will signify the environment in which the impulse was created (for example, an echo created by clapping your hands in a tunnel).

#### Пример

```js
var convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

See this [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) for an applied (but very, very silly; like, little kids will giggle kind of silly) example.

### Spatial audio

We can also position audio using a **panner node**. A panner node—{{domxref("PannerNode")}}—lets us define a source cone as well as positional and directional elements, all in 3D space as defined using 3D cartesian coordinates.

#### Пример

```js
var panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> **Примечание:** You can find an [example on our GitHub repo](https://github.com/mdn/webaudio-examples/tree/master/panner-node)sitory ([see it live](https://mdn.github.io/webaudio-examples/panner-node/) also).

## Кодеки JavaScript

It's also possible to manipulate audio at a low level using JavaScript. This can be useful should you want to create audio codecs.

Libraries currently exist for the following formats :

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> **Примечание:** At Audiocogs, you can [Try out a few demos](http://audiocogs.org/codecs/); Audiocogs also provides a framework, [Aurora.js](http://audiocogs.org/codecs/), which is intended to help you author your own codecs in JavaScript.

## Примеры

- [Various Web Audio API (and other) examples](https://github.com/mdn/)
- [THREE.js Video Cube example](https://github.com/chrisdavidmills/threejs-video-cube)
- [Convolution Effects in Real-Time](http://chromium.googlecode.com/svn/trunk/samples/audio/convolution-effects.html)

## Смотрите также

### Tutorials

- [Manipulating Video Using Canvas](/ru/docs/Web/HTML/Manipulating_video_using_canvas)
- [HTML5 playbackRate explained](/en-US/Apps/Build/Manipulating_media/HTML5_playbackRate_explained)
- [Using the Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web audio spatialisation basics](/ru/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Using Video frames as a WebGL Texture](/ru/docs/Web/WebGL/Animating_textures_in_WebGL#Using_the_video_frames_as_a_texture) (You can also the [THREE.js](http://threejs.org) WebGL library (and others) to [achieve this effect](http://stemkoski.github.io/Three.js/Video.html))
- [Animating Textures in WebGL](/ru/docs/Web/WebGL/Animating_textures_in_WebGL)
- [Developing Game Audio with the Web Audio API (Room effects and filters)](http://www.html5rocks.com/en/tutorials/webaudio/games/#toc-room)

### Reference

- The {{htmlelement("audio")}} and {{htmlelement("video")}} elements
- The {{domxref("HTMLMediaElement")}} API
- The {{htmlelement("canvas")}} element
- [Web Audio API](/ru/docs/Web/API/Web_Audio_API)
- [AudioContext](/ru/docs/Web/API/AudioContext)
- More info on [Spatial Audio](/ru/docs/Web/API/AudioContext.createPanner)
- [Web media technologies](/ru/docs/Web/Media)

{{QuickLinksWithSubpages("/ru/docs/Web/Apps/Fundamentals/")}}
