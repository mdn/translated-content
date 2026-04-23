---
title: AudioBuffer：length 属性
short-title: length
slug: Web/API/AudioBuffer/length
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBuffer") }} 接口的 **`length`** 属性返回一个表示缓冲区中存储的 PCM 数据的长度的整数（以采样帧数为单位）。

## 值

一个整数。

## 示例

```js
// 立体声
const channels = 2;

// 以 AudioContext 的采样率创建一个 2 秒的空白立体声缓冲区
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = () => {
  // 用白噪声填充缓冲区；
  // 即介于 -1.0 和 1.0 之间的随机值
  for (let channel = 0; channel < channels; channel++) {
    // 获取实际包含音频数据的
    const nowBuffering = myArrayBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Math.random() 的取值范围是 [0; 1.0]
      // 音频数据的取值范围应为 [-1.0; 1.0]
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

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
