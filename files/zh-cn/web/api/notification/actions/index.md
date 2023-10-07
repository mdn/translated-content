---
title: Notification：actions 属性
slug: Web/API/Notification/actions
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Notification")}} 接口的只读属性 **`actions`** 提供了可供用户选择的以与通知交互的操作。

使用 [`showNotification()`](/zh-CN/docs/Web/API/ServiceWorkerRegistration/showNotification) 方法和 [`Notification()`](/zh-CN/docs/Web/API/Notification/Notification) 构造函数的第二个参数的 `actions` 选项设置操作。

> **备注：** 浏览器通常会限制它们为特定通知显示的最大操作数。检测 {{DOMxRef("Notification.maxActions")}} 静态属性以确定限制的操作的数量。

## 值

一个只读的操作数组。数组中的每个元素都是一个具有以下成员的对象：

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
- {{DOMxRef("Notification.maxActions")}}
