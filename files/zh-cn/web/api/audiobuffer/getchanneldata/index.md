---
title: AudioBuffer：getChannelData() 方法
slug: Web/API/AudioBuffer/getChannelData
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBuffer") }} 接口的 **`getChannelData()`** 方法返回一个 {{domxref("Float32Array")}}，其中包含与通道（由通道参数定义，0 表示第一个通道）关联的 PCM 数据。

## 语法

```js-nolint
getChannelData(channel)
```

### 参数

- `channel`
  - : channel 属性是要获取特定通道数据的索引。索引值 0 代表第一个通道。如果 `channel` 索引值大于等于{{domxref("AudioBuffer.numberOfChannels")}}，则会抛出 `INDEX_SIZE_ERR` 异常。

### 返回值

一个 {{domxref("Float32Array")}}。

## 示例

在下例中，我们创建一个 2 秒钟的缓冲区，用白噪声填充它，然后通过{{domxref("AudioBufferSourceNode") }}来播放它。注释应该清楚地解释了正在做的事情。你也可以[实时运行代码](https://mdn.github.io/webaudio-examples/audio-buffer/)，或者[查看源代码](https://github.com/mdn/webaudio-examples)。

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");
const pre = document.querySelector("pre");
const myScript = document.querySelector("script");

pre.textContent = myScript.textContent;

// 立体声
const channels = 2;
// 按照 AudioContext 的采样率创建一个空的两秒立体声缓冲区
const frameCount = audioCtx.sampleRate * 2.0;

const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // 用白噪声填充缓冲区；
  // 仅使用 -1.0 至 1.0 之间的随机值
  for (let channel = 0; channel < channels; channel++) {
    // 这给了我们包含数据的实际 ArrayBuffer
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() 是在 [0; 1.0] 之间的
      // 音频需要在 [-1.0; 1.0] 之间
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // 获取 AudioBufferSourceNode。
  // 这是当我们想要播放 AudioBuffer 时要使用的 AudioNode
  const source = audioCtx.createBufferSource();
  // 在 AudioBufferSourceNode 中设置缓冲区
  source.buffer = myArrayBuffer;
  // 将 AudioBufferSourceNode 连接到目标，以便我们可以听到声音
  source.connect(audioCtx.destination);
  // 开始播放 source
  source.start();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
