---
title: AudioWorkletProcessor：port 属性
short-title: port
slug: Web/API/AudioWorkletProcessor/port
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletProcessor")}} 接口的只读属性 **`port`** 返回关联的 {{domxref("MessagePort")}}，可用于在处理器与所属的 {{domxref("AudioWorkletNode")}} 之间进行通信。

> [!NOTE]
> 通道另一端的端口可通过节点的 {{domxref("AudioWorkletNode.port", "port")}} 属性获取。

## 值

连接 `AudioWorkletProcessor` 和关联的 `AudioWorkletNode` 的 {{domxref("MessagePort")}} 对象。

## 示例

参见 [`AudioWorkletNode.port`](/zh-CN/docs/Web/API/AudioWorkletNode/port#示例) 获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
