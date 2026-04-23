---
title: DynamicsCompressorNode：reduction 属性
short-title: reduction
slug: Web/API/DynamicsCompressorNode/reduction
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Audio API") }}

{{ domxref("DynamicsCompressorNode") }} 接口的 **`reduction`** 只读属性是表示压缩器当前对信号应用的增益减少量的浮点数。

该属性用于测量目的，返回值以分贝（dB）为单位。若未向 `DynamicsCompressorNode` 提供任何信号，则将返回 `0`（无增益减少）。该属性的取值范围介于 `-20` 和 `0`（以 dB 为单位）之间。

## 值

单精度浮点数。

## 示例

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
const myReduction = compressor.reduction;
```

有关更完整的示例代码，参见 [`BaseAudioContext.createDynamicsCompressor()`](/zh-CN/docs/Web/API/BaseAudioContext/createDynamicsCompressor#示例)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
