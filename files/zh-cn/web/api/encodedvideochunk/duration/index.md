---
title: EncodedVideoChunk：duration 属性
slug: Web/API/EncodedVideoChunk/duration
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("EncodedVideoChunk")}} 接口的 **`duration`** 只读属性返回一个表示视频的持续时间（以微秒为单位）的数字。

## 值

整型。

## 示例

以下示例将 `duration` 打印到控制台。

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

console.log(chunk.duration); // 2000000
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
