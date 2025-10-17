---
title: AudioEncoder：encodeQueueSize 属性
short-title: encodeQueueSize
slug: Web/API/AudioEncoder/encodeQueueSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("AudioEncoder")}} 接口的只读属性 **`encodeQueueSize`** 返回队列中待处理的编码请求的数量。

## 值

一个整数，包含请求的数量。

## 示例

以下示例将队列的大小打印到控制台。

```js
console.log(AudioEncoder.encodeQueueSize);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
