---
title: Notification：tag 属性
slug: Web/API/Notification/tag
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`tag`** 只读属性表示通知的识别标签。此属性通过 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `tag` 选项中指定。

通知的标签的构想是多个通知可以共享同一个标签，将它们链接在一起。然后可以通过编程方式将一个通知替换为另一个通知，以避免用户的屏幕被大量类似的通知填满。

## 值

一个字符串。

## 示例

我们的[使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API#replacing_existing_notifications) 文章有一个很好的通知的标签的使用示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
