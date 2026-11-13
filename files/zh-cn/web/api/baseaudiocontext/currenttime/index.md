---
title: AudioContext.currentTime
slug: Web/API/BaseAudioContext/currentTime
---

{{ APIRef("Web Audio API") }}

`currentTime` 是 {{ domxref("AudioContext") }} 的一个只读属性，返回表示只增不减的硬件时间戳的双精度浮点数，可以用来控制音频回放，实现可视化时间轴等等。该值从 0 开始。

## 值

一个双精度浮点数。

## 示例

```js
const audioCtx = new AudioContext();
// 旧式的 webkit/blink 浏览器需要一个前缀

// …

console.log(audioCtx.currentTime);
```

## 降低时间精度

为了防止时间攻击和指纹识别，`audioCtx.currentTime` 的精度可能会根据浏览器的设置而被四舍五入。在 Firefox 中，`privacy.reduceTimerPrecision` 参数默认是启用的，在 Firefox 59 中默认为 20us；在 Firefox 60 中则为 2ms。

```js
// Firefox 60 中时间精度降低到了 2ms
audioCtx.currentTime;
// 23.404
// 24.192
// 25.514
// …

// 启用 `privacy.resistFingerprinting` 标志以降低时间精度
audioCtx.currentTime;
// 49.8
// 50.6
// 51.7
// …
```

在 Firefox 中，也可以启用 `privacy.resistFingerprinting` 标志，精度值将达到 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 标志的值，会更大。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
