---
title: GainNode：gain 属性
short-title: gain
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} 接口的 **`gain`** 属性是一个表示要应用的增益量的 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}。

## 值

一个 {{domxref("AudioParam")}}。

> [!NOTE]
> 虽然返回的 `AudioParam` 是只读的，但它所代表的值不是只读的。

## 示例

参见 [`BaseAudioContext.createGain()`](/zh-CN/docs/Web/API/BaseAudioContext/createGain#示例) 以获取示例代码，其中展示了如何使用 `AudioContext` 创建 `GainNode`，再通过更改 `gain` 属性值来静音和取消静音。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
