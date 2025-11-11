---
title: NDEFRecord：data 属性
slug: Web/API/NDEFRecord/data
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

{{DOMxRef("NDEFRecord")}} 接口的 **`data`** 属性会返回一个 {{jsxref("DataView")}}，其中包含记录有效载荷的原始字节。

## 语法

```js-nolint
NDEFRecord.data
```

### 值

{{jsxref("DataView")}}，其中包含记录的编码有效载荷数据。

## 示例

下面的示例循环遍历了 {{domxref("NDEFMessage")}} 对象中的记录，该对象是从 {{domxref("NDEFReadingEvent.message")}} 中获取的。根据 {{domxref("NDEFRecord.mediaType", "mediaType")}} 选择记录后，会对 `data` 属性中存储的内容进行解码。

```js
const ndef = new NDEFReader();
await ndef.scan();
ndef.onreading = (event) => {
  const decoder = new TextDecoder();
  for (const record of event.message.records) {
    if (record.mediaType === "application/json") {
      const json = JSON.parse(decoder.decode(record.data));
      const article = /^[aeio]/i.test(json.title) ? "an" : "a";
      console.log(`${json.name} is ${article} ${json.title}`);
    }
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
