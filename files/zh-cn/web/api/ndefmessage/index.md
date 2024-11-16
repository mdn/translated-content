---
title: NDEFMessage
slug: Web/API/NDEFMessage
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

[Web NFC API](/zh-CN/docs/Web/API/Web_NFC_API) 中的 **`NDEFMessage`** 接口表示从 NFC 标签读取或可以写入的 NDEF 消息的内容。通过调用 `NDEFMessage()` 构造函数或从传递给 {{domxref("NDEFReader.reading_event", "reading")}} 事件的 {{domxref("NDEFReadingEvent.message")}} 属性获取实例。

## 构造函数

- {{DOMxRef("NDEFMessage.NDEFMessage", "NDEFMessage()")}} {{Experimental_Inline}}
  - : 创建一个新的 `NDEFMessage` 对象，使用给定的 NDEF 记录初始化。

## 属性

- {{DOMxRef("NDEFMessage.records")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回消息中包含的 NDEF 记录列表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
