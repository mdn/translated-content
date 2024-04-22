---
title: AudioBuffer
slug: Web/API/AudioBuffer
---

{{APIRef("Web Audio API")}}

AudioBuffer 接口表示存在内存里的一段短小的音频资源，利用{{ domxref("AudioContext.decodeAudioData()") }}方法从一个音频文件构建，或者利用 {{ domxref("AudioContext.createBuffer()") }}从原始数据构建。把音频放入 AudioBuffer 后，可以传入到一个 {{ domxref("AudioBufferSourceNode") }}进行播放。

这些类型对象被设计来控制小音频片段，往往短于 45 秒。对于更长的声音，通过 {{domxref("MediaElementAudioSourceNode")}}来实现更为合适。缓存区（buffer）包含以下数据：不间断的 IEEE754 32 位线性 PCM，从 -1 到 1 的范围额定，就是说，32 位的浮点缓存区的每个样本在 -1.0 到 1.0 之间。如果{{domxref("AudioBuffer")}}有不同的频道，他们通常被保存在独立的缓存区。

## 属性

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : 存储在缓存区的 PCM 数据的采样率：浮点数，单位为 sample/s。
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : 返回存储在缓存区的 PCM 数据的采样帧数：整型。
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : 返回存储在缓存区的 PCM 数据的时长：双精度型（单位为秒）。
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : 返回存储在缓存区的 PCM 数据的通道数：整型。

## 方法

- {{domxref("AudioBuffer.getChannelData()")}}
  - : 返回一个 {{jsxref("Float32Array")}}，包含了带有频道的 PCM 数据，由频道参数定义（有 0 代表第一个频道）
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : 从 AudioBuffer 的指定频道复制到数组终端。
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : 复制样品到原数组的 AudioBuffer 的指定频道

## 例子

以下的例子展示了如何构建一个 AudioBuffer 以及随机用白噪音填充。你可以在 [audio-buffer 演示](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer)库发现完整的源代码；也可以获得一个[实时运行的](https://mdn.github.io/webaudio-examples/audio-buffer/)的版本。

```js
// Stereo
var channels = 2;

// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;
var myArrayBuffer = audioCtx.createBuffer(
  channels,
  frameCount,
  audioCtx.sampleRate,
);

button.onclick = function () {
  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual array that contains the data
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

## 规格参数

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 可查看

- [应用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
