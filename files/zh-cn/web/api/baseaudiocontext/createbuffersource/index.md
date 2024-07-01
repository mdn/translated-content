---
title: AudioContext.createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
---

{{ APIRef("Web Audio API") }}

`createBufferSource()` 方法用于创建一个新的{{ domxref("AudioBufferSourceNode") }}接口，该接口可以通过{{ domxref("AudioBuffer") }} 对象来播放音频数据。{{ domxref("AudioBuffer") }}对象可以通过{{domxref("AudioContext.createBuffer")}} 来创建或者通过 {{domxref("AudioContext.decodeAudioData")}}成功解码音轨后获取。

## 语法

```js
var audioCtx = new AudioContext();
var source = audioCtx.createBufferSource();
```

## 返回

一个{{domxref("AudioBufferSourceNode")}}对象。

## 例子

在这个例子中，我们将会创建一个 2 秒的缓冲器，并用白噪音填充它，然后通过{{ domxref("AudioBufferSourceNode") }}来播放它。

> **备注：** You can also [run the code live](http://mdn.github.io/audio-buffer/), or [view the source](https://github.com/mdn/audio-buffer).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector("button");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// Stereo
var channels = 2;
// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function () {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  var source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
