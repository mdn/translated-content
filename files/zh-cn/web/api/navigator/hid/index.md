---
title: Navigator：hid 属性
slug: Web/API/Navigator/hid
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`Navigator.hid`** 只读属性返回一个 {{domxref("HID")}} 对象，该对象提供用于连接 HID 设备、列出已连接的 HID 设备以及连接的 HID 设备的事件处理程序的方法。

如果已定义的[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止使用 WebHID，则 `Navigator.hid` 属性将不可用。

## 值

一个 {{domxref("HID")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebHID API](/zh-CN/docs/Web/API/WebHID_API)
