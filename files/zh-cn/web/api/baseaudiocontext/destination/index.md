---
title: AudioContext.destination
slug: Web/API/BaseAudioContext/destination
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的 `destination` 属性返回一个 {{ domxref("AudioDestinationNode") }}，表示 context 中所有音频的最终目标节点，一般是音频渲染设备，比如扬声器。

## 值

{{ domxref("AudioDestinationNode") }} 节点。

## 示例

> [!NOTE]
> 如果需要完整的实现示例，可以去看看 [MDN Github repo](https://github.com/mdn/) 的演示，比如 [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic)。

```js
const audioCtx = new AudioContext();
// 旧式的 webkit/blink 浏览器需要一个前缀

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
