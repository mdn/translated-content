---
title: WorkerNavigator：hid 属性
slug: Web/API/WorkerNavigator/hid
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`WorkerNavigator.hid`** 只读属性返回一个 {{domxref("HID")}} 对象，该对象提供访问 HID 设备连接的方法，以及当用户代理连接或断开设备时触发的事件。

如果已定义的[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止使用 WebHID，则 `WorkerNavigator.hid` 属性将不可用。

## 值

一个 {{domxref("HID")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebHID API](/zh-CN/docs/Web/API/WebHID_API)
