---
title: Notification：requireInteraction 属性
slug: Web/API/Notification/requireInteraction
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`requireInteraction`** 只读属性返回一个布尔值，指示在用户点击或关闭通知前，通知应该保持活动状态，而不是自动关闭。

> [!NOTE]
> 可以在创建通知时通过将 {{domxref("Notification.Notification()")}} 构造方法的 `requireInteraction` 选项设置为 `true` 来进行设置。

## 值

一个布尔值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
