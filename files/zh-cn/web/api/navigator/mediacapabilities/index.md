---
title: Navigator：mediaCapabilities 属性
slug: Web/API/Navigator/mediaCapabilities
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} 接口的 **`Navigator.mediaCapabilities`** 只读属性返回一个 {{domxref("MediaCapabilities")}} 对象，该对象可以暴露有关给定格式的解码和编码能力以及由[媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API) 定义的输出能力的信息。

## 值

一个 {{domxref("MediaCapabilities")}} 对象。

## 示例

```js
navigator.mediaCapabilities
  .decodingInfo({
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  })
  .then((result) => {
    console.log(`${result.supported ? "" : "不"}支持此配置，`);
    console.log(`${result.smooth ? "" : "不"}流畅，`);
    console.log(`${result.powerEfficient ? "" : "不"}节能。`);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}
