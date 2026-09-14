---
title: AudioDecoder：decodeQueueSize 属性
short-title: decodeQueueSize
slug: Web/API/AudioDecoder/decodeQueueSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("AudioDecoder")}} 接口的只读属性 **`decodeQueueSize`** 返回队列中待处理解码请求的数量。

## 值

包含请求数的整型。

## 示例

以下示例将队列的大小打印到控制台。

```js
console.log(AudioDecoder.decodeQueueSize);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
