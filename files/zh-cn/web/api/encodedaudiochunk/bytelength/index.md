---
title: EncodedAudioChunk：byteLength 属性
slug: Web/API/EncodedAudioChunk/byteLength
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("EncodedAudioChunk")}} 接口的只读属性 **`byteLength`** 返回编码音频数据的字节长度。

## 值

整型。

## 示例

以下示例将 `byteLength` 打印到控制台。

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

console.log(chunk.byteLength); // 352800
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
