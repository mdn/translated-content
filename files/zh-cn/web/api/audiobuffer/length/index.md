---
title: AudioBuffer.length
slug: Web/API/AudioBuffer/length
---

{{ APIRef("Web Audio API") }}

The `length` property of the {{ domxref("AudioBuffer") }} interface returns an integer representing the length, in sample-frames, of the PCM data stored in the buffer.

{{ domxref("AudioBuffer") }} 的 length 属性接口返回整数，该整数代表采样帧中，存贮在缓冲区中的 PCM 数据的长度

## 语法

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
myArrayBuffer.length;
```

### 值

浮点数

## 例子

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

  console.log(myArrayBuffer.length);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
