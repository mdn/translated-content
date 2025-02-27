---
title: AudioBufferSourceNode.buffer
slug: Web/API/AudioBufferSourceNode/buffer
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBufferSourceNode") }} 接口的 **`buffer`** 属性提供了重复播放音频的能力，该音频使用 {{domxref("AudioBuffer")}} 作为声音文件的来源。

如果 `buffer` 属性的值为 `null`，节点会自动生成一个单声道的无声文件（所有采样均为 0）。

## 值

一个 {{domxref("AudioBuffer")}}，包含了节点将要播放的声音数据。

## 示例

> [!NOTE]
> 完整的示例请查看[演示示例](https://mdn.github.io/webaudio-examples/audio-buffer/)，或[查看源代码](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html)。

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (let channel = 0; channel < channels; channel++) {
   // This gives us the actual ArrayBuffer that contains the data
   const nowBuffering = myArrayBuffer.getChannelData(channel);
   for (let i = 0; i < frameCount; i++) {
     // Math.random() is in [0; 1.0]
     // audio needs to be in [-1.0; 1.0]
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  const source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
