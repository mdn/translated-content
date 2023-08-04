---
title: AudioBuffer.numberOfChannels
slug: Web/API/AudioBuffer/numberOfChannels
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBuffer") }}接口的`numberOfChannels`属性返回一个整数，该整数表示由缓冲区中存储的 PCM 数据描述的离散音频通道的数量

## 语法

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
myArrayBuffer.numberOfChannels;
```

### 返回值

一个整数。

## 示例

```js
// Stereo
var channels = 2;

// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function () {
  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  console.log(myArrayBuffer.numberOfChannels);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
