---
title: NDEFMessage：records 属性
slug: Web/API/NDEFMessage/records
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

{{DOMxRef("NDEFMessage")}} 接口的 `records` 属性表示 NDEF 消息中存在的 {{DOMxRef("NDEFRecord")}} 列表。

## 值

表示消息中记录的数据的 {{DOMxRef("NDEFRecord")}} 对象列表。

## 示例

以下示例演示如何读取 NDEF 消息的内容。首先为 {{domxref("NDEFReader.reading_event", "onreading")}} 设置事件处理器，它将收到 {{domxref("NDEFReadingEvent")}} 实例。从 {{domxref("NDEFReadingEvent.message")}} 返回一个 `NDEFMessage` 对象。它遍历 `message.records` 并基于其消息类型处理每个记录。data 成员是一个 {{jsxref("DataView")}}，它允许处理以 UTF-16 编码的数据。

```js
ndefReaderInst.onreading = (event) => {
  const ndefMessage = event.message;
  for (const record of ndefMessage.records) {
    console.log(`记录类型：  ${record.recordType}`);
    console.log(`MIME 类型： ${record.mediaType}`);
    console.log(`记录 id：   ${record.id}`);
    switch (record.recordType) {
      case "text":
        // TODO：使用记录数据、语言和编码读取文本记录。
        break;
      case "url":
        // TODO：读取带有记录数据的 URL 记录。
        break;
      default:
      // TODO：使用记录数据处理其他记录。
    }
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
