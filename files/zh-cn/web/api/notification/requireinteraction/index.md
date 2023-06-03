---
title: Notification：requireInteraction 属性
slug: Web/API/Notification/requireInteraction
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Notification")}} 接口的 **`requireInteraction`** 只读属性返回一个 boolean 值，指示在用户点击或关闭通知前，通知应该保持活动状态，而不是自动关闭。

The **`requireInteraction`** read-only property of the {{domxref("Notification")}} interface returns a boolean value indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.

> **备注：** 可以在创建通知时通过在 {{domxref("Notification.Notification()")}} 构造方法的 `requireInteraction` 选项设置为 `true` 来进行设置

## 值

一个 boolean 值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
