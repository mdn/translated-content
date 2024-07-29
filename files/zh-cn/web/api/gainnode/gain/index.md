---
title: GainNode.gain
slug: Web/API/GainNode/gain
---

{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} 接口的 `gain` 属性是一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}，表示要应用的增益量。

## 值

一个 {{domxref("AudioParam")}}。

> [!NOTE]
> 虽然 `AudioParam` 属性是只读的，但其返回的值不是。

## 示例

参见 [`BaseAudioContext.createGain()`](/zh-CN/docs/Web/API/BaseAudioContext/createGain#示例) 以获取示例代码，示例代码展示了如何使用 `AudioContext` 来创建 `GainNode`，并通过修改其 gain 属性值以静音或取消静音。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
