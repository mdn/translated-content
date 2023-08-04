---
title: NotifyAudioAvailableEvent
slug: Web/API/NotifyAudioAvailableEvent
---

{{APIRef("Web Audio API")}}{{Non-standard_header}}{{Deprecated_header}}

非标准的、过时的，**`NotifyAudioAvailableEvent`**事件接口定义当音频缓冲器满时发送到音频元素的事件。

## 属性

- `frameBuffer` {{ReadOnlyInline}}
  - : {{jsxref("Float32Array")}}包含从解码音频获得的原始 32 位浮点音频数据（例如，原始数据被发送到音频硬件与编码音频）。数据是一系列音频样本，每个样本每个音频通道包含一个 32 位值。默认情况下，所有音频帧被标准化为包含 1024 个样本，但如果用户使用 **`mozFrameBufferLength`** 属性设置了不同长度，则可以是 512 到 16384 个样本之间的任何长度。
- `time`
  - : 一个浮点值，代表音频轨道开始后的`frameBuffer`数组中第一个样本的时间（以秒为单位）。
