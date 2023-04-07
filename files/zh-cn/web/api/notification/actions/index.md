---
title: Notification.actions
slug: Web/API/Notification/actions
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}}接口的只读属性 **`actions`** 返回使用{{domxref("Notification.Notification","Notification()")}}构造函数创建通知时使用 actions 选项设置的{{domxref("NotificationAction")}}对象列表。这是用户可以在通知上下文中选择立即执行的应用定义的操作列表。

{{AvailableInWorkers}}

## 语法

```plain
var actions[] = Notification.actions;
```

### 值

{{domxref("NotificationAction")}}对象的只读数组。用户在通知中选择每项的单一的功能。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
