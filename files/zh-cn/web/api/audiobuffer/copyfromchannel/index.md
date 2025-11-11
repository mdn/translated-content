---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBuffer") }}接口的 copyFromChannel 方法将样本从 AudioBuffer 的指定通道复制到目标数组中

## 语法

```plain
myArrayBuffer.copyFromChannel(destination,channelNumber,startInChannel);
```

### 参数

- _destination_
  - : 将通道数据复制到的{{domxref("Float32Array")}}
- _channelNumber_
  - : 当前 AudioBuffer 的通道号，用于复制通道数据。键入 channelNumber 大于或等于{{domxref("AudioBuffer.numberOfChannels")}}，将会抛出`INDEX_SIZE_ERR` 的错误
- _startInChannel_ {{optional_inline}}
  - : 用于复制数据的可选偏移量。假如*startInChannel 比*{{domxref("AudioBuffer.length")}}大，将会抛出`INDEX_SIZE_ERR` 的错误

## 例子

```js
var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
var anotherArray = new Float32Array();
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
