---
title: EncodedAudioChunk：timestamp 属性
slug: Web/API/EncodedAudioChunk/timestamp
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("EncodedAudioChunk")}} 接口的 **`timestamp`** 只读属性返回表示音频的时间戳（以微秒为单位）的整数。

## 值

整型。

## 示例

以下示例将 `timestamp` 打印到控制台。

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

console.log(chunk.timestamp); // 23000000
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
