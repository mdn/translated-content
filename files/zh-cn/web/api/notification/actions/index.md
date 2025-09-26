---
title: Notification：actions 属性
slug: Web/API/Notification/actions
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`actions`** 只读属性提供了可供用户选择以与通知交互的操作。

使用 {{DOMxref("ServiceWorkerRegistration.showNotification", "showNotification()")}} 方法和 {{DOMxref("Notification/Notification", "Notification()")}} 构造函数的第二个参数的 `actions` 选项设置操作。

> [!NOTE]
> 浏览器通常会限制它们为特定通知显示的最大的操作的数量。检测 {{DOMxref("Notification.maxActions_static", "Notification.maxActions")}} 静态属性以确定限制的操作的数量。

## 值

一个表示操作的只读数组。数组中的每个元素都是一个具有以下成员的对象：

- `action`
  - : 一个标识要在通知上显示的用户操作的字符串。
- `title`
  - : 一个包含要向用户显示的操作文本的字符串。
- `icon`
  - : 一个包含与操作一起显示的图标 URL 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions_static", "Notification.maxActions")}}
