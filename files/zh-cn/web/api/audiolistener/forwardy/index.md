---
title: AudioListener：forwardY 属性
slug: Web/API/AudioListener/forwardY
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioListener") }} 接口的 `forwardY` 只读属性是一个 {{domxref("AudioParam")}}，表示定义监听者指向的前进方向的方向向量的 y 值。

> [!NOTE]
> 当与 {{domxref("PannerNode")}} 一起使用时，如果 {{domxref("PannerNode.panningModel", "panningModel")}} 设置为 equalpower，则参数为 _a-rate_；否则为 _k-rate_。

## 值

一个 {{domxref("AudioParam")}}。其默认值为 0，范围可在正负无穷之间。

## 示例

查看 [BaseAudioContext.createPanner()](/zh-CN/docs/Web/API/BaseAudioContext/createPanner#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
