---
title: AudioBuffer()
slug: Web/API/AudioBuffer/AudioBuffer
---

{{APIRef("Web Audio API")}}

[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 的 **`AudioBuffer`** 构造函数将创建一个新的 {{domxref("AudioBuffer")}} 对象。

## 语法

```plain
var audioBuffer = new AudioBuffer([options]);
var audioBuffer = new AudioBuffer(context[, options]);
```

### 参数

_继承参数自 {{domxref("AudioNodeOptions")}} 字典_.

- _context_ {{Deprecated_Inline}}
  - : 一个 {{domxref("AudioContext")}} 对象。(这个参数已经被标准移除，详细信息请参阅浏览器兼容性部分.)
- _options_ {{optional_inline}}
  - : Options are as follows:
    - `length`: buffer 中采样帧的长度。
    - `numberOfChannels`: buffer 的通道数。默认值为 1.
    - `sampleRate`: buffer 的采样率 (Hz). 默认值为构造此对象时使用的 `context` 的采样率。

### 返回值

一个新的 {{domxref("AudioBuffer")}} 对象实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
