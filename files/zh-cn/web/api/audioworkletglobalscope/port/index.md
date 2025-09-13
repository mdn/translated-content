---
title: "AudioWorkletGlobalScope: port"
short-title: port
slug: Web/API/AudioWorkletGlobalScope/port
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioWorkletGlobalScope")}} 接口的只读属性 **`port`** 返回一个 {{domxref("MessagePort")}} 对象，可用于在主线程和关联的 {{domxref("AudioWorklet")}} 之间发送和接收消息。

这将允许在主线程中的代码与音频 worklet 的全局作用域之间进行自定义的异步通信，例如发送控制数据或全局设置。

## 值

连接 `AudioWorklet` 和其关联的 `AudioWorkletGlobalScope` 的 {{domxref("MessagePort")}} 对象。

## 示例

参见 [`AudioWorkletNode.port`](/zh-CN/docs/Web/API/AudioWorkletNode/port#示例) 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API)
- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [使用 AudioWorklet](/zh-CN/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
