---
title: AudioContext.listener
slug: Web/API/BaseAudioContext/listener
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 接口的 `listener` 属性返回一个 {{ domxref("AudioListener") }} 对象，可以用来实现 3D 音频空间化。

## 值

{{ domxref("AudioListener") }} 对象。

## 示例

> [!NOTE]
> 如果需要完整的音频空间化例子，可以查看 [panner-node](https://github.com/mdn/webaudio-examples/tree/main/panner-node) 演示。

```js
const audioCtx = new AudioContext();
// 旧式的 webkit/blink 浏览器需要一个前缀

// …

const myListener = audioCtx.listener;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
