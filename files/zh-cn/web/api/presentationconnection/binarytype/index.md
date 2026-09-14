---
title: PresentationConnection：binaryType 属性
short-title: binaryType
slug: Web/API/PresentationConnection/binaryType
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

当创建一个 {{DOMxRef("PresentationConnection")}} 对象时，其 `binaryType` IDL 属性*必须*设置为字符串 `"arraybuffer"`。在获取时，该属性*必须*返回其最近的值（即上次设置的值）。在设置时，用户代理*必须*将 IDL 属性设置为新的值。

> [!NOTE]
> `binaryType` 属性允许作者控制如何将二进制数据暴露给脚本。通过将该属性设置为 `"blob"`，二进制数据将以 `Blob` 形式返回；通过将其设置为 `"arraybuffer"`，它将以 {{JSxRef("ArrayBuffer")}} 形式返回。该属性默认为 `"arraybuffer"`。此属性对以字符串形式发送的数据没有影响。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
