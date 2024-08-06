---
title: Web NFC API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

Web NFC API 支持通过轻量级 NFC 数据交换格式（NDEF）消息进行 NFC 数据交换。

> [!NOTE]
> 要与 Web NFC 配合使用，设备和标签必须专门格式化并记录以支持 NDEF 记录格式。目前，API 不支持低级别操作，但是有关于添加此类功能的公开讨论。

## 接口

- {{DOMxRef("NDEFMessage")}}
  - : 表示可通过 `NDEFReader` 对象从兼容标签接收或发送的 NDEF 消息的接口。消息由元数据和 NDEF 记录组成。
- {{DOMxRef("NDEFReader")}} {{Experimental_Inline}}
  - : 启用从兼容 NFC 标签读取和写入消息的接口。这些消息表示为 `NDEFMessage` 对象。
- {{DOMxRef("NDEFRecord")}}
  - : 表示可包含在 NDEF 消息中的 NDEF 记录的接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
