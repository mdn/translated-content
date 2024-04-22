---
title: AudioBuffer.getChannelData()
slug: Web/API/AudioBuffer/getChannelData
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBuffer") }} 接口的 getChannelData() 方法返回一{{domxref("Float32Array")}} ，其中包含与通道关联的 PCM 数据，通道参数定义 (0 表示第一个通道)。

## 语法

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
var nowBuffering = myArrayBuffer.getChannelData(channel);
```

### 参数

- channel
  - : channel 属性是要获取特定通道数据的索引。0 代表第一个通道。如果索引值大于或等于{{domxref("AudioBuffer.numberOfChannels")}}, 会抛出一个索引大小异常（`INDEX_SIZE_ERR` ）的错误。

### 返回值

{{domxref("Float32Array")}}.

## 例子

在下例中，我们创建一个 2 秒钟的缓冲区，用白噪声填充它，然后通过{{domxref("AudioBufferSourceNode") }}来播放它。评论应该会清楚的解释发生的事情。你也可以[实时运行代码](https://mdn.github.io/webaudio-examples/audio-buffer/)，或者[查看源代码](https://github.com/mdn/webaudio-examples)。

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

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
