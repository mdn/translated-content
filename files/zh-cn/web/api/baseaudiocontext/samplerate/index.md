---
title: AudioContext.sampleRate
slug: Web/API/BaseAudioContext/sampleRate
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioContext")}} 的 `sampleRate` 属性返回一个表示采样率（每秒采样数）的浮点数，同一个音频上下文中的所有节点采样率相同，所以不支持采样率转换。

## 值

一个浮点数。

## 示例

> [!NOTE]
> 如果需要完整的 Web Audio 实现示例，可以查看 [MDN Github repo](https://github.com/mdn/webaudio-examples) 上的 Web 音频演示。不妨试试在浏览器控制台输入 `audioCtx.sampleRate`。

```js
const audioCtx = new AudioContext();
// 旧式的 webkit/blink 浏览器需要一个前缀

// …

console.log(audioCtx.sampleRate);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
